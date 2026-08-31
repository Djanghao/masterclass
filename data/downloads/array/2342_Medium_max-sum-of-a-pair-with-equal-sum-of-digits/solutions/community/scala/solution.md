# scala one line solution.(faster than 100.00%   less than 100.00% )

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/2321429/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/2321429/)

---

```
  def maximumSum(nums: Array[Int]): Int =
    scala.util.Try(nums.map(i => i.toString.map(n => n - '0').sum).zip(nums)
      .groupBy(_._1).mapValues(_.toSeq).values.filter(_.size >= 2)
      .map(n => n.map(_._2).sortBy(-_).take(2).sum).max).getOrElse(-1)


```