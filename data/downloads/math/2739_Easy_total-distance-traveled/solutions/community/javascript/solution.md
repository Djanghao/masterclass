# Easy one..!!

**Author:** Amruthakm77
**Votes:** 1
**Link:** [https://leetcode.com/problems/total-distance-traveled/solutions/5834603/](https://leetcode.com/problems/total-distance-traveled/solutions/5834603/)

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
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(main, second) {
    let km = 0
    while(main >= 5 && second > 0) {
        km += 50
        main = (main - 5) + 1
        second -= 1
    }
    return km += main * 10
};
```