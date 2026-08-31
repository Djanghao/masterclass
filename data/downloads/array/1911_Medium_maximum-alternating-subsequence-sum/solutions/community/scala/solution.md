# scala one line solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/2156684/](https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/2156684/)

---

```

  def maxAlternatingSum(nums: Array[Int]): Long = {
    nums.zipAll(nums.drop(1), 0, 0).map(n => n._1 - n._2).map(_.toLong).filter(_ > 0).sum
  }
```



or


```
    def maxAlternatingSum(nums: Array[Int]): Long = {
    (nums.toSeq :+ 0).sliding(2, 1).map(n => n(0) - n(1)).map(_.toLong).filter(_ > 0).sum
    }
```