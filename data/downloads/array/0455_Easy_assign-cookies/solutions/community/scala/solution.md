# [scala] fp + recursion + sorting + two_pointers + greedy

**Author:** leetcode08
**Votes:** 0
**Link:** [https://leetcode.com/problems/assign-cookies/solutions/4487874/](https://leetcode.com/problems/assign-cookies/solutions/4487874/)

---

# Complexity
- Time complexity: $$O(n\xB7logn + m\xB7logm)$$
- Space complexity: $$O(n+m)$$

# Code
```scala
object Solution {
  def findContentChildren(g: Array[Int], s: Array[Int]): Int = {
    val sortedGreedFactors = g.sorted
    val sortedCookieSizes = s.sorted

    @annotation.tailrec
    def loop(count: Int, cookieIdx: Int): Int =
      if (count == g.size || cookieIdx == s.size)
        count
      else if (sortedGreedFactors(count) <= sortedCookieSizes(cookieIdx))
        loop(count + 1, cookieIdx + 1)
      else
        loop(count, cookieIdx + 1)
    
    loop(count = 0, cookieIdx = 0)
  }
}
```