import { PlaysRequestResponse } from './../../entities/plays.interface';
import { requestApi } from "../../../adapters/http-request";

export const getPlays = (username: string) => {
  return requestApi.get<PlaysRequestResponse>(`/plays-detail?username=${username}`);
}