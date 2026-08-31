# My disgusting oneliner in kotlin

**Author:** xXKawaiiFoxXx
**Votes:** 2
**Link:** [https://leetcode.com/problems/rectangle-area/solutions/1592547/](https://leetcode.com/problems/rectangle-area/solutions/1592547/)

---

```
    fun computeArea(ax1: Int, ay1: Int, ax2: Int, ay2: Int, bx1: Int, by1: Int, bx2: Int, by2: Int) =
        (ax2 - ax1) * (ay2 - ay1) + (bx2 - bx1) * (by2 - by1) - maxOf(0, minOf(ax2, bx2) - maxOf(ax1, bx1)) * maxOf(0, minOf(ay2, by2) - maxOf(ay1, by1))
```