# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/3364140/](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/3364140/)

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
    def maximumSubsequenceCount(text: String, pattern: String): Long = {
        val resL = text.foldLeft(1L,0L){(acc, cur) => {
            val resL = if(cur == pattern.last) acc._2 + acc._1 else acc._2
            (acc._1 + (if(cur == pattern.head) 1 else 0), resL)
        }}
        val resR = text.reverse.foldLeft(1L, 0L) { (acc, cur) => {
            val resL = if (cur == pattern.head) acc._2 + acc._1 else acc._2
            (acc._1 + (if (cur == pattern.last) 1 else 0), resL)
        }}
        resL._2 max resR._2
    }
}
```