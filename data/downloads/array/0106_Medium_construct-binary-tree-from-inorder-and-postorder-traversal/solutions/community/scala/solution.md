# Scala Clean & Simple Recursive with explanation

**Author:** goozez
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/3303927/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/3303927/)

---

# Intuition
First of all what are $$inorder$$, $$preorder$$ and $$postoder$$ traversals:

You are doing a recursive dfs and printing the value of the node 
- $$inorder$$ -  `after visiting its left subtree but before the right subtree`
- $$preorder$$ -  `as soon as You visit it`
- $$postorder$$ - `after visiting all the children`.


Each of this traversals has its traits/properties ie:

1. the array representation of $$inorder$$ traversal is a sorted list/array
2. the last value of a $$postorder$$ traversal its the root of the tree
3. the left/right subtree has the same ammount of nodes in each of the traversals
3. in an $$inorder$$ traversal whatever is to the left of the root node belongs to the left subtree and whatever is to the right belongs to the right subtree
4. in an $$postorder$$ traversal whatever is to the left of the $$x$$'th node belongs to the left subtree and whatever is to the right belongs to the right subtree; where $$x$$ is the size of the left subtree


# Approach
We will do it in a recursive fashion, so return (null) if there are no more nodes. 

1. select last node of $$postorder$$ to get the $$root$$
2. split* the $$inorder$$ tree at the value of the current $$root$$ to get the $$leftInorder$$ and $$rightInOrder$$ subtrees
3. check the size of the $$leftInOrder$$ subtree
4. split* the $$postorder$$ tree at the lenght of the $$leftInorder$$ subtree to get the $$leftPostOrder$$ and $$rightPostOrder$$ 
5. create this node with recursive left and right branches

split* = removes the current root node from left and right subtrees ie. `split(left::root::right)` will just return $$left$$ and $$right$$


# Complexity
- Time complexity:
Finding the root in the inorder tree $$O(logn)$$
Rest is $$O(1)$$

`buildTree` is $$O(nlogn)$$ - for each node find its value in the inorder tree,


- Space complexity:
 $$O(k)$$  - where k is the height of the tree - callstack for recurtion

# Code
You will want to focus on the `buildTree` function. The rest is just helper functions. 

```
object Solution {

    def last[T](ai:Array[T]): T = ai(ai.length-1)
    def safeTail[T](ai:Array[T]): Array[T] = ai.drop(1)

    def splitAtIndex[T](ai:Array[T], index:Int): (Array[T], Array[T]) = 
        ai.dropRight(1).splitAt(index)

    def splitAtValue[T](ai:Array[T], value:T): (Array[T], Array[T]) = {
        val (left, rightWithValue) = ai.span(_!=value)
        val right = safeTail(rightWithValue)
        (left, right)
    } 

    def buildTree(inorder: Array[Int], postorder: Array[Int]): TreeNode = {
        if(postorder.length==0) null
        else{
            val rootValue = last(postorder)
            val (inOrderLeft, inOrderRight) = splitAtValue(inorder, rootValue)
            val (postOrderLeft, postOrderRight) = splitAtIndex(postorder, inOrderLeft.length)
            
            new TreeNode(
                _value = rootValue, 
                _left = buildTree(inOrderLeft, postOrderLeft),
                _right = buildTree(inOrderRight, postOrderRight)
            )
        }
    }
}
```