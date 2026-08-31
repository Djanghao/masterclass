# [C++] No Traversal Required | O(n) | Clean Solution

**Author:** uds5501
**Votes:** 27
**Link:** [https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/805701/](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/805701/)

---

TL; DR?
- Nodes with Indegree 0 to be included.
- Nodes with no incoming or outgoing edge to be inluded

Since this is a **DAG** we don't need to worry about cycles, which leaves us with the obvious inference that all the nodes with an indegree of 0 are the appropriate mother vertices.

Now, since solution always exist, this should work, but in case the node is isolated, that is, no outgoing or incoming edge, we'll miss it in our solution set!

To fix this, just keep a `vis` counter to make sure that the node is reachable by some means if there were a traversal to be performed.

Space : `O(n)`
Time : `O(n)`
```
class Solution {
public:
    vector<int> findSmallestSetOfVertices(int n, vector<vector<int>>& edges) {
        vector<int> indeg(n, 0), vis(n, 0);
        for(auto i: edges) {
            indeg[i[1]]++;
            vis[i[0]] =1;
            vis[i[1]] = 1;
        }
        vector<int> ans;
        for(int i=0; i<n; i++) {
            if (!vis[i] || !indeg[i]) ans.push_back(i);
        }
        return ans;
    }
};
```
