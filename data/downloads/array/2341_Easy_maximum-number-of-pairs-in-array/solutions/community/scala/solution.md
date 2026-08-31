# Scala Solution - Beats 100% Runtime/Memory

**Author:** andersoncliffb
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/3388254/](https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/3388254/)

---

```
object Solution {
    def numberOfPairs(nums: Array[Int]): Array[Int] = {
       val pairsAndRemainders = nums.groupBy(a => a).map(b => (b._1, b._2.length / 2, b._2.length % 2))
       val pairs = pairsAndRemainders.map(a => a._2).sum
       val remainders = pairsAndRemainders.map(a => a._3).sum
       Array(pairs, remainders)
    }
}
```