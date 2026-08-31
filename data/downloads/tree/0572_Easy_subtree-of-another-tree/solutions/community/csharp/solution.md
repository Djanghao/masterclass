# C# 2 Solutions (Recursion + DFS) and (BFS + DFS) + small hint

**Author:** babrdabr
**Votes:** 3
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/1981848/](https://leetcode.com/problems/subtree-of-another-tree/solutions/1981848/)

---

Here is two solutions + small hack for current test cases on leetcode

### First solution: Recursion with DFS
1.  We will check if values of root are equel lets try to DFS with comparing nodes
2.  If DFS for root didn't give result we are checking left sub tree and right subtree with same logic

In DFS we just goind down in parallel from node to left and right subtrees

```
public class Solution {
    public bool IsSubtree(TreeNode root, TreeNode subRoot) {
        if(root == null)
        {
            return root == subRoot;
        }
        if(root.val == subRoot.val && DFS(root, subRoot))
        {
            return true;
        }
        
        return IsSubtree(root.left, subRoot) || IsSubtree(root.right, subRoot);
    }
    
    private bool DFS(TreeNode root, TreeNode subRoot)
    {
        if(root == null && subRoot == null)
        {
            return true;
        }
        if(root == null || subRoot == null || root.val != subRoot.val)
        {
            return false;
        }
        return DFS(root.left, subRoot.left) && DFS(root.right, subRoot.right);        
    }
}
```

### Second solution

DFS will stay with same logic but first part we will enhance with BFS instead of recursion

```
public class Solution {
    public bool IsSubtree(TreeNode root, TreeNode subRoot) {
        if(root == null)
        {
            return root == subRoot;
        }
        if(root.val == subRoot.val && DFS(root, subRoot))
        {
            return true;
        }
        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        while(queue.Count > 0)
        {
            var cur = queue.Dequeue();
            if(cur.val == subRoot.val && DFS(cur, subRoot))
            {
                return true;
            }
            if(cur.left != null)
            {
                queue.Enqueue(cur.left);
            }
            if(cur.right != null)
            {
                queue.Enqueue(cur.right);
            }
        }        
        return false;
    }
    
    private bool DFS(TreeNode root, TreeNode subRoot)
    {
        if(root == null && subRoot == null)
        {
            return true;
        }
        if(root == null && subRoot != null || root != null && subRoot == null || root.val != subRoot.val)
        {
            return false;
        }
        return DFS(root.left, subRoot.left) && DFS(root.right, subRoot.right);        
    }
}
```

#### HINT: In test cases provided by leetcode you can enhance BFS if you will replace queue with stack, this is because most of test cases were written to find bottom subtrees
```
public class Solution {
    public bool IsSubtree(TreeNode root, TreeNode subRoot) {
        if(root == null)
        {
            return root == subRoot;
        }
        if(root.val == subRoot.val && DFS(root, subRoot))
        {
            return true;
        }
        var stack = new Stack<TreeNode>();
        stack.Push(root);
        while(stack.Count > 0)
        {
            var cur = stack.Pop();
            if(cur.val == subRoot.val && DFS(cur, subRoot))
            {
                return true;
            }
            if(cur.left != null)
            {
                stack.Push(cur.left);
            }
            if(cur.right != null)
            {
                stack.Push(cur.right);
            }
        }        
        return false;
    }
    
    private bool DFS(TreeNode root, TreeNode subRoot)
    {
        if(root == null && subRoot == null)
        {
            return true;
        }
        if(root == null && subRoot != null || root != null && subRoot == null || root.val != subRoot.val)
        {
            return false;
        }
        return DFS(root.left, subRoot.left) && DFS(root.right, subRoot.right);        
    }
}
```
