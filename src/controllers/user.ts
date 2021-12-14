import { Request, Response } from 'express'
import { UserModel } from '../models/user'

export async function createUser(req: Request, res: Response) {
  console.log('Request to add user :', req.body)

  let userToCreate = new UserModel(req.body)
  let createdUser = await userToCreate.save()

  res.json(createdUser)
}
// [ . . . ]
export async function deleteUser(req: Request, res: Response) {
  console.log('Request to delete user by id', req.params.id)

	// Globalement let = var 
  let deletedUser = await UserModel.findByIdAndRemove(req.params.id)

  if (!deletedUser) {
    res.status(404).send()
  } else {
    res.json(deletedUser)
  }
}