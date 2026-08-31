# [Kotlin] Two Pointers

**Author:** devle79
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/4393944/](https://leetcode.com/problems/strobogrammatic-number/solutions/4393944/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

Compare two elements in array with two pointers `i` `j`.

if `i == 6`, `j` should be `9` and vice versa.

`0`, `1`, `8` can be strobogrammatic, but only in palindrome.

else, not strobogrammatic.

if `num.length` is odd, we should consider element at middle.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    fun isStrobogrammatic(num: String): Boolean {
        var i = 0
        var j = num.lastIndex

        while (i < j) {
            val left = num[i]
            val right = num[j]

            when (left) {
                '6' -> if (right != '9') return false
                '9' -> if (right != '6') return false
                '0', '1', '8' -> if (left != right) return false
                else -> return false
            }

            i++
            j--
        }

        return i != j || num[i] == '8' || num[i] == '1' || num[i] == '0'
    }
}
```