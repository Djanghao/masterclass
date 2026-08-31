# TypeScript solution easy to understand

**Author:** vishaldeep3000
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/5839493/](https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/5839493/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
we can have two simple obseration \r
when we take the current key the +/- will change\r
or if we skip the current key then +/- remains the same\r
\r
So true represents + nd false represent -\r
\r
We start with true for the first index\r
\r
\r
For memoization we can just create a 2d arr with length same as that of nums+1 and 2 rows for true and false\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```typescript []\r
function maxAlternatingSum(nums: number[]): number {\r
\r
    let t: number[][] = Array.from({ length: nums.length + 1 }, () => Array(2).fill(-1));\r
    return solve(nums, 0, true, t);\r
};\r
\r
function solve(nums: number[] , index: number, flag: boolean, t: number[][]){\r
\r
    if(index >= nums.length){\r
        return 0;\r
    }\r
    let key = getKey(flag);\r
    if(t[index][key] != -1){\r
        return t[index][key];\r
    }\r
\r
    let skip = solve(nums, index+1, flag, t);\r
    let val = nums[index]\r
    if(flag == false){\r
        val = -val\r
    }\r
    let take = val + solve(nums, index+1, !flag, t);\r
\r
    return t[index][key] = Math.max(skip, take);\r
\r
}\r
\r
function getKey(flag : boolean): number{\r
    return flag ? 0: 1;\r
}\r
\r
```