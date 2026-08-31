# Python Elegant & Short | 4 lines | DefaultDict

**Author:** Kyrylo-Ktl
**Votes:** 9
**Link:** [https://leetcode.com/problems/node-with-highest-edge-score/solutions/2428622/](https://leetcode.com/problems/node-with-highest-edge-score/solutions/2428622/)

---

```
def edgeScore(self, edges: List[int]) -> int:
	score = defaultdict(int)

	for u, v in enumerate(edges):
		score[v] += u

	return max(score, key=lambda x: (score[x], -x))
```

If you like this solution remember to **upvote it** to let me know.
