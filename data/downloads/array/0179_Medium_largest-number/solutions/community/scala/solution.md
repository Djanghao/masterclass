# Scala One Line

**Author:** fairgrieve
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-number/solutions/806969/](https://leetcode.com/problems/largest-number/solutions/806969/)

---

```
object Solution {
  def largestNumber(nums: Array[Int]): String = {
    nums.map(_.toString).sortWith((x, y) => (x + y) > (y + x)).mkString.replaceFirst("^0+", "0")
  }
}
```