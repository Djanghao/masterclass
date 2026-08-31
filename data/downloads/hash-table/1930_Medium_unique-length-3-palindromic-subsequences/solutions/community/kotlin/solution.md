# Kotlin beginner friendly solution

**Author:** skulagin
**Votes:** 3
**Link:** [https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/4285659/](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/4285659/)

---

# Complexity
- Time complexity: $$O(N)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    fun countPalindromicSubsequence(s: String): Int {
        var result = 0

        // loop through the alphabet
        for (i in 'a'..'z') {
            val left = s.indexOf(i) // find the first occurrence of the letter
            val right = s.lastIndexOf(i) //  find the last occurrence of the letter

            // if both of them exist and right position > left position
            if (left != -1 && right != -1 && right > left) {

                // add count of unique letters between left and rifght positions
                result += s.substring(left + 1, right).toSet().size
            }
        }
        
        return result
    }
}
```