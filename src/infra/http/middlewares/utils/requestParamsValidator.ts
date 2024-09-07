import { NextFunction, Request, Response } from "express";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

type RequestValidate = {
  headers?: any
  body?: any
  params?: any
  query?: any
}

export function requestParamsValidator(requestToValidate: RequestValidate) {
  return async function (req: Request, res: Response, next: NextFunction) {
    const allErrors = []
    const validateKeys = Object.keys(requestToValidate) as [keyof RequestValidate]

    for (const validationKey of validateKeys) {
      const dtoToValidate: any = requestToValidate[validationKey]

      if (dtoToValidate) {
        const requestObjectToValidate = req[validationKey]
        const output: any = plainToInstance(dtoToValidate, requestObjectToValidate)

        const errors = await validate(output, { skipMissingProperties: true })
        if (errors.length > 0) {
          let errorTexts = Array()

          for (const errorItem of errors) {
            errorTexts = errorTexts.concat(errorItem.constraints || errorItem.children)
          }

          allErrors.push({
            [validationKey]: errorTexts
          })
        }
      }
    }

    if (allErrors.length > 0) {
      //@ts-ignore
      res.status(400).json(allErrors)
    } else {
      next()
    }
  }
}