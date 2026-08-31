# C++ | Priority Queue | Easy Code

**Author:** ankit4601
**Votes:** 26
**Link:** [https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/2292757/](https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/2292757/)

---

Please Upvote :)

```
class Solution {
public:
    vector<int> smallestTrimmedNumbers(vector<string>& nums, vector<vector<int>>& queries) {
        vector<int> res;
        for(auto x:queries)
        {
            priority_queue<pair<string,int>> v;
            for(int i=0;i<nums.size();i++)
            {
                int t=nums[i].length()-x[1];
                string p=nums[i].substr(t,x[1]);
                if(v.size()<x[0])
                    v.push({p,i});
                else
                {
                    if(v.top().first > p)
                    {
                        v.pop();
                        v.push({p,i});
                    }
                }
            }
            int val=v.top().second;
            res.push_back(val);
        }
        return res;
    }
};
```