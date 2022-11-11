import {
  NextFunction as Next,
  Response as Res,
  Request as Req,
  ErrorRequestHandler
} from 'express'
import createHttpError from 'http-errors'
import { helperCreateError } from '../utils/helperCreateError'

const error404 = (req: Req, _res: Res, next: Next): void => {
  const error = {
    path: req.path,
    method: req.method,
    message: 'Ruta o metodo desconocidos'
  }
  next(createHttpError(404, error))
}

const handlerErrors: ErrorRequestHandler = (err: any, _req: Req, res: Res, _next: Next): void => {
  const error: any = helperCreateError(err)
  res.status(error.status)
  res.json(error)
}

export {
  error404,
  handlerErrors
}

// const customError = (error) => {
//   if (!error.code) return error

//   switch (error.code) {
//     case 'ER_DUP_ENTRY':
//       return {
//         ...error,
//         message: `${error.table} duplicado (a)`,
//         status: 400
//       }
//     case 'ER_NO_SUCH_TABLE':
//       return {
//         ...error,
//         message: `La tabla ${error.table} no existe`
//       }
//     case 'ER_ROW_IS_REFERENCED_2':
//       return {
//         ...error,
//         message: 'No puede eliminar el elemento, debido a que esta siendo usado',
//         status: 400
//       }
//     default:
//       return {
//         ...error,
//         message: error.message || 'Error interno, intenta más tarde'
//       }
//   }
// }
