# JavaScript

**Author:** azecutor
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/solutions/5351597/](https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/solutions/5351597/)

---

# Complexity
- Time complexity: O(n^2)

- Space complexity: O(n)

# Code
```
/**
 * @param {string} road
 * @param {number} budget
 * @return {number}
 */
var maxPotholes = function(road, budget) {
    // Lessons learned: Stop when budgetLeft >= 1 instead of 0, use reamining budget if possible 
    let consecutiveHoles = [], l=0, r=0, currentConsecutive=0, repaired=0;
    road += '.'
    while (r < road.length) {
        if (road.charAt(r) == 'x') {
            r++;
        }
        else {
            if (road.charAt(l) == 'x') {
                currentConsecutive = r - l;
                consecutiveHoles.push(currentConsecutive);
            }
            r += 1; 
            l = r; 
        }
    }
    consecutiveHoles.sort((a, b) => a-b);
    let budgetLeft = budget, ptr = consecutiveHoles.length - 1;

    while (budgetLeft >= 1 && ptr >= 0) {
        repaired += Math.min(consecutiveHoles[ptr], budgetLeft - 1);
        budgetLeft -= (consecutiveHoles[ptr] + 1);
        ptr -= 1; 
    }

    return repaired; 
};
```