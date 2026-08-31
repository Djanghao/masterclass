# [Scala] 2 concise solutions (combinations + count / freq count + foldLeft)

**Author:** cosminci
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/1476165/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/1476165/)

---

O(n^2):
```
  def countKDifference(nums: Array[Int], k: Int): Int =
    nums.indices.combinations(2).count { case Seq(i, j) => math.abs(nums(j) - nums(i)) == k }
```

O(n):
```
  def countKDifference(nums: Array[Int], k: Int): Int = {
    val counter = nums.groupBy(identity).mapValues(_.length)
    counter.foldLeft(0) {
      case (count, (n, freq)) => 
        count + counter.getOrElse(n + k, 0) * freq
    }
  }
```
