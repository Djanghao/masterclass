# Counting Numbers (one-liner)

**Author:** votrubac
**Votes:** 28
**Link:** [https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/solutions/1354008/](https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/solutions/1354008/)

---

The description got me excited for a moment, but the fact that arrays are sorted and have no dups made it too easy.

> Update: see a follow-up solution below.

We do not care about the order (it's already strictly increasing), so we can just count numbers in each array. Numbers that appear `n` times present in all `n` arrays, and therefore should be included into the result.

**Python 3**
```python
class Solution:
    def longestCommomSubsequence(self, arrs: List[List[int]]) -> List[int]:
        return [n for (n, cnt) in Counter(n for arr in arrs for n in arr).items() if cnt == len(arrs)]
```

**Java**
```java
public List<Integer> longestCommomSubsequence(int[][] arrays) {
    int cnt[] = new int[101];
    for (var arr : arrays)
        for (var n : arr)
            ++cnt[n];
    return IntStream.range(0, 101).filter(i -> cnt[i] == arrays.length).boxed().collect(Collectors.toList());
}
```
**C++**
```cpp
vector<int> longestCommomSubsequence(vector<vector<int>>& arrays) {
    vector<int> cnt(101), res;
    for (auto &arr : arrays)
        for (int n : arr)
            if (++cnt[n] == arrays.size())
                res.push_back(n);
    return res;
}
```
#### Follow-up Solution
What if we can have duplicates? We would use a hash map to track the count of each element. Or, we could use a two pointers approach to find common elements between pairs of arrays.

The `set_intersection` function, under the hood, uses two pointers.
**C++**
```cpp
vector<int> longestCommomSubsequence(vector<vector<int>>& a) {
    for (int i = 1; i < a.size(); ++i)
        a[0].erase(set_intersection(begin(a[0]), end(a[0]),
                begin(a[i]), end(a[i]), begin(a[0])), end(a[0]));
    return a[0];
}
```