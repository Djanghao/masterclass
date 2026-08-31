# [Kotlin] One line O(n) DP (please don't write code like that)

**Author:** dazzbourgh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/1748942/](https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/1748942/)

---

Same idea as [here](https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/discuss/1748704/JavaC%2B%2BPython-Short-One-Pass-O(1)-Space), but in functional style in Kotlin and in one line. On each iteration we calculate the next state, which is minimum cost of everything left of `i`, cost of sequentially removing everything right of `i` and current minimum cost, which in worst case is `s.length` since we can just sequentially pull all the cars:

```
class Solution {
    fun minimumTime(s: String): Int = s.foldIndexed(Triple(0, s.length, s.length)) { i, (left, rightSeq, max), car -> ((left + (car - '0') * 2) to (rightSeq - 1)).let { (l, r) -> Triple(Math.min(i + 1, l), r, Math.min(max, l + r)) } }.third
}
```

Now that the flexing is done, here's a more readable version that won't encourage your colleagues to downvote your pull request:

```
class Solution {
    fun minimumTime(s: String): Int {
        val initialState = Triple(0, s.length, s.length)
        val (_, _, result) = s.foldIndexed(initialState) { i, (prevLeft, prevRightSeq, max), car ->
            val left = prevLeft + (car - '0') * 2
            val rightSeq = prevRightSeq - 1
            Triple(Math.min(i + 1, left), rightSeq, Math.min(max, left + rightSeq))
        }
        return result
    }
}
```