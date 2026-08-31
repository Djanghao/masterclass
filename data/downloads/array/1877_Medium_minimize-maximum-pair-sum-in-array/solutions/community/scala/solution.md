# scala one line solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/2086664/](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/2086664/)

---

```

  def minPairSum(nums: Array[Int]): Int = (nums.sorted.reverse zip nums.sorted).map(n => n._1 + n._2).max

```