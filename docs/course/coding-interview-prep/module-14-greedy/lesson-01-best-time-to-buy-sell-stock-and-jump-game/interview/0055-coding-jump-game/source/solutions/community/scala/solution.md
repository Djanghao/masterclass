# A more concise and legible scala one-liner (61 chars)

**Author:** stewSquared
**Votes:** 2
**Link:** [https://leetcode.com/problems/jump-game/solutions/2511031/](https://leetcode.com/problems/jump-game/solutions/2511031/)

---

Uses a simple function in a scanLeft instead of the foldLeft everyone else is using:
```scala
def canJump(nums: Array[Int]) =
  !nums.init.scanLeft(1)((m, n) => n.max(m - 1)).contains(0)
```
The scanLeft returns the max you jump you can make from each index. If we see a zero before the last element, then you can't jump.