# [Kotlin] O(n) Two Pointers

**Author:** brentlikestocode
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iv/solutions/4180265/](https://leetcode.com/problems/valid-palindrome-iv/solutions/4180265/)

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
    fun makePalindrome(s: String): Boolean {
        if(s.length <= 2) return true
        var counter = 2
        // Two pointers
        var left = 0
        var right = s.length - 1
        while(left < right) {
            if(s[left] == s[right]) {
                left++
                right--
            } else if(s[left] != s[right]) {
                left++
                right--
                counter--
            }
        }

        return if(counter < 0) false else true
    }
}
```