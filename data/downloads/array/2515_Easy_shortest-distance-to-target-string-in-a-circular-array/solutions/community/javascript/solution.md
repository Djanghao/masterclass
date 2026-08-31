# JavaScript| Easy understanding solution

**Author:** shirleylea1996
**Votes:** 8
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2948051/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2948051/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    let left = startIndex
    let right = startIndex
    let step = 0
    let n = words.length
    
    while(step <= n){
        if(words[left]===target||words[right]===target){
            return step
        } else {
            right = (right + 1) % n
            left = (left - 1 + n) % n
        }
        step ++
    }
    return -1
};
```