# 👉 C++⚡simple brute force⚡Beats 100% ✍

**Author:** loginmcs
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6123385/](https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6123385/)

---

```
class Solution {
public:
    int findMinimumTime(vector<int>& s, int K) {
        int res {std::numeric_limits<int>::max()};
        std::sort(s.begin(), s.end());
        do {
            int x {1};
            int curr {0};
            for (int i: s) {
                curr += (i -1) / x + 1; // fancy way to calculate ceil
                x += K;
            }
            if (curr < res) res = curr;
        } while (std::next_permutation(s.begin(), s.end()));
        return res; 
    }
};
```