# Kotlin 1 line

**Author:** GeorgCantor
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/2088116/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/2088116/)

---

```
fun countBalls(l: Int, h: Int) = (l..h).map { it.toString().sumBy(Character::getNumericValue) }.groupingBy { it }.eachCount().values.max()
```