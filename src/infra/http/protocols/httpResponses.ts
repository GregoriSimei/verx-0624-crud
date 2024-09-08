import { EHttpStatusCode } from "./EHttpStatusCode";
import { HttpResponse } from "./http";

type ResponseTypes = 'json' | 'message'

export class HttpResponses {
    static ok(data: any, type: ResponseTypes = 'json'): HttpResponse {
        return {
            body: data,
            statusCode: EHttpStatusCode.OK,
            type
        }
    }

    static noContent(): HttpResponse {
        return {
            statusCode: EHttpStatusCode.NO_CONTENT,
            type: 'json'
        }
    }

    static created(data: any): HttpResponse {
        return {
            body: data,
            statusCode: EHttpStatusCode.CREATED
        }
    }
}