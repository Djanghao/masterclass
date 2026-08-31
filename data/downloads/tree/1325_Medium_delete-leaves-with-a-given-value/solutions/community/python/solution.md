# python, >90%, short (6 lines) and easy, explained

**Author:** rmoskalenko
**Votes:** 42
**Link:** [https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/526084/](https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/526084/)

---



```
class Solution:
    def removeLeafNodes(self, root: TreeNode, target: int) -> TreeNode:
        if root:
            root.left = self.removeLeafNodes(root.left, target)
            root.right = self.removeLeafNodes(root.right, target) 
            if root.val == target and not root.left and not root.right:
                root = None
        return root 
```

Ok, so the explanation. First let's see how many logical conditions we need to check?

1. Is our root empty? if it is, there is not much we can do about it, we just return. Otherwise we try to traverse down the tree.
2. Is it a leaf with root value == target? Then we prune it.

So somewhat surprisingly, we should be able to get it done with just two `if` statements! 

The first `if` is really straightforward - return if root is empty:

```
        if root:
			...
        return root 
```

So if root is not empty, we try to descend down first:

```
            root.left = self.removeLeafNodes(root.left, target)
            root.right = self.removeLeafNodes(root.right, target) 
```

and then we need to add our 2nd `if`:

```
            if root.val == target and not root.left and not root.right:
                root = None
```

That `if` checks if the val == target and if this node is a leaf (neither has root.left nor root.right) and prunes it if it's true.

That's it!




