# 🚀Easy Solution🚀||🔥Fully Explained🔥|| Two DFS || C++ || Python3 || Commented

**Author:** Naman_Ag
**Votes:** 57
**Link:** [https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3095880/](https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3095880/)

---

# Consider\uD83D\uDC4D

   ```
                     Please Upvote If You Find It Helpful.
```
# Intuition
First we are checking the distance of each node from node1 and node2.
Then we are find that minimun and maxmimun distance of a node from node1 and node2 and return the index. 
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach : Using DFS
<!-- Describe your approach to solving the problem. -->
# Code
```C++ []
class Solution {
public:
    // helper function to perform depth first search
    void dfs(int node, int dist, vector<int> edges, vector<int>& dis) {
        // iterate until we reach the end of the edge or a node that has already been visited
        while (node != -1 && dis[node] == -1) {
            dis[node] = dist++; // update distance of current node
            node = edges[node]; // move to next node
        }
    }

    int closestMeetingNode(vector<int>& edges, int node1, int node2) {
        int res = -1, min_dist = INT_MAX, n = edges.size();
        // create distance vectors for both nodes
        vector<int> dist1(n, -1), dist2(n, -1);
        // perform DFS starting from node1 and node2
        dfs(node1, 0, edges, dist1);
        dfs(node2, 0, edges, dist2);

        // iterate through all nodes
        for (int i = 0; i < n; ++i) {
            // check if current node is the closest meeting point
            if (min(dist1[i], dist2[i]) >= 0 && max(dist1[i], dist2[i]) < min_dist) {
                min_dist = max(dist1[i], dist2[i]);
                res = i;
            }
        }
        return res;
    }
};
```
```python []
class Solution:
    def dfs(self, node, dist, edges, dis):
        """
        Helper function to perform depth first search
        """
        # iterate until we reach the end of the edge or a node that has already been visited
        while node != -1 and dis[node] == -1:
            dis[node] = dist
            dist += 1 # update distance of current node
            node = edges[node] # move to next node

    def closestMeetingNode(self, edges, node1, node2):
        """
        Function that returns the closest meeting point between two nodes
        """
        res, min_dist, n = -1, float('inf'), len(edges)
        # create distance vectors for both nodes
        dist1, dist2 = [-1]*n, [-1]*n
        # perform DFS starting from node1 and node2
        self.dfs(node1, 0, edges, dist1)
        self.dfs(node2, 0, edges, dist2)

        # iterate through all nodes
        for i in range(n):
            # check if current node is the closest meeting point
            if min(dist1[i], dist2[i]) >= 0 and max(dist1[i], dist2[i]) < min_dist:
                min_dist = max(dist1[i], dist2[i])
                res = i
        return res

```
```
                           Give a \uD83D\uDC4D. It motivates me alot.
```
Let's Connect On [Linkedin](https://www.linkedin.com/in/naman-agarwal-0551aa1aa/)