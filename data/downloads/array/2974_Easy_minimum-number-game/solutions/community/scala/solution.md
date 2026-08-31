# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-game/solutions/4807210/](https://leetcode.com/problems/minimum-number-game/solutions/4807210/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def numberGame(nums: Array[Int]): Array[Int] = {
      nums
        .sorted
        .grouped(2)
        .flatMap{case Array(a, b) => Array(b, a)}
        .toArray
    }
}
```