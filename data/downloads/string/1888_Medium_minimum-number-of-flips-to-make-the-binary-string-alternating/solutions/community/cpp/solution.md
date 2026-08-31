# 90% FASTER || C++ || SLIDING WINDOW

**Author:** yash___sharma_
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/3163749/](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/3163749/)

---

```
class Solution {
public:
    int minFlips(string s) {
        int ans = INT_MAX;
        int n = s.length(),x=0,y=0;
        for(int i = 0; i < n*2; i++){
            x += (s[i%n]-'0' != (i%2));
            y += (s[i%n]-'0' != (1-i%2));
            if(i>=n-1){
                if(i>=n){
                    x -= (s[i-n] != ((i-n)%2)+'0');
                    y -= (s[i-n] != (1-(i-n)%2)+'0');
                }
                ans = min({ans,x,y});
            }
        }
        return ans;
    }
};
```