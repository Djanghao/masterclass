# Simply call commonBits twice for each bit.

**Author:** cpcs
**Votes:** 6
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/solutions/4934800/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/solutions/4934800/)

---

# Intuition
Call commonBits with 1, 2, 4, 8, .... 2 ^ m.

# Approach

Call commonBits with 1, 2, 4, 8, .... 2 ^ m, each mask is a power of 2 and has only 1 set bit. Consider the corresponding bit in the hidden number,
if we call commont bits twice,
(1) If the corresponding bit in the hidden number is 0, after the first call the bit will be set (and after the 2nd call, it will change back), so the second call's return value will be larger.

(2) If the corresponding bit in the hidden number is 1, after the first call the bit will be unset (and after the 2nd call, it will change back), so the second call's return value will be smaller.

Use this way to get each bit.

# Complexity
- Time complexity:
O(30)

- Space complexity:
O(1)

# Code
```
/** 
 * Definition of commonBits API.
 * int commonBits(int num);
 */

class Solution {
public:
    int findNumber() {
        int r = 0;
        for (int i = 1; i < 1073741824; i <<= 1) {
            if (commonBits(i) > commonBits(i)) {
                r |= i;
            }
        }
        return r;
    }
};
```