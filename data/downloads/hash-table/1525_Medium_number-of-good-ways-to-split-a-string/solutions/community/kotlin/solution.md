# Count the unique chars

**Author:** 2pac_shakur
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/754680/](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/754680/)

---

```
fun numSplits(s: String): Int {
    var count = 0
    val set = mutableSetOf<Char>()
    val left = IntArray(s.length)
    val right = IntArray(s.length)
    for (i in s.indices) {
        set.add(s[i])
        left[i] = set.size
    }
    set.clear()
    for (i in s.lastIndex downTo 0) {
        set.add(s[i])
        right[i] = set.size
    }
    for (i in 0 until left.lastIndex) {
        if (left[i] == right[i + 1]) count++
    }
    return count
}
```