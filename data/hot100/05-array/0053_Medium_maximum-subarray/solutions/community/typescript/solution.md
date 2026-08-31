# ✔️ 100% Fastest TypeScript Solution

**Author:** sergeyleschev
**Votes:** 22
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/1890617/](https://leetcode.com/problems/maximum-subarray/solutions/1890617/)

---

```
function maxSubArray(nums: number[]): number {
  let local = 0
  let global = -Infinity

  for (const num of nums) {
    local = Math.max(num, local + num)
    if (local > global) { global = local }
  }

  return global
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.