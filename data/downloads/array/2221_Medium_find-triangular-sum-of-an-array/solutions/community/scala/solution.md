# scala recursive

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/1907096/](https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/1907096/)

---

```
def triangularSum(nums: Array[Int]): Int =
  if(nums.length == 1) nums(0)
  else {
    val n = new Array[Int](nums.length - 1)
    n.indices.foreach(i => n(i) = (nums(i) + nums(i+1)) % 10)
    triangularSum(n)
  }
  ```