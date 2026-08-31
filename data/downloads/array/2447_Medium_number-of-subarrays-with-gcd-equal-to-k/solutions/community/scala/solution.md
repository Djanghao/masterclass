# scala bruteforce oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/5741690/](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/5741690/)

---

```scala []
object Solution {
  def subarrayGCD(nums: Array[Int], k: Int): Int = {
    nums.toList.inits.flatMap(_.tails).count{ l => l.nonEmpty &&
      ((l.length == 1 && l.head == k) || 
      (l.head % k == 0 && l.map(BigInt(_)).reduceLeft(_ gcd _) == k))
    }
  }
}
```