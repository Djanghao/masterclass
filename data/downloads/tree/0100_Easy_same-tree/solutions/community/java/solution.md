# Recursive Approach with Easy Steps

**Author:** deepankyadav
**Votes:** 832
**Link:** [https://leetcode.com/problems/same-tree/solutions/3746149/](https://leetcode.com/problems/same-tree/solutions/3746149/)

---

## ***Please Upvote my solution, if you find it helpful ;)***

# Intuition
The intuition behind the solution is to recursively check if two binary trees are identical. If both trees are empty (null), they are considered identical. If only one tree is empty or the values of the current nodes are different, the trees are not identical. Otherwise, we recursively check if the left and right subtrees of both trees are identical.

# Approach
1. Check the base case: if both trees are null, return true.
1. Check if only one tree is null or the values of the current nodes are different, return false.
1. Recursively check if the left subtrees of both trees are identical.
1. Recursively check if the right subtrees of both trees are identical.
1. Return the logical AND of the results from steps 3 and 4.

 Complexity
- Time complexity:
The time complexity of the solution is $$O(min(N, M))$$, where N and M are the number of nodes in the two trees, respectively. This is because we need to visit each node once in order to compare their values. In the worst case, where both trees have the same number of nodes, the time complexity would be O(N).

- Space complexity:
The space complexity of the solution is$$O(min(H1, H2))$$, where H1 and H2 are the heights of the two trees, respectively. This is because the space used by the recursive stack is determined by the height of the smaller tree. In the worst case, where one tree is significantly larger than the other, the space complexity would be closer to O(N) or O(M), depending on which tree is larger.

# Code
```java []
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        // Base case: if both trees are null, they are identical
        if (p == null && q == null) {
            return true;
        }
        // If only one tree is null or the values are different, they are not identical
        if (p == null || q == null || p.val != q.val) {
            return false;
        }
        // Recursively check if the left and right subtrees are identical
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}

```
```python []
class Solution:
    def isSameTree(self, p, q):
        # If both nodes are None, they are identical
        if p is None and q is None:
            return True
        # If only one of the nodes is None, they are not identical
        if p is None or q is None:
            return False
        # Check if values are equal and recursively check left and right subtrees
        if p.val == q.val:
            return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
        # Values are not equal, they are not identical
        return False
```
```C++ []
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        // If both nodes are NULL, they are identical
        if (p == NULL && q == NULL) {
            return true;
        }
        // If only one of the nodes is NULL, they are not identical
        if (p == NULL || q == NULL) {
            return false;
        }
        // Check if values are equal and recursively check left and right subtrees
        if (p->val == q->val) {
            return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
        }
        // Values are not equal, they are not identical
        return false;
    }
};
```
## ***Please Upvote my solution, if you find it helpful ;)***
![6a87bc25-d70b-424f-9e60-7da6f345b82a_1673875931.8933976.jpeg](./images/0.jpeg)
