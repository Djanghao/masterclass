# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/3126092/](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/3126092/)

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
    def minimumPartition(s: String, k: Int): Int = {
        s.map(_.asDigit).foldLeft((0L,1))((ans, cur) =>{
        if(cur > k) return -1
        val next = ans._1 * 10 + cur
        if(next > k) (cur, ans._2 + 1) else (next, ans._2) 
        })._2
    }
}
```