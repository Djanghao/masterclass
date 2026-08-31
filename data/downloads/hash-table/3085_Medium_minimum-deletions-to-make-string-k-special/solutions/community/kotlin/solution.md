# Kotlin Solution

**Author:** jakobakoba
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4891340/](https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4891340/)

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
    fun minimumDeletions(word: String, k: Int): Int {
        val chars = IntArray(26)

        for (char in word){
            chars[char - 'a']++
        }

        chars.sort()
        
        var ans = Int.MAX_VALUE
        var startDel = 0
        for (i in 0 until chars.size){
            var curDel = startDel
            var topLimit = chars[i] + k
            for (j in i + 1 until chars.size){
                if (topLimit < chars[j]) curDel += chars[j] - topLimit
            }
            ans = minOf(ans, curDel)
            startDel += chars[i]
        }
        return ans
    }
}
```