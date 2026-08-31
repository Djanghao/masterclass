# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/4846905/](https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/4846905/)

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
object Solution {
  def balancedString(s: String): Int = {
    val n = s.size
    val k = n /4
    val map = scala.collection.mutable.Map[Char, Int]()
    s.foreach(n => map.update(n, map.getOrElse(n, 0) + 1))
    def f(left: Int, right: Int, res: Int, flag:Boolean):Int = {
      if (right >= n) res
      else {
        if(flag) map.update(s(right), map.getOrElse(s(right), 0) - 1)
        if (left < n && map.getOrElse('Q', 0) <= k && map.getOrElse('W', 0) <= k && map.getOrElse('E', 0) <= k && map.getOrElse('R', 0) <= k) {
          val t = res min (right - left + 1)
          map.update(s(left), map.getOrElse(s(left), 0) + 1)
          f(left + 1, right, t, false)
        } else f(left, right + 1, res, true)
      }
    }
    f(0, 0, n, true)
  }
}
```