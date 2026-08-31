# ✅  Easy One liner|| Javascript(81ms), Python(11ms), Go(3ms)& Java(0ms) Solutions || O(1) || Example

**Author:** lakshmikant4u
**Votes:** 30
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/3053858/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/3053858/)

---

***Happy Coding..!* Feel free to ask Q's...**

1. ***Golang Solution***
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func checkTree(root *TreeNode) bool {
    return root.Val == root.Left.Val + root.Right.Val
}
```

2. ***Python Solution***
```
class Solution(object):
    def checkTree(self, root):
        return root.val == root.left.val + root.right.val
```

3. ***Java Solution***
```
class Solution {
    public boolean checkTree(TreeNode root) {
        return root.val == root.right.val + root.left.val;
    }
}
```

4. ***Javascript Solution***
```
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const checkTree = root => root.val === (root.left.val + root.right.val);

```

// Tree Node
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Test Case 1
// root = [10, 4, 6]
let tNode1 = new TreeNode(10);
let tNode2 = new TreeNode(4);
let tNode3 = new TreeNode(6);

tNode1.left = tNode2;
tNode1.right = tNode3;

let root = tNode1;
console.log(checkTree(root)); // true


***#happytohelpu***

# ***Do upvote if you find this solution useful..***
