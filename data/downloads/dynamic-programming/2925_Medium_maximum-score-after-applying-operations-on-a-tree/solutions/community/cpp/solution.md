# Easy and short solution using DFS

**Author:** deepak_4572
**Votes:** 51
**Link:** [https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4250364/](https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4250364/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem can be easily solved using DFS. Instead of calculating the maximum score we can also calculate the minimum score that is subtracted from the total sum of values.

# Approach
<!-- Describe your approach to solving the problem. -->
For every node we go to the child of that node and if that node is a leaf node we return its value and if that node is not a leaf node we return the minimum value of that node and the sum of value of its child nodes.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<vector<int>> adj;
    long long solve(int node,int parent,vector<int>& values){
        if(adj[node].size()==1 && node!=0)
            return values[node];
        long long sum = 0;
        for(auto it : adj[node]){
            if(it==parent)
                continue;
            sum += solve(it,node,values);
        }
        return min(sum,1LL*values[node]);
    }
    long long maximumScoreAfterOperations(vector<vector<int>>& edges, vector<int>& values) {
        int n = values.size();
        adj.resize(n);
        for(auto it : edges){
            adj[it[0]].push_back(it[1]);
            adj[it[1]].push_back(it[0]);
        }
        long long ans = 0;
        for(int i=0;i<n;i++)
            ans += values[i];
        long long x = solve(0,-1,values);
        
        return ans-x;
    }
};
```