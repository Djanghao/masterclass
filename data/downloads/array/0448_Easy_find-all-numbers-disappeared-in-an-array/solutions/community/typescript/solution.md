# Ts solutions

**Author:** Omurbek1
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/3077181/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/3077181/)

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
function findDisappearedNumbers(nums: number[]): number[] {
   let set = new Set(nums) , result = []
    for (let i = 1; i < nums.length+1; i++) { 
        if (!set.has(i)){
            result.push(i)
        }
    }
    return result
};
```