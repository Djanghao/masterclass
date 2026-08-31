# This problem is easier than you think. C++ DP.

**Author:** RadecX1
**Votes:** 24
**Link:** [https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/solutions/4220574/](https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/solutions/4220574/)

---

# Intuition
The question clearly mentions two options at every node. So obviously it hints DP. Comment below if you do have any doubts in it, and upvote so that others can find this solution.


# Approach
At every node we have two options:
1. This option is quite simple. You can add coins[i]-k to the answer.

2. This option is little tricky. If you add coins[i]/2 to the answer, all its children's coins value must get to half. For this we will create a dp state to handle this. Let's call this state 'type'. We will increment type every time we choose to go this route.  If value of type variable is n, then it means n parents of current node must have taken this route before the current node. So we must divide the value of coins[i] by (2^type) to get the actual value of current node.
# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
public:
    int dp[100005][14];
    int find(vector<vector<int>>&graph,int source,int parent, vector<int>&coins,int k,int type){
        int ans=0;
        if(dp[source][type]!=-1)return dp[source][type];

        //Value of the node is determined by dividing it 2^(Number of second routes taken)
        int val = coins[source]/(1<<type);

        //pick1 denotes the first route
        int pick1 = val-k;

        //pick2 denotes the second route
        int pick2 = floor(val/2.0);

        for(auto it:graph[source]){
            if(parent==it)continue;
            pick1 +=find(graph,it,source,coins,k,type);


            if(type<13) // No need to increment beyond 14 because 10^4/2^14 =0. So anything beyond that will be zero
            pick2 +=find(graph,it,source,coins,k,type+1);
        }
        return dp[source][type] = max(pick1,pick2);
    }
        
        
    int maximumPoints(vector<vector<int>>& edges, vector<int>& coins, int k) {
        memset(dp,-1,sizeof(dp));
        vector<vector<int>>graph(edges.size()+1);
        for(auto it:edges){
            graph[it[0]].push_back(it[1]);
            graph[it[1]].push_back(it[0]);
        }
        return find(graph,0,-1,coins,k,0);
    }
};
```