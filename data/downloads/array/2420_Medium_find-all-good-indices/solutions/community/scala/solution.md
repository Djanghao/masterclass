# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-good-indices/solutions/5264850/](https://leetcode.com/problems/find-all-good-indices/solutions/5264850/)

---

```scala
object Solution {
  def goodIndices(nums: Array[Int], k: Int): List[Int] = 
    ( (List(0)++nums.reverse).sliding(2,1).map(l=> l.head>=l.last)
        .foldLeft(List(0)){case (l,curr) => if(curr) (l.head + 1) +: l else 1 +: l}.tail 
      zip
      (List(0)++nums).sliding(2,1).map(l=> l.head>=l.last)
        .foldLeft(List(0)){case (l,curr) => if(curr) (l.head + 1) +: l else 1 +: l}.tail.reverse
    )
    .map (_.productIterator.map(_.asInstanceOf[Int]).min).zipWithIndex
    .collect{case (c,i) if c>=k => i}
}
```