# Scala 1-line solution

**Author:** minato_yukina
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-health-to-beat-game/solutions/3018385/](https://leetcode.com/problems/minimum-health-to-beat-game/solutions/3018385/)

---

# Complexity
- Time complexity: O(N)
- Space complexity: O(1)
# Code
```
object Solution {
    def minimumHealth(damage: Array[Int], armor: Int): Long =
        damage.map(_.asInstanceOf[Long]).sum - damage.max.min(armor) + 1
}
```