# ⭐ 2 ways of 0ms Java Solution

**Author:** coder481
**Votes:** 9
**Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/2547698/](https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/2547698/)

---

**Recursion**
```
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        solve(res,root);
        return res;
    }
    
    private void solve(List<Integer> res, TreeNode root){
        if(root == null) return;
        
		// Traverse left node
        solve(res, root.left);
		
		// Traverse parent node
        res.add(root.val);
		
		// Traverse right node
        solve(res, root.right);
    }
}
```

**Using Stack**
```
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        
        TreeNode curr = root;
        Stack<TreeNode> stack = new Stack<>();
        while(curr != null || stack.size() != 0){
            
            // Move to the left-most node of the tree and push them in stack for future traversal
            while(curr != null){
                stack.push(curr);
                curr = curr.left;
            }
            
            // Left node
            curr = stack.pop();
            
            // Parent node
            res.add(curr.val);
            
            // Right node
            curr = curr.right;
        }
        
        return res;
    }
}
```
<br/>

**Kotlin Version**

```
class Solution {
    fun inorderTraversal(root: TreeNode?): List<Int> {
        val res = mutableListOf<Int>()
        inorder(root,res)
        return res
    }
    
    private fun inorder(node:TreeNode?, res : MutableList<Int>){
        node?.let{
            inorder(node.left,res)
            res.add(node.`val`)
            inorder(node.right,res)
        }
    }
}
```

**Using Stack**
```
class Solution {
    fun inorderTraversal(root: TreeNode?): List<Int> {
        val res = mutableListOf<Int>()
        
        var curr = root
        val stack = Stack<TreeNode>()
        
        while(curr != null || stack.size != 0){
            while(curr!=null){
                stack.push(curr)
                curr = curr.left
            }
            curr = stack.pop()
            res.add(curr.`val`)
            curr = curr.right
        }   
        return res
    }
}
```