# Kotlin, easy math

**Author:** c4tdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/3865788/](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/3865788/)

---

# Approach
Get biggest number N. It has N - 1 gaps. Just find out how many of those gaps you can fill using other numbers.

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun numberOfWeeks(a: IntArray): Long {
        a.sort()

        var sum = 0L
        for (i in a) sum += i

        val last = a[a.size - 1]
        if (sum - last >= last - 1) return sum
        return (sum - last) * 2 + 1
    }
}
```