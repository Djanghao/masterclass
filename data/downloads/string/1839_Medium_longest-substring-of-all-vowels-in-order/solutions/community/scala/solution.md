# Scala || Sliding Window

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/5219496/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/5219496/)

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
    def longestBeautifulSubstring(word: String): Int = {
        val n = word.length
        var i = 0
        var j = 0
        var ans = 0
        var count = 0
        val A = Array.fill(26)(0)

        while (i < n) {
            if (i > 0 && i != j && word(i) < word(i - 1)) {
                for (i <- 0 until 26) A(i) = 0
                j = i
                count = 0
            }
            if (A(word(i) - 'a') == 0) count += 1
            A(word(i) - 'a') += 1
            if (count == 5) ans = math.max(ans, i - j + 1)
            i += 1
        }

        ans
    }
}
```