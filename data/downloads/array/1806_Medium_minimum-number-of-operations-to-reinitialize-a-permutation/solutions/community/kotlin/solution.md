# Brut force

**Author:** 2pac_shakur
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/1130574/](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/1130574/)

---

```
fun reinitializePermutation(n: Int): Int {
    val initial = IntArray(n) { i -> i }
    var cur = IntArray(n) { i ->
        if (i % 2 == 0) initial[i / 2]
        else initial[n / 2 + (i - 1) / 2]
    }
    var count = 1
    while (!cur.contentEquals(initial)) {
        cur = IntArray(n) { i ->
            if (i % 2 == 0) cur[i / 2]
            else cur[n / 2 + (i - 1) / 2]
        }
        count++
    }
    return count
}
```