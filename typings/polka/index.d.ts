import { IncomingMessage, ServerResponse } from "http";

declare global {
    export class IncomingRequest extends IncomingMessage {
        params?: any;
        body?: any;
    }

    export type RequestHandler = (req: IncomingRequest, res: ServerResponse, parsed?: object) => any;
}
