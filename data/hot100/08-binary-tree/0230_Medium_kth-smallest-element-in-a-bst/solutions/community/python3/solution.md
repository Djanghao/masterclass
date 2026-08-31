# ✅🔥 Recursion & Vector Solutions with Complexity Analysis! - C++/Java/Python

**Author:** dhruba-datta
**Votes:** 133
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/1960046/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/1960046/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution is to perform an inorder traversal of the binary search tree to collect values in ascending order. Once the values are collected, the kth smallest value can be easily retrieved.

# Approach 01
<!-- Describe your approach to solving the problem. -->
1. Using ***Vector.***
1. Perform an inorder traversal, which involves visiting the left subtree, then the root, and finally the right subtree.
1. Store the values from the left side in a vector, resulting in an increasing order of values.
1. Return the (k-1)th element from the vector as it corresponds to the kth smallest element in the binary search tree. The vector is in increasing order, making it easy to access the kth smallest element directly.

# Complexity
- Time complexity: The time complexity of this solution is O(n), where n is the number of nodes in the binary search tree. The inorder traversal visits each node once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: The space complexity is O(n), as the solution uses a list to store the values collected during traversal. In the worst case, when the binary search tree is skewed, the list could contain all node values.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        vector<int> temp;
        inorder(root, temp);
        return temp[k-1];
    }
    
    void inorder(TreeNode* root, vector<int> &temp){
        if(!root) return;
        inorder(root->left, temp);
        temp.push_back(root->val);
        inorder(root->right, temp);
    }
};
```
```Java []
class Solution {
    List<Integer> values = new ArrayList<>();

    public int kthSmallest(TreeNode root, int k) {
        inorder(root);
        return values.get(k - 1);
    }

    private void inorder(TreeNode root) {
        if (root == null) {
            return;
        }
        inorder(root.left);
        values.add(root.val);
        inorder(root.right);
    }
}
```
```python []
class Solution(object):
    def kthSmallest(self, root, k):
        values = []
        self.inorder(root, values)
        return values[k - 1]

    def inorder(self, root, values):
        if root is None:
            return
        self.inorder(root.left, values)
        values.append(root.val)
        self.inorder(root.right, values)
```

---
# Approach 02
<!-- Describe your approach to solving the problem. -->
1. Using ***Recursion.*** 
1. Perform an in-order traversal of the binary search tree.
1. In each recursive call, check if the kth smallest element has been found.
1. If found, update the result and stop further traversal.
1. Return the result after the traversal.

# Complexity
- Time complexity: The time complexity of this solution is O(n), where n is the number of nodes in the binary search tree. The inorder traversal visits each node once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: The space complexity is O(h), where h is the height of the binary search tree. The space complexity is determined by the recursion stack.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int ans;
    
    int kthSmallest(TreeNode* root, int k) {
        inorder(root, k);
        return ans;
    }
    
    void inorder(TreeNode* root, int& k) {
        if (!root) return;
        inorder(root->left, k);
        if (--k == 0){
            ans = root->val;
            return;
        } 
        inorder(root->right, k);
    }  
};
```
```Java []
class Solution {
    private int count = 0;
    private int result = 0;

    public int kthSmallest(TreeNode root, int k) {
        inorderTraversal(root, k);
        return result;
    }

    private void inorderTraversal(TreeNode node, int k) {
        if (node == null || count >= k) {
            return;
        }

        inorderTraversal(node.left, k);

        count++;
        if (count == k) {
            result = node.val;
            return;
        }

        inorderTraversal(node.right, k);
    }
}
```
```python []
class Solution(object):
    def kthSmallest(self, root, k):
        self.count = 0
        self.result = 0
        self.inorderTraversal(root, k)
        return self.result
    
    def inorderTraversal(self, node, k):
        if not node or self.count >= k:
            return
        
        self.inorderTraversal(node.left, k)
        
        self.count += 1
        if self.count == k:
            self.result = node.val
            return
        
        self.inorderTraversal(node.right, k)
```

---


> **Please upvote this solution**
>