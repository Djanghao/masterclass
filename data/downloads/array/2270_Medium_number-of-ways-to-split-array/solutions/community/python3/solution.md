# Prefix Sum

**Author:** votrubac
**Votes:** 16
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-array/solutions/2038567/](https://leetcode.com/problems/number-of-ways-to-split-array/solutions/2038567/)

---

**Python 3**
```python
class Solution:
    def waysToSplitArray(self, n: List[int]) -> int:
        n = list(accumulate(n))
        return sum(n[i] >= n[-1] - n[i] for i in range(len(n) - 1))
```

**C++**
We could use a prefix sum, but in C++ we would need to store it in another `long long` vector (because of overflow). So, we are using a running sum here for efficiency.
```cpp
int waysToSplitArray(vector<int>& n) {
    long long right = accumulate(begin(n), end(n), 0LL), left = 0, res = 0;
    for (int i = 0; i < n.size() - 1; ++i) {
        left += n[i];
        right -= n[i];
        res += left >= right;
    }
    return res;
}
```