# ✅✅✅ C++ Solution with Simple Iteration & Very Easy to Understand

**Author:** kreakEmp
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2897979/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2897979/)

---

<b>Up vote if you like the solution
```
/*
Simple check write a coverstion function to get the value, where need to check each char if its a digit or not.
If digit then return the length as the value, other wise keep converting it into a number.
Take max value a the answer among all strings.
*/
class Solution {
public:
    int findValue(string s){
        int r = 0, i = 0;
        while(i < s.size()){
            if(s[i] < '0' || s[i] > '9') return s.size();
            r = r * 10 + s[i++] - '0';
        }
        return r;
    }
    
    int maximumValue(vector<string>& strs) {
        int ans = 0;
        for(auto s: strs) ans = max(ans, findValue(s));
        return ans;
    }
};
```