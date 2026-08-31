# C++ | Sorting

**Author:** aman282571
**Votes:** 20
**Link:** [https://leetcode.com/problems/minimum-time-difference/solutions/1293481/](https://leetcode.com/problems/minimum-time-difference/solutions/1293481/)

---

```
class Solution {
public:
    int findMinDifference(vector<string>& timePoints) {
        int m=timePoints.size();
        vector<int>time;
        
        for(int i=0;i<m;i++)
           time.push_back(stoi(timePoints[i].substr(0,2))*60 +stoi(timePoints[i].substr(3,2)));
        
        sort(time.begin(),time.end());
        int ans=INT_MAX;
        
        for(int i=1;i<m;i++)
         ans=min(time[i]-time[i-1],ans);
        
        ans=min(ans,time[0]-time[m-1]+24*60);
        return ans;
        
    }
};
```
Do UPVOTE if it helps :)