# SImple solution WITHOUT TRIE, using custom hashing

**Author:** DmitryNekrasov
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/5832685/](https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/5832685/)

---

# Code
```kotlin []
class Solution {
    private fun String.prefixHashes(): LongArray {
        val hash = LongArray(length)
        hash[0] = this[0].code.toLong()
        for (i in 1..lastIndex) {
            hash[i] = (hash[i - 1] * BASE % MOD + this[i].code) % MOD
        }
        return hash
    }

    fun longestWord(words: Array<String>): String {
        val prefixDict = words.associateWith { it.prefixHashes() }
        val wordsHashes = words.map { prefixDict[it]!!.last() }.toSet()
        return prefixDict.filter { (_, hashes) -> hashes.all { it in wordsHashes } }
            .map { (word, _) -> word }
            .sortedWith(compareByDescending<String> { it.length }.thenBy { it })
            .firstOrNull() ?: ""
    }

    companion object {
        const val BASE = 283L
        const val MOD = 1_000_000_000_000_000L - 11
    }
}

```