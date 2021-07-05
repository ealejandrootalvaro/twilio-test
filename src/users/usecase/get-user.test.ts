import {getUser} from "./get-user";

jest.mock('../repositories/user.service', () => {
  return {
    __esModule: true,
    default: jest.fn(),
    getUserDetail: jest.fn(() => ({
      plays: ["1", "2", "1", "1"],
      friends: ["a", "b", "c"],

    }))
  }
});

test("testing getUser usecase", async () => {
  
  const username = "Edwin";
  
  const result = await getUser(username);

  expect(result).toEqual({
      username: "Edwin",
      plays: 4,
      friends: 3,
      tracks: ["1", "2"],
      uri: `/users/${username}`
  });

});