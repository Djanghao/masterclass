# [Python] Elegant solution with O(1) Space Complexity

**Author:** alfa-romeo
**Votes:** 21
**Link:** [https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/852971/](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/852971/)

---

This question is an extension of the question 

**https://leetcode.com/problems/copy-list-with-random-pointer**

Steps:
1. Modify the tree by creating NodeCopy nodes by making copy of the actual nodes data and keeping that at the left.
2. Now to populate the random pointer of the NodeCopy tree we 
	 ```copyNode.random = root.random.left```
3. Now decouple the two trees.
```
    def copyRandomBinaryTree(self, root: 'Node') -> 'NodeCopy':
        
        self.createNodeCopyNodes(root)
        self.populateRandom(root)
                    
        return self.breakNodes(root)

        
    def breakNodes(self, root):
        if not root:
            return
        
        newRoot = root.left
        
        root.left = newRoot.left
        root.right = newRoot.right
                
        if root.left:
            newRoot.left = self.breakNodes(root.left)
            
        if root.right:
            newRoot.right = self.breakNodes(root.right)
        
        return newRoot

        
    def populateRandom(self, root):
        if not root:
            return
    
        copyNode = root.left
        if root.random:
            copyNode.random = root.random.left
        else:
            copyNode.random = None
            
        self.populateRandom(copyNode.left)
        self.populateRandom(copyNode.right)
        

    def createNodeCopyNodes(self, root):
        if not root:
            return
        
        newNode = NodeCopy(root.val)
        
        newNode.left = root.left
        newNode.right = root.right
        
        root.left = newNode
        root.right = None
        
        self.createNodeCopyNodes(newNode.left)
        self.createNodeCopyNodes(newNode.right)
```