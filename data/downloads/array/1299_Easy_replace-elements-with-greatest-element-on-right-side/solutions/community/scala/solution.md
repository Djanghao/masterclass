# Scala foldLeft in-place

**Author:** squadgazzz
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/960539/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/960539/)

---

```
  def replaceElements(arr: Array[Int]): Array[Int] = {
    val n = arr.length
    (n - 1 to 0 by -1).foldLeft(-1, n) {
      case ((mx, a), i) =>
        val newA = arr(i)
        arr(i) = mx
        (Math.max(mx, newA), newA)
    }
    arr
  }
  ```