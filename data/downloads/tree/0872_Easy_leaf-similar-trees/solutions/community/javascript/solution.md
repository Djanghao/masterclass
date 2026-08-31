# ✅99.39%🔥Easy Solution🔥With Explanation🔥

**Author:** MrAke
**Votes:** 65
**Link:** [https://leetcode.com/problems/leaf-similar-trees/solutions/4531517/](https://leetcode.com/problems/leaf-similar-trees/solutions/4531517/)

---

# Intuition
#### To solve this problem, we need to compare the leaf values of two binary trees. The idea is to perform a depth-first traversal of each tree and collect the leaf values in order. Once we have the leaf values for both trees, we can compare the sequences to check if they are similar.
---

# Approach
#### 1. Define a `TreeNode` class to represent the nodes of the binary tree.
#### 2. Implement a `Solution` class with a `leafSimilar` method to check if the leaf sequences are similar.
#### 3. Define a recursive helper function `collect_leaf_values` that takes a tree node and a list to collect the leaf values.
#### 4. In the helper function, if the current node is a leaf (has no left or right child), add its value to the list.
#### 5. Recursively call the helper function for the left and right children of the current node.
#### 6. Create empty lists `leaf_values1` and `leaf_values2` to store the leaf values of the two trees.
#### 7. Use the helper function to collect leaf values for both trees.
#### 8. Compare the two lists to check if the leaf sequences are similar.
#### 9. Return the result.
---

# Complexity
- ## Time complexity:
#### $$O(n)$$, where $$n$$ is the total number of nodes in both trees. We visit each node once during the depth-first traversal.

- ## Space complexity:
#### $$O(h1+h2)$$, where $$h1$$ and $$h2$$ are the heights of the two trees. The space complexity is determined by the recursion stack during the depth-first traversal.
---
# Code
```python []
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        def collect_leaf_values(root, leaf_values):
            if not root:
                return
            if not root.left and not root.right:
                leaf_values.append(root.val)
            collect_leaf_values(root.left, leaf_values)
            collect_leaf_values(root.right, leaf_values)

        leaf_values1 = []
        leaf_values2 = []

        collect_leaf_values(root1, leaf_values1)
        collect_leaf_values(root2, leaf_values2)

        return leaf_values1 == leaf_values2
```
```javascript []
var leafSimilar = function(root1, root2) {
    const collectLeafValues = (root, leafValues) => {
        if (!root) {
            return;
        }
        if (!root.left && !root.right) {
            leafValues.push(root.val);
        }
        collectLeafValues(root.left, leafValues);
        collectLeafValues(root.right, leafValues);
    };

    const leafValues1 = [];
    const leafValues2 = [];
    collectLeafValues(root1, leafValues1);
    collectLeafValues(root2, leafValues2);

    return JSON.stringify(leafValues1) === JSON.stringify(leafValues2);
};
```
```C++ []
class Solution {
public:
    bool leafSimilar(TreeNode* root1, TreeNode* root2) {
        function<void(TreeNode*, vector<int>&)> collectLeafValues =
            [&](TreeNode* root, vector<int>& leafValues) {
                if (!root) {
                    return;
                }
                if (!root->left && !root->right) {
                    leafValues.push_back(root->val);
                }
                collectLeafValues(root->left, leafValues);
                collectLeafValues(root->right, leafValues);
            };

        vector<int> leafValues1, leafValues2;
        collectLeafValues(root1, leafValues1);
        collectLeafValues(root2, leafValues2);

        return leafValues1 == leafValues2;
    }
};
```
```java []
public class Solution {
    public boolean leafSimilar(TreeNode root1, TreeNode root2) {
        List<Integer> leafValues1 = new ArrayList<>();
        List<Integer> leafValues2 = new ArrayList<>();
        
        collectLeafValues(root1, leafValues1);
        collectLeafValues(root2, leafValues2);

        return leafValues1.equals(leafValues2);
    }

    private void collectLeafValues(TreeNode root, List<Integer> leafValues) {
        if (root == null) {
            return;
        }
        if (root.left == null && root.right == null) {
            leafValues.add(root.val);
        }
        collectLeafValues(root.left, leafValues);
        collectLeafValues(root.right, leafValues);
    }
}
```
```C# []
public class Solution {
    public bool LeafSimilar(TreeNode root1, TreeNode root2) {
        void CollectLeafValues(TreeNode root, List<int> leafValues) {
            if (root == null) {
                return;
            }
            if (root.left == null && root.right == null) {
                leafValues.Add(root.val);
            }
            CollectLeafValues(root.left, leafValues);
            CollectLeafValues(root.right, leafValues);
        }

        List<int> leafValues1 = new List<int>();
        List<int> leafValues2 = new List<int>();
        CollectLeafValues(root1, leafValues1);
        CollectLeafValues(root2, leafValues2);

        return Enumerable.SequenceEqual(leafValues1, leafValues2);
    }
}
```
---




