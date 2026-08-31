# Two DFS

**Author:** votrubac
**Votes:** 121
**Link:** [https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/2357694/](https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/2357694/)

---

We run DFS independently for node 1 and 2, memoising the distance to each node we reach.
 \xA0
Then, we check each node, track and return the index of the one with minimum max distance.

**C++**
```cpp
void dfs(int i, int dist, vector<int>& e, vector<int>& memo) {
    while (i != -1 && memo[i] == -1) {
        memo[i] = dist++;
        i = e[i];
    }
}
int closestMeetingNode(vector<int>& e, int node1, int node2) {
    int res = -1, min_dist = INT_MAX;
    vector<int> m1(e.size(), -1), m2(e.size(), -1);
    dfs(node1, 0, e, m1);
    dfs(node2, 0, e, m2);
    for (int i = 0; i < e.size(); ++i)
        if (min(m1[i], m2[i]) >= 0 && max(m1[i], m2[i]) < min_dist) {
            min_dist = max(m1[i], m2[i]);
            res = i;
        }
    return res;
}
```
#### Minimalizm Version
Here, we check for the minimum max distance during DFS from the second node.

**C++**
```cpp
int closestMeetingNode(vector<int>& e, int node1, int node2) {
    int res = -1, min_dist = INT_MAX;
    vector<int> m1(e.size(), -1), m2(e.size(), -1);
    for (int i = node1, dist = 0; i != -1 && m1[i] == -1; i = e[i])
        m1[i] = dist++;
    for (int i = node2, dist = 0; i != -1 && m2[i] == -1; i = e[i]) {
        m2[i] = dist++;
        if (m1[i] >= 0 && max(m1[i], m2[i]) <= min_dist) {
            res = max(m1[i], m2[i]) == min_dist ? min(i, res) : i;
            min_dist = max(m1[i], m2[i]);
        }
    }
    return res;
}
```