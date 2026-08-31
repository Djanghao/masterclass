# Typescript: HashMap + Sorting

**Author:** realdennis
**Votes:** 3
**Link:** [https://leetcode.com/problems/top-k-frequent-words/solutions/1495217/](https://leetcode.com/problems/top-k-frequent-words/solutions/1495217/)

---

For this question, we have a keyword that is "**Top K**" blabla, so you can imagine there're priority queue or somehow to record the order.

And when you see the "**frequent**" means you need a table record it, so for the "word" case, the HashMap would really help.

**HashMap** -> JavaScript object or ES6 Map
**Priority Queue** -> Leetcode prodive the MaxPriorityQueue (or Min) but it's outdated version without compare construct option, so let's use **sort** approach.

Note: somehow ES6 Map would get the better runtime on leetcode env, so I use that.

```
/**
Top K frequency
    1. Freq map to keep each word's freq
    2. Sort by freq
        2.1 if two freq is equal, use lexical order
		2.1 if no, decreasing (non increasing)
    return the first Kth
**/

function topKFrequent(words: string[], k: number): string[] {
	// Step#1 T:O(N) S:O(N)
	const freq: Map<string, number> = new Map();
	words.forEach((word) => freq.set(word, (freq.get(word) || 0) + 1));

	// Step#2 T:O(NlogN) S:O(N)
	// using sorting or priority queue
    // in case the priority queue leetcode provides is outdates and doesn't support the compare construct the queue
	const sorted = [...freq].sort((prev, next) =>
		next[1] === prev[1] ? prev[0].localeCompare(next[0]) : next[1] - prev[1]
	);

	// S:O(N)
	return sorted.map((entry) => entry[0]).slice(0, k);
}
```

For lexical order, the **String.prototype.localeCompare** could be satisfied, or otherwise you can just "bba"<"a" to check if we need swap in sorting callback.