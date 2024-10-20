import http from "k6/http";
import { Trend } from "k6/metrics";
import { group, sleep } from "k6";

const coinflipLatency = new Trend("coinflip_duration");

export const coinflip = (baseUrl) => {
  group("Coinflip game", function () {
    // save response as variable
    let res = http.get(`${baseUrl}/flip_coin.php?bet=heads`);
    // add duration property to metric
    coinflipLatency.add(res.timings.duration);
    sleep(1);
    // mutate for new request
    res = http.get(`${baseUrl}/flip_coin.php?bet=tails`);
    // add duration property to metric
    coinflipLatency.add(res.timings.duration);
    sleep(1);
  });
};
