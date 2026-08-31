# Simple solution with explanation.

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/6092109/](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/6092109/)

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
```javascript []
/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
    
    for (let i = 0; i + m * k <= arr.length; i++) {
        let j;
        // Check if pattern repeats k times
        for (j = 0; j < m * k; j++) {
            if (arr[i + j] !== arr[i + (j % m)]) {
                break;
            }
        }
        
        // If pattern repeated k times completely
        if (j === m * k) {
            return true;
        }
    }
    
    return false;

    
};
```