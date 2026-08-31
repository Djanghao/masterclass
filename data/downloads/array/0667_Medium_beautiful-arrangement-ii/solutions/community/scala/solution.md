# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement-ii/solutions/3684647/](https://leetcode.com/problems/beautiful-arrangement-ii/solutions/3684647/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def constructArray(n: Int, k: Int): Array[Int] = {
      var num = -1
      val res = new Array[Int](n)
      res(0) = n
      for (i <- 1 until n) 
        if (i < k)
          if (num > 0) {
            res(i) = res(i - 1) + (n - i)
            num *= -1
          } else {
            res(i) = res(i - 1) - (n - i)
            num *= -1
          }
        else res(i) = res(i - 1) + num
      res
    }
}
```