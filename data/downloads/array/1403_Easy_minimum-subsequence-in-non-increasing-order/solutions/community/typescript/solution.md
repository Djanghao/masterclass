# Beginner-friendly || Simple solution with Greedy in Python3/TypeScript

**Author:** subscriber6436
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/4123490/](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/4123490/)

---

# Intuition
The problem description is the following:
- there's a list of `nums`
- our goal is to extract subsequence of `nums`, whose sum is **greater**, than a rest sum
- if there're multiple solutions, return the subsequence with the **minimum size** and with **maximum total sum**

# Approach
1. sort `nums` in **descending** order
2. initialize `ans` to store subsequence and `total` to track **prefix sum**
3. calculate **prefix sum**
4. initialize `curSum` to compare with `total`
5. iterate over sorted `nums` and check `curSum > total`, if it's, then return `ans`, otherwise continue to increase the subsequence

# Complexity
- Time complexity: **O(n log n)**, to sort input

- Space complexity: **O(k)**, to store subsequence `ans`

# Code in Python3
```
class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        nums.sort(reverse=True)
        ans = []
        total = 0

        for num in nums:
            total += num

        curSum = 0

        for num in nums:
            total -= num
            curSum += num
            ans.append(num)

            if curSum > total: return ans
```
# Code in TypeScript
```
function minSubsequence(nums: number[]): number[] {
    nums.sort((a, b) => b - a)
    const ans = []
    let total = 0

    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
    }

    let curSum = 0

    for (let i = 0; i < nums.length; i++) {
        total -= nums[i]
        curSum += nums[i]
        ans.push(nums[i])

        if (curSum > total) return ans
    }
};
```