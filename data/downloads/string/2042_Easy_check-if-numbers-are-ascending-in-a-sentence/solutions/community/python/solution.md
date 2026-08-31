# Python simple solution

**Author:** TovAm
**Votes:** 14
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/1538412/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/1538412/)

---

**Python :**

```
def areNumbersAscending(self, s: str) -> bool:
	prev = -1

	for w in s.split():
		if w.isdigit():
			if int(w) <= prev:
				return False
			prev = int(w)

	return True
```

**Like it ? please upvote !**