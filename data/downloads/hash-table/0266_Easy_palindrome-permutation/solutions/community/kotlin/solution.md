# Kotlin faster than 100%, memory 100%

**Author:** mrshinsa
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-permutation/solutions/3250706/](https://leetcode.com/problems/palindrome-permutation/solutions/3250706/)

---

# Intuition
If the number of odd occurances are greater than 1, then cannot be palindrome.

# Approach
Iterate through each character and increment the count into a hashmap

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {

    fun canPermutePalindrome(s: String): Boolean {
        var map = HashMap<Char, Int>()
        for (c in s) {
            map[c] = (map[c] ?: 0) + 1
        }
        var oddCount = 0
        for (v in map.values) {
            if (v % 2 == 1) {
                oddCount++
            }
        }
        return (oddCount <= 1)
    }
}
```