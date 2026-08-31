# 🔥Runtime 1374 ms  Beats 100.00% of users with Scala

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/5039731/](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/5039731/)

---

# Code
```
import scala.collection.mutable.ListBuffer
object Solution {
    def canMakePaliQueries(s: String, queries: Array[Array[Int]]): List[Boolean] = {
        val list = ListBuffer[Boolean]()
        val n = s.length
        // prefix map to count number of times each letter has occurred to access in queries in O(1)
        val map = Array.ofDim[Int](n + 1, 26)
        for (i <- s.indices) {
            for (j <- 0 until 26)
                map(i + 1)(j) = map(i)(j)

            map(i + 1)(s(i) - 'a') += 1
        }

        for (q <- queries) {
            val l = q(0)
            val r = q(1)
            val k = q(2)
            var count = 0

            for (i <- 0 until 26)
                count += (map(r + 1)(i) - map(l)(i)) % 2 // count total characters that have odd count, so that we can replace half of them with their pair.

            list += count / 2 <= k // if we can replace half of them with their pair
        }

        list.toList
    }
}
```