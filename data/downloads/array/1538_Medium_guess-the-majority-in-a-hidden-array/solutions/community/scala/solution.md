# scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/solutions/4493273/](https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/solutions/4493273/)

---

# Code
```
/**
 * // This is ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface ArrayReader {
 *     // Compares 4 different elements in the array
 *     // return 4 if the values of the 4 elements are the same (0 or 1).
 *     // return 2 if three\xA0elements have a value\xA0equal to 0\xA0and one\xA0element has value equal to 1\xA0or vice versa.
 *     // return 0 :\xA0if two element have a value equal to 0 and two elements have a value equal to 1.
 *     def query(a: Int, b: Int, c: Int, d: Int): Int {}
 *
 *     // Returns the length of the array
 *     def length(): Int {}
 * }
 */

object Solution {
    def guessMajority(reader: ArrayReader): Int = {
    val map: Array[Array[Int]] = Array.ofDim[Int](5, 5)
    map(0)(2) = 1
    map(2)(0) = 1
    map(2)(4) = 1
    map(4)(2) = 1
    val n: Int = reader.length()
    val arr: Array[Int] = Array.ofDim[Int](5)
    var prev: Int = reader.query(0, 1, 2, 3)
    var curr: Int = reader.query(1, 2, 3, 4)
    arr(4) = arr(0) ^ map(prev)(curr)
    curr = reader.query(0, 2, 3, 4)
    arr(1) = arr(4) ^ map(prev)(curr)
    curr = reader.query(0, 1, 3, 4)
    arr(2) = arr(4) ^ map(prev)(curr)
    curr = reader.query(0, 1, 2, 4)
    arr(3) = arr(4) ^ map(prev)(curr)
    val count: Array[Int] = Array.ofDim[Int](2)
    val last: Array[Int] = Array.ofDim[Int](2)
    for (i <- 0 until 4) {
        count(arr(i)) += 1
        last(arr(i)) = i
    }
    for (i <- 4 until n) {
        curr = reader.query(i - 3, i - 2, i - 1, i)
        arr(i % 5) = arr((i - 4) % 5) ^ map(prev)(curr)
        prev = curr
        count(arr(i % 5)) += 1
        last(arr(i % 5)) = i
    }
    if (count(0) > count(1)) last(0)
    else if (count(0) < count(1)) last(1)
    else -1
    }
}


```