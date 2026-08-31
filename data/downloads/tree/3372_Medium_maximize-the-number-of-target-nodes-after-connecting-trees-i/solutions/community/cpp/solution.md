# Explained - Simple DFS and count node with in K depth

**Author:** kreakEmp
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6099495/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6099495/)

---

# Intuition
- To know how many nodes are there wher the edges are less than k, we can simply run dfs from the start node with depth count equal to k.
- Also we can observe that we will always connect to the same node of the second tree where the linked nodes count at a distance of k-1 is largest. k-1 => because we need to 1 connection from tree1 to tree2 so remaining we have k-1 edges.

# Approach
- Build 2 graphs -> g1 and g2 from the given edges list
- Now find the maximum node count that is possible by doing dfs from each node of g2 with a max depth of k-1 levels.
- Interate over the nodes of the g1 and then do dfs from it as well. Finally add the max count that we computed before and the current node count to the ans list


# Complexity
- Time complexity:  O(N.N + M.M)

- Space complexity: O(N + M)

# Code
```cpp []

vector<vector<int>> buildGraph(vector<vector<int>>& edges){
    vector<vector<int>> g(edges.size() +1 );
    for(auto e: edges){
        g[e[0]].push_back(e[1]);  g[e[1]].push_back(e[0]);
    }
    return g;
}

int dfs(vector<vector<int>>& g, int root, int par, int k, int count = 1){
    if(k < 0) return 0;
    for(auto node: g[root]) count += (node != par)?dfs(g, node, root, k-1): 0;
    return count; 
}

vector<int> maxTargetNodes(vector<vector<int>>& edges1, vector<vector<int>>& edges2, int k) {
    auto g1 = buildGraph(edges1), g2 = buildGraph(edges2);
    int count = 0, n = edges1.size()+1, m = edges2.size()+1;
    vector<int> ans;
    for(int i = 0; i < m; ++i) count = max(count, dfs(g2, i, -1, k-1));
    for(int i = 0; i < n; ++i) ans.push_back(count + dfs(g1, i, -1, k));
    return ans;
}
```



---


<b>Here is an article of my interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted


---
