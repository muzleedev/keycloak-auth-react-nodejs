import { Request, Response, Router } from 'express'

import { AppPermissions } from 'config/appPermissions'
import { asyncHandler } from 'utils/asyncHandler'
import { jwtCheck } from 'middleware/authMiddleware'
import { getDogs } from './controller'

export const messageRouter = Router()

messageRouter.get('/api/v1/dogs', jwtCheck, asyncHandler(getDogs))

// messageRouter.put('/api/v1/dog', jwtCheck, guard([AppPermissions.updateDog]), (req: Request, res: Response) => {
//     res.json({ msg: 'dog update' })
// })
