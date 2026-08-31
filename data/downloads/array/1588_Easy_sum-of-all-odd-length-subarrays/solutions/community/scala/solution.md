# Simple Scala solution O(N) + explanation

**Author:** mariusandries25
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/3207176/](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/3207176/)

---

# Intuition
Getting the patterns on how numbers are used for the given example [1,4,2,5,3]
1
4
2
5
3
1,4,2
4,2,5
2,5,3
1,4,2,5,3

Can be observed the frequency of using each number from array:
1 * 3 times
4 * 4 times
2 * 5 times
5 * 4 times
3 * 3 times

# Approach
In Scala, there is a sliding method which can help in this, making groups of 1,3,5,7 etc and adding them up

# Complexity
- Time complexity:
size 1 => O(N)
size 2 => O(2N)
size 3 => O(2.5N)
size 4 => O(3.5N)
=> ~O(N)

- Space complexity:
O(1)

# Code
```
object Solution {
  def sumOddLengthSubarrays(arr: Array[Int]): Int = {
    var sum = 0
    val arrSize = arr.length
    for (i <- 1 to arrSize by 2) {
      arr.sliding(i, 1).foreach(a => {
        sum = sum + a.sum
      })
    }
    sum
  }
}
```