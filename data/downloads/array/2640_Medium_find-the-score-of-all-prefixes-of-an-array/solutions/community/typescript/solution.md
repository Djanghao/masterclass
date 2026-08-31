# My solution

**Author:** jknezevic1712
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/5321446/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/5321446/)

---

# Code
```
function findPrefixScore(nums: number[]): number[] {
	const conver: number[] = [];
	const score: number[] = [];
	let currMaxNum = 0;

	nums.forEach((num, numIdx) => {
		if (num > currMaxNum) {
			currMaxNum = num;
		}

		const result = num + currMaxNum;
		conver.push(result);

		if (numIdx === 0) return score.push(result);
		score.push(score[numIdx - 1] + result);
	});

	return score;
}
```