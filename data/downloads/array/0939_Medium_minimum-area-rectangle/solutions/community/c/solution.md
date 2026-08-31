# Easy C++ solution || commented

**Author:** saiteja_balla0413
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-area-rectangle/solutions/1336321/](https://leetcode.com/problems/minimum-area-rectangle/solutions/1336321/)

---

```
class Solution {
public:
    int minAreaRect(vector<vector<int>>& p) {
        
        int res=INT_MAX;
        int len=p.size();
        
        //insert all points into a hash map
        unordered_map<int,unordered_set<int>> mp;
        for(int i=0;i<p.size();i++)
        {
            //insert the y value into x as key in mp
            mp[p[i][0]].insert(p[i][1]);
        }
        
        //now for every two points
        //check if they can form a rectange in which the two points are the diagonal vertices 
        int x1;
        int y1;
        int x2;
        int y2;
        for(int i=0;i<len;i++)
        {
            x1=p[i][0];
            y1=p[i][1];
            for(int j=i+1;j<len;j++)
            {
                x2=p[j][0];
                y2=p[j][1];
                //check if other two vertices exists to form a rectange
                if((mp.find(x1)!=mp.end() && mp[x1].count(y2) )  && (mp.find(x2)!=mp.end() &&  mp[x2].count(y1)))
                {
                    //update the result
                    int area=abs(x2-x1) * abs(y2-y1);
                    if(area!=0)
                        res=min(res,area);
                }
            }
        }
        return res==INT_MAX ? 0 :  res; 
        
    }
};
```
**Upvote if this helps you :)**