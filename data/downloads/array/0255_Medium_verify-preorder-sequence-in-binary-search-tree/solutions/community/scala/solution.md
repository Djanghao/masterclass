# Scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/4614521/](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/4614521/)

---

# Code
```
object Solution {
    def verifyPreorder(preorder: Array[Int]): Boolean = {
        var min = Int.MinValue
        val stack = new Array[Int](10001)
        var last = 0
        for (i <- 0 until preorder.length) {
            val v = preorder(i)
            if (v < min) return false
            while (last > 0 && stack(last - 1) < v) {
                min = stack(last - 1)
                last -= 1
            }
            stack(last) = v
            last += 1
        }
        true
    }
}



```