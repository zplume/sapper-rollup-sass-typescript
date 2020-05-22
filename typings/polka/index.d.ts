import { IncomingMessage, ServerResponse } from "http";

declare global {
    export module polka {
        export class Request extends IncomingMessage {
            params?: any;
            body?: any;
        }
        
        export class Response extends ServerResponse { }
        
        export type HandleNext = (data?: any) => void;
    
        export type RequestHandler = (req: Request, res: Response, next?: HandleNext) => any;
    }
    
}
