# Scala FoldLeft

**Author:** imran-sarwar
**Votes:** 2
**Link:** [https://leetcode.com/problems/top-k-frequent-words/solutions/1004980/](https://leetcode.com/problems/top-k-frequent-words/solutions/1004980/)

---

```
def topKFrequent(words: Array[String], k: Int): List[String] = {
	words.foldLeft(Map[String, Int]().withDefaultValue(0))((map, word) => {
		map + (word -> (map(word) + 1))
	}).toList.sortBy(m => (-m._2, m._1)).map(_._1).take(k)
}
```