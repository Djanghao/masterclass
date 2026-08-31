# Counter

**Author:** votrubac
**Votes:** 49
**Link:** [https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/1711316/](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/1711316/)

---

**Python 3**
```python
class Solution:
    def findLonely(self, nums: List[int]) -> List[int]:
        m = Counter(nums)
        return [n for n in nums if m[n] == 1 and m[n - 1] + m[n + 1] == 0]
```

**C++**
```cpp
vector<int> findLonely(vector<int>& nums) {
    unordered_map<int, int> m;
    vector<int> res;
    for (int n : nums)
        ++m[n];
    for (const auto [n, cnt] : m)
        if (cnt == 1 && m.count(n + 1) == 0 && m.count(n - 1) == 0)
            res.push_back(n);
    return res;
}
```