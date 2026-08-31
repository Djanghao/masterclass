# [Java/Python 3] TreeMap, w/ brief explanation and analysis.

**Author:** rock
**Votes:** 35
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/2388276/](https://leetcode.com/problems/merge-similar-items/solutions/2388276/)

---

Use TreeMap to accumulate the weights of items with same value.

```java
    public List<List<Integer>> mergeSimilarItems(int[][] items1, int[][] items2) {
        TreeMap<Integer, Integer> cnt = new TreeMap<>();
        for (int[] it : items1) {
            cnt.merge(it[0], it[1], Integer::sum);
        }
        for (int[] it : items2) {
            cnt.merge(it[0], it[1], Integer::sum);
        }
        List<List<Integer>> ans = new ArrayList<>();
        for (var e : cnt.entrySet()) {
            ans.add(Arrays.asList(e.getKey(), e.getValue()));
        }
        return ans;
    }
```

Java 8 Stream code - inspired by **@climberig**

```java
    public List<List<Integer>> mergeSimilarItems(int[][] items1, int[][] items2) {
        TreeMap<Integer, Integer> cnt = new TreeMap<>();
        Stream.of(items1).forEach(item -> cnt.put(item[0], item[1]));
        Stream.of(items2).forEach(item -> cnt.merge(item[0], item[1], Integer::sum));
        return cnt.entrySet().stream().map(e -> Arrays.asList(e.getKey(), e.getValue())).collect(Collectors.toList());
    }
```

----

Use `Counter` to accumulate the weights of items with same value, then sort the `(key value)` mappings.
```python
    def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:
        cnt = Counter()
        for v, w in items1 + items2:
            cnt[v] += w
        return sorted(cnt.items())
```
**@stefan4trivia**'s very clean code:
```python
    def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:
        cnt = Counter(dict(items1))
        cnt += Counter(dict(items2))
        return sorted(cnt.items())
```
1 liner - inspired by **@stefan4trivia**:

```python
    def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:
        return sorted((Counter(dict(items1)) + Counter(dict(items2))).items())
```

**Analysis:**

Time: `O(nlogn)`, space: `O(n)`, where `n = items1.length + items2.length`.