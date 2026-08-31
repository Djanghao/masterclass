# scala 2 lines solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/4935158/](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/4935158/)

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
  def canEat(candiesCount: Array[Int], queries: Array[Array[Int]]): Array[Boolean] = {
    val res = candiesCount.scanLeft(0L)(_ + _)
    queries.map(n => (res(n(0)) / n(2)) <= n(1) && n(1) < (res(n(0) + 1)))
  }
}
```