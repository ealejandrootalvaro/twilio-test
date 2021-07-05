import { getFriends } from ".";

jest.mock('../../../adapters/http-request', () => {
  return {
    __esModule: true,
    default: jest.fn(),
    requestApi: {
      get: jest.fn()
    }
  }
  }
);

import { requestApi } from '../../../adapters/http-request';

test("test friend provider", () => {
  const username = "Edwin";
  getFriends(username);
  expect(requestApi.get).toHaveBeenCalledWith("/friend-detail?username=Edwin");
});