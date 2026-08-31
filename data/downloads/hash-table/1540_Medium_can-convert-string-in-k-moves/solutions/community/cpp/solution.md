# Easy C++ solution using Map

**Author:** diyajaiswal110420
**Votes:** 3
**Link:** [https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/1268156/](https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/1268156/)

---

```
class Solution {
public:
    bool canConvertString(string s, string t, int k) {
        
        map<int,int>mp;
        int n=s.length(),m=t.length();
        if(n!=m)
            return false;
        for(int i=0;i<n;i++)
        {
            int diff=int(t[i])-int(s[i]);
            if(diff<0)
                diff=26-abs(diff);
            if(diff>0)
                mp[diff]+=1;
        }
        bool ans=true;
        for(auto i:mp)
        {
            if(k<26*(i.second-1)+i.first)
                ans=false;
        }
        return ans;  
    }
};
```