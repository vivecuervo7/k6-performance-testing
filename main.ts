import { coinflip } from "./coinflip.ts";
import { contacts } from "./contacts.ts";
import {
  thresholdsSettings,
  smokeWorkload,
  breakingWorkload,
} from "./config.ts";

export const options = {
  scenarios: {
    my_scenario:
      __ENV.WORKLOAD === "breaking" ? breakingWorkload : smokeWorkload,
  },
  thresholds: thresholdsSettings,
};

const baseUrl = "https://test.k6.io";

export default function () {
  contacts(baseUrl);
  coinflip(baseUrl);
}
