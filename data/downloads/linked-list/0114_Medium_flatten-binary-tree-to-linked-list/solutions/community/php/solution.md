# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 3
**Link:** [https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/2040103/](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/2040103/)

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
class Solution {
    public void flatten(TreeNode root) {
        TreeNode head = null, curr = root;
        while (head != root) {
            if (curr.right == head) curr.right = null;
            if (curr.left == head) curr.left = null;
            if (curr.right != null) curr = curr.right;
            else if (curr.left != null) curr = curr.left;
            else {
                curr.right = head;
                head = curr;
                curr = root;
            }
        }
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
    void flatten(TreeNode* root) {
        if( root )
        {
            /*Move the left node to the right node*/
            TreeNode* temp = root->right;
            root->right = root->left;
            root->left = nullptr;
            TreeNode* node = root;
            
            /*Move to the end of the prev left node which is the new right node*/
            while( node->right )
            {
                node = node->right;
            }
            
            /*Append the right node to its end*/
            node->right = temp;
            flatten( root->right ); 
        } 
        return;
               
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
class Solution:
    def flatten(self, root: TreeNode) -> None:
        head, curr = None, root
        while head != root:
            if curr.right == head: curr.right = None
            if curr.left == head: curr.left = None
            if curr.right: curr = curr.right
            elif curr.left: curr = curr.left
            else: curr.right, head, curr = head, curr, root
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var flatten = function(root) {
    let curr = root
    while (curr) {
        if (curr.left) {
            let runner = curr.left
            while (runner.right) runner = runner.right
            runner.right = curr.right, curr.right = curr.left, curr.left = null
        }
        curr = curr.right
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
    fun flatten(root: TreeNode?): Unit {
        if (root == null) return
        val stack = Stack<TreeNode>()
        stack.push(root)
        val sentinel = TreeNode(-1)
        var prev = sentinel
        while (stack.isNotEmpty()) {
            val node = stack.pop()
            prev.right = node
            val r = node.right
            val l = node.left
            node.left = null
            node.right = l
            r?.let { stack.push(it) }
            l?.let { stack.push(it) }
            prev = node
        }
        sentinel.right = null
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
    func flatten(_ root: TreeNode?) {
        var tail: TreeNode?
        
        func preOrder(_ root: TreeNode?) {
            guard let root = root else { return }
            
            let left = root.left
            let right = root.right
            
            if tail == nil {
                tail = root
            } else {
                tail?.right = root
            }
            
            tail?.left = nil
            tail = root
            preOrder(left)
            preOrder(right)
        }
        
        preOrder(root)
    }
    
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***