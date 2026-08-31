# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 24
**Link:** [https://leetcode.com/problems/balanced-binary-tree/solutions/2011001/](https://leetcode.com/problems/balanced-binary-tree/solutions/2011001/)

---

```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
public class Solution {
private boolean result = true;

public boolean isBalanced(TreeNode root) {
    maxDepth(root);
    return result;
}

public int maxDepth(TreeNode root) {
    if (root == null)
        return 0;
    int l = maxDepth(root.left);
    int r = maxDepth(root.right);
    if (Math.abs(l - r) > 1)
        result = false;
    return 1 + Math.max(l, r);
}
}
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
class Solution {
public:
    bool ans;
    int checkBalance(TreeNode* root){
        if(!root)
            return 0;
        if(!ans) // if Answer is already False then return it.
            return 0;
        int leftSubTree = checkBalance(root->left);
        int rightSubTree = checkBalance(root->right);
        if(abs(leftSubTree-rightSubTree) > 1){
            ans = false;
        }
        return 1 + max(leftSubTree, rightSubTree);
    }
    bool isBalanced(TreeNode* root){
        ans = true;
        int temp = checkBalance(root);
        return ans;
    }
};
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
class Solution(object):
    def isBalanced(self, root):
            
        def check(root):
            if root is None:
                return 0
            left  = check(root.left)
            right = check(root.right)
            if left == -1 or right == -1 or abs(left - right) > 1:
                return -1
            return 1 + max(left, right)
            
        return check(root) != -1

```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var isBalanced = function(root) {
    
    let dfs = function(node) {
        if (!node) return 0;
        let left = 1 + dfs(node.left);
        let right = 1 + dfs(node.right);
        if (Math.abs(left - right) > 1) return Infinity;
        return Math.max(left, right);
    }
    
    return dfs(root)==Infinity?false:true;
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
class Solution {
    
    fun isBalanced(root: TreeNode?): Boolean {
        return checkDepth(root) != -1
    }
    
    private fun checkDepth(root: TreeNode?): Int {
        root ?: return 0
        val lDepth = checkDepth(root.left)
        val rDepth = checkDepth(root.right)
        val delta = Math.abs(lDepth - rDepth)
        return when {
            lDepth == -1 ||
            rDepth == -1 ||
            Math.abs(lDepth - rDepth) > 1 -> -1
            else -> 1 + maxOf(lDepth, rDepth)
        }
    }
}
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
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
    // - Complexity:
    //   - time: O(n), where n is the number of nodes in the binary tree.
    //   - space: O(n), where n is the number of nodes in the binary tree.
    
    func isBalanced(_ root: TreeNode?) -> Bool {
        isBalancedTree(root).balanced
    }
    
    
    private func isBalancedTree(_ node: TreeNode?) -> (height: Int, balanced: Bool) {
        guard let node = node else { return (-1, true) }
        
        let left = isBalancedTree(node.left)
        guard left.balanced else { return(-1, false) }
        
        let right = isBalancedTree(node.right)
        guard right.balanced else { return (-1, false) }
        
        guard abs(left.height - right.height) < 2 else { return (-1, false) }
        
        return (max(left.height, right.height) + 1, true)
    }

}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
