# Simple Explained Solution

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subsequence-repeated-k-times/solutions/3179463/](https://leetcode.com/problems/longest-subsequence-repeated-k-times/solutions/3179463/)

---


```
class Solution {
    fun longestSubsequenceRepeatedK(s: String, k: Int): String {
        // An array storing all possible subsequences from length 0 to 7
        val results = Array<MutableList<String>>(8) { mutableListOf() }
        var res = s.fold(mutableMapOf<Char, Int>()) { acc, char ->
            acc[char] = (acc[char] ?: 0) + 1
            acc // Count each char: Map(char, char count)
        }.entries.filter {
            it.value >= k // Filter chars which appeared more than k times
        }.map {
            it.key.toString() // Transform to List<String>
        }.let {
            it.sorted() // Sort the list alphabetically
        }.let { validChars ->
            results[1].addAll(validChars) // Add all possible length 1 subsequences into results[1]
            if (validChars.isEmpty()) "" else validChars.last() // Get initial value of res
        }
        // Check whether a subsequence is repeated k times
        fun checkValid(subsequence: String): Boolean {
            var indexS = 0
            var indexSub = 0
            var repeatCount = 0
            while (indexS < s.length && repeatCount < k) {
                if (s[indexS] == subsequence[indexSub]) {
                    ++indexSub
                    if (indexSub == subsequence.length) {
                        ++repeatCount
                        indexSub = 0
                    }
                }
                ++indexS
            }
            return repeatCount == k
        }
        // We've get results[1] so far, so we can try to find results[2] to results[7]
        for (i in 2..7) {
            for (prevS in results[i - 1]) {
                for (validChar in results[1]) {
                    // We can construct a possible length i subsequence 
                    // by concating any of result[1 - 1] and any of result[1]
                    val subsequence = prevS + validChar
                    // Because results[1] is sorted,
                    // the constructing process is guranteed to produce subsequences alphabetically
                    if (checkValid(subsequence)) {
                        results[i].add(subsequence) // Add the subsequence if it's valid
                        res = subsequence // Update res to the newest valid subsequence
                    }
                }
            }
        }
        return res
    }
}
```