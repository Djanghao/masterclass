# Kotlin speed 100%

**Author:** 3336360dhdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/1172337/](https://leetcode.com/problems/minimum-suffix-flips/solutions/1172337/)

---

```
fun minFlips(target: String): Int {
var old ='0'
    var k = 0
    for (c in target) {
        if (old!=c)k++
            old =c
    }
    return k
}
```