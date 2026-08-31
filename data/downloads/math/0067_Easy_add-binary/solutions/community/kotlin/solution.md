# 1-Line Kotlin Solution with 80% Space complexity

**Author:** sunR13E
**Votes:** 9
**Link:** [https://leetcode.com/problems/add-binary/solutions/2792541/](https://leetcode.com/problems/add-binary/solutions/2792541/)

---

# Complexity
- Time complexity: Runtime 76.33%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 80%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun addBinary(a: String, b: String): String {
        return (a.toBigInteger(2) + b.toBigInteger(2)).toString(2)
    }
}
```