# Easy solution

**Author:** lldan
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4680147/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4680147/)

---

```ts
function minimumCost(nums: number[]): number {
  const buffer = [...nums].sort((a, b) => a - b);
  const min = [buffer[0], buffer[1], buffer[2]];
  if (min.includes(nums[0])) return min[0] + min[1] + min[2];
  else return min[0] + min[1] + nums[0];
}

```