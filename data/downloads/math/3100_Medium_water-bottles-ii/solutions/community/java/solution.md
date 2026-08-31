# Simple java solution

**Author:** Siddhant_1602
**Votes:** 14
**Link:** [https://leetcode.com/problems/water-bottles-ii/solutions/4949805/](https://leetcode.com/problems/water-bottles-ii/solutions/4949805/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int maxBottlesDrunk(int numBottles, int numExchange) {
        int sum=numBottles,bottle=numBottles;
        while(bottle >= numExchange)
        {
            bottle-=numExchange;
            numExchange++;
            sum++;
            bottle++;
        }
        return sum;
    }
}
```