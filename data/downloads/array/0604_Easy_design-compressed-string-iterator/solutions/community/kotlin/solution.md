# Kotlin

**Author:** user8762vM
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-compressed-string-iterator/solutions/4941775/](https://leetcode.com/problems/design-compressed-string-iterator/solutions/4941775/)

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
class StringIterator(compressedString: String) {
    val compressed = compressedString
    var pointer: Int = 0
    var ch = ' '
    var amountToReveal = 0

    fun next(): Char {
        if (!hasNext()) {
            return ' '
        }

        if (amountToReveal == 0) {
            ch = compressed[pointer]
            pointer += 1
            
            while(pointer < compressed.length && compressed[pointer].isDigit()) {
                amountToReveal = amountToReveal * 10 + compressed[pointer].toString().toInt()
                pointer += 1
            }
            
        }

        amountToReveal -= 1

        return ch
    }

    fun hasNext(): Boolean {
        return pointer != compressed.length || amountToReveal != 0
    }

}

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
```