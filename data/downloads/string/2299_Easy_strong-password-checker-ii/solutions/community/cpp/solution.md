# C++ || easy to understand

**Author:** aniketbasu
**Votes:** 29
**Link:** [https://leetcode.com/problems/strong-password-checker-ii/solutions/2138783/](https://leetcode.com/problems/strong-password-checker-ii/solutions/2138783/)

---

```
class Solution {
public:
    bool strongPasswordCheckerII(string p) {
        if(size(p) < 8) return false;
        bool low = false , upper = false ,digit = false ,special = false;
        for(auto c : p){
            if(c>='a' and c<='z') low = true;
            else if(c>='A' and c <='Z') upper = true;
            else if(isdigit(c)) digit = true;
            else special = true;
        }
        //Check the 6th condition
        for(int i=0;i+1<size(p);i++) if(p[i] == p[i+1]) return false;
        if(low and upper and digit and special) return true;
        return false;
    }
};
```