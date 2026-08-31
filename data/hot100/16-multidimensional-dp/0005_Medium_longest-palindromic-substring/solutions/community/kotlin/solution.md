# [Kotlin] Efficient Palindromic Substring Search using Expand Around Center Technique

**Author:** teogor
**Votes:** 7
**Link:** [https://leetcode.com/problems/longest-palindromic-substring/solutions/5002658/](https://leetcode.com/problems/longest-palindromic-substring/solutions/5002658/)

---

# Intuition
The problem asks to find the longest palindromic substring within a given string. A palindromic string reads the same backward as forward. An efficient way to solve this problem is to use the "expand around center" technique, where we iterate through each character in the string and consider it as a potential center of a palindrome. We then expand outward from the center to find the longest palindrome centered at that position.

# Approach
1. Initialize variables `start` and `maxLength` to keep track of the starting index and length of the longest palindrome found so far.
2. Iterate through each character in the string `s`.
3. For each character, we consider two cases:
   - Case 1: The palindrome has a single center character (odd length). We expand around the current character by calling the `expandAroundCenter` function with the same left and right indices.
   - Case 2: The palindrome has two center characters (even length). We expand around the current character and its right neighbor by calling the `expandAroundCenter` function with left and right indices corresponding to the current character and its next character.
4. Update `maxLength` if the length of the palindrome found is greater than the current maximum length. Update `start` to the starting index of the longest palindrome found.
5. Finally, return the substring of `s` starting from index `start` with length `maxLength`.

# Complexity
- Time complexity: O(n^2), where n is the length of the input string. The expandAroundCenter function has a time complexity of O(n), and we call it for each character in the string.

- Space complexity: O(1) since we only use a constant amount of extra space for variables `start`, `maxLength`, `l`, and `r`.

# Code
```
class Solution {
    fun longestPalindrome(s: String): String {
        if (s.length < 2) return s
        
        var start = 0
        var maxLength = 0
        
        for (i in s.indices) {
            val len1 = expandAroundCenter(s, i, i)
            val len2 = expandAroundCenter(s, i, i + 1)
            val len = maxOf(len1, len2)
            
            if (len > maxLength) {
                maxLength = len
                start = i - (len - 1) / 2
            }
        }
        
        return s.substring(start, start + maxLength)
    }
    
    private fun expandAroundCenter(s: String, left: Int, right: Int): Int {
        var l = left
        var r = right
        
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            l--
            r++
        }
        
        return r - l - 1
    }
}

```