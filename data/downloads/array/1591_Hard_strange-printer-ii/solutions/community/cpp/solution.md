# c++ solution using topo sort

**Author:** dilipsuthar60
**Votes:** 2
**Link:** [https://leetcode.com/problems/strange-printer-ii/solutions/1765673/](https://leetcode.com/problems/strange-printer-ii/solutions/1765673/)

---

```
class Solution
{
public:
    bool isPrintable(vector<vector<int>>& mat)
    {
        int n=mat.size();
        int m=mat[0].size();
        vector<int>dp[65];
        vector<int>ind(65,0);
        unordered_set<int>uni;
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<m;j++)
            {
                uni.insert(mat[i][j]);
            }
        }
        for(auto it:uni)
        {
            int min_x,min_y,max_x,max_y;
            min_x=min_y=INT_MAX;
            max_x=max_y=INT_MIN;
            for(int i=0;i<n;i++)
            {
                for(int j=0;j<m;j++)
                {
                    if(mat[i][j]==it)
                    {
                        min_x=min(min_x,i);
                        max_x=max(max_x,i);
                        min_y=min(min_y,j);
                        max_y=max(max_y,j);
                    }
                }
            }
            if(min_x==INT_MAX)
            {
                continue;
            }
            unordered_set<int>d;
            for(int i=min_x;i<=max_x;i++)
            {
                for(int j=min_y;j<=max_y;j++)
                {
                    if(mat[i][j]!=it)
                    {
                        d.insert(mat[i][j]);
                    }
                }
            }
            for(auto t:d)
            {
                dp[it].push_back(t);
                ind[t]++;
            }
        }
            queue<int>q;
            for(auto it:uni)
            {
                if(ind[it]==0)
                {
                    q.push(it);
                }
            }
             int count=0;
            while(q.size())
            {
                auto temp=q.front();
                q.pop();
                count++;
                for(auto it:dp[temp])
                {
                    if(--ind[it]==0)
                    {
                        q.push(it);
                    }
                }
            }
        return (count==uni.size());
    }
};
```