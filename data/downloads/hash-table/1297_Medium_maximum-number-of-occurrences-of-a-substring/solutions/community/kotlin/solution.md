# kotlin || sliding window

**Author:** rafiwilder4203
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/2022590/](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/2022590/)

---

```
class Solution {
     fun maxFreq(s: String, maxLetters: Int, minSize: Int, maxSize: Int): Int {
        var i = 0
        var uniqChar = 0
        var mx = 0
        val set = hashMapOf<Char, Int>()
        val map = hashMapOf<String, Int>()
        var j = 0
        while (j in s.indices) {
            set[s[j]] = set.getOrDefault(s[j], 0) + 1
            if (set[s[j]] == 1)
                uniqChar++
            while (j - i + 1 > minSize) {

                set[s[i]] = set[s[i]]!! - 1
                if (set[s[i]] == 0)
                    uniqChar--
                i++

            }
            if (uniqChar <= maxLetters && j-i+1==minSize)
                map[s.substring(i, j + 1)] = map.getOrDefault(s.substring(i, j + 1), 0) + 1
            j++
        }
        map.values.forEach {
            mx = mx.coerceAtLeast(it)
        }
        return mx
    }
}
```