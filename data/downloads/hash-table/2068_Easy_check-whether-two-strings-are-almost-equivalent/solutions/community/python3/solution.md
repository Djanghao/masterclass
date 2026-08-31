# Python one line counter solution

**Author:** TovAm
**Votes:** 13
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/1585278/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/1585278/)

---

**Python :**

```
def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
	return all(v <= 3 for v in ((Counter(list(word1)) - Counter(list(word2))) + (Counter(list(word2)) - Counter(list(word1)))).values())
```

**Like it ? please upvote !**