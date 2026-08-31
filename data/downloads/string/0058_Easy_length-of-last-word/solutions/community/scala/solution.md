# Scala Two line solution

**Author:** MadhuNarayan
**Votes:** 2
**Link:** [https://leetcode.com/problems/length-of-last-word/solutions/3899897/](https://leetcode.com/problems/length-of-last-word/solutions/3899897/)

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
    def lengthOfLastWord(s: String): Int = {
        val ls = s.trim().split(" ") 
        return ls(ls.length-1).length
        
        
    }
}
```