# 💯✅🔥Easy Java ,Python3 ,C++ Solution|| 1 ms ||≧◠‿◠≦✌

**Author:** suyalneeraj09
**Votes:** 44
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5369973/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5369973/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
**The goal is to balance a Binary Search Tree (BST) given its root node. To achieve this, we can follow these steps:**
- Perform an inorder traversal of the given BST to obtain a sorted array of the nodes.
- Use the sorted array to construct a new, balanced BST by recursively building the tree from the middle element as the root, and the left and right subarrays as the left and right subtrees.
---
# Approach
<!-- Describe your approach to solving the problem. -->
- **Inorder Traversal:** We perform an inorder traversal of the given BST and store the nodes in a sorted array sortedArr.
- **Constructing Balanced BST:** We then use the sorted array to construct a new, balanced BST. We do this by recursively building the tree from the middle element as the root, and the left and right subarrays as the left and right subtrees.
---
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

---


# Code
```java []
class Solution {
    private List<TreeNode> sortedArr = new ArrayList<>();
    public TreeNode balanceBST(TreeNode root) {
        inorderTraverse(root);
        return sortedArrayToBST(0, sortedArr.size() - 1);
    }
    private void inorderTraverse(TreeNode root) {
        if (root == null) return;
        inorderTraverse(root.left);
        sortedArr.add(root);
        inorderTraverse(root.right);
    }
    private TreeNode sortedArrayToBST(int start, int end) {
        if (start > end) return null;
        int mid = (start + end) / 2;
        TreeNode root = sortedArr.get(mid);
        root.left = sortedArrayToBST(start, mid - 1);
        root.right = sortedArrayToBST(mid + 1, end);
        return root;
    }
}
```
```python3 []
class Solution:
    def balanceBST(self, root: TreeNode) -> TreeNode:
        self.sortedArr = []
        self.inorderTraverse(root)
        return self.sortedArrayToBST(0, len(self.sortedArr) - 1)

    def inorderTraverse(self, root: TreeNode) -> None:
        if not root:
            return
        self.inorderTraverse(root.left)
        self.sortedArr.append(root)
        self.inorderTraverse(root.right)

    def sortedArrayToBST(self, start: int, end: int) -> TreeNode:
        if start > end:
            return None
        mid = (start + end) // 2
        root = self.sortedArr[mid]
        root.left = self.sortedArrayToBST(start, mid - 1)
        root.right = self.sortedArrayToBST(mid + 1, end)
        return root
```
```C++ []
class Solution {
public:
    vector<TreeNode*> sortedArr;
    TreeNode* balanceBST(TreeNode* root) {
        inorderTraverse(root);
        return sortedArrayToBST(0, sortedArr.size() - 1);
    }
    void inorderTraverse(TreeNode* root) {
        if (root == NULL) return;
        inorderTraverse(root->left);
        sortedArr.push_back(root);
        inorderTraverse(root->right);
    }
    TreeNode* sortedArrayToBST(int start, int end) {
        if (start > end) return NULL;
        int mid = (start + end) / 2;
        TreeNode* root = sortedArr[mid];
        root->left = sortedArrayToBST(start, mid - 1);
        root->right = sortedArrayToBST(mid + 1, end);
        return root;
    }
};
```

---

![upvote.png](./images/0.png)

---



