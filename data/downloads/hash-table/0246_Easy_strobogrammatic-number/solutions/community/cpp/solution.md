# C++ unordered_map

**Author:** jianchao-li
**Votes:** 34
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/67207/](https://leetcode.com/problems/strobogrammatic-number/solutions/67207/)

---

A strobogrammatic number can only have `0`, `1`, `6`, `8` and `9`. And the digits in the two ends need to match each other. The match relationship is defined in an `unordered_map`.

```cpp
class Solution {
public:
    bool isStrobogrammatic(string num) {
        unordered_map<char, char> lut{{'0', '0'}, {'1', '1'}, {'6', '9'}, {'8', '8'}, {'9', '6'}};
        for (int l = 0, r = num.size() - 1; l <= r; l++, r--) {
            if (lut.find(num[l]) == lut.end() || lut[num[l]] != num[r]) {
                return false;
            }
        }
        return true;
    }
};
```