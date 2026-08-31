# CPP | Easy | O(nlogn) Time | O(n) Space

**Author:** amirkpatna
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-excellent-pairs/solutions/2324673/](https://leetcode.com/problems/number-of-excellent-pairs/solutions/2324673/)

---

Intuition : Sum of bits will remain constant 
```
typedef long long ll;
class Solution {
public:
    long long countExcellentPairs(vector<int>& v, int k) {
        ll ans=0;
        sort(v.begin(),v.end());
        v.resize(unique(v.begin(),v.end())-v.begin());
        int n=v.size();
        vector<ll> dp(n);
        for(int i=0;i<n;i++){
            dp[i]=__builtin_popcount(v[i]);
        }
        sort(dp.begin(),dp.end());
        for(int i=0;i<n;i++){
            ans+=n-(lower_bound(dp.begin(),dp.end(),k-dp[i])-dp.begin());
        }
        return ans;
    }
};
```