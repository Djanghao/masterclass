# JavaScript / TypeScript Solution

**Author:** eddyhdzg
**Votes:** 2
**Link:** [https://leetcode.com/problems/network-delay-time/solutions/881107/](https://leetcode.com/problems/network-delay-time/solutions/881107/)

---

// JS
// Runtime: 96 ms, faster than 96.53% of JavaScript online submissions for Network Delay Time.
// Memory Usage: 44.1 MB, less than 84.94% of JavaScript online submissions for Network Delay Time.
```
var networkDelayTime = function (times, N, K) {
  const tt = new Array(N + 1).fill(Infinity);
  tt[0] = 0;
  tt[K] = 0;

  let flag = true;

  while (flag) {
    flag = false;
    times.forEach(([u, v, w]) => {
      if (tt[u] !== Infinity && tt[v] > tt[u] + w) {
        tt[v] = tt[u] + w;
        flag = true;
      }
    });
  }

  const res = Math.max(...tt);

  return res === Infinity ? -1 : res;
};
```

// TS
// Runtime: 100 ms, faster than 100.00% of TypeScript online submissions for Network Delay Time.
// Memory Usage: 45.2 MB, less than 90.00% of TypeScript online submissions for Network Delay Time.
```
function networkDelayTime(times: number[][], N: number, K: number): number {
  const tt = new Array(N + 1).fill(Infinity);
  tt[0] = 0;
  tt[K] = 0;

  let flag = true;

  while (flag) {
    flag = false;
    times.forEach(([u, v, w]) => {
      if (tt[u] !== Infinity && tt[v] > tt[u] + w) {
        tt[v] = tt[u] + w;
        flag = true;
      }
    });
  }

  const res = Math.max(...tt);

  return res === Infinity ? -1 : res;
}
```


More leetcode TypeScript solutions at https://github.com/eddyhdzg/leetcode-typescript-solutions
