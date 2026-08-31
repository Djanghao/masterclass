# ✅✅ C++ | Geometry | Both Versions Pass ✅✅

**Author:** jk20
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4671782/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4671782/)

---

**Approach :**

* We start with checking for all pairs if they are valid, i.e. Chisato and Takina form a valid pair of points or not.

* Post then if they form a valid pair of points we store them in data structure. This is the best way so as to reduce complexity from **O ( N^3 ) to O ( N^2  + N^2 )**.

*  Now then we can check for each point if it is inside the rectangle formed with the above two points.

```
class Solution {
public:
    bool isPointInsideRect(auto i,auto j,auto k){
        int x1 = i.first;
        int y1 = i.second;
        
        if(x1>=j.first and x1<=k.first and y1>=k.second and y1<=j.second)
            return true;
        
        return false;
    }
    int numberOfPairs(vector<vector<int>>& points) {
        
        int ptr = 0;
        vector<pair<int,int>>temp;
        vector<pair<pair<int,int>,pair<int,int>>>toCheck;
        
        for(auto i:points){
                temp.push_back({i[0],i[1]});
        }
        
        for(int i=0;i<points.size();i++){
            for(int j=0;j<points.size();j++){
                if(i!=j){
                    if(temp[j].first>=temp[i].first and temp[j].second<=temp[i].second){
                        bool possible = false;
                        toCheck.push_back({temp[i],temp[j]});

                    }
                }
            }
        }
        
        for(auto itr:toCheck){
            bool res = true;
            for(int i=0;i<points.size();i++){
                if(itr.first!=temp[i] and itr.second!=temp[i] and isPointInsideRect(temp[i],itr.first,itr.second)){
                    res = false;
                    break;
                }
            }
            if(res) ptr++;
        }
        
        return ptr;
    }
};
```

**Time Complexity : O ( N^2 + N^2 )**