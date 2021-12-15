import { count } from 'console'
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

export async function getUser(req: Request, res: Response) {
    console.log('Request to list user by id',  req.params.id)
    let userToList = await UserModel.findOne({ _id: req.params.id })
    res.json(userToList)
  }

export async function updateUser(req: Request, res: Response) {
    console.log('Request to list user by id',  req.body)
    let userToUpdate = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
  
    res.json(userToUpdate)
  }

export async function findUser(req: Request, res: Response) {
  console.log('Request to list user by id',  req.body)
  let userToUpdate = await UserModel.find()
  res.json(userToUpdate)
}

//New
export async function listUserNbGames(req: Request, res: Response) {
  console.log('Request to list user by id',  req.params.id)
  let userToList = await UserModel.find({ _id: req.params.id })
  userToList.length
  res.json(userToList)
}