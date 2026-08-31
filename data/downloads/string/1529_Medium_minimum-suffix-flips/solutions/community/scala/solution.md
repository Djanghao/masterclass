# Scala iterative solution

**Author:** mohamedabden21
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/5508009/](https://leetcode.com/problems/minimum-suffix-flips/solutions/5508009/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def minFlips(target: String): Int = {
    var flipped = false;
    var moves = 0;

    for (i <- target.indices) {
      if flipped == false && target(i) == '1' then {
        flipped = true
        moves += 1
      } else if flipped == true && target(i) == '0' then {
        flipped = false
        moves += 1
      }
    }

    moves
  }
}
```