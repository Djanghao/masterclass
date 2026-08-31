# C++ O(N), Easy to understand

**Author:** ee16b143
**Votes:** 21
**Link:** [https://leetcode.com/problems/jump-game-v/solutions/933268/](https://leetcode.com/problems/jump-game-v/solutions/933268/)

---

The idea is taken from [this post](https://leetcode.com/problems/jump-game-v/discuss/498379/Python-concise-actual-O(n)-(monotone-stacks-%2B-DFS)-(also-188ms-beats-100)/) . (Consider giving it a upvote as well if you like this post)

**So, what's our aim?**
Consider 2 positions, i and j. If the rules of game allow a jump from i to j, consider a edge (directed) from i to j. We can construct a graph like this. The aim of the problem is to find *maximum length path* in this graph. Once, someone gives us the graph, answer should be simply the maximum depth from any node/position.

**Simple way to construct the graph**
For each position, check d positions to the left and d position to the right. If the rules allow a jump, add a edge from current position to the other position. It is easy to see that this will take O(nd).

**Pruned / Smaller graph**
Consider an example , d = 3 and we [6, 2, 4, 10] is the input array. From 10, we have a edge to {6, 2, 4}, from 4 we have edge to {2}, from 6 we have edge to {4, 2} and from 2 we cannot go anywhere.
If you draw this graph on paper.
1. Clearly, 10-6-4-2 is the maximum path.
2. The path 10-2 is redundant because we have a longer path to 2 i.e. 10-4-2. 
3. Again, 10-4 is redundant because 10-6-4 exists. 

So, can we eliminate these reduntant edges? Well we can't eliminate all the edges leading to converging redundant paths, but we can reduce enough to make it O(n), which sounds good enough. 

**Stacks to help**
if we have 3 consecutive elements [a, b, c] such that a < b < c and d >= 2, then c->a should be redundant. We can eliminate c->a by considering by keeping only decreasing subsequence in the stack.
From this point, majority code and complexity would be self-explanatory.
```
    int dfs(vector<vector<int>>& G, vector<int>& dp, int x) {
        dp[x] = 1;
        for(int y : G[x]) {
            if(dp[y]) dp[x] = max(dp[x], 1 + dp[y]);
            else dp[x] = max(dp[x], 1 + dfs(G, dp, y));
        }
        return dp[x];
    }
    
    int maxJumps(vector<int>& arr, int d) {
        int n = arr.size();
        vector<vector<int>> G(n);
        stack<int> st;
        
		// Add edges from i going backwards
        for(int i = 0; i < n; i++) {
            while(st.size() && arr[st.top()] < arr[i]) {
                if(abs(i - st.top()) <= d) G[i].push_back(st.top());
                st.pop();
            }
            st.push(i);
        }
        
        while(st.size()) st.pop();
        
		// Add edges from i going forward
        for(int i = n-1; i >= 0; i--) {
            while(st.size() && arr[st.top()] < arr[i]) {
                if(abs(i - st.top()) <= d) G[i].push_back(st.top());
                st.pop();
            }
            st.push(i);
        }
        
        int ans = 1;
        vector<int> dp(n, 0);
        
		// Simple dfs to find maximum depth
        for(int i = 0; i < n; i++) {
            if(dp[i]) continue;
            ans = max(ans, dfs(G, dp, i));
        }
        
        return ans;
    }
