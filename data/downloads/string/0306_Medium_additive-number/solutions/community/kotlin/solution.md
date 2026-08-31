# Let's discuss it's complexity

**Author:** CatInt
**Votes:** 0
**Link:** [https://leetcode.com/problems/additive-number/solutions/4821592/](https://leetcode.com/problems/additive-number/solutions/4821592/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
A recursion to build the additive sequence

# Complexity
- Time complexity: O((n/2)^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    var array = arrayOf(0L, -1L)
    var size = 0

    // query for next num in an additive sequence
    fun isAdditiveNumber(str: String, from: Int = 0): Boolean {
        if (from == str.length) return array[1] >= array[0]

        for (l in 1..(str.length - from)) {
            // early break if cannot make an additive sequence of 3
            if (size == 0 && l > str.length / 2) break
            if (size == 1 && l > (str.length - from) / 2) break

            val num = str.extract(from, l)
            if (num < 0) break

            var cache = 0L
            if (size < 2 || num == array[1] + array[0]) {
                cache = array[0]
                array[0] = array[1]
                array[1] = num
                size++
            } else if (num > array[1] + array[0]) {
                // next loop num would be larger, so break the loop
                break
            } else {
                continue
            }
            // check remaining
            if(isAdditiveNumber(str, from + l)) return true
            // the num doesn't fit, remove the num by restoring
            size--
            array[1] = array[0]
            array[0] = cache
        }
        return false
    }

    fun String.extract(from: Int, l: Int): Long {
        if (this[from] == '0' && l > 1) return -1
        return this.substring(from, from + l).toLong()
    }
}
```