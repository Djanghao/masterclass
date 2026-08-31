# C++ O(N) Time & O(1) Space Neat

**Author:** shtanriverdi
**Votes:** 9
**Link:** [https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/544283/](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/544283/)

---

```
class Solution {
public:
    int numTimesAllBlue(vector<int> &light) {
        int rIdx = 0, cnt = 0, openCnt = 0;
        for (int i = 0; i < light.size(); i++) {
            openCnt++;
            rIdx = max(rIdx, light[i]);
            if (openCnt == rIdx) {
                cnt++;
            }
        }
        return cnt;
    }
};
```