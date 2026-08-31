# Kotlin simple solution without sorting

**Author:** chayangkoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/5151486/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/5151486/)

---

![Screenshot 2024-05-13 154822.png](./images/0.png)


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun minimumCost(costs: IntArray): Int {
        val frequencies = IntArray(101)
        for (cost in costs) {
            frequencies[cost]++
        }

        var cost = frequencies.size - 1
        var count = 1
        var sumOfCost = 0
        while (cost >= 1) {
            while (cost >= 1 && frequencies[cost] == 0) cost--
            if (count % 3 != 0) sumOfCost += cost
            frequencies[cost]--
            count++
        }

        return sumOfCost
    }
}
```