# ✅Solutions || [Python|Java|C++|JavaScript|TypeScript|Swift|Ruby|Kotlin]

**Author:** naweeth03
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4545121/](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4545121/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# **TypeScript**
# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxAncestorDiff(root: TreeNode | null): number {
    return maxAncestorDiffHelper(root, root?.val || 0, root?.val || 0);
}

function maxAncestorDiffHelper(root: TreeNode | null, mini: number, maxi: number): number {
    if (root === null) {
        return 0;
    }

    mini = Math.min(mini, root.val);
    maxi = Math.max(maxi, root.val);

    const leftResult = maxAncestorDiffHelper(root.left, mini, maxi);
    const rightResult = maxAncestorDiffHelper(root.right, mini, maxi);

    return Math.max(maxi - mini, leftResult, rightResult);
}
```

# **C++**
```
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
        return maxAncestorDiffHelper(root, root->val, root->val);
    }

private:
    int maxAncestorDiffHelper(TreeNode* root, int mini, int maxi) {
        if (root == nullptr) {
            return 0;
        }
        
        mini = min(mini, root->val);
        maxi = max(maxi, root->val);
        
        int leftResult = maxAncestorDiffHelper(root->left, mini, maxi);
        int rightResult = maxAncestorDiffHelper(root->right, mini, maxi);
        
        return max({maxi - mini, leftResult, rightResult});
    }
};
```

# **Swift**
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    func maxAncestorDiff(_ root: TreeNode?) -> Int {
        return maxAncestorDiffHelper(root, root?.val ?? 0, root?.val ?? 0)
    }
    
    private func maxAncestorDiffHelper(_ root: TreeNode?, _ mini: Int, _ maxi: Int) -> Int {
        guard let root = root else {
            return 0
        }
        
        let currentMini = min(mini, root.val)
        let currentMaxi = max(maxi, root.val)
        
        let leftResult = maxAncestorDiffHelper(root.left, currentMini, currentMaxi)
        let rightResult = maxAncestorDiffHelper(root.right, currentMini, currentMaxi)
        
        return max(currentMaxi - currentMini, max(leftResult, rightResult))
    }
}
```
# **Ruby**
```
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Integer}
def max_ancestor_diff(root)
    max_ancestor_diff_helper(root, root&.val || 0, root&.val || 0)
end

private def max_ancestor_diff_helper(root, mini, maxi)
    return 0 if root.nil?

    current_mini = [mini, root.val].min
    current_maxi = [maxi, root.val].max

    left_result = max_ancestor_diff_helper(root.left, current_mini, current_maxi)
    right_result = max_ancestor_diff_helper(root.right, current_mini, current_maxi)

    [current_maxi - current_mini, left_result, right_result].max
end
```
# **Kotlin**
```
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun maxAncestorDiff(root: TreeNode?): Int {
        return maxAncestorDiffHelper(root, root?.`val` ?: 0, root?.`val` ?: 0)
    }

    private fun maxAncestorDiffHelper(root: TreeNode?, mini: Int, maxi: Int): Int {
        if (root == null) {
            return 0
        }

        val currentMini = minOf(mini, root.`val`)
        val currentMaxi = maxOf(maxi, root.`val`)

        val leftResult = maxAncestorDiffHelper(root.left, currentMini, currentMaxi)
        val rightResult = maxAncestorDiffHelper(root.right, currentMini, currentMaxi)

        return maxOf(currentMaxi - currentMini, leftResult, rightResult)
    }
}
```
# **Java**
```
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
      return maxAncestorDiffHelper(root, root.val, root.val);
    }

    private int maxAncestorDiffHelper(TreeNode root, int mini, int maxi) {
        if (root == null) {
            return 0;
        }

        mini = Math.min(mini, root.val);
        maxi = Math.max(maxi, root.val);

        int leftResult = maxAncestorDiffHelper(root.left, mini, maxi);
        int rightResult = maxAncestorDiffHelper(root.right, mini, maxi);

        return Math.max(maxi - mini, Math.max(leftResult, rightResult));
    }
}
```
# **Python**
```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:
        return self.maxAncestorDiffHelper(root, root.val, root.val)

    def maxAncestorDiffHelper(self, root, mini, maxi):
        if root is None:
            return 0

        mini = min(mini, root.val)
        maxi = max(maxi, root.val)

        left_result = self.maxAncestorDiffHelper(root.left, mini, maxi)
        right_result = self.maxAncestorDiffHelper(root.right, mini, maxi)

        return max(maxi - mini, left_result, right_result)
```
# **JavaScript**
```
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
    return maxAncestorDiffHelper(root, root.val, root.val);
};

function maxAncestorDiffHelper(root, mini, maxi) {
    if (root === null) {
        return 0;
    }

    mini = Math.min(mini, root.val);
    maxi = Math.max(maxi, root.val);

    const leftResult = maxAncestorDiffHelper(root.left, mini, maxi);
    const rightResult = maxAncestorDiffHelper(root.right, mini, maxi);

    return Math.max(maxi - mini, leftResult, rightResult);
}
```