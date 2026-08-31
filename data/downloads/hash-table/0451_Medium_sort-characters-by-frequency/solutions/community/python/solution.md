# [Python/Java] HashTable + Heap/Sort, Easy to understand and Detailed Explanation

**Author:** justin801514
**Votes:** 97
**Link:** [https://leetcode.com/problems/sort-characters-by-frequency/solutions/615846/](https://leetcode.com/problems/sort-characters-by-frequency/solutions/615846/)

---

I understand there are a tons of solution like mine, but here I offered a clean and detailed explanation on this kind of problem.

First, the idea of solution as follows.
1. HashTable + Sort: We use HashTable to count the occurence and sort the entries based on the occurence, then build the string.
2. HashTable + Heap(Maxheap): We use HashTable to count the occurence and build the heap based on the occurence, then build the string.


**Java**

1. HashTable + Sort:
```java
public String frequencySort(String s) {
	// Count the occurence on each character
	HashMap<Character, Integer> cnt = new HashMap<>();
	for (char c : s.toCharArray()) {
		cnt.put(c, cnt.getOrDefault(c, 0) + 1);
	}
	
	// Sorting
	List<Character> chars = new ArrayList(cnt.keySet());
	Collections.sort(chars, (a, b) -> (cnt.get(b) - cnt.get(a)));

	// Build string
	StringBuilder sb = new StringBuilder();
	for (Object c : chars) {
		for (int i = 0; i < cnt.get(c); i++) {
			sb.append(c);
		}
	}
	return sb.toString();
}
```

Time Complexity: O(nlogn), since we sort the characters
Space Complexity: O(n)

2. HashTable + Heap:
```java
public String frequencySort(String s) {
	// Count the occurence on each character
	HashMap<Character, Integer> cnt = new HashMap<>();
	for (char c: s.toCharArray()) {
		cnt.put(c, cnt.getOrDefault(c, 0) + 1);
	}

	// Build heap
	PriorityQueue<Character> heap = new PriorityQueue<>((a, b) -> (cnt.get(b) - cnt.get(a)));
	heap.addAll(cnt.keySet());

	// Build string
	StringBuilder sb = new StringBuilder();
	while (!heap.isEmpty()) {
		char c = heap.poll();
		for (int i = 0; i < cnt.get(c); i++) {
			sb.append(c);
		}
	}
	return sb.toString();
}
```
Time Complexity: O(nlogk), where k is the number of distinct character.
Space Complexity: O(n)

**Python**
1. HashTable + Sort:
```python
def frequencySort(self, s: str) -> str:
	# Count the occurence on each character
	cnt = collections.defaultdict(int)
	for c in s:
		cnt[c] += 1
	
	# Sort and Build string
	res = []
	for k, v in sorted(cnt.items(), key = lambda x: -x[1]):
		res += [k] * v
	return "".join(res)
```
Time Complexity: O(nlogn)
Space Complexity: O(n)

Note that we can optimize the first solution to O(n) by using `Counter()` in Python
```python
def frequencySort(self, s: str) -> str:
	# Count the occurence on each character
	cnt = collections.Counter(s)
	
	# Build string
	res = []
	for k, v in cnt.most_common():
		res += [k] * v
	return "".join(res)
```
Time Complexity: O(nlogk), we don't need to sort here, the `most_common()` cost O(nlogk) based on source code. In fact, the `most_common` used `heapq` on th implementation. Thus, we can consider this solution is the same as solution 2.
Space Complexity: O(n)

2. HashTable + Heap:
```python
def frequencySort(self, s: str) -> str:
	# Count the occurence on each character
	cnt = collections.Counter(s)
	
	# Build heap
	heap = [(-v, k) for k, v in cnt.items()]
	heapq.heapify(heap)
	
	# Build string
	res = []
	while heap:
		v, k = heapq.heappop(heap)
		res += [k] * -v
	return ''.join(res)
```
Time Complexity: O(nlogk), where k is the number of distinct character.
Space Complexity: O(n)

Remember that if you want to achieve `Heap` structure in **Python**, you can use `heapq` and `PriorityQueue` in **Java**
