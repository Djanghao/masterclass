# Merge strings with simple and concise approach in Kotlin

**Author:** behzodhalil
**Votes:** 4
**Link:** [https://leetcode.com/problems/merge-strings-alternately/solutions/3618311/](https://leetcode.com/problems/merge-strings-alternately/solutions/3618311/)

---

# Explanation
- `buildString()`: It is an easy way to build strings. It takes a lambda as an argument, and within that lambda, you can use various append methods on a `StringBuilder` instance to construct a string. Also, it internally returns `toString()`.

- `repeat()`: It allows us to execute a block of code a specified number of times, denoted by N.

# Complexity
- **`Time complexity`**:
O(max(n+m))

- **`Space complexity`:**
O(n+m)

# Code
```
class Solution {
    fun mergeAlternately(word1: String, word2: String): String {
        return buildString {
            repeat(maxOf(word1.length, word2.length)) { index ->
                if(index < word1.length) append(word1[index])
                if(index < word2.length) append(word2[index])
            }
        }
    }
}
```