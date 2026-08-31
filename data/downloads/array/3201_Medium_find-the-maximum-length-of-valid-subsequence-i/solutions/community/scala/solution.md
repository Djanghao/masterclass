# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5608442/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5608442/)

---

```scala
object Solution {
  def maximumLength(nums: Array[Int]): Int =
    nums.count(_ % 2 == 0) max
    nums.count(_ % 2 == 1) max
    nums.iterator.drop(1).foldLeft((1,nums.head%2)){case ((acc,last), x) =>
      if(x%2 != last) (acc+1,1-last) else (acc,last)
    }._1
}
```