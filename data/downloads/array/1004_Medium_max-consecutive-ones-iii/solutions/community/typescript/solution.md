# ✔️ 100% Fastest TypeScript Solution

**Author:** sergeyleschev
**Votes:** 12
**Link:** [https://leetcode.com/problems/max-consecutive-ones-iii/solutions/1893366/](https://leetcode.com/problems/max-consecutive-ones-iii/solutions/1893366/)

---

```
function longestOnes(A: number[], K: number): number {
	let i = 0, j = 0
	let its = []

	for (; j < A.length; j++) {
		if (A[j] == 0) { K-- }
		if (K < 0) {
			if (A[i] == 0) { K++ }
			i++
		}
	}

	return j - i
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.