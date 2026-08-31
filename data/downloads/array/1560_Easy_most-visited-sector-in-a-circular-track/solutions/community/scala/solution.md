# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/4242585/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/4242585/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def mostVisited(n: Int, rounds: Array[Int]): List[Int] = {
      val start = rounds.head
      val end = rounds.last
      if (start <= end) (start to end).toList
      else ((1 to end) ++ (start to n)).toList
    }
}
```