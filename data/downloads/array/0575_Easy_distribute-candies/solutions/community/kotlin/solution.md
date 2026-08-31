# Kotlin Solution (EASY)

**Author:** hussein0115300
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies/solutions/6162980/](https://leetcode.com/problems/distribute-candies/solutions/6162980/)

---

```
fun distributeCandies(candyType: IntArray): Int {       
        return minOf(candyType.distinct().toIntArray().size, candyType.size/2)
    }
```