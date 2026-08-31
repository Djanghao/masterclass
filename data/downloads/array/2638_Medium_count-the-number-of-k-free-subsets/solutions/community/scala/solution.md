# scala code

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/4768048/](https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/4768048/)

---

# Code
```
import scala.collection.mutable

object Solution {
  def countTheNumOfKFreeSubsets(nums: Array[Int], k: Int): Long = {
    val count = mutable.Map[Int, Int]()
    scala.util.Sorting.quickSort(nums)
    nums.foreach { num =>
      if (count.contains(num - k)) {
        count.update(num, count(num - k) + 1)
        count.remove(num - k)
      } else {
        count.update(num, 1)
      }
    }

    var res: Long = 1L
    count.values.foreach { chain =>
      res *= helper(chain)
    }
    res
  }

  private def helper(num: Int): Long = {
    var take: Long = 1
    var noTake: Long = 0
    for (_ <- 1 until num) {
      val oldTake = take
      take = noTake + 1
      noTake += oldTake
    }

    take + noTake + 1
  }
}



```