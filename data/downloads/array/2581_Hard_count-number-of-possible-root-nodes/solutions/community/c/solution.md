# c++ solution

**Author:** dilipsuthar60
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3256777/](https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3256777/)

---

```
class Solution {
public:
    vector<int>dp[100005];
    set<pair<int,int>>s;
    int k;
    int  find(int node,int p=-1)
    {
        int count=0;
        for(auto it:dp[node])
        {
            if(it!=p)
            {
                count+=s.count({node,it})+find(it,node);
            }
        }
        return count;
    }
    void find1(int node,int value,int &total,int p=-1)
    {
        if(value>=k)
        {
            total++;
        }
        for(auto it:dp[node])
        {
            if(it!=p)
            {
                find1(it,value-s.count({node,it})+s.count({it,node}),total,node);
            }
        }
    }
    int rootCount(vector<vector<int>>& edges, vector<vector<int>>& g, int K) 
    {
        k=K;
        for(auto it:g)
        {
            s.insert({it[0],it[1]});
        }
        for(auto it:edges)
        {
            dp[it[0]].push_back(it[1]);
            dp[it[1]].push_back(it[0]);
        }
        int total=0;
        int value=find(0);
        find1(0,value,total);
        return total;
    }
};
```