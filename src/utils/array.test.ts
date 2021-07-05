import {uniqueValues} from "./array";

test("testing uniqueValues function", () => {
 expect(uniqueValues(["ab", "cd", "ab"])).toEqual(["ab", "cd"]);
});