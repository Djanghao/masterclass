# Zeros in Prefix Sum

**Author:** votrubac
**Votes:** 14
**Link:** [https://leetcode.com/problems/ant-on-the-boundary/solutions/4673989/](https://leetcode.com/problems/ant-on-the-boundary/solutions/4673989/)

---

We compute the prefix sum.
    
When there is a zero in the prefix sum, that means the ant is back on the boundary.
    
Thus, we count and return the number of zeros in the prefix sum.

**Python 3**
```python
class Solution:
    def returnToBoundaryCount(self, nums: List[int]) -> int:
        return sum(n == 0 for n in accumulate(nums))
```

**C++**
```cpp
int returnToBoundaryCount(vector<int>& nums) {
    partial_sum(begin(nums), end(nums), begin(nums));
    return count(begin(nums), end(nums), 0);
}
```