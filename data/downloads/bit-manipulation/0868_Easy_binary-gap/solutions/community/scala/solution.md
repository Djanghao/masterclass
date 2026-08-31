# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-gap/solutions/3545346/](https://leetcode.com/problems/binary-gap/solutions/3545346/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Functional Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(log n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def binaryGap(n: Int): Int = {
      val binary = n.toBinaryString
      val ones = binary.indices.filter(binary(_) == '1')
      if (ones.size < 2) 0
      else ones.sliding(2).map(m => m(1) - m(0)).max
    }
}
```

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def binaryGap(n: Int): Int = {
      var maxDist = 0
      var prevOne = -1
      var currPos = 0
      var num = n
      while (num > 0) {
        if (num % 2 == 1) {
          if (prevOne != -1) maxDist = math.max(maxDist, currPos - prevOne)
          prevOne = currPos
        }
        currPos += 1
        num /= 2
      }
      maxDist
    }
}
```