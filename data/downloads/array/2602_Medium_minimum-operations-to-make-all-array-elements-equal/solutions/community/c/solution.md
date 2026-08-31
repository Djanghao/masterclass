# Prefix Sum

**Author:** votrubac
**Votes:** 25
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3341978/](https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3341978/)

---

To make all elements equal, we need to increase elements smaller than query `q`, and decrease larger ones.
    
We sort our array first, so we can find index `i` of first element larger than `q`.
    
Then, we use the prefix sum array to get:
- sum of smaller elements `ps[i]`.
- sum of larger elements `ps[-1] - ps[i]`.
    
The number of operations is:
- `q * i - ps[i]` for smaller elements.
- `ps[-1] - ps[i] - q * (n - i)` for larger elements.
    
**Python 3**
```python
class Solution:
    def minOperations(self, nums: List[int], queries: List[int]) -> List[int]:
        nums.sort()
        ps, n = [0] + list(accumulate(nums)), len(nums)
        splits = [(q, bisect_left(nums, q)) for q in queries]
        return [q * i - ps[i]  + (ps[-1] - ps[i]) - q * (n - i) for q, i in splits] 
```
**C++**
```cpp
vector<long long> minOperations(vector<int>& nums, vector<int>& queries) {
    vector<long long> ps{0}, res;
    sort(begin(nums), end(nums));
    for (int n : nums)
        ps.push_back(ps.back() + n);
    for (long long q : queries) {
        int i = upper_bound(begin(nums), end(nums), q) - begin(nums);
        res.push_back(q * i - ps[i] + (ps.back() - ps[i]) - q * (nums.size() - i));
    }
    return res;
}
```