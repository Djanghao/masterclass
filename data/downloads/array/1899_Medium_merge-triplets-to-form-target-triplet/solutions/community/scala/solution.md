# scala one line solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/2105328/](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/2105328/)

---

```

  def mergeTriplets(triplets: Array[Array[Int]], target: Array[Int]): Boolean = {
    triplets.filter(n => n(0) <= target(0) && n(1) <= target(1) && n(2) <= target(2)).foldLeft(Array(Int.MinValue,Int.MinValue,Int.MinValue))((acc, cur)=>(Array(acc(0) max cur(0),acc(1) max cur(1),acc(2) max cur(2)))).toList == target.toList
  }
```