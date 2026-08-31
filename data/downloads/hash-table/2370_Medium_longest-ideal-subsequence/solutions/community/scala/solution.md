# scala dfs with memo

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-ideal-subsequence/solutions/6116717/](https://leetcode.com/problems/longest-ideal-subsequence/solutions/6116717/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```scala []
object Solution {
  def longestIdealString(s: String, k: Int): Int = {

    def getLongest(idx: Int,lastT:Int, memo: Array[Array[Int]]): Int = {
      if (idx == s.length) 0
      else if (memo(idx)(lastT) != -1) memo(idx)(lastT)
      else {
        val chIdx=s.charAt(idx) - 'a'
        val result = if (lastT==0 || Math.abs(chIdx-lastT+1) <= k)
          Math.max(1 + getLongest(idx + 1,chIdx+1, memo), getLongest(idx + 1, lastT, memo))
        else getLongest(idx + 1,lastT, memo)
        memo(idx)(lastT) = result
        result
      }
    }

    val memo = Array.fill(s.length, 27)(-1)
    getLongest(0, 0, memo)
  }
}
```