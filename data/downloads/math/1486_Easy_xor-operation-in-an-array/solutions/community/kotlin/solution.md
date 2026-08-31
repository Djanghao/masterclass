# Without array, time = O(N), space = O(1)

**Author:** lbarczynski
**Votes:** 0
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/5806347/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/5806347/)

---

# Approach
Ignoring note to create array to save a space

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```kotlin []
class Solution {
    fun xorOperation(n: Int, start: Int): Int {
        require(n >= 1)
        val valueFor : (Int) -> Int = { start + 2 * it }
        var result = valueFor(0)
        for(i in 1 until n) result = result xor valueFor(i)
        return result
    }
}
```