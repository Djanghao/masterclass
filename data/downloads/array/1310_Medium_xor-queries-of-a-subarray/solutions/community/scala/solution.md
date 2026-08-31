# Scala

**Author:** Aditya11cr7
**Votes:** 0
**Link:** [https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/5781654/](https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/5781654/)

---

# Intuition
1 XOR 1 = 0, 1 XOR 1 XOR 1 = 1
let arr = [001, 010, 011, 100]
then pre = [001, 011, 001, 110]
now XOR for window (1,3) will be: 110 ^ 011 = 101
which is same as: 010 ^ 011 ^ 100 = 101

# Approach
first preprocess the array to get the cumulative XOR at each i 
then to get the XOR for any window do XOR(right) ^ XOR(left-1)

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```scala []
object Solution {
    def xorQueries(arr: Array[Int], queries: Array[Array[Int]]): Array[Int] = {
        var result = new Array[Int](queries.length)
        var pre = new Array[Int](arr.length)

        pre(0) = arr(0)

        for(i<-1 until arr.length) {
            pre(i) = pre(i-1)^arr(i)
        }

        for(i <- 0 until queries.length) {
            if(queries(i)(0) == 0) {
                result(i) = pre(queries(i)(1))
            } else {
                result(i) = pre(queries(i)(1)) ^ pre(queries(i)(0)-1)
            }
        }
        result
    }
}
```