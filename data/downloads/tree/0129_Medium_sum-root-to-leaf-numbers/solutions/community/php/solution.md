# 🔥✅✔️ Easiest C++✅ Python3🐍✅C#✅Java✅ C ✅ 🔥☠️💀 Beats 💯✅ Explained 🔥🔥

**Author:** Edwards310
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/5026746/](https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/5026746/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-04-16 084449.png](./images/1.png)
![Screenshot 2024-04-16 084505.png](./images/2.png)
![Screenshot 2024-04-16 084515.png](./images/3.png)

```C++ []
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
private:
    int dfs(TreeNode* root, int sum) {
        if (root == nullptr)
            return 0;
        sum = sum * 10 + root->val;
        if (root->left == nullptr and root->right == nullptr)
            return sum;
        return dfs(root->left, sum) + dfs(root->right, sum);
    }

public:
    int sumNumbers(TreeNode* root) { 
        return dfs(root, 0);
    }
};
```
```python3 []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        def _dfs(root, sum):
            if not root:
                return 0
            sum = sum * 10 + root.val
            if root.left == None and root.right == None:
                return sum
            return _dfs(root.left, sum) + _dfs(root.right, sum)

        return _dfs(root, 0)
```
```C []
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int dfs(struct TreeNode* root, int sum) {
    if (root == NULL)
        return 0;
    sum = sum * 10 + root->val;
    if (root->left == NULL && root->right == NULL)
        return sum;
    return dfs(root->left, sum) + dfs(root->right, sum);
}
int sumNumbers(struct TreeNode* root) { 
    return dfs(root, 0);
}
```
```Java []
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
    private int dfs(TreeNode root, int sum){
        if(root == null)
            return 0;
        sum = sum * 10 + root.val;
        if(root.left == null && root.right == null)
            return sum;
        
        return dfs(root.left, sum) + dfs(root.right, sum);
    }

    public int sumNumbers(TreeNode root) {
        return dfs(root, 0);
    }
}
```
```python []
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def sumNumbers(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root:
            return 0

        def _dfs(root, sum):
            if not root:
                return 0
            sum = sum * 10 + root.val
            if root.left == None and root.right == None:
                return sum
            return _dfs(root.left, sum) + _dfs(root.right, sum)

        return _dfs(root, 0)
```
```C# []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    private int dfs(TreeNode root, int sum){
        if(root == null)
            return 0;
        sum = sum * 10 + root.val;
        if(root.left == null && root.right == null)
            return sum;
        
        return dfs(root.left, sum) + dfs(root.right, sum);
    }
    public int SumNumbers(TreeNode root) {
        return dfs(root, 0);
    }
}
```

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(1)
# Code
```
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
private:
    int dfs(TreeNode* root, int sum) {
        if (root == nullptr)
            return 0;
        sum = sum * 10 + root->val;
        if (root->left == nullptr and root->right == nullptr)
            return sum;
        return dfs(root->left, sum) + dfs(root->right, sum);
    }

public:
    int sumNumbers(TreeNode* root) { 
        return dfs(root, 0);
    }
};
```
# Show your support if it's useful for you .. Thanks for upvoting if you have done that....
![th.jpeg](./images/4.jpeg)
