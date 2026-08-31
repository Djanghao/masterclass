# scala one line solution.

**Author:** lyk4411
**Votes:** 7
**Link:** [https://leetcode.com/problems/merge-sorted-array/solutions/2018676/](https://leetcode.com/problems/merge-sorted-array/solutions/2018676/)

---

```
def merge(nums1: Array[Int], m: Int, nums2: Array[Int], n: Int): Unit = {
    (nums1.take(m) ++ nums2.take(n)).sorted.zipWithIndex.foreach(n => nums1.update(n._2, n._1))
  }
```