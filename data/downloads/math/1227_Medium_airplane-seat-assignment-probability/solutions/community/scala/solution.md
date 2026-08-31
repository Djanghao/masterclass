# Easy Scala Optimal 100% Time And Space Pattern Matching Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/airplane-seat-assignment-probability/solutions/5291900/](https://leetcode.com/problems/airplane-seat-assignment-probability/solutions/5291900/)

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
```
object Solution {
    def nthPersonGetsNthSeat(n: Int): Double = {
        n match 
        {
            case n   if   n==1   =>   1.00000
            case _   =>   0.50000
        }
    }
}
```