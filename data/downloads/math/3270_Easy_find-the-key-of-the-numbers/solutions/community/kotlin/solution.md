# Constant time/space kotlin solution

**Author:** donaboyev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/6068288/](https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/6068288/)

---


# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ --> 

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ --> 

# Code
```kotlin []
class Solution {
    fun generateKey(num1: Int, num2: Int, num3: Int): Int {
        var result = 0
        val (num11, num21, num31) = Triple(num1 / 1000, num2 / 1000, num3 / 1000)
        result += minOf(num11, num21, num31) * 1000
        val (num12, num22, num32) = Triple(num1 / 100 % 10, num2 / 100 % 10, num3 / 100 % 10)
        result += minOf(num12, num22, num32) * 100
        val (num13, num23, num33) = Triple(num1 / 10 % 10, num2 / 10 % 10, num3 / 10 % 10)
        result += minOf(num13, num23, num33) * 10
        val (num14, num24, num34) = Triple(num1 % 10, num2 % 10, num3 % 10)
        result += minOf(num14, num24, num34)
        return result
    }
}
```