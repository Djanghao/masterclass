# Scala FP: groupMapReduce + sortWith

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/5521693/](https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/5521693/)

---

# Code
```
object Solution {
  def frequencySort(nums: Array[Int]): Array[Int] = {
    val fr = nums.groupMapReduce(identity)(_ => 1)(_ + _)
    nums.sortWith((n1, n2) => {
      val f1 = fr(n1)
      val f2 = fr(n2)
      f1 < f2 || f1 == f2 && n1 >= n2 
    })
  }
}
```