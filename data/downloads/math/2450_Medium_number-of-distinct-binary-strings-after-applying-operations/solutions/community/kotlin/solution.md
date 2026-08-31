# just a variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/6117634/](https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/6117634/)

---

# Code
```kotlin []
class Solution {
    fun countDistinctStrings(s: String, k: Int): Int = (0..s.length - k).fold(1) { r, _ -> (r * 2) % 1_000_000_007 }
}
```