# Very Simple and Easy to Understand Solution

**Author:** kreakEmp
**Votes:** 9
**Link:** [https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3084017/](https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3084017/)

---



```
/*
Check if there is atleast one 1 in both the strings or not, if atleast one 1 in both the string then its true other wise flase.
Corner case: even both of the string have no 1 and all zeor in both cases then also it will be true.
*/

class Solution {
public:
    bool makeStringsEqual(string s, string target) {
        int t = 0, a = 0;
        for(auto c: s) a+=(c - '0');
        for(auto c: target) t+=(c - '0');
        if(a > 0 && t > 0 || a == 0 && t == 0) return true;
        return false;
    }
};
```

Here is an article of my recent interview experience at Amazon, you may like : 
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted