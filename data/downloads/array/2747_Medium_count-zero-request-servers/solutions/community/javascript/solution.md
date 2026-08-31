# Javascript - Two Pointers + HashMap

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-zero-request-servers/solutions/3752325/](https://leetcode.com/problems/count-zero-request-servers/solutions/3752325/)

---

# Code
```
/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function (n, logs, x, queries) {
  logs.sort((a, b) => a[1] - b[1]);
  queries = queries.map((endTime, index) => [endTime, index]);
  queries.sort((a, b) => a[0] - b[0]);

  const ans = new Array(queries.length).fill(0);
  const map = {};
  let uniqueServers = 0;
  let start = 0;
  let end = 0;

  for (const [endTime, index] of queries) {
    const startTime = endTime - x;

    while (end < logs.length && logs[end][1] <= endTime) {
      const curr = logs[end][0];
      map[curr] = (map[curr] || 0) + 1;
      if (map[curr] === 1) uniqueServers++;
      end++;
    }

    while (start < logs.length && logs[start][1] < startTime) {
      const prev = logs[start][0];
      map[prev]--;
      if (map[prev] === 0) {
        delete map[prev];
        uniqueServers--;
      }
      start++;
    }

    ans[index] = n - uniqueServers;
  }

  return ans;
};

```