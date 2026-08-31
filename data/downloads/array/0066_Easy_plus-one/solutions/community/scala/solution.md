# Scala O(n) with fold

**Author:** codevote
**Votes:** 3
**Link:** [https://leetcode.com/problems/plus-one/solutions/1684720/](https://leetcode.com/problems/plus-one/solutions/1684720/)

---

```
object Solution {
  def plusOne(digits: Array[Int]): Array[Int] = {
    val (r, inc) = digits
      .foldRight((Array.empty[Int], true)) {
        case (d, (acc, false)) => (d +: acc, false)
        case (d, (acc, true)) if d == 9 => (0 +: acc, true)
        case (d, (acc, true)) => ((d + 1) +: acc, false)
      }

    if (inc)
      1 +: r
    else
      r
  }
}
```