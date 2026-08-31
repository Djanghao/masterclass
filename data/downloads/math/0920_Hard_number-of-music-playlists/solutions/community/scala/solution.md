# using memoisation

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-music-playlists/solutions/6129012/](https://leetcode.com/problems/number-of-music-playlists/solutions/6129012/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(goal.n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(goal.n)
# Code
```scala []
object Solution {
  def numMusicPlaylists(n: Int, goal: Int, k: Int): Int = {
    val mod = Math.pow(10, 9) + 7

    def getCount(idx: Int, unique: Int, memo: Array[Array[Int]]): Long = {
      if (idx == 0 && unique == 0) 1
      else if (idx == 0 || unique == 0) 0
      else if (memo(idx)(unique) != -1) memo(idx)(unique)
      else {
        val addingUniques = getCount(idx - 1, unique - 1, memo) * (n - unique + 1)
        val addingElements = if (unique > k) getCount(idx - 1, unique, memo) * (unique - k) else 0
        val result = (addingUniques % mod + addingElements % mod) % mod
        // println(s"For idx $idx, unique $unique, result $result")
        memo(idx)(unique) = result.toInt
        memo(idx)(unique)
      }
    }

    val memo = Array.fill(goal + 1, n + 1)(-1)
    getCount(goal, n, memo).toInt
  }
}
```