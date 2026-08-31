# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3459653/](https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3459653/)

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
    def addMinimum(word: String): Int = 
        ((word.drop(1) zip word).count(n => n._1 <= n._2) + 1) * 3  - word.length

    
}
```