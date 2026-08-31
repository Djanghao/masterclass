# 5 lines scala FP solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/5241435/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/5241435/)

---

```scala
object Solution {
  def numberOfSubstrings(s: String): Int = 
    s.zipWithIndex.foldLeft(0,Map.empty[Char,Int]){case ((acc,aMap),(c,i)) =>
      lazy val bMap = aMap + (c -> i)
      lazy val j = bMap.values.minOption.getOrElse(-1)
      if(bMap.size<3) acc -> bMap else acc+(j+1) -> bMap
    }._1
}
```