# Scala solutions

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/bulb-switcher-ii/solutions/3685181/](https://leetcode.com/problems/bulb-switcher-ii/solutions/3685181/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach recursive
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(2^n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def flipLights(n: Int, presses: Int): Int = {
      if (presses == 0 || n == 0) 1
      else if (n > 3) flipLights(3, presses)
      else flipLights(n - 1, presses - 1) + flipLights(n - 1, presses)
    }
}
```

# Approach math
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def flipLights(n: Int, presses: Int): Int = (n, presses) match {
      case (_, 0) => 1
      case (1, _) => 2
      case (2, 1) => 3
      case (2, _) => 4
      case (_, 1) => 4
      case (_, 2) => 7
      case (_,_) => 8
    }
}
```