# C++ DP

**Author:** cjcoax
**Votes:** 0
**Link:** [https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/solutions/2441024/](https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/solutions/2441024/)

---

1. At each node, you can freely ignore edge from current node to the child
2. If at any node, you take the weight of the edge from current node to only one child you **cannot**
	a.  Take the edge from parent to current node
	b. Take the edge between current node and any of the other children.

If there are multiple children, you can only take one of them (and not take parent)
	

We do a DFS.
Based on #1 we are free to **not** take current node's to child edge, but take result from the child downwards
We store all above for the current node's children in an array called: *bestIfDirectEdgeFromCurToChildIsNotSelected*
We also accumulate all *bestIfDirectEdgeFromCurToChildIsNotSelected* s into a storage called *cumulative*.
A. If we **don't take any of *current node to children edges*** *cumulative* will be the answer. \u2705

Based on #2, we can take just **one of the current to child edge** if we have not taken parent to current node's edge.
If we take that one child, the result will be 
B. **cumulative - 
bestIfDirectEdgeFromCurToChildIsNotSelected[i] + 
cost of edge from cur to ith child + 
best cost we can get from ith child, without selecting any of ith child's children (since we have taken cur to child's edge)**  \u2705

Ultimate result will be max of (A, B)


```
long long dp[100001][2];
class Solution {
    vector<vector<pair<int, long long>>> tree;
    int n = 0;
    long long dfs(int cur, bool canTakeEdgeBetweenSelfAndChild) {
        if (dp[cur][canTakeEdgeBetweenSelfAndChild] == -1) {
            long long res = 0, cumulative = 0;
            vector<long long> bestIfDirectEdgeFromCurToChildIsNotSelected(tree[cur].size());
            for (int i = 0; i < tree[cur].size(); i++) {
                pair<int, long long> &edge = tree[cur][i];
                bestIfDirectEdgeFromCurToChildIsNotSelected[i] = dfs(edge.first, true);
                cumulative += bestIfDirectEdgeFromCurToChildIsNotSelected[i];
            }
            res = max(res, cumulative);
            if (canTakeEdgeBetweenSelfAndChild) {
                for (int i = 0; i < tree[cur].size(); i++) {
                    pair<int, long long> &edge = tree[cur][i];
                    long long weight = edge.second + dfs(edge.first, false);
                    weight += cumulative - bestIfDirectEdgeFromCurToChildIsNotSelected[i];
                    res = max(res, weight);
                }
            }
            dp[cur][canTakeEdgeBetweenSelfAndChild] = res;
        }
        return dp[cur][canTakeEdgeBetweenSelfAndChild];
    }
public:
    long long maxScore(vector<vector<int>>& edges) {
        n = edges.size();
        tree.resize(n);
        dp[0][0] = -1; dp[0][1] = -1;
        for (int i = 1; i < n; i++) {
            tree[edges[i][0]].push_back({i, edges[i][1]});
            dp[i][0] = -1;
            dp[i][1] = -1;
        }
        return dfs(0,1);
    }
};
```

Please upvote if it helped :)