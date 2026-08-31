# [scala] - scan, count

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/ant-on-the-boundary/solutions/4708012/](https://leetcode.com/problems/ant-on-the-boundary/solutions/4708012/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

```
object Solution {
  def returnToBoundaryCount(nums: Array[Int]): Int =
    nums.view.scan(0)(_ + _).tail.count(_ == 0)
}
```