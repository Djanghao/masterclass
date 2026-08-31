# Easy understanding with optimal memroy JS and TS solution

**Author:** HabibovUlugbek
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-subarray-minimums/solutions/1905865/](https://leetcode.com/problems/sum-of-subarray-minimums/solutions/1905865/)

---

```
function sumSubarrayMins(nums: number[]): number {
  let res: number = 0;
    const MOD = 1e9 + 7;
  for (let i = 0; i < nums.length; i++) {
    let smallest = nums[i];
    for (let j = i; j < nums.length; j++) {
      smallest = Math.min(smallest, nums[j]);
      res += smallest;
    }
  }
  return res%MOD;
};