import { DocumentDefinition } from "mongoose";
import UserModel from "../models/user.model";
import { UserDocument } from "../interfaces/interface.user";
import { faker } from "@faker-js/faker";


export async function createUser(
  input: DocumentDefinition<Omit<UserDocument, 'createdAT' | 'updateAT' | 'comparePassword' >>
): Promise<any> {
  try {
    await UserModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
} 

  

  export function createRandomUser(): any {
    return {
      surname: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: faker.image.avatar(),
    };
  }

  

export function arrayUser(): any {
  const USERS: any[] = [];
  Array.from({ length: 10 }).forEach(() => {
    USERS.push(createRandomUser());
  });
  return USERS;
}

export async function inserInBdd(arrayUser: any[]) {
  try {
    for (let i = 0; i < arrayUser.length; i++) {
    await UserModel.create(arrayUser[i]);}
  } catch (error: any) {
    throw new Error(error)
  }
  }

export async function listeUser() {
let users: any[] = [];
try {
  users = await UserModel.find();
  return users
} catch (error: any) {
  throw new Error(error)
} 
}
