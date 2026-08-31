# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/3481669/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/3481669/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O (n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def countBalls(lowLimit: Int, highLimit: Int): Int = {
      val boxes = Array.fill(46)(0)
      for (i <- lowLimit to highLimit) {
        var sum = 0
        var num = i
        while (num > 0) {
          sum += num % 10
          num /= 10
        }
        boxes(sum) += 1
      }
      boxes.max
    }
}
```