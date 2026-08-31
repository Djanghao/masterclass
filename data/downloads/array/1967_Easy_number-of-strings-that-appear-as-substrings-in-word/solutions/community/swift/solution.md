# ✅️ [Swift] One-line solution

**Author:** IlnurZayn
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/3791462/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/3791462/)

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
class Solution {
    func numOfStrings(_ patterns: [String], _ word: String) -> Int {
        patterns.filter { word.contains($0) }.count
    }
}
```