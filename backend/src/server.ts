import * as Hapi from "hapi";
import * as fs from "fs";

export function init(config: any): Promise<any> {
    return new Promise<any>((resolve: (server: Hapi.Server) => void) => {
        const port = process.env.PORT || config.port;
        const server = new Hapi.Server();

        server.connection({
            host: "localhost",
            port,
            routes: {
                cors: true
            }
        });

        server.route({
            method: "GET",
            path: "/",
            handler(request, reply) {
                reply("Hello, world!");
            }
        });

        resolve(server);
    });
}
