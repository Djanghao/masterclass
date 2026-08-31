# easy to understand

**Author:** choudharymanojloul
**Votes:** 6
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/1874353/](https://leetcode.com/problems/stone-game-vi/solutions/1874353/)

---

```
Like if you understand
class Solution {
public:
    static bool cmp(pair<int,int> p1,pair<int,int> p2)
    {
        if(p1.second==p2.second)
            return p1.first<p2.first;
        return p1.second>p2.second;
    }
    int stoneGameVI(vector<int>& a, vector<int>& b) {
       
        int n=a.size();
        int suma=0,sumb=0;
        
        vector<pair<int,int>> v;
        
        for(int i=0;i<n;++i)
        {
            v.push_back({i,a[i]+b[i]});
        }
        sort(v.begin(),v.end(),cmp);
        
        for(int i=0;i<n;++i)
        {
            if(i%2==0)
                suma+=a[v[i].first];
            else
                sumb+=b[v[i].first];
        }
        
        if(suma>sumb)
            return 1;
        else if(suma==sumb)
            return 0;
        return -1;
    }
};
```