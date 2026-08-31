# Python/Go/JS/C++ O(n) by reversed in-order DFS approach.  [ w/ Explanation ]

**Author:** brianchiang_tw
**Votes:** 31
**Link:** [https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/507494/](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/507494/)

---

O(n) by reversed in-order DFS approach.

---

Hint:
The values of BST always follow the rule:
**value of Right sub-tree** \u2267 **valud of Current node** \u2267 **value of Left subtree**

---

Observation:
**Recall** that **in-order traversal** is ( **Left subtree**, **Current node**, **Right sub-tree**).

And the **rule of greater tree** gives us the DFS traversal direction ( **Right sub-tree**, **Current node**, **Left subtree**), like the **reversed version of typical in-order traversal**

---

Algorithm:

**Step_#1**: 
Maintain a **global counter** to **keep accumulation value** of nodes

**Step_#2**:
From root node, start **DFS traversal** with the order:
( Right sub-tree, Current node, Left subtree)

Also, update accumulation value in each run.

---

**Method_#1**:
By reversed in-order DFS with **recursion**

---

Python:

```
class Solution:
    
    def helper( self, node: TreeNode):

        if not node:
            # empty node or empty tree
            return None

        else:
            # DFS to next level with order:( right subtree, current node, left subtree)
            self.helper( node.right )
		
			# update accumulation value
            self.accumulation_sum += node.val
            node.val = self.accumulation_sum

            self.helper( node.left )

            return node
      
    def bstToGst(self, root: TreeNode) -> TreeNode:
        
        # accumulation sum of nodes
        self.accumulation_sum = 0
                        
        return self.helper( root )
```

---

Javascript:

```
var bstToGst = function(root) {
    
    let accumulation = 0;
    
    var helper = function( node ){
        
        if( node != null ){
            
            helper( node.right );
            
            accumulation += node.val;
            node.val = accumulation;
            
            helper( node.left );
        }
        return node;
    }
    // ---------------------------------
    
    return helper(root);
};
```

---

Go:

```
func bstToGst(root *TreeNode) *TreeNode {
    
    accumulation := 0
    
    var helper func(*TreeNode) *TreeNode
    helper = func( node *TreeNode) *TreeNode{
        
        if node != nil {
            
            helper( node.Right )
            
            accumulation += node.Val
            node.Val = accumulation
            
            helper( node.Left )
            
        }
        return node
    }
    
    // ----------------------------------
    return helper( root )
}
```

---

C++

```
class Solution {
public:
    TreeNode* bstToGst(TreeNode* root) {
        
        if( root != nullptr ){
            
            bstToGst( root->right );
            
            accumulation += root->val;
            root->val = accumulation;
                
            bstToGst( root->left );
            
        }
        return root;
    }
private:
    int accumulation = 0;
};
```

---

**Method_#2**:
By reversed in-order DFS with **generator iterator**

---

Python:

```
class Solution:
    
    def reversed_inorder_traversal( self, node: TreeNode):

        if not node:
            # empty node or empty tree
            return

        else:
            # DFS to next level
            yield from self.reversed_inorder_traversal( node.right )

            yield node

            yield from self.reversed_inorder_traversal( node.left )



        
        
    def bstToGst(self, root: TreeNode) -> TreeNode:
        
        accumulation_sum = 0
        
        for node in self.reversed_inorder_traversal(root):
            
            accumulation_sum += node.val
            node.val = accumulation_sum
        
        return root
```

---

**Method_#3**:
By reversed in-order DFS with **stack** and **iteration**

---

Python:

```
class Solution:
    
    
    
    def bstToGst(self, root: TreeNode) -> TreeNode:
        
        accumulation = 0
        traversal_stack = [ (root, 'init') ]
        
        while traversal_stack:
            
            cur_node, cur_state = traversal_stack.pop()
            
            if cur_node:
                
                if cur_state == 'cur':
                    
                    accumulation += cur_node.val
                    cur_node.val = accumulation

                else:

                    traversal_stack.append( (cur_node.left, 'left') )
                    traversal_stack.append( (cur_node, 'cur') )
                    traversal_stack.append( (cur_node.right, 'right') )

        return root
```

---

Relative leetcode challenge:

[Leetcode #94 Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

[Leetcode #98 Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

---

Reference:
[1] [Wiki: Inorder traversal of binary tree](https://en.wikipedia.org/wiki/Tree_traversal#In-order_(LNR))

[2] [Wiki: Binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree)

[3] [Python official docs about yield statement](https://docs.python.org/3/reference/simple_stmts.html#the-yield-statement)