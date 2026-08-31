# [scala] - iterate over Array

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5317401/](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5317401/)

---

# Code
```
object Solution {

  def valueAfterKSeconds(n: Int, k: Int): Int = {
    val arr = new Array[Int](n + 1)
    arr.indices.tail.foreach(i => arr(i) = 1)
    0.until(k).foreach { _ =>
      arr.indices.tail.foreach(i => arr(i) = mod(arr(i) + arr(i - 1)))
    }
    arr.last
  }

  private def mod(i: Int) = i % 1000000007
}
```