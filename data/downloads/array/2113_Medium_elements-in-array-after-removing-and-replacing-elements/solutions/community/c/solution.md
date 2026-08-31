# O(n)

**Author:** votrubac
**Votes:** 3
**Link:** [https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/1642230/](https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/1642230/)

---

The array state repeats every `2 * n` minutes. For the first `n` minutes, we need to apply a `shift` to the index (one per minute).

For another `n` minutes, the index corresponds to the position (`shift` is zero). We just need to check if that element is already "there" (index is less than the number of minutes).

**C++**
```cpp
vector<int> elementInNums(vector<int>& nums, vector<vector<int>>& queries) {
    int sz = nums.size();
    vector<int> res;
    for (auto &q : queries) {
        int time = q[0] % (sz * 2), shift = time < sz ? time : 0, i = q[1];
        res.push_back(i >= abs(time - sz) ? -1 : nums[i + shift]);
    }
    return res;
}
```
**Python 3**
One-liner just for fun.
```python
class Solution:
    def elementInNums(self, n: List[int], queries: List[List[int]]) -> List[int]:
        return [-1 if i >= abs(t - len(n)) else n[i + (t if t < len(n) else 0)] for t, i in [(t % (2 * len(n)), i) for t, i in queries]]
```