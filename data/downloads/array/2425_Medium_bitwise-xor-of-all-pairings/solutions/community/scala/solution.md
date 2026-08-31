# O(n) complexity, O(1) memory

**Author:** germanKoch
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/3131986/](https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/3131986/)

---

# Intuition
If we have two arrays x and y, then te results of the method should be:

**sum = (x[0]^y[0]) ^ (x[1]^y[0]) ^ ... ^ (x[x.length - 1]^y[0]) ^
(x[0]^y[1]) ^ (x[1]^y[1]) ^ ... ^ (x[x.length - 1]^y[1]) ^
....
(x[0]^y[y.length - 1]) ^ (x[1]^y[y.length - 1]) ^ ... ^ (x[x.length - 1]^y[y.length - 1])**

Let's have a look on each line in the formula above. As we know, the xor operation has the following properties: 

- for any number t => t^t = 0
- for any numbers a and b => a^b = b^a

It means that in the first line we may extract all y[0] in the separate term: y[0]^y[0]^y[0] .... ^y[0] = (x.length % 2)*y[0].

We may do the same for all lines. And also we may do the same for x[0], x[1], x[2] etc. 

The final formula is:
**sum = (x.length % 2)\\*(y[0]^y[1]^...y[y.length - 1])^(y.length % 2)\\*(x[0]^x[1]^...x[x.length - 1])**


# Code
```
object Solution {
  def xorAllNums(nums1: Array[Int], nums2: Array[Int]): Int = {
    (nums2.length % 2) * nums1.reduceLeft((a, b) => a ^ b) ^ (nums1.length % 2) * nums2.reduceLeft((a, b) => a ^ b)
  }
}
```