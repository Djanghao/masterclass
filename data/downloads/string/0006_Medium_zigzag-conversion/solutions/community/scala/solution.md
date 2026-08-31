# Scala Soution

**Author:** allroundercoders
**Votes:** 5
**Link:** [https://leetcode.com/problems/zigzag-conversion/solutions/4304792/](https://leetcode.com/problems/zigzag-conversion/solutions/4304792/)

---


# Code
```
object Solution {
  import collection.immutable.SortedSet
  def convert(s: String, numRows: Int): String =
    if(numRows==1) s else
      (0 until numRows).flatMap{r =>(r until s.length by ((numRows-1)*2)).flatMap{i =>
          SortedSet(i, i + (numRows-1-r)*2%((numRows-1)*2) )
      }}.filter(_ < s.length).map(s).mkString
}
```