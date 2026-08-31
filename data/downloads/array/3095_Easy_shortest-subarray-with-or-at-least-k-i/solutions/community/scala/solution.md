# Easy Scala One-Liner Solution Using flatMap, find .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/5276521/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/5276521/)

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
  def minimumSubarrayLength(nums: Array[Int], k: Int): Int =
    (nums.indices.flatMap(i => (i until nums.length).find(j => (i to j).map(nums).reduce(_ | _) >= k).map(j => j - i + 1))).minOption.getOrElse(-1)
}

```