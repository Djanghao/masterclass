# [scala] - quadratic recursion, quadratic array and indices

**Author:** nikiforo
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/3932617/](https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/3932617/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```
object Solution {

  def countPairs(nums: List[Int], target: Int): Int =
    nums match {
      case num :: tail => tail.count(_ + num < target) + countPairs(tail, target)
      case Nil => 0
    }
}
```

```
object Solution {

  def countPairs(nums: List[Int], target: Int): Int = {
    val arr = nums.toArray
    arr.indices.foldLeft(0) { (acc, i) =>
      acc + ((i + 1) until nums.length).count(j => arr(i) + arr(j) < target)
    }
  }
}
```