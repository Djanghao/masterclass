# C++ O(N) counting

**Author:** esamokhov
**Votes:** 24
**Link:** [https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/671835/](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/671835/)

---

```
class Solution {
    static constexpr int SIZE = 1001;
public:
    bool canBeEqual(vector<int>& target, vector<int>& arr) {
        if (target.size() != arr.size()) {
            return false;
        }
        int count[SIZE] = {0};
        for (int i = 0; i < target.size(); ++i) {
            count[target[i]]++;
            count[arr[i]]--;
        }
        for (int i = 0; i < SIZE; ++i) {
            if (count[i] != 0) {
                return false;
            }
        }
        return true;
    }
};
```