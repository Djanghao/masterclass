# Kotlin | O(log(n)) Runtime

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/5289372/](https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/5289372/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The task is easier to understand when thinking the other way around. There are only two possibilities that there are no collisions (all clockwise or all counter clockwise). Then it is only needed to calculate all possibilties minus 2. There are n nodes with 2 possibilites for each one so the answer is 2 to the power of n minus 2.

# Approach
<!-- Describe your approach to solving the problem. -->
Given the contraints it is needed to solve it in logarithmic time. There is a way to calculate the power of a number in the given time. Be careful that Long is needed since the calculating a value can exceed the Integer limit.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(log(n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
class Solution {
    val mod:Int = 1000000007

    fun fastPow(n: Int): Long {
        if(n == 0) return 1

        val v:Long = fastPow(n/2)

        return (v*v * if(n%2 == 1) 2 else 1) % mod
    }

    fun monkeyMove(n: Int): Int {
        return (fastPow(n).toInt() + mod - 2) % mod
    }
}
```