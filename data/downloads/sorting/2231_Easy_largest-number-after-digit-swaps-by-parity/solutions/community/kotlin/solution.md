# Kotlin PriorityQueue solution

**Author:** wizard12193
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/4129432/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/4129432/)

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
```
class Solution {
   fun largestInteger(num: Int): Int {
    val even = PriorityQueue<Int> { o1, o2 -> o2 - o1 }
    val odd = PriorityQueue<Int> { o1, o2 -> o2 - o1 }
    val parity = mutableListOf<Boolean>()
    var x = num
    while (x != 0) {
        val r = x % 10
        if (r % 2 == 0) {
            even.offer(r)
            parity.add(true)
        } else {
            odd.offer(r)
            parity.add(false)
        }
        x /= 10
    }
    return parity.reversed().map { if (it) even.remove() else odd.remove() }
        .reduce { acc, i -> 10 * acc + i }
}
}
```