# 9 lines scala resursion with immutable SortedMap

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/3155395/](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/3155395/)

---

# Code
```
object Solution {
  def isPossibleDivide(nums: Array[Int], k: Int): Boolean = {
    def impl(map: Map[Int,Int]): Boolean = {
      lazy val minCard = map.min._1
      lazy val newGroup = (minCard until minCard+k)
      lazy val newMap = newGroup.foldLeft(map){case (_map,i) =>
        _map.updatedWith(i){_.flatMap{x => if(x>1) Some(x-1) else None}}
      }
      map.isEmpty || (newGroup.forall(map.contains) && impl(newMap))
    }
    impl(nums.toList.groupMapReduce(identity)(_ => 1)(_ + _).to(collection.immutable.SortedMap))
  }
}
```