# BuiltIn Sorted && Diff

**Author:** vnt-83
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/6011056/](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/6011056/)

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
```scala []
object Solution {
    def canMakeArithmeticProgression(arr: Array[Int]): Boolean = {
        val sorted = arr.sorted
        val diff = sorted(1) - sorted(0)
        var isOk = true
        var i = 1
        
        while (i < arr.length && isOk) {
            val currDiff = sorted(i) - sorted(i - 1)
            if (currDiff != diff) isOk = false
            i += 1
        }
        
        isOk
    }
}
```