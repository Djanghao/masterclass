# Python simple one line solution

**Author:** TovAm
**Votes:** 45
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1676023/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1676023/)

---

**Python :**

```
def mostWordsFound(self, sentences: List[str]) -> int:
	return max(len(word.split()) for word in sentences)
```

**Like it ? please upvote !**