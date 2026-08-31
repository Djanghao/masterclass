# [scala] - brute force recursion

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-distance-traveled/solutions/3769328/](https://leetcode.com/problems/total-distance-traveled/solutions/3769328/)

---

# Code
```
object Solution {
  def distanceTraveled(main: Int, other: Int): Int =
    if (main < 5) main * 10
    else 50 + (if (other > 0) distanceTraveled(main - 4, other - 1) else distanceTraveled(main - 5, 0))
}
```