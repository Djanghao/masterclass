# Scala using map

**Author:** myeyeswereclosed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/3629861/](https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/3629861/)

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
    def numEquivDominoPairs(dominoes: Array[Array[Int]]): Int =  {
        dominoes
            .map(_.sorted.toList)
            .groupBy(identity)
            .values
            .map(_.length)
            .filter(_ > 1)
            .map(l => l*(l-1)/2)
            .sum
    }
}
```