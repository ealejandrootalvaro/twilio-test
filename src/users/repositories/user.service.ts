import { getFriends } from "../providers/friends";
import { getPlays } from "../providers/plays";

export const getUserDetail = async (username: string) => {
  const detailRequests = await Promise.all([getFriends(username), getPlays(username)]);

  return {
    friends: detailRequests[0].data.friends,
    plays: detailRequests[1].data.plays
  }

}