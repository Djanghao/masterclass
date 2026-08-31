# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 27
**Link:** [https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/2040330/](https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/2040330/)

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
// just returns the nodes in post-order
public Iterable<TreeNode> topSort(TreeNode root) {
    Deque<TreeNode> result = new LinkedList<>();
    if (root != null) {
        Deque<TreeNode> stack = new LinkedList<>();
        stack.push(root);
        while (!stack.isEmpty()) {
            TreeNode curr = stack.pop();
            result.push(curr);
            if (curr.right != null) stack.push(curr.right);
            if (curr.left != null) stack.push(curr.left);
        }
    }
    return result;
}

public int maxPathSum(TreeNode root) {
    int result = Integer.MIN_VALUE;
    Map<TreeNode, Integer> maxRootPath = new HashMap<>(); // cache
    maxRootPath.put(null, 0); // for simplicity we want to handle null nodes
    for (TreeNode node : topSort(root)) {
        // as we process nodes in post-order their children are already cached
        int left = Math.max(maxRootPath.get(node.left), 0);
        int right = Math.max(maxRootPath.get(node.right), 0); 
        maxRootPath.put(node, Math.max(left, right) + node.val);
        result = Math.max(left + right + node.val, result);
    }
    return result;
}
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
int maxSum(TreeNode* root, int& ans) {
    /* This function return the Branch Sum......
    So if the node is NULL then it won't have a branch....so the branch sum will be 0.
    */
    //Base Case
    if(root == NULL){
        return 0;
    }
    
    //Recursive Case 
    //BS = Branch Sum
    int leftBS = root->val + maxSum( root->left , ans );
    int rightBS = root->val + maxSum( root->right , ans );
    
    ans = max({
                ans,            //we may have found the maximum ans already
                root->val,      //may be the current root val is the maximum sum possible
                leftBS,         //may be the answer contain root->val + left branch value
                rightBS,        //may be the answer contain root->val + right branch value
                leftBS + rightBS - root->val   // may be ans conatin left branch + right branch + root->val
                                               // Since the root val is added twice from leftBS and rightBS so we are sunstracting it.
            });
    
    //Return the max branch Sum
    return max({ leftBS , rightBS , root->val });
}

int maxPathSum(TreeNode* root) {
    int ans = INT_MIN;
    maxSum(root, ans);
    return ans;
}
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
class Solution:
    def __init__(self):
        self.maxSum = float('-inf')
    def maxPathSum(self, root: TreeNode) -> int:
        def traverse(root):
            if root:
                left = traverse(root.left)
                right = traverse(root.right)
                self.maxSum = max(self.maxSum,root.val, root.val + left, root.val + right, root.val + left + right)
                return max(root.val,root.val + left,root.val + right)
            else:
                return 0
        traverse(root)
        return self.maxSum
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var maxPathSum = function(root) {
  var max = -Number.MAX_VALUE;
  getMaxSum(root);
  return max;
  function getMaxSum(node) {
    if (!node) return 0;
    var leftSum = getMaxSum(node.left);
    var rightSum = getMaxSum(node.right);
    max = Math.max(max, node.val + leftSum + rightSum);
    return Math.max(0, node.val + leftSum, node.val + rightSum);
  }
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
    fun maxPathSum(root: TreeNode?) = postorder(root).maxSum

    private fun postorder(node: TreeNode?): Res {
        if (node == null)
            return Res(Int.MIN_VALUE, 0)

        val (leftMaxSum, leftPathSum) = postorder(node.left)
        val (rightMaxSum, rightPathSum) = postorder(node.right)

        val value = node.`val`
        val sum = leftPathSum + rightPathSum + value

        return Res(maxOf(leftMaxSum, rightMaxSum, sum), maxOf(0, value + maxOf(leftPathSum, rightPathSum)))
    }

    private data class Res(val maxSum: Int, val pathSum: Int)
}
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the number of nodes in binary tree.
    //   - space: O(n), where n is the number of nodes in binary tree.
    
    func maxPathSum(_ root: TreeNode?) -> Int {
        guard let root = root else { return 0 }
        var currMaxSum = Int.min
        return max(maxPathSum(root, currMaxSum: &currMaxSum), currMaxSum)
    }

    
    private func maxPathSum(_ currNode: TreeNode?, currMaxSum: inout Int) -> Int {
        guard let currNode = currNode else { return 0 }

        let leftSum = max(maxPathSum(currNode.left, currMaxSum: &currMaxSum), 0)
        let rightSum = max(maxPathSum(currNode.right, currMaxSum: &currMaxSum), 0)

        currMaxSum = max(currNode.val + leftSum + rightSum, currMaxSum)
        return max(leftSum, rightSum) + currNode.val
    }

}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***