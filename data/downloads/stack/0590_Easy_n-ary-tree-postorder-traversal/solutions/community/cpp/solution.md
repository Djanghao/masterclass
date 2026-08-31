# Easy DFS Solution | Beats 100%

**Author:** Sachinonly__
**Votes:** 112
**Link:** [https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/5691218/](https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/5691218/)

---

# Code
```python []
class Solution(object):
    def postorder(self, root):
        # If the root is None, return an empty list
        if not root:
            return []

        res = []

        # Define the DFS function
        def dfs(root):
            # Recursively call dfs for each child of the current node
            for x in root.children:
                dfs(x)
            # Append the value of the current node to the result list
            res.append(root.val)

        # Start DFS from the root
        dfs(root)

        # Return the result list containing node values in post-order
        return res
```
```C++ []
class Solution {
public:
    vector<int> postorder(Node* root) {
        // If the root is null, return an empty vector
        if (!root) return {};

        vector<int> res;

        // Define the DFS function
        function<void(Node*)> dfs = [&](Node* node) {
            // Recursively call dfs for each child of the current node
            for (Node* child : node->children) {
                dfs(child);
            }
            // Append the value of the current node to the result vector
            res.push_back(node->val);
        };

        // Start DFS from the root
        dfs(root);

        // Return the result vector containing node values in post-order
        return res;
    }
};
```
```Java []
class Solution {
    public List<Integer> postorder(Node root) {
        // If the root is null, return an empty list
        if (root == null) return new ArrayList<>();

        List<Integer> res = new ArrayList<>();

        // Start DFS from the root
        dfs(root, res);

        // Return the result list containing node values in post-order
        return res;
    }

    private void dfs(Node root, List<Integer> res) {
        // Recursively call dfs for each child of the current node
        for (Node child : root.children) {
            dfs(child, res);
        }
        // Append the value of the current node to the result list
        res.add(root.val);
    }
}
```
![unnamed.jpg](./images/0.jpeg)
