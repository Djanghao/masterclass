# Scala FP: BS, 2 tailrecs, O(n * log(max_day - min_day))

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5336147/](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5336147/)

---

# Code
```
object Solution {
  def minDays(bloomDay: Array[Int], m: Int, k: Int): Int = {
    val flowers = bloomDay.length
    
    @annotation.tailrec 
    def bouquetsLTm(day: Int, flower: Int = 0, adjacent: Int = 0, bouquets: Int = 0): Boolean = 
      if (m <= bouquets) false
      else if (flower == flowers) true
      else if (bloomDay(flower) <= day) bouquetsLTm(day, flower + 1, (adjacent + 1) % k, bouquets + (adjacent + 1) / k)
      else bouquetsLTm(day, flower + 1, 0, bouquets)

    @annotation.tailrec 
    def bsMinDays(first: Int, last: Int): Int = {
      val nights = last - first
      lazy val mid = first + nights / 2
      if (nights == 0) first
      else if (bouquetsLTm(mid)) bsMinDays(mid + 1, last)
      else bsMinDays(first, mid)
    }
    
    if (m.toLong * k > bloomDay.length) -1 else bsMinDays(bloomDay.min, bloomDay.max)
  }
}
```