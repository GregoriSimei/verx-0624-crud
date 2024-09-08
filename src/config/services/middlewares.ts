import { RequestLogger } from '@infra/utils/logger/RequestLogger'
import { Express } from 'express'

export async function setupMiddlewares(app: Express): Promise<void> {
    app.use(RequestLogger.log())
}