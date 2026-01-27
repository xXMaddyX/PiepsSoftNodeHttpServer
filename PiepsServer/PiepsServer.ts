import * as http from "node:http";
import PiepsMiddelware from "./PiepsServerMiddelWare.ts";

export interface CorsSettings{
    origin: string

};
export default class PiepsHttpServer{
    //HANDLER_POOL--------------------------------->
    handlers: http.RequestListener[] = [];
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
        this.Server = http.createServer(async (req, res) => {
            for (const handler of this.handlers) {
                await handler(req, res);

                if (res.writableEnded) return;
            }
        });

        this.Server.listen(this.Port, this.Hostname, () => {
            console.log(`Server is Running on http://${this.Hostname}:${this.Port}`);
        });
    };
    SetCORS(corsSettings: CorsSettings) {
        PiepsHttpServer.CorsSettings.origin = corsSettings.origin;
    };
    
    AddHttpHandler(handler: http.RequestListener) {
        this.handlers.push(handler)
    };

    StaticMiddleWare(staticFolder: string) {
        this.handlers.push(async (req, res) => {
            await PiepsMiddelware.MiddelwareHandler(staticFolder, req, res);
        })
    };
};