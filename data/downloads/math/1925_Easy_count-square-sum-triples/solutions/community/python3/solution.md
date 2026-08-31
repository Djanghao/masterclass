# Python simple solution

**Author:** TovAm
**Votes:** 33
**Link:** [https://leetcode.com/problems/count-square-sum-triples/solutions/1540448/](https://leetcode.com/problems/count-square-sum-triples/solutions/1540448/)

---

**Python :**

```
def countTriples(self, n: int) -> int:
	res = 0

	for i in range(1, n):
		for j in range(i + 1, n):
			s = math.sqrt(i * i + j * j)
			if int(s) == s and s <= n:
				res += 2

	return res
```

**Like it ? please upvote !**