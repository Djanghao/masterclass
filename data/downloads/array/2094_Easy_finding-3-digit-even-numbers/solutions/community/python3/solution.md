# Three Cycles

**Author:** votrubac
**Votes:** 76
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/1612150/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/1612150/)

---

**C++**
```cpp
vector<int> findEvenNumbers(vector<int>& digits) {
    vector<int> res;
    int cnt[10] = {};
    for (auto d : digits)
        ++cnt[d];
    for (int i = 1; i < 10; ++i)
        for (int j = 0; cnt[i] > 0 && j < 10; ++j)
            for (int k = 0; cnt[j] > (i == j) && k < 10; k += 2)
                if (cnt[k] > (k == i) + (k == j))
                    res.push_back(i * 100 + j * 10 + k);
    return res;
}
```
**Python 3**
For brevity, we check for `cnt` at the very end. It is faster to prune earier, but here we only need to check 450 numbers. 

```python
class Solution:
    def findEvenNumbers(self, digits: List[int]) -> List[int]:
        res, cnt = [], Counter(digits)
        for i in range(1, 10):
            for j in range(0, 10):
                for k in range(0, 10, 2):
                    if cnt[i] > 0 and cnt[j] > (i == j) and cnt[k] > (k == i) + (k == j):
                        res.append(i * 100 + j * 10 + k)
        return res
```