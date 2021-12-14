import { Schema, model } from 'mongoose'
import { Game } from './game'

// L'interface de données "brutes" pour le typage Typescript
export interface User {
name: string
addedAt: Date
addedBy?: Game
}

// Le schéma de validation MongoDB, basé sur l'interface
export const userSchema = new Schema<User>({
name: { type: String, required: true },
addedAt: { type: Date, default: () => new Date() },
addedBy: Schema.Types.ObjectId,
})

// Le modèle des données MongoDB, basé sur l'interface
// Ce modèle possède l'identifiant, la méthode de sauvegarde etc.
export const UserModel = model<User>('User', userSchema)

// DO 