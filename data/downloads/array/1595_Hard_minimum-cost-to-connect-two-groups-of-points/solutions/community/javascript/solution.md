# JavaScript Memoization with BitMask

**Author:** espr3ss0
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/3391178/](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/3391178/)

---

```
// Helper function
const memoize = (fn) => {
  
  const memo = new Map();
  return (...args) => {

    const key = args.map(JSON.stringify).join(",");
    if (memo.has(key)) return memo.get(key);

    const result = fn(...args);
    memo.set(key, result);

    return result;
  }
}

var connectTwoGroups = function(cost) {

  const n = cost.length;
  const m = cost[0].length;

  const baseNumber = 2 ** m - 1;

  const setBit = (num, index) => {
    const mask = 1 << index;
    return num | mask;
  }

  const f = memoize((i, usedLeft, j, bitMask) => {

    if (i === n) return bitMask === baseNumber ? 0 : Infinity;
    if (j === m) return usedLeft ? f(i + 1, false, 0, bitMask) : Infinity;
  
    const connect = f(i, true, j + 1, setBit(bitMask, j)) + cost[i][j];
    const noConnect = f(i, usedLeft, j + 1, bitMask);

    return Math.min(connect, noConnect);
  });

  return f(0, false, 0, 0);
};

```