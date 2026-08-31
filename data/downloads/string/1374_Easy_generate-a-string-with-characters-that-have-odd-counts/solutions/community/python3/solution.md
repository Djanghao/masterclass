# Python one line simple solution

**Author:** TovAm
**Votes:** 10
**Link:** [https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/1560986/](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/1560986/)

---

**Python :**

```
def generateTheString(self, n: int) -> str:
	return "a" * n if n % 2 else "a" * (n - 1) + "b"
```

**Like it ? please upvote !**