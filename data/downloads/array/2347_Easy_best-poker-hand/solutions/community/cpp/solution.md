# CPP | Easy

**Author:** amirkpatna
**Votes:** 9
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/2322351/](https://leetcode.com/problems/best-poker-hand/solutions/2322351/)

---

```
class Solution {
public:
    string bestHand(vector<int>& r, vector<char>& s) {
        vector<int> v(26);
        unordered_map<int,int> mp;
        for(char c:s)v[c-'a']++;
        for(int x:r)mp[x]++;
        for(int x:v){
            if(x>=5)return "Flush";
        }
        bool ans=false;
        for(auto it:mp){
            if(it.second>=2)ans=true;
            if(it.second>=3) return "Three of a Kind";
        }
        if(ans)return "Pair";
        return "High Card";
    }
};
```