import { FriendsRequestResponse } from './../../entities/friends.interface';
import {requestApi} from "../../../adapters/http-request";

export const getFriends = (username: string) => {
  return requestApi.get<FriendsRequestResponse>(`/friend-detail?username=${username}`)
}