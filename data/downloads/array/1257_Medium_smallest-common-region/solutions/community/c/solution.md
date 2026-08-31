# C++ Beats 100% Time and Space

**Author:** makeavish
**Votes:** 7
**Link:** [https://leetcode.com/problems/smallest-common-region/solutions/430523/](https://leetcode.com/problems/smallest-common-region/solutions/430523/)

---

Simple solution using hashmap.

```
class Solution {
public:
    
    string findSmallestRegion(vector<vector<string>>& regions, string region1, string region2) {
        unordered_map<string,string> m;
        vector<string> vec1;
        vector<string> vec2;
        string t1 = region1;
        string t2 = region2;
        for(int i=0;i<regions.size();i++)
        {
            
            for(int j=1;j<regions[i].size();j++)
            {
                m[regions[i][j]]=regions[i][0]; // Map each region to it's Parent region.
            }
        }
        while(region1.size()!=0)
        {
            vec1.push_back(region1); // Insert all the parents to vector of region1
            region1 = m[region1];
        }
        while(region2.size()!=0)
        {
            vec2.push_back(region2); // Insert all the parents to vector of region1
            region2 = m[region2];
        }
        
        for(auto v1 : vec1)
        {
            for(auto v2 : vec2)
            {
                if(v2==v1)
                    return v1;    // Matching all the parents in increasing order
            }
        }
        return "anything";
    }
};
```