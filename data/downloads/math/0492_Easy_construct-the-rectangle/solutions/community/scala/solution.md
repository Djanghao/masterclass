# Scala oneliner

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/3545369/](https://leetcode.com/problems/construct-the-rectangle/solutions/3545369/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(sqrt(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def constructRectangle(area: Int): Array[Int] = {
        (math.sqrt(area).toInt to 1 by -1).find(area % _ == 0).map(m => Array(area / m, m)).getOrElse(Array(area, 1))
    }
}
```