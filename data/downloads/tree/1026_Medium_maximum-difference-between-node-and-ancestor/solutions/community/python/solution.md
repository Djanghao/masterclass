# ✅Beats 100% - Recursion - Top Down - Explained with [ Video ] - C++/Java/Python/JS

**Author:** lancertech6
**Votes:** 132
**Link:** [https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4543655/](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4543655/)

---

![Screenshot 2024-01-11 070709.png](./images/0.png)

# YouTube Video Explanation:

<!-- **If you want a video for this question please write in the comments** -->

<!-- https://www.youtube.com/watch?v=ujU-jeO1v-k -->

https://youtu.be/c31wBDg2aIU

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 1400 Subscribers*
*Current Subscribers: 1368*

---
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to find the maximum difference between the values of any ancestor and descendant nodes in a binary tree. To achieve this, we need to track the minimum and maximum values encountered during the traversal.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize the minimum and maximum values to the root node's value.
2. Traverse the tree using a recursive approach.
3. Update the minimum and maximum values encountered during the traversal.
4. At each node, calculate the difference between the current node's value and the updated minimum and maximum values.
5. Update the global maximum difference if a larger difference is found.
6. Recursively explore the left and right subtrees.
7. Return the maximum difference after the traversal.

# Complexity
- Time complexity: The time complexity is `O(N)`, where N is the number of nodes in the tree, as we visit each node once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: The space complexity is `O(H)`, where H is the height of the tree. In the worst case (unbalanced tree), the recursion stack could go as deep as the height of the tree.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
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
    public int maxAncestorDiff(TreeNode root) {
		if (root == null)
			return 0;
		int min = root.val, max = root.val;
		diff(root, min, max);
		return diff;
	}

	public int diff = 0;

	public void diff(TreeNode root, int min, int max) {
		if (root == null)
			return;
		diff = Math.max(diff, Math.max(Math.abs(min - root.val), Math.abs(max - root.val)));
		min = Math.min(min, root.val);
		max = Math.max(max, root.val);
		diff(root.left, min, max);
		diff(root.right, min, max);
	}
}
```
```C++ []
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxAncestorDiff(TreeNode* root) {
        if (!root)
            return 0;
        int minVal = root->val, maxVal = root->val;
        differ(root, minVal, maxVal);
        return diff;
    }

private:
    int diff = 0;

    void differ(TreeNode* root, int minVal, int maxVal) {
        if (!root)
            return;
        diff = max(diff, max(abs(minVal - root->val), abs(maxVal - root->val)));
        minVal = min(minVal, root->val);
        maxVal = max(maxVal, root->val);
        differ(root->left, minVal, maxVal);
        differ(root->right, minVal, maxVal);
    }
};
```
```Python []
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def maxAncestorDiff(self, root):
        if not root:
            return 0
        self.diff = 0
        self.helper(root, root.val, root.val)
        return self.diff
    
    def helper(self, root, min_val, max_val):
        if not root:
            return
        self.diff = max(self.diff, max(abs(min_val - root.val), abs(max_val - root.val)))
        min_val = min(min_val, root.val)
        max_val = max(max_val, root.val)
        self.helper(root.left, min_val, max_val)
        self.helper(root.right, min_val, max_val)
        
```
```JavaScript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    if (!root)
        return 0;
    let diff = 0;
    helper(root, root.val, root.val);
    return diff;

    function helper(root, minVal, maxVal) {
        if (!root)
            return;
        diff = Math.max(diff, Math.max(Math.abs(minVal - root.val), Math.abs(maxVal - root.val)));
        minVal = Math.min(minVal, root.val);
        maxVal = Math.max(maxVal, root.val);
        helper(root.left, minVal, maxVal);
        helper(root.right, minVal, maxVal);
    }
};
```
![upvote.png](./images/1.png)
