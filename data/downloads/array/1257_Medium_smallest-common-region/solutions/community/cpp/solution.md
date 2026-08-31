# Simple solution with visited set

**Author:** 3aarongan
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-common-region/solutions/5791731/](https://leetcode.com/problems/smallest-common-region/solutions/5791731/)

---


```cpp []
class Solution {
public:
    string findSmallestRegion(vector<vector<string>>& regions, string region1, string region2) {
        map<string,string> pare;
        for(vector<string>& v : regions){
            for(int i = 1; i < v.size(); i++){
                pare[v[i]] = v[0];
            }
        }
        set<string> visited;
        while(pare.count(region1) > 0){
            visited.insert(region1);
            region1 = pare[region1];
        }
        visited.insert(region1);
        while(visited.count(region2) == 0){
            region2 = pare[region2];
        }
        return region2;
    }
};
```