# 👍Runtime 1000 ms  Beats 100.00% of users with Scala

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-maximum-of-array/solutions/5006411/](https://leetcode.com/problems/minimize-maximum-of-array/solutions/5006411/)

---

# Code
```
object Solution {
    def minimizeArrayValue(nums: Array[Int]): Int = {
        var sum: Long = 0
        var res: Long = 0
        for (i <- nums.indices) {
            sum += nums(i)
            res = math.max(res, (sum + i) / (i + 1))
        }
        res.toInt
    }
}
```