# Scala | Recursive Solution | Simple :)

**Author:** imran-sarwar
**Votes:** 1
**Link:** [https://leetcode.com/problems/boundary-of-binary-tree/solutions/834447/](https://leetcode.com/problems/boundary-of-binary-tree/solutions/834447/)

---

```
	def boundaryOfBinaryTree(root: TreeNode): List[Int] = {
        def leafNodes(r: TreeNode): List[Int] = r match {
            case null => Nil
            case node => {
                leafNodes(node.left) :::
                (if(node.left == null && node.right == null) List(node.value) else Nil) :::
                leafNodes(node.right)
            }
        }
        
        def leftNodes(r: TreeNode): List[Int] = r match {
            case null => Nil
            case node if node.left != null => List(node.value) ::: leftNodes(node.left)
            case node if node.right != null => List(node.value) ::: leftNodes(node.right) 
            case _ => Nil
        }
        
        def rightNodes(r: TreeNode): List[Int] = r match {
            case null => Nil
            case node if node.right != null => rightNodes(node.right) ::: List(node.value)
            case node if node.left != null =>  rightNodes(node.left) ::: List(node.value)
            case _ => Nil
        }
        
        if(root == null) return List()
        List(root.value) ::: leftNodes(root.left) ::: 
        leafNodes(root.left) ::: leafNodes(root.right) ::: 
        rightNodes(root.right)
    }
```