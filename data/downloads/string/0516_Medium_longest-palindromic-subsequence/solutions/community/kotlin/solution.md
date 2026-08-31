# Using DP memorisation in O(N) space and O(N^2) time complexity

**Author:** iamurali
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence/solutions/4796251/](https://leetcode.com/problems/longest-palindromic-subsequence/solutions/4796251/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun longestPalindromeSubseq(s: String): Int {
        val size = s.length
        val reversedString = s.reversed()
        var previous = IntArray(size+1) { 0 }
        var current = IntArray(size+1) { 0 }

        for( i in 1 until size+1) {
            for (j in 1 until size+1) {
                if (reversedString[j-1] == s[i-1]) {
                    current[j] = previous[j-1] + 1
                } else {
                    current[j] = maxOf(previous[j], current[j-1])
                }
            }
            previous = current.copyOf()
        }
        return current[size]
    }

    fun printArray(arr: IntArray) {
            println(arr.contentToString())
    }
}
```