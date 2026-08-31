# Beats 100% O(n) solution

**Author:** Shreedev
**Votes:** 1
**Link:** [https://leetcode.com/problems/last-visited-integers/solutions/5950252/](https://leetcode.com/problems/last-visited-integers/solutions/5950252/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```typescript []
function lastVisitedIntegers(nums: number[]): number[] {
    let seen = []
    let ans = []
    let k = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === -1) {
            k++;
            if(k > seen.length) ans.push(-1)
            else ans.push(seen[k - 1])
        } else {
            seen.unshift(nums[i])
            k = 0;
        }
    }
    
    return ans
};
```