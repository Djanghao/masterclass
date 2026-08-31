# Kotlin solution that uses a grouping to get rank counts

**Author:** csc156
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/4490006/](https://leetcode.com/problems/best-poker-hand/solutions/4490006/)

---

```
fun bestHand(ranks: IntArray, suits: CharArray): String {
	if (suits.all { it == suits.first() }) return "Flush"

	val rankCounts: Map<Int, Int> =
		ranks
		.asIterable()
		.groupingBy { it }
		.eachCount()

	return when (rankCounts.values.max()) {
		in 3..5 -> "Three of a Kind"

		2 -> "Pair"

		else -> "High Card"
	}
}
```