import * as http from "node:http";
import PiepsMiddelware from "./PiepsServerMiddelWare.ts";

export interface CorsSettings{
    origin: string

}

export default class PiepsHttpServer{
    Server: http.Server | null
    Port: number | null
    Hostname: string | null
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

        this.Server.listen(this.Port, this.Hostname, () => {
            console.log(`Server is Running on http://${this.Hostname}:${this.Port}`);
        });
    };
    SetCORS(corsSettings: CorsSettings) {
        PiepsHttpServer.CorsSettings.origin = corsSettings.origin;
    };
    AddHttpHandler(handler: http.RequestListener) {
        this.Server?.addListener("request", handler);
    };

    StaticMiddleWare(staticFolder: string) {
        this.Server?.addListener("request", async (req, res) => {
            await PiepsMiddelware.MiddelwareHandler(staticFolder, req, res);
        });
    };
};