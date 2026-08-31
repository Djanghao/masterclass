# scala twoliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5482417/](https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5482417/)

---

```scala
object Solution {
  def occurrencesOfElement(nums: Array[Int], queries: Array[Int], x: Int): Array[Int] =
    lazy val xMap = nums.zipWithIndex.collect{case (num,i) if num == x => i}
      .zipWithIndex.map{case (i,j) => (j+1,i)}.toMap.withDefaultValue(-1)
    queries.map(xMap)
}
```