# Kotlin 2 Lines using GCD

**Author:** dzmtr
**Votes:** 1
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/1094493/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/1094493/)

---

```
fun hasGroupsSizeX(deck: IntArray): Boolean =
        deck.toList().groupingBy { it }.eachCount().map { it.value }.reduce { x: Int, y: Int -> gcd(x, y) } >= 2

private fun gcd(x: Int, y: Int): Int = if (y == 0) x else gcd(y, x % y)
```