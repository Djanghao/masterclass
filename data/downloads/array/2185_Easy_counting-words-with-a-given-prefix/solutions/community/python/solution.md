# Python one line simple solution

**Author:** TovAm
**Votes:** 17
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/1809593/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/1809593/)

---

**Python**

```
def prefixCount(self, words: List[str], pref: str) -> int:
	return sum([word.startswith(pref) for word in words])
```

**Like it ? please upvote !**