# Python/JS/Java/C++ O(n) by DFS or BFS [w/ Hint]

**Author:** brianchiang_tw
**Votes:** 46
**Link:** [https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/solutions/997851/](https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/solutions/997851/)

---

---
**Hint**:

Description says cloned tree is a full copy of original one.
In addtion, it also guarantees target node is selected from original tree.

That is, the **topology** for both cloned tree and original tree **is the same**.

Therefore, we can develop a paired DFS or BFS traversal algorithm to locate the target by directly [checking identity with is operator](https://docs.python.org/3/reference/expressions.html#is-not) without comparing node.val.

---

**Implementation** by paired DFS

Python:

```
class Solution:
    def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
        
        if not original:
            ## base case or stop condition:
            # empty node or empty tree
            return None
        
        ## general cases:
        if original is target:
            
            # current original node is target, so is cloned
            return cloned
        
        # either left subtree has target or right subtree has target
        return self.getTargetCopy(original.left, cloned.left, target) or self.getTargetCopy(original.right, cloned.right, target)
```

---

Javascript:

```
var getTargetCopy = function(original, cloned, target) {
    
    if( original == null ){
        
        // Base case aka stop condition
        // empty tree or empty node
        return null;
    }
    
    // General cases
    if( original == target ){
       
        // current original node is target, so is cloned
        return cloned;
    }
    
    // Either left subtree has target, or right subtree has target
    return getTargetCopy(original.left, cloned.left, target) || 
           getTargetCopy(original.right, cloned.right, target);
    
};
```

---

Java:

```
class Solution {
    public final TreeNode getTargetCopy(final TreeNode original, final TreeNode cloned, final TreeNode target) {

        if( original == null ){
            // Base case aka stop condition
            // empty tree or empty node
            return null;
        }
        
        // General case:
        if( original == target ){
            // current original node is target, so is cloned
            return cloned;
        }
        
        // Either left subtree has target, or right subtree has target
        TreeNode left =  getTargetCopy(original.left, cloned.left, target);
        
        if( left != null ){ 
            return left; 
        
        }else{
            return getTargetCopy(original.right, cloned.right, target);
        }        
        
        
    }
}
```

---

C++

```
class Solution {
public:
    TreeNode* getTargetCopy(TreeNode* original, TreeNode* cloned, TreeNode* target) {
        
        if( original == NULL ){
            // Base case aka stop condition
            // empty tree or empty node
            return NULL;
        }
        
        // General case:
        if( original == target ){
            // current original node is target, so is cloned
            return cloned;
        }
        
        // Either left subtree has target, or right subtree has target
        TreeNode *left =  getTargetCopy(original->left, cloned->left, target);
        
        if( left != NULL ){ 
            return left; 
        
        }else{
            return getTargetCopy(original->right, cloned->right, target);
        }
        
    }
};
```


---

Share another two implementation:

**Implementation** by paired DFS:
```
class Solution:
    def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
        
        def helper( node: TreeNode, cloned: TreeNode):
            
            if node is target:
                yield cloned
            
            if node.left:
                yield from helper( node.left, cloned.left )
            
            if node.right:
                yield from helper( node.right, cloned.right )
                
        # -------------------------------------------------------------------
        return next( helper(original, cloned) )
```

---

**Implementation** by paired BFS:
```
from collections import deque
class Solution:
    def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
        
        def helper( node: TreeNode, mirror: TreeNode ):
            
            traversal_queue = deque([node])
            mirror_queue = deque([mirror])
            
            while traversal_queue:
                
                cur, clone = traversal_queue.pop(), mirror_queue.pop()
                
                if cur:
                    
                    if cur is target:
                        yield clone
                        
                    traversal_queue.append( cur.left )
                    traversal_queue.append( cur.right )
                    
                    mirror_queue.append( clone.left )
                    mirror_queue.append( clone.right )
                    
        # -------------------------------------------------------------------
        return next( helper(original, cloned ) ) 
```

---

Reference:

[1] [Python official docs about **is** and **is not** operator](https://docs.python.org/3/reference/expressions.html#is-not)

[2] [Python official docs about generator and **yield** statement](https://docs.python.org/3/howto/functional.html#generators)