# [C++] Short division

**Author:** tinfu330
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-9/solutions/2115784/](https://leetcode.com/problems/remove-9/solutions/2115784/)

---

recall how to convert decimal to binary

divide by 2:
16  -> r = 0
8    -> r = 0
4    -> r = 0
2    -> r = 0
1    -> r = 1
0 (end)

res is 0b10000

same applies for base-9 conversion

```
class Solution {
public:
    int newInteger(int n) {
        string resStr;
        while (n) {
            resStr += (n % 9) + '0';
            n /= 9;
        }
        reverse(resStr.begin(), resStr.end());
        return stoi(resStr);
    }
};
```