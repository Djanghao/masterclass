# Simple typescript solution, beats 100%!!!

**Author:** Mohammad_amin_khajeh
**Votes:** 0
**Link:** [https://leetcode.com/problems/water-bottles-ii/solutions/5734374/](https://leetcode.com/problems/water-bottles-ii/solutions/5734374/)

---

![image.png](./images/0.png)

```typescript
function maxBottlesDrunk(numBottles: number, numExchange: number): number {
	let emptyBottles = numBottles;

	while (emptyBottles >= numExchange) {
		emptyBottles = emptyBottles - numExchange + 1;
		numBottles += 1;
		numExchange += 1;
	}
	return numBottles;
}
```