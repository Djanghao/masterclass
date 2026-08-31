# Simple dfs

**Author:** demon_code
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4250374/](https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4250374/)

---

if we take any root we don't need to take any thing from his child components
if we not take root then we need to take atleast one element from each child subtree 

so 
  either ``` take root ``` or  ``` take minimum sum of edge values from each subtree  ```

```
class Solution {
public:
    
    vector<int>v;
    long long solve(int s,int pre,vector<vector<int>> &g)
    {
        
       
        long long ans=1e15;
        ans=v[s] ;// take it 
        
        //don't take it
        long long tem=0;
        int c=0;
        for(auto i: g[s])
        {
            if(i!=pre)
            {
                c++;
            tem+=solve(i,s,g);
            }
        }
        // cout<<ans<<endl;
        if(c)
        ans= min(ans, tem);
        return ans;
             
        
    }
    
    long long maximumScoreAfterOperations(vector<vector<int>>& edges, vector<int>& a) {
        int n=a.size();
        v=a;
        vector<vector<int>> g;
        g.resize(n);
        for(auto i:edges)
        {
            g[i[0]].push_back(i[1]);
            g[i[1]].push_back(i[0]);
        }
        long long sum=0;
        for(auto i: a) sum+=i;
        long long t=solve(0,-1,g);
        // cout<<t<<endl;
        return sum- t;
    }
};

```