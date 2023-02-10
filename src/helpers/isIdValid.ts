import { ObjectId } from "mongodb";

export function isIdValid(id: string) {
  return ObjectId.isValid(id);
}
