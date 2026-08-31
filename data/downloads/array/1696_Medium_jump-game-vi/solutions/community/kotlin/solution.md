# Kotlin clean code

**Author:** engx2
**Votes:** 1
**Link:** [https://leetcode.com/problems/jump-game-vi/solutions/1163690/](https://leetcode.com/problems/jump-game-vi/solutions/1163690/)

---

```
class Solution {
  fun maxResult(nums: IntArray, k: Int): Int {
    val deque = ArrayDeque<Pair<Int, Int>>()

    for (i in nums.indices) {
      while (deque.isNotEmpty() && deque.first().second + k < i) deque.removeFirst()
      val m = nums[i] + (deque.firstOrNull()?.first ?: 0)
      while (deque.isNotEmpty() && deque.last().first <= m) deque.removeLast()
      deque.addLast(m to i);
    }
    return deque.last().first
  }
}
```