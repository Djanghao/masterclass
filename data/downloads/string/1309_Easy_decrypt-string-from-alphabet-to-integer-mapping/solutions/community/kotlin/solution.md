# Kotlin simple solution

**Author:** chayangkoon
**Votes:** 1
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/5133224/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/5133224/)

---

![Screenshot 2024-05-09 113634.png](./images/0.png)


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun freqAlphabets(s: String): String {
        val stringBuilder = StringBuilder()
        val length = s.length
        var index = 0

        while (index < length) {
            val hashIndex = index + 2
            if (hashIndex < length && s[hashIndex] == '#') {
                val substring = s.substring(index, index + 2)
                stringBuilder.append('`' + substring.toInt())
                index += 3
            } else {
                stringBuilder.append('`' + s[index].digitToInt())
                index++
            }
        }

        return stringBuilder.toString()
    }
}
```