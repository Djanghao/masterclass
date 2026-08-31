# Kotlin: O(n) time and O(1) space

**Author:** kotlinvim
**Votes:** 4
**Link:** [https://leetcode.com/problems/valid-palindrome-ii/solutions/930873/](https://leetcode.com/problems/valid-palindrome-ii/solutions/930873/)

---


    fun validPalindrome(s: String): Boolean {
        var l = 0; var r = s.length - 1
        while (l < r) {
            if (s[l] != s[r]) {
                return isPalindrome(s, l + 1, r)
                    || isPalindrome(s, l, r - 1)
            }
            l++; r--
        }
        return true
    }
    fun isPalindrome(s: String, i: Int, j: Int): Boolean {
        var l = i; var r = j
        while (l < r) {
            if (s[l++] != s[r--]) return false
        }
        return true
    }
