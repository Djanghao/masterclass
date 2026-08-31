# Scala oneliner

**Author:** malovig
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-highest-altitude/solutions/3484382/](https://leetcode.com/problems/find-the-highest-altitude/solutions/3484382/)

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
    def largestAltitude(gain: Array[Int]): Int = {
        gain.scanLeft(0)(_ + _).max
    }
}
```