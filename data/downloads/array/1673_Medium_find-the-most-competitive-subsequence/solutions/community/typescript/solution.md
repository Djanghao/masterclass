# JavaScript and TypeScript Solution

**Author:** MenheraCapoo
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/953190/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/953190/)

---

Time Complexity O(n)
Space Complexity O(k)

### JavaScript
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
  const res = [];
  const n = nums.length;
  
  for (let i = 0; i < n; i += 1) {
    while (res.length &&
          nums[i] < res[res.length - 1]) {
      if (k - res.length < n - i) {
        res.pop();
      } else {
        break;
      }
    }
    
    if (res.length < k) {
      res.push(nums[i]);
    }
  }
  return res;
};
```

### TypeScript
```ts
function mostCompetitive(nums: number[], k: number): number[] {
  const res = [];
  const n = nums.length;
  
  for (let i = 0; i < n; i += 1) {
    while (res.length &&
          nums[i] < res[res.length - 1]) {
      if (k - res.length < n - i) {
        res.pop();
      } else {
        break;
      }
    }
    
    if (res.length < k) {
      res.push(nums[i]);
    }
  }
  return res;
};

```