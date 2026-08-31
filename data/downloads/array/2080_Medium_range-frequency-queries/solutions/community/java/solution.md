# Arrays of Indices

**Author:** votrubac
**Votes:** 44
**Link:** [https://leetcode.com/problems/range-frequency-queries/solutions/1589077/](https://leetcode.com/problems/range-frequency-queries/solutions/1589077/)

---

Since the value is limited to 10,000, we can just store positions for each value and then binary-search for the range.

> Note: a lot of folks got TLE because they collected frequencies for each number and each position. This allows answering queries in O(1), but populating the array takes O(n * m) time and space.

**Java**
```java
List<Integer>[] ids = new ArrayList[10001];
Function<Integer, Integer> lower_bound = (pos) -> pos < 0 ? ~pos : pos;
public RangeFreqQuery(int[] arr) {
    for (int i = 0; i < ids.length; ++i)
        ids[i] = new ArrayList<>();
    for (int i = 0; i < arr.length; ++i)
        ids[arr[i]].add(i);
}
public int query(int l, int r, int v) {
    return lower_bound.apply(Collections.binarySearch(ids[v], r + 1)) - lower_bound.apply(Collections.binarySearch(ids[v], l));
}
```

**Python 3**
```python
class RangeFreqQuery:
    def __init__(self, arr: List[int]):
        self.l = [[] for _ in range(10001)]
        for i, v in enumerate(arr):
            self.l[v].append(i)
    def query(self, left: int, right: int, v: int) -> int:
        return bisect_right(self.l[v], right) - bisect_left(self.l[v], left)
```

**C++**
```cpp
vector<int> ids[10001] = {};
RangeFreqQuery(vector<int>& arr) {
    for (int i = 0; i < arr.size(); ++i)
        ids[arr[i]].push_back(i);
}
int query(int left, int right, int v) {
    return upper_bound(begin(ids[v]), end(ids[v]), right) - 
        lower_bound(begin(ids[v]), end(ids[v]), left);
}
```