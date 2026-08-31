# Kotlin 2 solutions including O(n)

**Author:** ashnh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-after-k-increments/solutions/1935922/](https://leetcode.com/problems/maximum-product-after-k-increments/solutions/1935922/)

---

1. Easy priority queue solution, O(n log n)
```
class Solution {
    fun maximumProduct(nums: IntArray, k: Int): Int {
        val pq = PriorityQueue<Int>()
        nums.forEach { pq.add(it) }
        repeat(k) { pq.poll().also { pq.add(it + 1) } }

        var result = 1L
        while (pq.peek() != null) { result = result * pq.poll() % 1_000_000_007 }
        return result.toInt()
    }
}
```
2. Frequency hash map solution O(n), worst case O(n log n) at sorting part, say nums contains all unique number.
```
class Solution {
    fun maximumProduct(nums: IntArray, k: Int): Int {
		val frequencyMap = hashMapOf<Int, Int>()
		nums.forEach { frequencyMap[it] = 1 + (frequencyMap[it] ?: 0) }

		val sortedMap = frequencyMap.toSortedMap()
		var k = k
		while (k > 0) {
			val key = sortedMap.keys.first()
			sortedMap[key] = sortedMap[key]!!.dec()
			if (sortedMap[key] == 0) sortedMap.remove(key)

			sortedMap[key + 1] = 1 + (sortedMap[key + 1] ?: 0)
			k--
		}

		var result = 1L
		// Using loop to avoid using power, gaining better performance.
		sortedMap.forEach { (key, value) -> repeat(value) { result = result * key % 1_000_000_007 } }
		return result.toInt()
	}
}
```