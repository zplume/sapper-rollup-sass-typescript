import { IncomingMessage, ServerResponse } from "http";

declare global {
    export type RequestHandler = (req: IncomingMessage, res: ServerResponse, parsed?: object) => any;
}
