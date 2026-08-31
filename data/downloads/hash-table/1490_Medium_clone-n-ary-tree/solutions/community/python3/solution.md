# Python3 6 line easy to understand recursive solution

**Author:** ayushjain94
**Votes:** 5
**Link:** [https://leetcode.com/problems/clone-n-ary-tree/solutions/748134/](https://leetcode.com/problems/clone-n-ary-tree/solutions/748134/)

---


```

class Solution:
    def cloneTree(self, root: 'Node') -> 'Node':
        if not root:  #base case of recursion
            return None
        
        node = Node(root.val) #create new node for the root
        
        for child in root.children:
            node.children.append(self.cloneTree(child)) 
			# Call the method recrusively passing each child and append to the childrens of the new node
            
        return node
```