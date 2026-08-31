# Kotlin || Greedy

**Author:** girl_coder_s
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-keypresses/solutions/5193106/](https://leetcode.com/problems/minimum-number-of-keypresses/solutions/5193106/)

---



# Code
```
class Solution {
    fun minimumKeypresses(s: String): Int {
        var freq = Array(26) { 0 }
        for (c in s) {
            freq[c - 'a'] = freq[c - 'a'] + 1
        }
        freq = freq.sortedDescending().toTypedArray()

        var ans = 0
        var count = 0
        for (idx in freq.indices) {
            if (idx % 9 == 0) {
                count ++
            }
            ans += (count * freq[idx])
        }
        return ans
    }
}
```