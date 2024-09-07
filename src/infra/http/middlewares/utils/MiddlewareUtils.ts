import { requestParamsValidator } from "./requestParamsValidator";

export class MiddlewareUtils {
    /** Responsible to check request params, query, header and body */
    static validateRequest = requestParamsValidator
}