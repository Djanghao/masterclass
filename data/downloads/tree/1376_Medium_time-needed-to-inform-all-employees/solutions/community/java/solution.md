# Video Explanation - Including Visualization and Similar Problems

**Author:** hridoy100
**Votes:** 15
**Link:** [https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/3591420/](https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/3591420/)

---

# Approach:
https://www.youtube.com/watch?v=5flgvcwKBjo

# Similar Problems: 
- [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
- [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
- [559. Maximum Depth of N-ary Tree](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/)
- [2385. Amount of Time for Binary Tree to Be Infected](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/)
- [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- [112. Path Sum](https://leetcode.com/problems/path-sum/)
- [129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)

# Complexity
- Time complexity: $$O(N)$$
We first iterate over the employees to create the adjacency list; then, we perform the DFS, where we iterate over each node once to find when they get the information from **headID**.

- Space complexity: $$O(N)$$
The size of the adjacency list is $$N$$, and there will be only $$N\u22121$$ edges in the tree.

# Code:
``` Java []
class Solution {
    public int numOfMinutes(int n, int headID, int[] manager, int[] informTime) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        for(int i=0; i<n; i++) {
            graph.putIfAbsent(manager[i], new ArrayList<>());
            graph.get(manager[i]).add(i);
        }
        return dfs(graph, headID, informTime);
    }

    int dfs(Map<Integer, List<Integer>> graph, int curHead, int[] informTime) {
        int curMax = 0;
        if(!graph.containsKey(curHead)){
            return curMax;
        }
        for(int subordinate : graph.get(curHead)) {
            curMax = Math.max(curMax, dfs(graph, subordinate, informTime));
        }
        return curMax + informTime[curHead];
    }
}
```

``` C++ []
// Solved using BFS
class Solution {
public:
    int numOfMinutes(int n, int headID, vector<int>& manager, vector<int>& informTime) {
		int res = 0, len, curTime, curNode;
        pair<int, int> curNodeInfo;
        vector<vector<int>> paths(n);
        for (int id = 0; id < n; id++) if (id != headID) paths[manager[id]].push_back(id);
        queue<pair<int, int>> q;
        q.push({0, headID});
        while (q.size()) {
            len = q.size();
            for (int i = 0; i < len; i++) {
                curNodeInfo = q.front();
                curTime = curNodeInfo.first;
                curNode = curNodeInfo.second;
                if (paths[curNode].size()) {
                    for (auto node: paths[curNode]) q.push({curTime + informTime[curNode], node});
                }
                else res = max(curTime, res);
                q.pop();
            }
        }
        return res;
    }
};
```
![cc404213-285c-48ca-bce1-256072316360_1675559254.9353127.png](./images/0.png)
