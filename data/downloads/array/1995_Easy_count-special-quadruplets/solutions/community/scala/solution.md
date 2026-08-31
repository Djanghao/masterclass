# scala easy solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-special-quadruplets/solutions/3259025/](https://leetcode.com/problems/count-special-quadruplets/solutions/3259025/)

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
    import scala.collection.mutable.HashMap
    def countQuadruplets(nums: Array[Int]): Int = {
        val n = nums.length
        val map = HashMap.empty[Int, Int].withDefaultValue(0)
        (1 until n - 2).foldLeft(0)((ans, i)=>{
            for{ j <- 0 until i}{ map += (nums(i) + nums(j)-> (map(nums(i) + nums(j)) + 1))}
            (for{ k <- i + 2 until n} yield{map(nums(k) - nums(i + 1))}).sum + ans
        })
    }
}
```