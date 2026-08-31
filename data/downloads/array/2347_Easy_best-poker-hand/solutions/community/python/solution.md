# Python Elegant & Short | Without ifs | Counter + HashMap

**Author:** Kyrylo-Ktl
**Votes:** 6
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/2428490/](https://leetcode.com/problems/best-poker-hand/solutions/2428490/)

---

```
def bestHand(self, ranks: List[int], suits: List[str]) -> str:
	max_rank_cnt = max(Counter(ranks).values())
	max_suit_cnt = max(Counter(suits).values())

	return {
		max_rank_cnt == 2: 'Pair',
		max_rank_cnt >= 3: 'Three of a Kind',
		max_suit_cnt == 5: 'Flush',
	}.get(True, 'High Card')
```

If you like this solution remember to **upvote it** to let me know.
