import { delay } from "../common/util/util";
import { sampleData } from "./sampleData";

export function fetchSampleData() {
  return delay().then(function () {
    return Promise.resolve(sampleData);
  });
}
