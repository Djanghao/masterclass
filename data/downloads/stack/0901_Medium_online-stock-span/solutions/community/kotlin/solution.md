# 🔥 [LeetCode The Hard Way] 🔥 Kotlin Solution

**Author:** tr1nity
**Votes:** 5
**Link:** [https://leetcode.com/problems/online-stock-span/solutions/2795040/](https://leetcode.com/problems/online-stock-span/solutions/2795040/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.

---

Check out the offical writeup for explanation.

```kt
class StockSpanner() {
    val s = Stack<Pair<Int, Int>>()
    fun next(price: Int): Int {
        var res = 1
        while (!s.isEmpty() && s.peek().first <= price) {
            res += s.peek().second
            s.pop()
        }
        s.add(Pair(price, res))
        return res
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = StockSpanner()
 * var param_1 = obj.next(price)
 */
```