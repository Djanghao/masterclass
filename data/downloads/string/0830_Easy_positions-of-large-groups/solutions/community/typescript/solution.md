# Clean TypeScript solution

**Author:** melihov
**Votes:** 1
**Link:** [https://leetcode.com/problems/positions-of-large-groups/solutions/4192104/](https://leetcode.com/problems/positions-of-large-groups/solutions/4192104/)

---

# Approach
Existing TypeScript solutions are just unnessarily complicated IMO. All we have to do is iterate over input string characters keeping track of char changes and the start pos of the current char sequence.

Note one extra loop iteration to catch a char sequence at the end of the input string.

# Code
```
function largeGroupPositions(s: string): number[][] {
	if (!s.length)
		return []

	const res: number[][] = []

	let currentChar = s[0]
	let startPos = 0

	for (let i = 1; i < s.length + 1; i++) {
		if (s[i] === currentChar)
			continue

		if (i - startPos >= 3)
			res.push([startPos, i - 1])

		currentChar = s[i]
		startPos = i
	}

	return res
}
```