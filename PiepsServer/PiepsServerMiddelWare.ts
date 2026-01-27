import * as fs from "node:fs";
import * as http from "node:http";
import * as fsProm from "node:fs/promises";
import * as path from "node:path";
import * as PSD from "./PiepsServerData.ts";
import type { PiepsContentTypes } from "./PiepsServerData.ts";
import PiepsHttpServer from "./PiepsServer.ts";


export default class PiepsMiddelware{
    static async MiddelwareHandler(rootFolder: string, req: http.IncomingMessage, res: http.ServerResponse) {
        //--------------------------------------------TRAVERSAL_BLOCK----------------------------------------------->
        const ROOT_PATH = "/"
        const rootAbsolutePath = path.resolve(rootFolder);
        const targetPath = path.resolve(path.join(rootAbsolutePath, req.url!));

        if (!targetPath.startsWith(rootAbsolutePath)) {
            res.writeHead(403, { "content-type": "text/plain" })
            res.end("dont use traversal, you litte brat! :D")
            return;
        }
        //-----------------------------------------HANDLE_INDEX:HTML_ETNRY------------------------------------------->
        //ROUTE FOR HANDLING ENTRYPOINT OF MIDDELWARE.
        //TAKES ROOT FOLDER FOR ACCESSING THROUGHT CLIENT.
        //CROSSORIGIN SET TO ALL SOURCES AT THE MOMENT NEED TO CHANGE FOR PRODUCTION (DEF MODE)
        if (req.url == "/" || req.url == "") {
            if (res.headersSent) { return; }
            try {
                let indexHtmlPath = targetPath + ROOT_PATH + "index.html";
                let page = await fsProm.readFile(indexHtmlPath);
                res.writeHead(200, {
                    "content-type": "text/html",
                    "access-control-allow-origin": PiepsHttpServer.CorsSettings.origin,
                });
                res.end(page);
            } catch (err) {
                console.log(err);
                res.writeHead(404, {
                    "content-type": "text/plain"
                })
                res.end("Error 404");
            }
            //---------------------------------------END_OF HANDLING ENTRY_POINT--------------------------------------->
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////>
            //------------------------------------------DYNAMIC_ROUTE_HANDLER------------------------------------------>
            //HANDLE DYNAMIC ROUTES FÜR FILES IN SRC FOLDER.
        } else {
            let result: string | null = this.CheckSubstring(req);
            if (result != null) {
                    let pathToLoad = path.join(path.resolve(), rootFolder ,req.url!).replaceAll("%20", " ");
                    let BufferArr: Buffer[] = [];
                    let streamLoad = fs.createReadStream(pathToLoad);
                    streamLoad.on("data", (chunk: Buffer) => {
                        BufferArr.push(chunk)
                    });
                    streamLoad.on("error", (err) => {
                        res.writeHead(404, { 
                            "content-type": "text/plain",
                            "access-control-allow-origin": PiepsHttpServer.CorsSettings.origin,
                        });
                        res.end("Error 404 Not found!!!");
                    });
                    streamLoad.on("end", () => {
                        var body = Buffer.concat(BufferArr);
                        res.writeHead(200, {
                            "content-type": result,
                            "access-control-allow-origin": PiepsHttpServer.CorsSettings.origin,
                        })
                        res.end(body);
                    });
            } else {
                res.writeHead(403, { 
                    "content-type": "text/plain",
                    "access-control-allow-methods": PiepsHttpServer.CorsSettings.origin,
                });
                res.end("Error 403 Forbidden Request!!!")
            }
        }
    };
    static CheckSubstring(req: http.IncomingMessage): string | null {
        const url = req.url;
        if (!url) return null;

        const dotIndex = url.lastIndexOf(".");
        if (dotIndex === -1) return null;

        const extension = url.substring(dotIndex + 1); 
        
        return PSD.PiepsContentTypeObj[extension as keyof PiepsContentTypes] || null;
    }
}