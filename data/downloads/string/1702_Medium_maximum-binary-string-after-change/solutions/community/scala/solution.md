# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-string-after-change/solutions/5329431/](https://leetcode.com/problems/maximum-binary-string-after-change/solutions/5329431/)

---

```scala
object Solution {
  def maximumBinaryString(binary: String): String =
    lazy val (t,d) = binary.toList.span(_ == '1')
    lazy val ones = d.count(_ == '1')
    if (d.size == 0) binary
    else (t ++ List.fill(d.size - 1 - ones)('1') ++ 
      List('0') ++ List.fill(ones)(1)).mkString
}
```