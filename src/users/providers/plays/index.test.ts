import { getPlays } from ".";

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
  getPlays(username);
  expect(requestApi.get).toHaveBeenCalledWith("/plays-detail?username=Edwin");
});