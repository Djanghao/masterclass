# Simple Python Solution [Explanation]

**Author:** mokar2001
**Votes:** 68
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/211978/](https://leetcode.com/problems/univalued-binary-tree/solutions/211978/)

---

# Explanation

#### 1. What's a Uni-Valued Tree?
At first, we should know how we can detect a tree is `Uni-Valued` or not. All values in the tree should be the same, on the other hand, If we traverse the tree we must get an array that has one unique value.

### 2. How we can detect the given tree is Uni-Valued?
If the tree is empty we should return `True`.
```python
if not tree:
  return True
```

We can start at the root. As we know that all nodes should have the same value we should check whether the value of the root is the same as its children. May it doesn't have any left or right child, so we first check.
```python
if tree.right: # Check has right child
  if tree.val != tree.right.val:  # Check value of the root is not same as value of the right child
    return False
            
if tree.left: # Check has left child
  if tree.val != tree.left.val: # Check value of the root is not same as value of the left child
    return False
```
After all we should check wether the left sub-tree and right-sub-tree are Uni-Valued. If we know that the value of root is the same as the value of left and right children and the left and right sub-trees be Uni-Valued, We can conclude that all values are the same.
```python
return self.isUnivalTree(tree.right) and self.isUnivalTree(tree.left)
```


# Python3 Implementation
```
class Solution:
    def isUnivalTree(self, tree):
        if not tree:
            return True
        
        if tree.right:
            if tree.val != tree.right.val:
                return False
            
        if tree.left:
            if tree.val != tree.left.val:
                return False
        
        return self.isUnivalTree(tree.right) and self.isUnivalTree(tree.left)
```