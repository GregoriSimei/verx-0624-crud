
import { EHttpStatusCode } from "../protocols/EHttpStatusCode"
import { HttpError } from "./HttpError"

export class BadRequest extends HttpError {
    constructor(message: string, aditionalInfo?: any) {
        super(EHttpStatusCode.BAD_REQUEST, message, aditionalInfo)
    }
}