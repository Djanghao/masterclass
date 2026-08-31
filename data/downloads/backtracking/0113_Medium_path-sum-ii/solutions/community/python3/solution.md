# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 88
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/2615948/](https://leetcode.com/problems/path-sum-ii/solutions/2615948/)

---

Please check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
I'll explain my solution line by line daily and you can find the full list in my [Discord](https://discord.gg/Nqm4jJcyBf).
If you like it, please give a star, watch my [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post.

---

**C++**

```cpp
class Solution {
public:
    vector<vector<int>> ans;
    
    // the idea is to use dfs to traverse the tree from all root to leaf paths
    // `path` is used to store the current route 
    // `remainingSum` is used to store thre remaining sum that we need with the initial value `targetSum`.
    //  we substract it from the node value when we traverse down the tree
    // if we arrive the leaf and the the remaining sum is eqaul to leaf node value
    // then we can add `path` to ans
    // e.g. path = [5,4,11,2] and remainingSum = targetSum = 22
    // traverse node 5, remainingSum = 22 - 5 = 17
    // traverse node 4, remainingSum = 17 - 4 = 13
    // traverse node 11, remainingSum = 13 - 11 = 2
    // traverse node 2, remainingSum = 2 - 2 = 0
    // remainingSum is 0 which means the sum of current path is eqaul to targetSum
    // so how to find another path?
    // we can backtrack here
    // we can pop back a node and try another
    // e.g. path = [5, 4, 11, 7]
    // pop 7 out = [5, 4, 11]
    // push 2 = [5, 4, 11, 2]
    // ... etc
    void dfs(TreeNode* node, vector<int>& path, int remainingSum) {
        // if it is nullptr, then return
        if (!node) return;
        // add the current node val to path
        path.push_back(node-> val);
        // !node->left && !node->right : check if it is a leaf node
        // remainingSum == node->val: check if the remaining sum - node->val == 0
        // if both condition is true, then we find one of the paths
        if (!node->left && !node->right && remainingSum == node->val) ans.push_back(path);
        // traverse left sub tree with updated remaining sum
        // we don't need to check if left sub tree is nullptr or not
        // as we handle it in the first line of this function
        dfs(node-> left, path, remainingSum - node-> val);
        // traverse right sub tree with updated remaining sum
        // we don't need to check if right sub tree is nullptr or not
        // as we handle it in the first line of this function
        dfs(node-> right, path, remainingSum - node-> val);
        // backtrack 
        path.pop_back();
    }
    
    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {
        // used to store current route
        vector<int> path;
        // dfs from the root
        dfs(root, path, targetSum);
        return ans;  
    }
};
```

**Python**

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # the idea is to use dfs to traverse the tree from all root to leaf paths
    # `path` is used to store the current route 
    # `remainingSum` is used to store thre remaining sum that we need with the initial value `targetSum`.
    #  we substract it from the node value when we traverse down the tree
    # if we arrive the leaf and the the remaining sum is eqaul to leaf node value
    # then we can add `path` to ans
    # e.g. path = [5,4,11,2] and remainingSum = targetSum = 22
    # traverse node 5, remainingSum = 22 - 5 = 17
    # traverse node 4, remainingSum = 17 - 4 = 13
    # traverse node 11, remainingSum = 13 - 11 = 2
    # traverse node 2, remainingSum = 2 - 2 = 0
    # remainingSum is 0 which means the sum of current path is eqaul to targetSum
    # so how to find another path?
    # we can backtrack here
    # we can pop back a node and try another
    # e.g. path = [5, 4, 11, 7]
    # pop 7 out = [5, 4, 11]
    # push 2 = [5, 4, 11, 2]
    # ... etc
    def dfs(self, root, path, ans, remainingSum):
        # if it is None, then return
        if not root:
            return
        # add the current node val to path
        path.append(root.val)
        # !node.left && !node.right : check if it is a leaf node
        # remainingSum == node.val: check if the remaining sum - node.val == 0
        # if both condition is true, then we find one of the paths
        if not root.left and not root.right and remainingSum == root.val:
            ans.append(list(path))
        # traverse left sub tree with updated remaining sum
        # we don't need to check if left sub tree is nullptr or not
        # as we handle it in the first line of this function
        self.dfs(root.left, path, ans, remainingSum - root.val)
        # traverse right sub tree with updated remaining sum
        # we don't need to check if right sub tree is nullptr or not
        # as we handle it in the first line of this function
        self.dfs(root.right, path, ans, remainingSum - root.val)
        # backtrack 
        path.pop()
    
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        ans = []
        self.dfs(root, [], ans, targetSum)
        return ans
            
```

**Java**

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    List<List<Integer>> ans = new ArrayList<List<Integer>>();
    // the idea is to use dfs to traverse the tree from all root to leaf paths
    // `path` is used to store the current route 
    // `remainingSum` is used to store thre remaining sum that we need with the initial value `targetSum`.
    //  we substract it from the node value when we traverse down the tree
    // if we arrive the leaf and the the remaining sum is eqaul to leaf node value
    // then we can add `path` to ans
    // e.g. path = [5,4,11,2] and remainingSum = targetSum = 22
    // traverse node 5, remainingSum = 22 - 5 = 17
    // traverse node 4, remainingSum = 17 - 4 = 13
    // traverse node 11, remainingSum = 13 - 11 = 2
    // traverse node 2, remainingSum = 2 - 2 = 0
    // remainingSum is 0 which means the sum of current path is eqaul to targetSum
    // so how to find another path?
    // we can backtrack here
    // we can pop back a node and try another
    // e.g. path = [5, 4, 11, 7]
    // pop 7 out = [5, 4, 11]
    // push 2 = [5, 4, 11, 2]
    // ... etc
    private void dfs(TreeNode node, List<Integer> path, int remainingSum) {
        // if it is null, then return
        if (node == null) return;
        // add the current node val to path
        path.add(node.val);
        // !node.left && !node.right : check if it is a leaf node
        // remainingSum == node.val: check if the remaining sum - node.val == 0
        // if both condition is true, then we find one of the paths
        if (node.left == null && node.right == null && remainingSum == node.val) ans.add(new ArrayList<>(path));
        // traverse left sub tree with updated remaining sum
        // we don't need to check if left sub tree is nullptr or not
        // as we handle it in the first line of this function
        this.dfs(node.left, path, remainingSum - node.val);
        // traverse right sub tree with updated remaining sum
        // we don't need to check if right sub tree is nullptr or not
        // as we handle it in the first line of this function
        this.dfs(node.right, path, remainingSum - node.val);
        // backtrack 
        path.remove(path.size() - 1);
    }
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        List<Integer> path = new ArrayList<Integer>();
        dfs(root, path, targetSum);
        return ans;
    }
}
```