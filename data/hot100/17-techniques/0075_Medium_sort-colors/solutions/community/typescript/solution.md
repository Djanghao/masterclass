# Beginner-friendly || Simple solution with HashMap+Prefix Sum in Python3 / TypeScript

**Author:** subscriber6436
**Votes:** 5
**Link:** [https://leetcode.com/problems/sort-colors/solutions/4208667/](https://leetcode.com/problems/sort-colors/solutions/4208667/)

---

# Intuition
Let's briefly explain, what the problem is:
- there a list of `nums`, it consists **only** with `0, 1`'s and `2`'s
- our goal is to **sort** `nums` in **ascending order in-place**

The simplest approach we could use is to **apply built-in** sorting methods, but they're **not allowed**.

So, what if we count **frequencies of integers?** We will get a **frequency map**.
Since we know, that all of the integers **must be sorted** like `[0,0,1,2]` we will **map** frequency of each integer to **a particular index** with using **intervals**.

```
# Example
nums = [1,1,0,0,2]
map = {0: 2, 1: 2, 2: 1}

# To be more specific, let me introduce a temporary array with 
# indexes of a particular interval with starting and ending points.
interval = [
    {start: 0, end: 1}, 
    {start: 2, end: 3}, 
    {start: 4, end: 4}
]

# To build an interval, you should have a pointer to the last
# interval and add an amount of a particular integer from map.
```

# Approach
1. declare `prefix` array to map frequencies to a particular integer
2. iterate over `nums` and build `prefix`
3. iterate over **each interval** from `map` and add to `prefix` the last frequency for integers `1` and `2`

# Complexity
- Time complexity: **O(N)**, since we iterate over `nums`

- Space complexity: **O(1)**, we don't allocate extra space, except `prefix`, but it stores only **constant amount** of integers, while having a maximum size as `3`

# Code in Python3
```
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        prefix = Counter(nums)

        for i in range(prefix[0]): nums[i] = 0

        prefix[1] += prefix[0]

        for i in range(prefix[0], prefix[1]): nums[i] = 1

        prefix[2] += prefix[1]

        for i in range(prefix[1], prefix[2]): nums[i] = 2
        
```
# Code in TypeScript
```
function sortColors(nums: number[]): void {
    const prefix = Array(3).fill(0)

    for (let i = 0; i < nums.length; i++) {
        prefix[nums[i]]++
    }

    for (let i = 0; i < prefix[0]; i++) {
        nums[i] = 0
    }

    prefix[1] += prefix[0]

    for (let i = prefix[0]; i < prefix[1]; i++) {
        nums[i] = 1
    }

    prefix[2] += prefix[1]

    for (let i = prefix[1]; i < prefix[2]; i++) {
        nums[i] = 2
    }
}
```