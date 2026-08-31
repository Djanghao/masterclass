# ✅ JS || Two Approaches  || With explanation || Easy to understand

**Author:** pmistry_
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/2582064/](https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/2582064/)

---

I just found this Blog and Github repository with solutions to Leetcode problems.
https://leet-codes.blogspot.com
It is very useful, and I just wanted to share it with you.
Note: You can bookmark it as a resource, and for another approaches
<br>

**A) Recusion**
```
/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
function recursion(l, i, nums, muls, memo) {
  if (i === muls.length) {
    return 0
  }
  if (memo[l][i] != null) {
    return memo[l][i]
  }

  let left = l
  let right = nums.length - (i - l) - 1
  let case1 = muls[i] * nums[left] + recursion(l + 1, i + 1, nums, muls, memo)
  let case2 = muls[i] * nums[right] + recursion(l, i + 1, nums, muls, memo)
  memo[l][i] = Math.max(case1, case2)

  return memo[l][i]
}

var maximumScore = function(nums, multipliers) {
    let memo = Array.from({ length: multipliers.length }, _ =>
        Array(multipliers.length).fill(null)
    )
    return recursion(0, 0, nums, multipliers, memo)
};
```

**B)For Bottom-Up DP Approach please ref below link** 
https://leet-codes.blogspot.com/2022/09/1770-maximum-score-from-performing.html

(Note: You can bookmark it for your future ref)