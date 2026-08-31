# Kotlin with clean code and detailed explanation

**Author:** Vezuchyy
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-k-palindrome-strings/solutions/4422533/](https://leetcode.com/problems/construct-k-palindrome-strings/solutions/4422533/)

---

# Intuition
Every palindrome must have at least one unique (not paired) char in it, it means that minumal number of palindromes is a number of chars without pair. The maximal number is number of chars which is generously hinted by the base test cases. If we check that k is between number of not paired chars and input string length then we know the answer

# Approach
- check the upper bound for the quick win
- count pairs by using the Set
- check the lower bound

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$ (set may be as long as an input string length - 1, but we know that it's not longer than 26)

# Code
```
class Solution {
    fun canConstruct(s: String, k: Int): Boolean {
        if (s.length < k) { return false }

        var pairs: Int = 0
        val charset = HashSet<Char>()

        s.forEach {
            if (charset.contains(it)) {
                pairs++
                charset.remove(it)
            } else {
                charset.add(it)
            }
        }

        return (s.length - pairs * 2) <= k
    }
}
```