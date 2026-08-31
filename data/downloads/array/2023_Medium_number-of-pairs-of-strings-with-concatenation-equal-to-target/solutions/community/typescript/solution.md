# Beats 100% in terms of runtime

**Author:** shikoto
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/4793041/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/4793041/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)^2$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function numOfPairs(nums: string[], target: string): number {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(j === i) continue;
            if(`${nums[i]}${nums[j]}` === target) count++;
        }
    }
    return count
};
```