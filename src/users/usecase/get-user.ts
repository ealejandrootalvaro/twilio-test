import { uniqueValues } from "../../utils/array";
import { User } from "../entities/user.interface";
import * as UserService from "../repositories/user.service";

export const getUser = async (username: string) : Promise<User> => {

    const userDetail = await UserService.getUserDetail(username);
   
    return {
      username,
      plays: userDetail.plays?.length,
      friends: userDetail.friends?.length,
      tracks: uniqueValues(userDetail.plays || []),
      uri: `/users/${username}`,
    }

}