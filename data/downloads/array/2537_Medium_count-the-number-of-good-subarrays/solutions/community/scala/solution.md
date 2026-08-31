# Sliding Window with Frequency HashMap

**Author:** gatear
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/5746999/](https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/5746999/)

---


# Code
```scala []
object Solution {
  import scala.collection.mutable

  def countGood(nums: Array[Int], k: Int): Long = {
    var ans:   Long = 0
    var pairs: Long = 0
    val freq        = mutable.Map[Int, Long]()
    var left        = 0
    var right       = 0

    while(right < nums.length) {
      val current  = nums(right)
      val count    = freq.getOrElse(current, 0L)
      pairs       += count

      if(pairs >= k)
        ans += (left + 1)

      freq.updateWith(current) {
        case Some(n) => Some(n + 1)
        case None    => Some(1)
      }


      while(pairs - (freq(nums(left)) - 1) >= k) {
        val removed  = nums(left)
        pairs       -= freq(removed) - 1

        if(pairs >= k)
          ans += 1

        freq.updateWith(removed)(curr => curr.map(_ - 1))
        left += 1
      }

      right += 1
    }

    ans
  }
}
```