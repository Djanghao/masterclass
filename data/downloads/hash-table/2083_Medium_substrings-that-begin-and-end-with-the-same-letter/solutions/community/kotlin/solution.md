# Kotlin

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5489471/](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5489471/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Presum to count the same char in the previous string
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun numberOfSubstrings(s: String): Long {
        val count = LongArray(26)
        var res = 0L
        s.forEach{
            res+= count[it - 'a']
            count[it - 'a']++
        }

        return res + s.length
    }
}
```