# 💡JavaScript Solution

**Author:** AminiCK
**Votes:** 51
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/491447/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/491447/)

---

### The idea
1. Inorder: `<LEFT><ROOT><RIGHT>`, postorder: `<LEFT><RIGHT><ROOT>`
2. The last element of postorder will always be the root of a subtree. We can furter determine its left and right subtree by finding its position in the inorder array. 
<img src="https://assets.leetcode.com/users/aminick/image_1580110093.png" width=600px>

``` javascript
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {    
    let hash = {};
    for (let i=0;i<inorder.length;i++) hash[inorder[i]] = i; 
    
    let recur = function(start, end) {
        if (start > end) return null;
        let val = postorder.pop();
        let root = new TreeNode(val);
        root.right = recur(hash[val] + 1, end);
        root.left = recur(start, hash[val] - 1);
        return root;
    }
    
    return recur(0, inorder.length - 1);  
};
```