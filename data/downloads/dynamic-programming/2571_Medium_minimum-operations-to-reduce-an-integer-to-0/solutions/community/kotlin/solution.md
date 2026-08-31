# Kotlin + Recursion

**Author:** c4tdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3203942/](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3203942/)

---

# Complexity
- Time complexity:
O(log(n))

- Space complexity:
O(log(n))

# Code
```
class Solution {
    fun minOperations(n: Int): Int {
        // 1 2 4 8 16 32 64 128 256...
        var list = mutableListOf<Int>()
        var s = 1
        list.add(s)
        while (true) {
            s *= 2
            list.add(s)
            if (s > n) break
        }
        
        return calc(n, 0, list)
    }
    
    fun calc(n: Int, k: Int, list: MutableList<Int>): Int {
        var p = list.binarySearch(n)
        if (p >= 0) return k + 1
        p = p * -1 - 1
        var n1 = n - list[p - 1]
        var n2 = list[p] - n
        return Math.min(calc(n1, k + 1, list), calc(n2, k + 1, list))
    }
}
```