# Implement Trie interface WITHOUT TRIE, same complexity, using HashMap and custom hash, Beats 100%

**Author:** DmitryNekrasov
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/5851389/](https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/5851389/)

---

# Code
```kotlin []
class Trie {
    private val prefixes = HashMap<Long, Int>()
    private val words = HashMap<Long, Int>()

    fun insert(word: String) {
        val hashes = word.prefixHashes()
        for (hash in hashes) {
            prefixes[hash] = (prefixes[hash] ?: 0) + 1
        }
        words[hashes.last()] = (words[hashes.last()] ?: 0) + 1
    }

    fun countWordsEqualTo(word: String): Int {
        return words[word.prefixHashes().last()] ?: 0
    }

    fun countWordsStartingWith(prefix: String): Int {
        return prefixes[prefix.prefixHashes().last()] ?: 0
    }

    fun erase(word: String) {
        val hashes = word.prefixHashes()
        for (hash in hashes) {
            prefixes[hash] = (prefixes[hash] ?: 1) - 1
        }
        words[hashes.last()] = (words[hashes.last()] ?: 1) - 1
    }

    private fun String.prefixHashes(): LongArray {
        val hash = LongArray(length)
        hash[0] = this[0].code.toLong()
        for (i in 1..lastIndex) {
            hash[i] = (hash[i - 1] * BASE % MOD + this[i].code) % MOD
        }
        return hash
    }

    companion object {
        const val BASE = 283L
        const val MOD = 1_000_000_000_000_000L - 11
    }
}
```

![Screenshot from 2024-09-30 13-21-58.png](./images/0.png)
