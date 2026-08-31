# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/optimal-division/solutions/3620825/](https://leetcode.com/problems/optimal-division/solutions/3620825/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def optimalDivision(nums: Array[Int]): String = {
      nums.length match {
        case 1 => nums.head.toString
        case 2 => nums.mkString("/")
        case _ => nums.head + "/(" + nums.tail.mkString("/") + ")"
      }
    }
}
```