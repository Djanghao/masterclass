# Simple 1 liner in Scala - beats 100% of solution

**Author:** pathikritbhowmick
**Votes:** 2
**Link:** [https://leetcode.com/problems/subsets/solutions/5081652/](https://leetcode.com/problems/subsets/solutions/5081652/)

---


# Code
```
object Solution {
    def subsets(nums: Array[Int]): List[List[Int]] =
        if nums.isEmpty then List(Nil) 
        else subsets(nums.tail).flatMap(sets => List(nums.head :: sets, sets))
}
```