# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/destroy-sequential-targets/solutions/4529737/](https://leetcode.com/problems/destroy-sequential-targets/solutions/4529737/)

---


```
object Solution {
  def destroyTargets(nums: Array[Int], space: Int): Int = {
    lazy val list = nums.toList.map(x => x -> x % space).groupMap(_._2)(_._1).values.toList
    lazy val mxSize = list.maxBy(_.size).size
    list.filter(_.size == mxSize).flatten.min
  }
}
```