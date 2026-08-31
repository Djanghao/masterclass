# nums[i] - i >= nums[j] - j

**Author:** votrubac
**Votes:** 71
**Link:** [https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/4250358/](https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/4250358/)

---

We just need to track non-decreasing numbers using a map.

However, we first need to subtract `i` from `nums[i]` to meet the problem's requirement:
- `nums[i] - nums[j] >= i - j` is equivalent to
- `nums[i] - i >= nums[j] - j`.

Our map `m` contains adjusted numbers (`nums[i] - i`) as a key, and `sum` of elements in the balanced subsequence that ends at that number.

> I also added BIT (Fenwick Tree) solution below, but it is slower because we need to compress numbers.

For a element `nums[i]`:
- We search the map for the largest key not greater than `nums[i] - i`.
- If we find such an element, we add its value to the `sum`.
- We insert `nums[i] - i` and `sum` to our map.
- We remove all larger keys with smaller sums.
	- If a larger key is a valid predecessor in a subsequence, than a smaller key is also a valid predecessor.
		- We need a valid predecessor with the largest sum.
	- In other words, we make sure that values in our map are always increasing.

**Complexity Analysis**
- Time: O(n log n):
	- We do the search `n` times.
	- We add and remove each element at most once.
- Memory: O(n) for the map.

**C++**
```cpp
long long maxBalancedSubsequenceSum(vector<int>& nums) {
    map<int, long long> m{{INT_MIN, 0}};
    for (int i = 0; i < nums.size(); ++i) {
        auto it = m.upper_bound(nums[i] - i);
        long long sum = nums[i] + max(0LL, prev(it)->second);
        m.insert_or_assign(it, nums[i] - i, sum);
        for (; it != end(m) && it->second <= sum;)
            m.erase(it++);  
    }
    return rbegin(m)->second;
}
```
We can consider only positive numbers to improve the runtime.
```cpp
long long maxBalancedSubsequenceSum(vector<int>& nums) {
    map<int, long long> m{{INT_MIN, 0}};
    for (int i = 0; i < nums.size(); ++i)
        if (nums[i] > 0) {
            auto it = m.upper_bound(nums[i] - i);
            long long sum = nums[i] + prev(it)->second;
            m.insert_or_assign(it, nums[i] - i, sum);
            for (; it != end(m) && it->second <= sum;)
                m.erase(it++);  
        }
    return m.size() > 1 ? rbegin(m)->second : *max_element(begin(nums), end(nums));
} 
```

**Python 3**
List insert and delete operations in Python are apparently fast enough for this solution to be accepted.
```python
class Solution:
    def maxBalancedSubsequenceSum(self, nums: List[int]) -> int:
        m = [(-inf, 0)]
        for i, n in enumerate(nums):
            if n > 0:
                p = bisect_right(m, (n - i, inf))
                m.insert(p, (n - i, n + m[p - 1][1]))
                while p + 1 < len(m) and m[p + 1][1] < m[p][1]:
                    del m[p + 1]
        return m[-1][1] if len(m) > 1 else max(nums)
```

## BIT (Fenwick Tree)
We need to compress `nums` before we can use BIT. Because of this, this solution is a bit slower than above.
**C++**
```cpp
long long maxBalancedSubsequenceSum(vector<int>& nums) {
    map<int, int> comp;
    for (int i = 0; i < nums.size(); ++i)
        if (nums[i] > 0)
            comp[nums[i] - i] = 0;
    if (comp.empty())
        return *max_element(begin(nums), end(nums));
    int cnt = 0, sz = comp.size();
    vector<long long> t(sz + 1);
    for (auto &[_, idx] : comp)
        idx = cnt++;
    for (int i = 0; i < nums.size(); ++i)
        if (nums[i] > 0) {
            long long n = comp[nums[i] - i], val = 0;
            for (int bi = n + 1; bi > 0; bi -= bi & -bi)
                val = max(val, t[bi]);
            for (int bi = n + 1; bi < sz + 1; bi += bi & -bi)
                t[bi] = max(t[bi], val + nums[i]);
        }
    return *max_element(begin(t), end(t));
}
```