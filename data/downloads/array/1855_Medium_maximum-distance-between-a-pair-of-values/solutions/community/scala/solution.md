# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/2170527/](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/2170527/)

---

```

  def maxDistance(nums1: Array[Int], nums2: Array[Int]): Int = {
    (0 until (nums1.length + nums2.length)).foldLeft((0,0,0))((acc, i)=>{
      if(acc._1 < nums1.length && acc._2 < nums2.length){
        if(nums1(acc._1) > nums2(acc._2)) (acc._1 + 1, acc._2, acc._3)
        else (acc._1, acc._2 + 1, acc._3 max (acc._2 - acc._1))
      } else return acc._3
    })._3
  }
```