# Based on RealFan's solution, improve the space usage by not using array in the last step

**Author:** Gang-Li
**Votes:** 3
**Link:** [https://leetcode.com/problems/rearranging-fruits/solutions/3144240/](https://leetcode.com/problems/rearranging-fruits/solutions/3144240/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function (basket1, basket2) {
  function addToMap(map, num) {
    let cnt = map.get(num) || 0;
    cnt++;
    map.set(num, cnt);
  }

  function deleteFromMap(map, num) {
    let cnt = map.get(num) || 0;
    cnt--;
    map.set(num, cnt);
  }

  let min = Number.MAX_SAFE_INTEGER;
  let map = new Map();
  for (let num of basket1) {
    addToMap(map, num);
    min = Math.min(min, num);
  }
  for (let num of basket2) {
    deleteFromMap(map, num);
    min = Math.min(min, num);
  }

  for (let cnt of map.values()) {
    let abs = Math.abs(cnt);
    if (abs % 2 !== 0) return -1;
  }

  let kvs = Array.from(map);
  kvs.sort((kv1, kv2) => kv1[0] - kv2[0]);
  let totalCount = kvs.reduce((prev, kv) => prev + Math.abs(kv[1]), 0);

  let swaped = 0;
  let ans = 0;
  for (let i = 0; i < kvs.length; i++) {
    let [num, freq] = kvs[i];
    let half = Math.abs(freq) / 2;
    while (half-- > 0) {
      ans += Math.min(2 * min, num);
      swaped++;
      if (swaped === totalCount / 4) return ans;
    }
  }
  
  return 0;
};

```