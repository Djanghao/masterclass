# Slow but Easy N^2 JS/TS Solution

**Author:** eddyhdzg
**Votes:** 4
**Link:** [https://leetcode.com/problems/3sum-with-multiplicity/solutions/1124355/](https://leetcode.com/problems/3sum-with-multiplicity/solutions/1124355/)

---

Explanation
* Make a map with all pair sums.
* If ***target - arr[i]*** in map, add count of pair sum.

```
// JS
var threeSumMulti = function (arr, target) {
  const map = new Map();
  const mod = 1000000007;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res = (res + (map.get(target - arr[i]) || 0)) % mod;

    for (let j = 0; j < i; j++) {
      let temp = arr[i] + arr[j];
      map.set(temp, (map.get(temp) || 0) + 1);
    }
  }

  return res;
};
```

```
// TS
function threeSumMulti(arr: number[], target: number): number {
  const map = new Map<number, number>();
  const mod = 1000000007;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res = (res + (map.get(target - arr[i]) || 0)) % mod;

    for (let j = 0; j < i; j++) {
      let temp = arr[i] + arr[j];
      map.set(temp, (map.get(temp) || 0) + 1);
    }
  }

  return res;
}
```