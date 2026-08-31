# scala solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/2137517/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/2137517/)

---

```

  def partitionArray(nums: Array[Int], k: Int): Int = {
    nums.sorted.foldLeft((1, nums.min))((acc, cur) =>{
      cur - acc._2 > k match {
        case true => (acc._1 + 1, cur)
        case _ => acc
      }
    })._1
  }
```