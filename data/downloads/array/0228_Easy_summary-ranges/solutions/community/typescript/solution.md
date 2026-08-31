# Beats 99% - Short - Simple to Understand

**Author:** Spi-Re
**Votes:** 15
**Link:** [https://leetcode.com/problems/summary-ranges/solutions/3410473/](https://leetcode.com/problems/summary-ranges/solutions/3410473/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function summaryRanges(nums: number[]): string[] {
    const result = []
    let str = ''

    let start = nums[0]

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) continue
        
        str = (start === nums[i - 1]) 
            ? `${start}`
            : `${start}->${nums[i - 1]}`

        result.push(str)
        start = nums[i]
    }

    return result
};
```