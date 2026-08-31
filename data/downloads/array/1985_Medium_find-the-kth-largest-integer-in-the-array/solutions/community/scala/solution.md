# SCALA ONE LINE SOLUTION

**Author:** Kuba111
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/5681599/](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/5681599/)

---


# Code
```scala []
object Solution {
    def kthLargestNumber(nums: Array[String], k: Int): String = {
      nums.sorted((x:String,y:String)=>if (x.length==y.length) x.compareTo(y) else x.length.compare(y.length)).toList(nums.length-k)  
    }
}
```