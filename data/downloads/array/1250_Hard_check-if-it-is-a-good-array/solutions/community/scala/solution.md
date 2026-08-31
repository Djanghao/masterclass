# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/4983532/](https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/4983532/)

---

```
object Solution {
  def isGoodArray(nums: Array[Int]): Boolean = {
    def impl(i: Int = 0, g: math.BigInt = 0): Boolean =
      if(g == 1) true
      else if(i>=nums.size) false
      else impl(i+1,  g gcd nums(i))
    impl()
  }
}

```