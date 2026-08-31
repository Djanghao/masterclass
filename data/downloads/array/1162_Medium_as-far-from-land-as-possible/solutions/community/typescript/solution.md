# ✔️ 100% Fastest TypeScript Solution

**Author:** sergeyleschev
**Votes:** 10
**Link:** [https://leetcode.com/problems/as-far-from-land-as-possible/solutions/1893369/](https://leetcode.com/problems/as-far-from-land-as-possible/solutions/1893369/)

---

```
type Point = [number, number]

function maxDistance(grid: number[][]): number {
	let max = -1
	const lands: Point[] = []
	const size = grid[0].length

	for (let row = 0; row < size; row++) {
		for (let col = 0; col < size; col++) {
			if (grid[row][col]) { lands.push([row, col]) }
		}
	}

	if (lands.length === 0) { return max }

	for (let row = 0; row < size; row++) {
		for (let col = 0; col < size; col++) {
			if (grid[row][col] === 0) {
				const nearest = nearestLand(lands, [row, col])
				if (nearest > max) { max = nearest }
			}
		}
	}

	return max
}

function nearestLand(lands: Point[], point: Point) {
	let nearest = Number.MAX_VALUE

	for (const land of lands) {
		const dist = distance(land, point)
		if (dist < nearest) { nearest = dist }
	}

	return nearest
}

function distance(a: Point, b: Point) {
	return Math.abs(b[0] - a[0]) + Math.abs(b[1] - a[1])
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.