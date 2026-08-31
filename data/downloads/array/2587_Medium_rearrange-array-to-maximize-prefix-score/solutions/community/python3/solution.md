# Prefix Sum of Sorted Array

**Author:** votrubac
**Votes:** 11
**Link:** [https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3286272/](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3286272/)

---

**Python 3**
```python
class Solution:
    def maxScore(self, nums: List[int]) -> int:
        return sum(n > 0 for n in accumulate(sorted(nums, reverse=True)))
```
**C++**
```cpp
int maxScore(vector<int>& n) {
    sort(begin(n), end(n), greater<>());
    for (long long sum = 0, i = 0; i <= n.size(); sum += n[i++])
        if (i == n.size() || sum + n[i] <= 0)
            return i;
    return 0;
}
```