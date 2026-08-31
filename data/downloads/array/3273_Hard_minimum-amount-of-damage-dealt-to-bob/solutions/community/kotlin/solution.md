# Simple sorting Kotlin solution

**Author:** DmitryNekrasov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/solutions/5716927/](https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/solutions/5716927/)

---

# Code
```kotlin []
class Solution {
    data class Enemy(val damage: Int, val number: Int)

    fun minDamage(power: Int, damage: IntArray, health: IntArray): Long {
        val enemies = (damage zip health).map { (d, h) -> Enemy(d, h / power + if (h % power == 0) 0 else 1) }
            .sortedWith { e1, e2 -> (e2.damage * e1.number) compareTo (e1.damage * e2.number) }
        var sum = damage.sum()
        var ans = 0L
        for ((d, n) in enemies) {
            ans += sum * n
            sum -= d
        }
        return ans
    }
}
```