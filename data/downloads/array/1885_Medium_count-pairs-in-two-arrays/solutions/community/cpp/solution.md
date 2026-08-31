# C++ 3-line pure STL binary search O(nlogn) solution

**Author:** user1196gH
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5095394/](https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5095394/)

---

```
class Solution {
public:
    long long countPairs(vector<int>& a, vector<int>& b) {
        transform(a.begin(), a.end(), b.begin(), a.begin(), minus<>());
        sort(a.begin(), a.end());
        return accumulate(a.begin(), a.end(), 0LL, [&a, i = 0] (auto s, auto d) mutable {
            return s + distance(upper_bound(next(a.begin(), ++i), a.end(), -d), a.end());
        });
    }
};
```