# Scala solution with scan function

**Author:** montoruwalkr
**Votes:** 6
**Link:** [https://leetcode.com/problems/running-sum-of-1d-array/solutions/2398478/](https://leetcode.com/problems/running-sum-of-1d-array/solutions/2398478/)

---

This solution uses the scan function in Scala, which applies a binary operator to create a running total for each element in the collection.

The first argument list is the initial value, which is usually set to zero, but since this element would be the first of the output collection, it seemed pointless to add it and later drop it. For this reason, I use the array's tail (all elements but the first) and then use the first value nums(0) or nums.head as the initial value of the function.

```scala
object Solution {
    def runningSum(nums: Array[Int]): Array[Int] = nums.tail.scan(nums(0))(_+_)
}
```

Open to feedback and possible optimizations.