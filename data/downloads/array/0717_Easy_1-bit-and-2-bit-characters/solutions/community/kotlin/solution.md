# Kotlin Solution DFS

**Author:** kotlinc
**Votes:** 0
**Link:** [https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/3254520/](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/3254520/)

---

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  fun isOneBitCharacter(bits: IntArray): Boolean {
    fun good(idx: Int): Boolean {
      if (idx == -1) return true
      
      var res = false
      if (idx > 0 && bits[idx - 1] == 1)
        res = res or good(idx - 2)
      if (bits[idx] == 0)
        res = res or good(idx - 1)
      return res
    }
    return good(bits.size - 2)
  }
}
```