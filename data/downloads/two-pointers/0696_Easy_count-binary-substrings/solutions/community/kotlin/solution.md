# Kotlin Elegant Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-binary-substrings/solutions/5979345/](https://leetcode.com/problems/count-binary-substrings/solutions/5979345/)

---

# Complexity
- Time complexity: $$O(2n)$$
- Space complexity: $$O(n + 4k)$$

# Code
```kotlin []
class Solution {

  fun countBinarySubstrings(s: String): Int {
    var groups = mutableListOf<Int>()
    var (prev, cur, count) = arrayOf(-1, 0, 0)

    while (cur in 0 until s.length) {
      count += 1
      prev = cur ; cur += 1
      if (cur == s.length || s[prev] != s[cur]) {
        groups.add(count)
        count = 0
      }
    }
    
    var result = 0
    for (i in 0 until groups.size - 1)
      result += min(groups[i], groups[i + 1])
    
    return result
  }
}
```