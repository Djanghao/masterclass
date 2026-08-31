# Easy & Clear solution 0ms (100%) c++

**Author:** moazmar
**Votes:** 7
**Link:** [https://leetcode.com/problems/thousand-separator/solutions/992473/](https://leetcode.com/problems/thousand-separator/solutions/992473/)

---

```
class Solution {
public:
    string thousandSeparator(int n) {
        string res="";
        if(n==0)return "0";
        int count=1;
        while(n>0){
            if(count%4==0)res="."+res;
            else {
                res=to_string(n%10)+res;
                n/=10;
            }
            count++;
        }
        return res;
    }
};
```