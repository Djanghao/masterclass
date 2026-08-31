# Kotlin solution that groups words by length

**Author:** csc156
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-magic-dictionary/solutions/4807619/](https://leetcode.com/problems/implement-magic-dictionary/solutions/4807619/)

---

```
class MagicDictionary() {
    lateinit var wordGroups: Map<Int, List<String>>
    
    fun buildDict(dictionary: Array<String>) {
        wordGroups = dictionary.groupBy { it.length }
    }

    fun search(searchWord: String): Boolean =
        wordGroups[searchWord.length]?.any { it isOneLetterDifferentFrom searchWord } == true
    
    companion object {
        infix fun String.isOneLetterDifferentFrom(other: String): Boolean =
            indices.singleOrNull { this[it] != other[it] } != null
    }
}
```