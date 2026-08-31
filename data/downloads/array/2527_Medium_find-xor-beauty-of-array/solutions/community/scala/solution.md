# On each [0, 31] index, just count how many 1 has been there, odd = 1 in result number

**Author:** qiuqiushasha
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3016598/](https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3016598/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def xorBeauty(nums: Array[Int]): Int = {
    val counts = Array.fill[Int](32)(0)
    nums.foreach(x => {
      (0 to 31).foreach(i => {
        val c = x & (1 << i)
        if (c > 0) counts(i) ^= 1
        //println(i, counts(i))
      })
    })
    var res = 0
    (0 to 31).foreach(i => {
      if (counts(i) == 1) {
        res = res | (1 << i)
      }

    })

    res
  }
}
```