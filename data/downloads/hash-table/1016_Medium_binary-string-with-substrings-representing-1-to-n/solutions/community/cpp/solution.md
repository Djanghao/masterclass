# [ C++ ] [ Bitset ] [ Easier Implementation ]

**Author:** Sosuke23
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/3449667/](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/3449667/)

---

# Code
```
class Solution {
public:
    bool queryString(string s, int n) {
        for(int i=1;i<=n;i++){
            bitset<32> b(i);
            string t=b.to_string();
            int one=t.find('1');
            string p=t.substr(one);
            if(s.find(p)==-1){
                return false;
            }
        }
        return true;
    }
};
```