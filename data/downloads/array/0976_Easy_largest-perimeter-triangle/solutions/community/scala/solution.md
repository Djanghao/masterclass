# [Scala] Concise functional solution

**Author:** cosminci
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-perimeter-triangle/solutions/2693140/](https://leetcode.com/problems/largest-perimeter-triangle/solutions/2693140/)

---

```
  def largestPerimeter(nums: Array[Int]): Int =
    nums.sorted.reverse
      .sliding(3)
      .collectFirst { case Array(a, b, c) if a < b + c => a + b + c }
      .getOrElse(0)
```