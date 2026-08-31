# scala 1 line solution

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3287746/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3287746/)

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
    def vowelStrings(words: Array[String], left: Int, right: Int): Int = 
        words.drop(left).take(right -left + 1).filter(n =>"aeiou".contains(n.head) & "aeiou".contains(n.last)).size
}
```