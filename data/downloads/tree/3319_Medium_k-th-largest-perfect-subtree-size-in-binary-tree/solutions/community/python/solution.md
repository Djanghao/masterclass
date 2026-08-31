# [Java/C++/Python] DFS

**Author:** lee215
**Votes:** 13
**Link:** [https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/solutions/5905522/](https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/solutions/5905522/)

---

# **Intuition**
If the left and right child tree are perfect trees
**of the same height**,
then the root tree is a perfect tree with `height + 1`

<br>

# **Explanation**
DFS
Return the height of perfect tree.
Return -1 if it's not perfect tree.
<br>

# **Complexity**
Itearation part:
Time `O(n)` for `dfs`
Space `O(n)`

`k`th part
`O(nlogn)` for quick sort
`O(n)` for quick select and counting sort.
<br>

**Java**
```java
    public int kthLargestPerfectSubtree(TreeNode root, int k) {
        List<Integer> res = new ArrayList<>();
        dfs(root, res);
        Collections.sort(res);
        if (k <= res.size()) {
            return (1 << res.get(res.size() - k)) - 1;
        }
        return -1;
    }

    private int dfs(TreeNode root, List<Integer> res) {
        if (root == null) return 0;
        int l = dfs(root.left, res), r = dfs(root.right, res);
        if (l == r && l >= 0) {
            res.add(l + 1);
            return l + 1;
        }
        return -1;
    }
```

**C++**
```cpp
    int kthLargestPerfectSubtree(TreeNode* root, int k) {
        vector<int> res;

        function<int(TreeNode*)> dfs = [&](TreeNode* root) -> int {
            if (!root) return 0;
            int l = dfs(root->left), r = dfs(root->right);
            if (l == r && l >= 0) {
                res.push_back(l + 1);
                return l + 1;
            }
            return -1;
        };

        dfs(root);
        nth_element(res.begin(), res.end() - k, res.end());
        if (k <= res.size()) {
            return (1 << res[res.size() - k]) - 1;
        }
        return -1;
    }
```

**Python**
```py
    def kthLargestPerfectSubtree(self, root: Optional[TreeNode], k: int) -> int:
        res = []
        def dfs(root):
            if not root: return 0
            l, r = dfs(root.left), dfs(root.right)
            if l == r >= 0:
                res.append(l + 1)
                return l + 1
            return -1
        dfs(root)
        return (1 << sorted(res)[-k]) - 1 if k <= len(res) else -1
```
