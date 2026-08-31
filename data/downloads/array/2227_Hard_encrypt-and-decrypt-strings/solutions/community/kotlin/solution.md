# Shortest solution (4-line)

**Author:** StrongWings
**Votes:** 2
**Link:** [https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/4786749/](https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/4786749/)

---

Encrypting all words in dictionary to retrieve values from it.

# Code
```
class Encrypter(keys: CharArray, values: Array<String>, dictionary: Array<String>) {

    val kv = keys.zip(values).toMap()
    val ds = dictionary.groupBy { encrypt(it) }

    fun encrypt(word1: String): String {
        return word1.map { kv[it] ?: return "" }.joinToString("")
    }

    fun decrypt(word2: String): Int {
        return ds[word2]?.size ?: 0
    }

}
```