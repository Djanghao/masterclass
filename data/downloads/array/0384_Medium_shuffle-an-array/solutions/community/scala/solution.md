# Simple Scala solution

**Author:** maxmtmn
**Votes:** 1
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/2837693/](https://leetcode.com/problems/shuffle-an-array/solutions/2837693/)

---

```
  import scala.util.chaining._

  class Solution(_nums: Array[Int]) {

    val rand = new util.Random
    val shuffled: Array[Int] = _nums.clone()

    def reset(): Array[Int] = {
      _nums
    }

    def shuffle(): Array[Int] = {
      var maxIndex = _nums.length
      _nums.indices.map {
        _ =>
          val pick = rand.between(0, maxIndex)
          shuffled(pick).tap {
            pickedVal =>
              shuffled(pick) = shuffled(maxIndex - 1)
              shuffled(maxIndex - 1) = pickedVal
              maxIndex -= 1
          }
      }.toArray

    }

  }
  ```