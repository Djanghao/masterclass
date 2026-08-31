# My Solution

**Author:** hope_ma
**Votes:** 1
**Link:** [https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/solutions/2792325/](https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/solutions/2792325/)

---

```
/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * where `n` is the length of the vector `edges`
 */
class Solution {
 public:
  long long maxScore(const vector<vector<int>> &edges) {
    const int n = static_cast<int>(edges.size());
    vector<pair<int, int>> tree[n];
    for (int i = 1; i < n; ++i) {
      const int parent = edges[i][0];
      const int weight = edges[i][1];
      tree[parent].emplace_back(i, weight);
    }

    const auto [selected, unselected] = dfs(tree, 0);
    return max(selected, unselected);
  }

 private:
  /**
   * @param tree: the tree
   * @param node: a node in the tree `tree`
   * @return: a pair
   *          the first element is the maximum score of the subtree rooted at `node`
   *                               if one of the edge from the `node` to any child of the `node` is selected
   *          the second element is the maximum score of the subtree rooted at `node`
   *                                if none of the edges from the `node` to any child of the `node` is selected
   */
  pair<long long, long long> dfs(vector<pair<int, int>> *tree, const int node) {
    const vector<pair<int, int>> &children = tree[node];
    long long selected = 0LL;
    long long unselected = 0LL;
    for (const auto [child, weight] : children) {
      const auto [child_selected, child_unselected] = dfs(tree, child);
      selected = max(selected, weight + child_unselected - max(child_selected, child_unselected));
      unselected += max(child_selected, child_unselected);
    }
    selected += unselected;
    return make_pair(selected, unselected);
  }
};
```