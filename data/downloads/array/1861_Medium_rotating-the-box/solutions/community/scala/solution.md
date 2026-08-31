# Runtime 1319 ms Beats 50.00% of users with Scala

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotating-the-box/solutions/4954376/](https://leetcode.com/problems/rotating-the-box/solutions/4954376/)

---

# Code
```
object Solution {
    def rotateTheBox(box: Array[Array[Char]]): Array[Array[Char]] = {
        val m = box.length
        val n = box(0).length
        val ans = Array.fill[Char](n, m)('.')

        var ind = m - 1
        for (i <- 0 until m) {
        var j = n - 1
        var k = j
        while (j >= 0 && k >= 0) {
            box(i)(j) match {
            case '*' =>
                ans(j)(ind) = '*'
                k = j - 1
            case '#' =>
                ans(k)(ind) = '#'
                k -= 1
            case _ => // Do nothing
            }
            j -= 1
        }
        ind -= 1
        }
        ans
    }
}
```