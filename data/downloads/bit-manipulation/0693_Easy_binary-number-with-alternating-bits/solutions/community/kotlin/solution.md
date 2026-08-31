# Kotlin Straightforward Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/5968641/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/5968641/)

---

# Code
```kotlin []
class Solution {
  fun hasAlternatingBits(n: Int): Boolean {
    if (n == 0 || n == 1) return true
    
    var n = n
    var (cur, prev) = arrayOf<Int?>(null, null)
    while (n != 0) {
      cur = n and 1
      if (n != 0 && cur == prev) return false
      prev = cur ; n = n shr 1
    }

    return true
  }
}
```