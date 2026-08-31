# Python3 Iterative Solution beats ~100%

**Author:** constantine786
**Votes:** 6
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/1948004/](https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/1948004/)

---

Instead of precalcuating the whole inorder traversal, I have defined an iterative solution which would maintain the stack that would take an additional space of only **O(h)** where **h** is the height of the tree(**h** can be **N** in worst case).

Because we also need to track **prev**, we would need to store the **list of nodes** which are processed after inorder and **idx** to check where in the **list** we are.
So in all we need to initialize following instance variables:
1. **stck** - stores predecessors of a node
2. **list** - stores nodes which are processed after inorder. Remember that the cumulative space for **list** and **stck** would be **O(N)**
3. **idx** - stores the index of the iterator

```
class BSTIterator:

    # T = O(h) where h is height of tree
    def __init__(self, root: Optional[TreeNode]):
        self.stck = [] # for tree traversal
        self.list = [] # for storing the vals once it's processed
        self.idx = -1 # ptr for self.list
        # initialize stack with first left inorder
        self.left_inorder(root) 
    
    # find predecessors for a node and update stck
    def left_inorder(self, node): 
        while node:
            self.stck.append(node)
            node = node.left        
    
    # T = O(1) 
    def hasNext(self) -> bool:
        return len(self.stck)>0 or self.idx < len(self.list)-1   
    
    # T = O(h) 
    def next(self) -> int:        
        if self.idx + 1 < len(self.list): # check if the idx is moved due to prev() calls
            self.idx +=1
            return self.list[self.idx]    
        else:            
            popped = self.stck.pop()
            self.list.append(popped.val) # update list in inorder fashion
            # perform left inorder if needed
            if popped.right:
                self.left_inorder(popped.right) 
            self.idx +=1
            return popped.val
        
    # T = O(1) 
    def hasPrev(self) -> bool:
        return self.idx > 0    
    
    # T = O(1)
    def prev(self) -> int:
        self.idx -= 1
        return self.list[self.idx]    
```
##### Time complexity:
**O(1)** - for ***hasPrev(),*** ***prev()*** and ***hasNext()***  calls
**O(h)** - for constructor and **next()** where **h** is height of the tree (worst case **h** would be **N**)

#####  Space complexity:
S = **O(N)** - for storing the list of all nodes in the tree