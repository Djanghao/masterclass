# C++ DFS | one pass | O(n + edge) | beats 100%

**Author:** jason7708
**Votes:** 68
**Link:** [https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3052985/](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3052985/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This question is similar to [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) but a little different.  
   
The difference between this question and 124 are:  
1. Only positive values
2. Not a binary tree
3. The answer is not the maximum path but the path that subtracts the smaller endpoint.

Here are some key points to solve this problem :
1. Consider question 124 with only positive nodes : 
   - The DFS returns the maximum path from the current root to one of the leaf nodes.
   - At each subtree, we update the final answer with left subtree return value (which is the max path sum) + current root node value + right subtree return value.

2. We need to consider all subtrees instead of just left and right.
3. Since we don't know which side of endpoint is the minimum we should remove and if the path is still maximum after we remove the endpoint, we maintain another value, which is the path sum from root to leaf but minus its leaf node, and try both two cases.


In the for loop we iterate all subtrees and update the answer with two cases:
1. Maximum path sum from previous subtrees + path sum without leaf node from current subtree
2. Maximum path sum without leaf node from previous subtrees + path sum from current subtree

Design DFS that returns two values:
1. maximum path sum, we call it `max_w_leaf` (maximum with leaf)
2. maximum (path sum - leaf node), we call it `max_wo_leaf` (maximum without leaf)

# Complexity
- Time complexity: $$O(n + edge)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: $$O(n + edge)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    long long maxOutput(int n, vector<vector<int>>& edges, vector<int>& price) {
        vector<vector<int>> graph(n);
        for(const auto& edge : edges) {
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
        }
        long long ans = 0LL;
        auto dfs = [&] (auto&& dfs, int cur, int pre) -> pair<long long, long long> {
            long long max_w_leaf = price[cur], max_wo_leaf = 0LL;
            for(const auto node : graph[cur]) {
                if(node != pre) {
                    auto&& [w_leaf, wo_leaf] = dfs(dfs, node, cur);
                    ans = max(ans, max(max_w_leaf + wo_leaf, max_wo_leaf + w_leaf));
                    max_w_leaf = max(max_w_leaf, w_leaf + price[cur]);
                    max_wo_leaf = max(max_wo_leaf, wo_leaf + price[cur]);
                }
            }
            return { max_w_leaf, max_wo_leaf };
        };
        dfs(dfs, 0, -1);
        return ans;
    }
};
```