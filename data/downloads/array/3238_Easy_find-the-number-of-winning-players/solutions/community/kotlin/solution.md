# Kotlin oneliner

**Author:** qveex
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5607255/](https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5607255/)

---

# Complexity
$$O(n)$$

# Code
```
fun winningPlayerCount(n: Int, pick: Array<IntArray>) = pick
    .groupBy { it[0] }
    .count { (k, v) ->
        k < v
            .groupingBy { it[1] }
            .eachCount()
            .maxOf { it.value }
    }
```