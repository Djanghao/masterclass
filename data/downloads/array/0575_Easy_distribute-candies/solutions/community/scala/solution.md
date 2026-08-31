# fluent

**Author:** duythienbui
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies/solutions/4831600/](https://leetcode.com/problems/distribute-candies/solutions/4831600/)

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
  def distributeCandies(candyType: Array[Int]): Int = {

    candyType
      .length
      ./(2)
      .min(candyType.distinct.length)

  }
}
```