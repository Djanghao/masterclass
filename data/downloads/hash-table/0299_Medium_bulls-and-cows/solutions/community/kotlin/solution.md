# O(n) time and constant space

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/bulls-and-cows/solutions/840071/](https://leetcode.com/problems/bulls-and-cows/solutions/840071/)

---

Bulls - count matching chars
Cows - count freq of each char in separate IntArray of size 10. Add freq to cows if freq match or else min of both.
Now cows may have bulls also, so cows = cows - bulls.
```
    fun getHint(secret: String, guess: String): String {
        val s = IntArray(10)
        val g = IntArray(10)
        var (bulls, cows) = 0 to 0
        for (n in secret) s[n - '0']++
        for (n in guess) g[n - '0']++
        for (i in s.indices) {
            if (s[i] == g[i]) cows += s[i]
            else cows += minOf(s[i], g[i])
        }
        for (i in secret.indices) {
            if (secret[i] == guess[i]) bulls++
        }
        return "${bulls}A${abs(cows-bulls)}B"
    }
```