# (O(N)⏱️) JAVA☕ PYTHON🐍 JAVASCRIPT💛 TYPESCRIPT🔷 C++🦾 C##️⃣ Binary Search Tree🌳

**Author:** VishnuThangaraj
**Votes:** 3
**Link:** [https://leetcode.com/problems/range-sum-of-bst/solutions/4526122/](https://leetcode.com/problems/range-sum-of-bst/solutions/4526122/)

---

Github - https://github.com/VishnuThangaraj \uD83D\uDE3A

# Intuition\uD83E\uDDE0
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the approach is to perform a depth-first search traversal. As we have the Binary Search Tree we can Control the flow of recursion based on the Low and High values and avoid unnecessary recursive calls.

# Approach\u26A1
<!-- Describe your approach to solving the problem. -->
The **Recursion** will be performed with the simple conditions.
-  If the root/node is `null`, return **0**.
- If the value of the **current node** is less than the `low` value, search in the **right** portion of the current node as the **left** portion contains nodes which holds value lesser than the `low` value.
- If the value of the **current node** is more than the `high` value, search in the **left** portion of the current node as the **right** portion contains nodes which holds value greater than the `high` value.
- If the value of the **current node** falls in the range between `low` and `high` value, Return the current node value along with the results from the Recursive calls made from the `left` and `right` nodes.

# Complexity\u231B
- Time complexity: `O(n)`, where **n** is the number of nodes in the Binary Search Tree.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(h)`, where **h** is the height of the tree. This complexity arises from the call stack that holds the recursive calls during the search process.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code\uD83D\uDCBB
``` Java\u2615 []
class Solution {
    public int rangeSumBST(TreeNode root, int low, int high) {
        if (root == null)
            return 0;

        if(root.val < low)
            return rangeSumBST(root.right, low, high);
        else if(root.val > high)
            return rangeSumBST(root.left, low, high);

        return root.val + rangeSumBST(root.right, low, high)+rangeSumBST(root.left, low, high);
    }
}
```
``` Python\uD83D\uDC0D []
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        if root == None:
            return 0

        if root.val < low:
            return self.rangeSumBST(root.right, low, high)
        elif root.val > high:
            return self.rangeSumBST(root.left, low, high)

        return root.val + self.rangeSumBST(root.right, low, high)+self.rangeSumBST(root.left, low, high)
```
``` Javascript\uD83D\uDC9B []
var rangeSumBST = function(root, low, high) {
    if (root == null)
        return 0;

    if(root.val < low)
        return rangeSumBST(root.right, low, high);
    else if(root.val > high)
        return rangeSumBST(root.left, low, high);

    return root.val + rangeSumBST(root.right, low, high)+rangeSumBST(root.left, low, high);
};
```
``` Typescript\uD83D\uDD37 []
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if (root == null)
        return 0;

    if(root.val < low)
        return rangeSumBST(root.right, low, high);
    else if(root.val > high)
        return rangeSumBST(root.left, low, high);

    return root.val + rangeSumBST(root.right, low, high)+rangeSumBST(root.left, low, high);
};
```
``` C++\uD83E\uDDBE []
class Solution {
public:
    int rangeSumBST(TreeNode* root, int low, int high) {
        if (!root)
            return 0;

        if(root->val < low)
            return rangeSumBST(root->right, low, high);
        else if(root->val > high)
            return rangeSumBST(root->left, low, high);

        return root->val + rangeSumBST(root->right, low, high)+rangeSumBST(root->left, low, high);
    }
};
```
``` C##\uFE0F\u20E3 []
public class Solution {
    public int RangeSumBST(TreeNode root, int low, int high) {
        if (root == null)
            return 0;

        if(root.val < low)
            return RangeSumBST(root.right, low, high);
        else if(root.val > high)
            return RangeSumBST(root.left, low, high);

        return root.val + RangeSumBST(root.right, low, high)+RangeSumBST(root.left, low, high);
    }
}
```