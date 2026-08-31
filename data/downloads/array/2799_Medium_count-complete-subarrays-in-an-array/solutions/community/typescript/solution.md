# Solution using Set

**Author:** justmad1
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/4575433/](https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/4575433/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countCompleteSubarrays(nums: number[]): number {
    const uniq: number = new Set(nums).size
    let result: number = 0

    for (let i: number = 0; i < nums.length; i++) {
        let temp: Set<number> = new Set()
        let wasUniq: boolean = false
        for (let j: number = i; j < nums.length; j++) {
            temp.add(nums[j])
            if (temp.size === uniq) {
                result += 1
                wasUniq = true
            } else if (wasUniq) break
        }
    }

    return result
};
```