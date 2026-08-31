# ✔️ 100% Fastest TypeScript Solution

**Author:** sergeyleschev
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/1893373/](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/1893373/)

---

```
function minDifference(nums: number[]): number {
  if (nums.length <= 4) return 0

  nums.sort((a, b) => a - b)

  let opts = [
    nums[nums.length - 4] - nums[0],
    nums[nums.length - 3] - nums[1],
    nums[nums.length - 2] - nums[2],
    nums[nums.length - 1] - nums[3],
  ]

  return Math.min(...opts)
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.