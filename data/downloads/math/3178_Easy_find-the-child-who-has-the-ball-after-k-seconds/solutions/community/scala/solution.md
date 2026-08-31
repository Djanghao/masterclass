# Scala Solution with Math

**Author:** sumitarora5
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5838098/](https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5838098/)

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
```scala []
object Solution {
    def numberOfChild(n: Int, k: Int): Int = {
        (n-1) - Math.abs((n-1) - k % (2*(n-1)))
    }
}
```