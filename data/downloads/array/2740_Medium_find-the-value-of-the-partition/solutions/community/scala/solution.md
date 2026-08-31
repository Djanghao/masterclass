# scala sliding oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-value-of-the-partition/solutions/5393123/](https://leetcode.com/problems/find-the-value-of-the-partition/solutions/5393123/)

---

```scala
object Solution {
  def findValueOfPartition(nums: Array[Int]): Int = 
    nums.sorted.sliding(2,1).map(a => a.last-a.head).min
}
```