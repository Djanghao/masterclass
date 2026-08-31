# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-marbles-in-bags/solutions/3735405/](https://leetcode.com/problems/put-marbles-in-bags/solutions/3735405/)

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
    def putMarbles(weights: Array[Int], k: Int): Long = {
      val pairs = (1 until weights.length).map(i => (weights(i) + weights(i - 1)).toLong).sorted
      pairs.takeRight(k - 1).sum - pairs.take(k - 1).sum
    }
}
```