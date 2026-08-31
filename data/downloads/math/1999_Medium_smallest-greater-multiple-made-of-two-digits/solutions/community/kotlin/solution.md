# Kotlin BFS

**Author:** CrowsDistance
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/5779539/](https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/5779539/)

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
```kotlin []
class Solution {
    fun findInteger(k: Int, digit1: Int, digit2: Int): Int {
        var d1 = minOf(digit1, digit2)
        var d2 = maxOf(digit1, digit2)

        var q = mutableListOf<Int>()
        if (d1 == d2 && d1!=0) {
            q.add(0, d1)
        } else {
            if (d1!=0) {
                q.add(0, d1)
            }
            if (d2 !=0) {
                q.add(0, d2)
            }
        }

        while(q.isNotEmpty()) {
            var n = q.removeLast()
            if (n > k && n%k == 0) return n
            if (n * 10L + d1 < Int.MAX_VALUE) { q.add(0, n * 10 + d1)}
            if (d1!=d2 && n * 10L + d2 < Int.MAX_VALUE) { q.add(0, n * 10 + d2)}
        }
        return -1
    }
}
```