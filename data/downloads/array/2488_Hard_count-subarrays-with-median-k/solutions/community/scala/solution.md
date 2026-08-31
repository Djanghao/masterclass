# Scala Map FP

**Author:** HeavenWatcher
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-with-median-k/solutions/2852062/](https://leetcode.com/problems/count-subarrays-with-median-k/solutions/2852062/)

---

```scala
object Solution {
    def countSubarrays(nums: Array[Int], k: Int): Int = {
        val (left, right) = nums.splitAt(nums.indexOf(k))
        
        val count = left.foldRight(Map[Int, Int](0 -> 1).withDefaultValue(0), 0) {
            case (n, (map, key)) =>
                val newKey = if (n > k) key + 1 else key - 1
                (map + (newKey -> (map(newKey) + 1)), newKey)
        }._1
        
        right.foldLeft(0, 0) {
            case ((res, key), n) =>
                val newKey = if (n > k) key - 1 else if (n < k) key + 1 else key
                (res + count(newKey) + count(newKey + 1), newKey)
        }._1
    }
}
```