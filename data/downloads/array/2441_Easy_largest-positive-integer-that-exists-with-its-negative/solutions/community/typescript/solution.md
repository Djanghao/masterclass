# Beginner-friendly || Simple solution with HashMap

**Author:** subscriber6436
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/4208697/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/4208697/)

---

# Intuition
Let's briefly explain, what problem is:
- there's a list of `nums`
- our goal is to find **the maximum**, that has a **negative integer of himself** (i.e., 2 and -2 etc)

The approach is **straighforward**: iterate over `nums` and at each step check, if a particular integer is **a maximum one**, and find it **negative version of himself**.

If this integer **doesn't exist**, simply return `-1`.

# Approach
1. declare `set` for effective indexing of a **negative version of a current maximum**
2. declare `ans = -1`
3. iterate over `nums` and **find a maximum**
4. return `ans`

# Complexity
- Time complexity: **O(N)**, for building a set and iterating over `nums`

- Space complexity: **O(N)**, the same for storing `set`.

# Code in Python3
```
class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        cache = set(nums)
        ans = -1

        for num in nums:
            if -num in cache and num > ans: ans = num
    
        return ans
```
# Code in TypeScript
```
function findMaxK(nums: number[]): number {
    const cache = new Set(nums)
    let ans = -1

    for (let i = 0; i < nums.length; i++) {
        const curMax = nums[i]

        if (cache.has(-curMax) && curMax > ans) ans = curMax
    }

    return ans
};
```