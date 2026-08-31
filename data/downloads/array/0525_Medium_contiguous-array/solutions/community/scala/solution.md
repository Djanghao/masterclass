# Scala 3 lines prefixsum + hashmap + proof in comments

**Author:** jkalmeij
**Votes:** 2
**Link:** [https://leetcode.com/problems/contiguous-array/solutions/1744565/](https://leetcode.com/problems/contiguous-array/solutions/1744565/)

---

```scala
object Solution {
  def findMaxLength(nums: Array[Int]): Int = {
    /* 
    
    Let's assume the elements in nums are -1 and 1, instead of 0 and 1.
    The the problem reduces to finding the (i, j)
    for which sum(nums.slice(i, j + 1)) == 0
    and (j - i + 1) is maximized.

    It should be easy to see that the following holds:

    sum(nums.slice(i, j + 1)) == sum(nums.slice(0, j + 1)) - sum(nums.slice(0, i))

    Now let:

    prefixSum(i) = if (i <= 0) 0 else sum(nums.slice(0, i - 1))

    Then we have:

    sum(nums.slice(i, j + 1)) 
    ==
        if (false) 0 else sum(nums.slice(0, j + 1))        [because if (false) 0 else x == x]
        - sum(nums.slice(0, i))
    ==
        if ((j + 1) <= 0) else sum(nums.slice(0, j + 1))   [because j >= 0 => ((j + 1) <= 0) == (1 <= 0) == false]
        - sum(nums.slice(0, i))
    ==
        prefixSum(j)                                       [because definition of prefixSum]
        - sum(nums.slice(0, i))
    ==
        prefixSum(j)
        - (if ((i + 1) <= 0) 0 else sum(nums.slice(0, i))) [similar reasoning to the (j + 1) case]
    ==
        prefixSum(j) - prefixSum(i+1)                      [because definition of prefixSum]
    
    If we assume j is fixed, then maximizing (j - i) means minimizing i.
    So we need to find the minimum i such that sum(nums.slice(i, j + 1)) == 0,
    or, based on the above, find the minimum i such that prefixSum(j) - prefixSum(i+1) == 0,
    which is the same as finding the minimum i such that prefixSum(j) == prefixSum(i + 1)

     */

    val prefixSumWithIndex = nums.view.map{case 0 => -1; case 1 => 1}.scan(0)(_ + _).zipWithIndex
    val sumToMinIndex = prefixSumWithIndex.groupMapReduce(_._1)(_._2)(Math.min)
    prefixSumWithIndex.map { case (s, j) => j - sumToMinIndex(s) }.max
  }
}
```