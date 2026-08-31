# :: Kotlin :: Solution

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3581220/](https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3581220/)

---


# Code
```
class Solution {
    fun maxStrength(nums: IntArray): Long {
        val filtered = mutableListOf<Int>()
        var product = 1L
        var hasZero = false

        for (num in nums) {
            if (num == 0) {
                hasZero = true
                continue
            }
            filtered.add(num)
            product *= num.toLong()
        }

        if (filtered.size == 0) return 0
        if (filtered.size == 1 && filtered.get(0) <= 0) return if(hasZero) 0 else filtered.get(0).toLong()

        var result = product
        for (num in nums) {
            if (num == 0) continue
            result = Math.max(result, product / num.toLong())
        }

        return result
    }
}
```