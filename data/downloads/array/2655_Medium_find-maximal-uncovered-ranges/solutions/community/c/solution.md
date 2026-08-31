# [C++] Map

**Author:** axelu
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-maximal-uncovered-ranges/solutions/3462107/](https://leetcode.com/problems/find-maximal-uncovered-ranges/solutions/3462107/)

---

```
class Solution {
public:
    vector<vector<int>> findMaximalUncoveredRanges(int n, vector<vector<int>>& ranges) {
        
        map<int,int> mp;
        
        for(auto& v: ranges) {
            ++mp[v[0]];
            --mp[v[1]+1];
        }
        
        vector<vector<int>> ans;
        
        int curr = 0;
        int start = 0;
        
        for(auto it = mp.begin(); it != mp.end(); ++it) {
            
            if( curr == 0 && it->first > 0 ) {
                // an uncovered range is ending
                ans.push_back({start, it->first - 1});
            }
            
            curr += it->second;
            
            if( curr == 0 ) {
                // an uncovered range is starting
                start = it->first;
            }
        }
        
        // finish up
        if( start < n )
            ans.push_back({start, n-1});
        
        return ans;
    }
};
```