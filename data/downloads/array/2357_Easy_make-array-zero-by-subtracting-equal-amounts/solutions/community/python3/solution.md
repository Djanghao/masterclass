# Set

**Author:** votrubac
**Votes:** 34
**Link:** [https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/2357747/](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/2357747/)

---

Each unique number (except 0) needs one operation.

**Python 3**
```python
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        return len(set(nums) - {0})
```
**C++**
```cpp
int minimumOperations(vector<int>& nums) {
    return set<int>(begin(nums), end(nums)).size() - (count(begin(nums), end(nums), 0) > 0);
}
```