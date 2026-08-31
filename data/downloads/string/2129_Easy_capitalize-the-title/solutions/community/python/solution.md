# Python one line easy solution

**Author:** TovAm
**Votes:** 24
**Link:** [https://leetcode.com/problems/capitalize-the-title/solutions/1675905/](https://leetcode.com/problems/capitalize-the-title/solutions/1675905/)

---

**Python :**

```
def capitalizeTitle(self, title: str) -> str:
	return " ".join([word.lower() if len(word) < 3 else word.title() for word in title.split()])
```

**Like it ? please upvote !**