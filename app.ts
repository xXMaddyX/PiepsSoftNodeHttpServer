import * as http from "node:http";
import PiepsHttpServer from "./PiepsServer/PiepsServer.ts";

//EXAMPLE WITH HTPP STATIC MIDDELWARE
const App = new PiepsHttpServer();
App.CreateServer(3030, "localhost");
App.StaticMiddleWare("src");
App.SetCORS({origin: "*"})


//EXPAMPLE WITH OWN HTTP_HANDLER
const myHttpHandler: http.RequestListener = (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url == "/data") {
        res.writeHead(200, {
            "content-type": "application/json"
        });
        res.end(JSON.stringify('msg: "das ist die nachricht"'))
    } else {
        res.end("error 403")
    }
}

const Server2 = new PiepsHttpServer();
Server2.CreateServer(4040, "localhost");
Server2.AddHttpHandler(myHttpHandler);
Server2.SetCORS({origin: "*"})