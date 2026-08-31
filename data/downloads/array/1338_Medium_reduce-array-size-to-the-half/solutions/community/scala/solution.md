# 1-liner in Scala

**Author:** Nivroc
**Votes:** 0
**Link:** [https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/3318616/](https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/3318616/)

---

# Code
```
object Solution {
    def minSetSize(arr: Array[Int]): Int = arr.groupBy(identity).view
         .values.map(_.length).toVector.sortBy(-_).view
         .scanLeft(0)(_ + _).takeWhile(_ < arr.length/2).size
}
```