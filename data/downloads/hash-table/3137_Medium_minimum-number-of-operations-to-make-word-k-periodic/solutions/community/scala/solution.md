# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5124586/](https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5124586/)

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
    def minimumOperationsToMakeKPeriodic(word: String, k: Int): Int = 
        word.sliding(k, k).toList.groupBy(identity).view.mapValues(_.size).map(_._2).toList.sorted.init.sum

    
}
```