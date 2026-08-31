# Kotlin solution

**Author:** mahmoud5airy2000
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-symmetric-integers/solutions/4169233/](https://leetcode.com/problems/count-symmetric-integers/solutions/4169233/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    
fun countSymmetricIntegers(low: Int, high: Int): Int {
    var result = 0
    for (i in low..high) {
        val string = "$i"
        if (string.length and 0x1 != 0) continue
        val left = string.take(string.length/2)
        val right = string.drop(string.length/2)
        if (left.sumOf { it.digitToInt() } == right.sumOf { it.digitToInt()}) result+=1
    }
    return result
}
}
```