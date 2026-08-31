# Kotlin

**Author:** GeorgCantor
**Votes:** 5
**Link:** [https://leetcode.com/problems/top-k-frequent-words/solutions/1071287/](https://leetcode.com/problems/top-k-frequent-words/solutions/1071287/)

---

```
    fun topKFrequent(words: Array<String>, k: Int) = words.groupingBy { it }.eachCount()
        .toList()
        .sortedBy { (s, _) -> s }
        .sortedByDescending { (_, v) -> v }
        .map { it.first }
        .take(k)
```