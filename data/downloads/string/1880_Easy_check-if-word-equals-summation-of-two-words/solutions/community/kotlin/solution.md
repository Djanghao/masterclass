# Kotlin solution

**Author:** BotirMuzaffariy
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/2826017/](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/2826017/)

---

# Code
```
class Solution {
    fun isSumEqual(fw: String, sw: String, tw: String): Boolean {
        return fw.toNum() + sw.toNum() == tw.toNum()
    }

    private fun String.toNum(): Int {
        return this.map { it - 'a' }.joinToString("").toInt()
    }
}
```