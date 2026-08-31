# DP solution with memoization and bitmasks [With C++ code] [20 ms runtime]

**Author:** cjchirag7
**Votes:** 87
**Link:** [https://leetcode.com/problems/parallel-courses-ii/solutions/719159/](https://leetcode.com/problems/parallel-courses-ii/solutions/719159/)

---

# **Approach**
- Use masks to represent the set of courses (nodes) taken, till now. If a bit in mask is 1, it means that course is taken.
- For a particular mask, calculate the indegree (pre-requesite) of each node, without including the edges from the nodes that are already taken. 
- Now, at any stage, we can only chose any *subset* (submask) of the nodes with indegree as 0. This generates *overlapping subproblems*, which can be easily handled using DP with bitmasking.

**For optimisation**
Observe that there are 2 cases :
Let p = number of nodes with indegree 0 at any stage

Case I.  p > k 
In this case, it is optimal to take a subset of nodes having exactly k nodes.

Case II.  p < k 
In this case, it is optimal to take all the p nodes.

# **C++ Code**
```
class Solution {
    vector<vector<int> > adj;  // adjacency list
    int n;
    int k;
    vector<int> dp;
    int solve(int mask)
    {
        if(mask==((1<<n)-1))
        {  // All courses are taken
            return 0;
        }
        if(dp[mask]!=-1)   // memoization
            return dp[mask];
        vector<int> indeg(n,0);
        for(int i=0; i<n; i++)
        {
            if(mask&(1<<i))
                continue;
            for(auto it: adj[i])
            {
                indeg[it]++;
            }
        }
        int temp=0;  // For a mask of all nodes with 0-indegree
        for(int i=0; i<n; i++)
        {
            if(indeg[i]==0&&!(mask&(1<<i)))
            {
                temp=temp|(1<<i);
            }
        }
        int j=temp;
        int cnt=__builtin_popcount(j);  // count of nodes with 0-indegree

        int ans=n+1;  // ans will be 'n' in the worst case, so take (n+1) as infinity 
        if(cnt>k)
        {
            for( ; j ; j=(j-1)&temp )  // iterate through all submasks of temp
            {
                cnt=__builtin_popcount(j);  
                if(cnt!=k)   
                    continue;
                ans=min(ans,1+solve(mask|j));                   
            }
        }
        else
        {
            ans=min(ans,1+solve(mask|j));
        }
        return dp[mask]=ans;
    }
    
    public:
    int minNumberOfSemesters(int N, vector<vector<int>>& d, int K) {
        n=N;
        k=K;
        dp.assign(1<<n,-1);
        adj.clear();
        adj.resize(n);
        for(int i=0; i<d.size(); i++)
        {
            d[i][0]--;
            d[i][1]--;
            adj[d[i][0]].push_back(d[i][1]);
        }
        return solve(0);
    }
};
```