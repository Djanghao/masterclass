# 5 line simple foldLeft

**Author:** pathikritbhowmick
**Votes:** 1
**Link:** [https://leetcode.com/problems/target-sum/solutions/5059565/](https://leetcode.com/problems/target-sum/solutions/5059565/)

---



# Code
```
object Solution {
    def findTargetSumWays(nums: Array[Int], target: Int) = nums.foldLeft(Map(0 -> 1))(update).getOrElse(target, 0)

    def update(counts: Map[Int, Int], num: Int): Map[Int, Int] = {
        val next = collection.mutable.Map.empty[Int, Int].withDefaultValue(0)
        for { (sum, count) <- counts; i <- Seq(num, -num) } next(sum + i) += count
        next.toMap
    }
}
```