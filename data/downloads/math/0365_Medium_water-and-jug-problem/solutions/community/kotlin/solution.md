# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/water-and-jug-problem/solutions/4540217/](https://leetcode.com/problems/water-and-jug-problem/solutions/4540217/)

---

# Code
```
class Solution {
    fun canMeasureWater(jug1Capacity: Int, jug2Capacity: Int, targetCapacity: Int): Boolean =
        jug1Capacity+jug2Capacity >= targetCapacity && targetCapacity%gcd(jug1Capacity, jug2Capacity) == 0

    private fun gcd(a: Int, b: Int): Int = if (b==0) a else gcd(b, a%b)
}
```