import { Uri } from "src/shared/types/uri.interface";

export interface User extends Uri {
  "username": string,
  "plays": number,
  "friends": number,
  "tracks": Array<string>
}