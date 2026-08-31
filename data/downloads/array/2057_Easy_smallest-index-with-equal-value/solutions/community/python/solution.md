# Python simple and short solution

**Author:** TovAm
**Votes:** 11
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/1568125/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/1568125/)

---

**Python :**

```
def smallestEqual(self, nums: List[int]) -> int:
	for idx, n in enumerate(nums):
		if idx % 10 == n:
			return idx
	return -1 
```

**Like it ? please upvote !**