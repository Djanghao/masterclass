# Simpler backtracking

**Author:** 2pac_shakur
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-permutation-ii/solutions/1147035/](https://leetcode.com/problems/palindrome-permutation-ii/solutions/1147035/)

---

```
    fun generatePalindromes(s: String): List<String> {
        val len = s.length
        val ans = ArrayList<String>()
        val freq = IntArray(26)
        for (ch in s) 
            freq[ch - 'a']++
        val countOddFreq = freq.count { it % 2 != 0 }
        if (countOddFreq > 1) return ans // > 1 odd freq chars can't make palin - ex: "abc"
        
        val mid = len / 2 // need to put odd freq char at the middle
        
        fun generate(cur: CharArray, left: Int) {
            val right = len - left - 1
            if (left > right || freq.all { it == 0 }) {
                ans.add(String(cur))
                return
            }
            for (i in 0 until 26) {
                if (freq[i] == 0) continue
                val ch = (i + 97).toChar()
                if (freq[i] >= 2) { // spread out evenly on left and right
                    cur[left] = ch
                    cur[right] = ch
                    freq[i] -= 2
                    generate(cur, left + 1)
                    freq[i] += 2
                } else {
                    if (left != mid) continue // only put the odd-freq at the center
                    cur[left] = ch
                    freq[i] -= 1
                    generate(cur, left + 1)
                    freq[i] += 1
                }
            }
        }
        generate(CharArray(len), 0)
        return ans
    }
```