# Scala solution

**Author:** Taqas
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/2797808/](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/2797808/)

---

```scala
def isPrefixOfWord(sentence: String, searchWord: String): Int = {
	sentence
	  .split(" ")
	  .zipWithIndex
	  .view
	  .find(_._1.startsWith(searchWord))
	  .map(_._2 + 1)
	  .getOrElse(-1)
}
```