# Nice and Beautiful Solution: Two Pointer C++/ Java Solution

**Author:** bread_Winner
**Votes:** 1
**Link:** [https://leetcode.com/problems/one-edit-distance/solutions/3117000/](https://leetcode.com/problems/one-edit-distance/solutions/3117000/)

---

```
class Solution {
public:
    bool isOneEditDistance(string s, string t) {
        int sLen = s.size(), tLen = t.size();
        
        int i=0, j=0, count = 0;
        
        while(i<sLen && j<tLen){
            if(s[i] != t[j]){
                count++;
                if(sLen>tLen) i++;
                else if(sLen< tLen)j++;
                else{
                    i++; j++;
                }
            } else{
                i++;
                j++;
            }
            
        }
        
        while(i<sLen) {
            i++;
            count++;
        }
        
        while(j<tLen) {
            j++;
            count++;
        }
        
        return count == 1;
    }
};
```