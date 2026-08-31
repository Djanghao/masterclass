# Prefix Sum

**Author:** votrubac
**Votes:** 25
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2492737/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2492737/)

---

The minimal sum of any `k` elements of the array is the sum of `k` smallest elements.

So, we sort the array first. Then, we apply prefix sum so that the array `i`-th element of the array contains the minimal sum of `i` elements.

Finally, we use a binary search to find the maximum number of elements for each query.

**Python 3**
```python
class Solution:
    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        nums = list(accumulate(sorted(nums)))
        return [bisect_right(nums, q) for q in queries]
```

**Java**
```java
public int[] answerQueries(int[] nums, int[] queries) {
    Arrays.sort(nums);
    Arrays.parallelPrefix(nums, Integer::sum);
    for (int i = 0; i < queries.length; ++i) {
        int pos = Arrays.binarySearch(nums, queries[i] + 1);
        queries[i] = pos < 0 ? ~pos : pos;
    }
    return queries;
}
```
**C++**
```cpp
vector<int> answerQueries(vector<int>& nums, vector<int>& queries) {
    sort(begin(nums), end(nums));
    partial_sum(begin(nums), end(nums), begin(nums));
    transform(begin(queries), end(queries), begin(queries), [&](int q){ 
        return upper_bound(begin(nums), end(nums),  q) - begin(nums);
    });
    return queries;
}
```