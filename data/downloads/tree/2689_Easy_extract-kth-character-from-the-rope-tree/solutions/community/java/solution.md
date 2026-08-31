# Recursion solutions for C++, java & Python.

**Author:** cpcs
**Votes:** 6
**Link:** [https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/solutions/3536050/](https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/solutions/3536050/)

---

# Intuition
Just recursively find the kth character.

# Approach
If the length of left node is no less than k, go to left.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)


# Code

C++
```
/**
 * Definition for a rope tree node.
 * struct RopeTreeNode {
 *     int len;
 *     string val;
 *     RopeTreeNode *left;
 *     RopeTreeNode *right;
 *     RopeTreeNode() : len(0), val(""), left(nullptr), right(nullptr) {}
 *     RopeTreeNode(string s) : len(0), val(std::move(s)), left(nullptr), right(nullptr) {}
 *     RopeTreeNode(int x) : len(x), val(""), left(nullptr), right(nullptr) {}
 *     RopeTreeNode(int x, RopeTreeNode *left, RopeTreeNode *right) : len(x), val(""), left(left), right(right) {}
 * };
 */
class Solution {
public:
    char getKthCharacter(RopeTreeNode* root, int k) {
        if (root->len) {
            const int len = root->left ? max(root->left->len, (int) root->left->val.length()) : 0;
            return len >= k ? getKthCharacter(root->left, k) :  getKthCharacter(root->right, k - len);

        }
        return root->val[k - 1];
        
    }
};
```

Java:
```
/**
 * Definition for a rope tree node.
 * class RopeTreeNode {
 *     int len;
 *     String val;
 *     RopeTreeNode left;
 *     RopeTreeNode right;
 *     RopeTreeNode() {}
 *     RopeTreeNode(String val) {
 *         this.len = 0;
 *         this.val = val;
 *     }
 *     RopeTreeNode(int len) {
 *         this.len = len;
 *         this.val = "";
 *     }
 *     RopeTreeNode(int len, TreeNode left, TreeNode right) {
 *         this.len = len;
 *         this.val = "";
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public char getKthCharacter(RopeTreeNode root, int k) {
        if (root.len > 0) {
            final int len = root.left != null ? Math.max(root.left.len, root.left.val.length()) : 0;
            return len >= k ? getKthCharacter(root.left, k) :  getKthCharacter(root.right, k - len);

        }
        return root.val.charAt(k - 1);
        
    }
}

```

Python
```
# Definition for a rope tree node.
# class RopeTreeNode(object):
#     def __init__(self, len=0, val="", left=None, right=None):
#         self.len = len
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getKthCharacter(self, root: Optional[object], k: int) -> str:
        """
        :type root: Optional[RopeTreeNode]
        """

        if root.len:
            length = max(root.left.len, len(root.left.val)) if root.left else 0
            return self.getKthCharacter(root.left, k) if length >= k else self.getKthCharacter(root.right, k - length)
        return root.val[k - 1]

```