# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/4482831/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/4482831/)

---

# Code
```
object Solution {
    def findClosestNumber(nums: Array[Int]): Int = nums.fold(Int.MaxValue) { (a,n) => if (n.abs < a.abs || (n.abs == a.abs && a < n)) n else a }
    
}
```