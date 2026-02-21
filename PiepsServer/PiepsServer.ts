import * as http from "node:http";
import PiepsMiddelware from "./PiepsServerMiddelWare.ts";

export interface CorsSettings{
    origin: string

};
type PiepsHandlerFunctions = (
    req: http.IncomingMessage,
    res: http.ServerResponse,
    next: () => void
) => void

export default class PiepsHttpServer{
    //HANDLER_POOL--------------------------------->
    handlers: PiepsHandlerFunctions[] = [];
    //SERVER_SETTINGS------------------------------>
    Server: http.Server | null
    Port: number | null
    Hostname: string | null
    //CORS----------------------------------------->
    static CorsSettings: CorsSettings

    constructor() {
        this.Server = null;
        this.Port = null;
        this.Hostname = null;
        PiepsHttpServer.CorsSettings = {
            origin: "*"
        }
    };
    CreateServer(port: number, hostname: string) {
        this.Port = port;
        this.Hostname = hostname;
        this.Server = http.createServer();
        this.Server.on("request", (req, res) => {
            let index = 0;
            const next = () => {
                let handler = this.handlers[index++]
                if (res.writableEnded) { return; }
                handler(req, res, next);
            }
            next();
        })

        this.Server.listen(this.Port, this.Hostname, () => {
            console.log(`Server is Running on http://${this.Hostname}:${this.Port}`);
        });
    };
    SetCORS(corsSettings: CorsSettings) {
        PiepsHttpServer.CorsSettings.origin = corsSettings.origin;
    };
    
    AddHttpHandler(handler: http.RequestListener) {
        this.handlers.push((req, res, next) => {
            handler(req, res)
            next()
        })
    };

    StaticMiddleWare(staticFolder: string) {
        this.handlers.push((req, res, next) => {
            PiepsMiddelware.MiddelwareHandler(staticFolder, req, res).then(() => {
                if (res.writableEnded) next()
            });
        })
    };
};
