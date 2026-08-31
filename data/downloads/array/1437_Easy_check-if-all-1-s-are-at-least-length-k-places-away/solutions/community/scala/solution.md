# scala one line solution. faster than 100.00% less than 100.00%

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/2213776/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/2213776/)

---

```
  def kLengthApart(nums: Array[Int], k: Int): Boolean = {
    scala.util.Try((" " * k + nums.map(_.toString).reduce(_ + _) + " " * k).split('1').map(_.size).min).getOrElse(k) >= k
  }

```