# [C++] O(1), bit check.

**Author:** lovebaonvwu
**Votes:** 1
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/4797231/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/4797231/)

---


```
/** 
 * Definition of commonSetBits API.
 * int commonSetBits(int num);
 */

class Solution {
public:
    int findNumber() {
        int ans = 0;
        for (int i = 0; i < 31; ++i) {
            if (commonSetBits(1 << i)) {
                ans |= 1 << i;
            }
        }

        return ans;
    }
};
```