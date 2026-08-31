# Clean Codes🔥🔥|| Full Explanation✅|| In-Order Traversal✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 62
**Link:** [https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3195563/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3195563/)

---

# Intuition :
- Here we have to find the minimum difference between any two nodes in a binary search tree (BST). 
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach :
- The algorithm used here is based on the fact that the in-order traversal of a BST visits the nodes in ascending order. Therefore, by keeping track of the previously visited node (pred) during the in-order traversal, we can easily compute the minimum difference between the current node and the previous one.
- The algorithm initializes the minimum difference (ans) to the maximum integer value in Java. It also initializes the previous node (pred) to null, indicating that we have not visited any node yet.
- The method inorder(root) performs an in-order traversal of the tree, visiting the left subtree first, then the current node, and finally the right subtree. 
- For each visited node, it checks if a previous node has been visited (i.e., pred is not null). 
- If so, it computes the difference between the current node value and the previous node value, and updates the ans variable if the difference is smaller than the current value of ans. 
- Finally, it updates the value of pred to the current node value, so that it can be used in the next iteration.
- Once the in-order traversal is complete, the algorithm returns the value of ans, which represents the minimum difference between any two nodes in the BST.
<!-- Describe your approach to solving the problem. -->
# Explanation to Approach :
- Our goal is to find the minimum difference between any two nodes in a binary search tree (BST). The algorithm works by traversing the tree in-order, which means visiting the nodes in ascending order of their values.
- During the traversal, the algorithm keeps track of the previously visited node (pred), and for each visited node, it calculates the difference between the current node value and the previous node value. 
- If this difference is smaller than the current minimum difference (ans), the algorithm updates the minimum difference to this new value.
- Once the traversal is complete, the algorithm returns the minimum difference found between any two nodes in the BST.
- So, the basic idea is to use the property of a BST where the in-order traversal visits the nodes in ascending order, and compute the difference between adjacent nodes to find the minimum difference.

# Complexity :
- Time complexity : O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : O(logn)\u2192O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# Example :
- Sure! Let's say we have the following binary search tree:
```
       4
     /   \\
    2     6
   / \\   / \\
  1   3 5   7

```
- To find the minimum difference between any two nodes, we need to traverse the tree in-order. The in-order traversal of the tree would visit the nodes in the following order:
```
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

```
- During the traversal, we keep track of the previously visited node (pred) and initialize the minimum difference (ans) to the maximum integer value in Java. Initially, pred is null.
- The first node we visit is 1. Since there is no previous node, we do not calculate any difference and move on to the next node. The second node we visit is 2. 
- We calculate the difference between 2 and null, which is 2, and update the value of ans to 2. We then update pred to 2 and move on to the next node. 
- The third node we visit is 3. We calculate the difference between 3 and 2, which is 1, and do not update the value of ans. We update pred to 3 and move on to the next node.
- The fourth node we visit is 4. We calculate the difference between 4 and 3, which is 1, and do not update the value of ans. We update pred to 4 and move on to the next node. 
- The fifth node we visit is 5. We calculate the difference between 5 and 4, which is 1, and do not update the value of ans. We update pred to 5 and move on to the next node.
- The sixth node we visit is 6. We calculate the difference between 6 and 5, which is 1, and do not update the value of ans. We update pred to 6 and move on to the last node. 
- The last node we visit is 7. We calculate the difference between 7 and 6, which is 1, and do not update the value of ans. We update pred to 7 and finish the traversal.
- At the end of the traversal, the minimum difference between any two nodes in the BST is stored in the variable ans, which is 1 in this case. So, the algorithm returns 1 as the output.
- I hope this example helps!






# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```

# Codes [C++ |Java |Python3] :
```C++ []
class Solution {
 public:
  int minDiffInBST(TreeNode* root) {
    int ans = INT_MAX;
    inorder(root, ans);
    return ans;
  }

 private:
  int pred = -1;

  void inorder(TreeNode* root, int& ans) {
    if (root == nullptr)
      return;

    inorder(root->left, ans);
    if (pred >= 0)
      ans = min(ans, root->val - pred);
    pred = root->val;
    inorder(root->right, ans);
  }
};
```
```Java []
class Solution 
{
  public int minDiffInBST(TreeNode root) 
  {
    inorder(root);
    return ans;
  }

  private int ans = Integer.MAX_VALUE;
  private Integer pred = null;

  private void inorder(TreeNode root) 
  {
    if (root == null)
      return;

    inorder(root.left);
    if (pred != null)
      ans = Math.min(ans, root.val - pred);
    pred = root.val;
    inorder(root.right);
  }
}
```
```Python3 []
class Solution:
    def minDiffInBST(self, root: TreeNode) -> int:
        self.ans = float('inf')
        self.pred = None
        self.inorder(root)
        return self.ans

    def inorder(self, root: TreeNode) -> None:
        if root is None:
            return
        
        self.inorder(root.left)
        if self.pred is not None:
            self.ans = min(self.ans, root.val - self.pred)
        self.pred = root.val
        self.inorder(root.right)
```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)

