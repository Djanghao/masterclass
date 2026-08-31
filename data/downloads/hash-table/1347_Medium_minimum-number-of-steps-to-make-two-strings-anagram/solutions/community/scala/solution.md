# One liner scala Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/5085183/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/5085183/)

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
    def minSteps(s: String, t: String): Int = {
        (s.toSet++t.toSet).toList.map(i=>s.count(_==i)-t.count(_==i)).filter(_>0).sum

    }
}
```