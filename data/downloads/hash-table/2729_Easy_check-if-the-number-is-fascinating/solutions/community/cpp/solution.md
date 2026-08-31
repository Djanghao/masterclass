# 3 lines || C++ || Easy

**Author:** Shrikanta8
**Votes:** 20
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3622291/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3622291/)

---


# Code
```
class Solution {
public:
    bool isFascinating(int n) {
        string str= to_string(n)+to_string(2*n)+to_string(3*n);
        sort(str.begin(),str.end());
        return str == "123456789";
    }
};
```