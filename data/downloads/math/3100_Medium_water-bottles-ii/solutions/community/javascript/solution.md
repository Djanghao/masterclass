# javascript || 100% beats || easy solution

**Author:** Tamradhwaj
**Votes:** 2
**Link:** [https://leetcode.com/problems/water-bottles-ii/solutions/4950105/](https://leetcode.com/problems/water-bottles-ii/solutions/4950105/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
think straight and forward

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
        let eb = numBottles;
        let bd = numBottles;
        numBottles = 0;
        while (eb >= numExchange) {
            eb -= numExchange;
            numExchange += 1;
            eb += 1;
            bd += 1;
            console.log(eb, numExchange, bd);
        }
        return bd;
    }
```