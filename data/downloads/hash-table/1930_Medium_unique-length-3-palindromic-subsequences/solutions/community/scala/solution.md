# beats 100% runtime and memory for scala

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/5260720/](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/5260720/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
create map of char with idxes , take first and last idx of char and make strings of inbetween and get unique size
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(n)
# Code
```
object Solution {
  def countPalindromicSubsequence(s: String): Int = {
    val map = s.zipWithIndex.groupMap(x => x._1)(y => y._2)
    map.foldLeft(0) {
      case (count, (ch, idxs)) =>
        val start = idxs.head
        val end = idxs.last
        val innerChars = (start + 1 until end).map(s.charAt)
        count+innerChars.toSet.size
    }
  }
}
```