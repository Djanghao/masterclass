# .::kotlin::. SumOf

**Author:** dzmtr
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5493262/](https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5493262/)

---

```
class Solution {
    fun numberCount(a: Int, b: Int): Int = (a..b).sumOf { check(it) }

    private fun check(num: Int): Int {
        val st = BooleanArray(10)
        var x = num
        while (x > 0) {
            val digit = x % 10
            if (st[digit]) return 0 else st[digit] = true
            x /= 10
        }
        return 1
    }
}
```