# [Java] Simple Custom Sort with Detailed Explanation!

**Author:** jerrywusa
**Votes:** 193
**Link:** [https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/917993/](https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/917993/)

---

```
public int[] frequencySort(int[] nums) {
	Map<Integer, Integer> map = new HashMap<>();
	// count frequency of each number
	Arrays.stream(nums).forEach(n -> map.put(n, map.getOrDefault(n, 0) + 1));
	// custom sort
	return Arrays.stream(nums).boxed()
			.sorted((a,b) -> map.get(a) != map.get(b) ? map.get(a) - map.get(b) : b - a)
			.mapToInt(n -> n)
			.toArray();
}
```

custom sort explanation:
**.stream(nums)**
iterates through the nums array

**.boxed()**
converts each int to Integer object, this is because .sorted() can only operate on objects

**.sorted((a,b) -> map.get(a) != map.get(b) ? map.get(a) - map.get(b) : b - a)**
if frequency of two numbers are not the same, sort by ascending frequency. If frequencies are the same, sort by decending numeric value

**.mapToInt(n -> n)**
converts Integer to int

**.toArray()**
returns array