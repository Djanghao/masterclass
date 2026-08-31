# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-squareful-arrays/solutions/3651040/](https://leetcode.com/problems/number-of-squareful-arrays/solutions/3651040/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2 * 2^n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def numSquarefulPerms(nums: Array[Int]): Int = {
      import scala.collection.mutable
      val n = nums.length
      val count = mutable.Map[Int, Int]()
      val graph = mutable.Map[Int, mutable.Set[Int]]()

      for (num <- nums) count(num) = count.getOrElse(num, 0) + 1

      for (i <- 0 until n; j <- i + 1 until n) 
        if (math.pow(math.sqrt(nums(i) + nums(j)).toInt, 2).toInt == nums(i) + nums(j)) {
          graph.getOrElseUpdate(nums(i), mutable.Set[Int]()) += nums(j)
          graph.getOrElseUpdate(nums(j), mutable.Set[Int]()) += nums(i)
        }

      var res = 0
      def backtrack(num: Int, left: Int): Unit = {
        count(num) -= 1
        if (left == 0) res += 1
        else
          for (neighbor <- graph.getOrElse(num, Set()))
            if (count(neighbor) > 0) backtrack(neighbor, left - 1)
        count(num) += 1
      }
      count.foreach(f=> backtrack(f._1, n - 1))
      res
    }
}
```