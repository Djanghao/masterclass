# Morris In-order traversal (Python 3, O(n) time / O(1) space)

**Author:** _Maximus_
**Votes:** 57
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/958187/](https://leetcode.com/problems/increasing-order-search-tree/solutions/958187/)

---

Hi everyone and thank you for showing interest in reading this article \uD83D\uDE4C.

**Morris In-order traversal algorithm**
Have you ever asked yourself why do we use the stack when it comes to traversing a tree? Lets answer to this question! Stacks are used in [traversal algorithms](https://en.wikipedia.org/wiki/Tree_traversal) to keep track of parent-nodes that are not explored completely. This algorithm gets rid of the need for a stack and uses ```left``` and ```right``` links instead. Usually, this algorithm is used to collect only values, but we can do a slight modification to do relinking among different subtrees.

**The workflow**
* create variables ```dummy``` and ```tail``` that will hold a link to a new node
* start iterating the tree with a while loop
	* if the current node has left child
		*  find the rightmost node in the left subtree (the predecessor)
		*  make the current node as the sibling's right child
		*  delete the link between the current node and its left child
		*  mark the left child as a current node
	* if the current node does not have left child
		* make the current node as the right child of the ```tail```
		* mark current node as the ```tail```
		* mark the right child of the current node as a current node
5. return the right child of the ```dummy```

**The code**
```
class Solution:
    def increasingBST(self, node: TreeNode) -> TreeNode:
        dummy = tail = TreeNode()
        while node is not None:
            if node.left is not None:
                predecessor = node.left
                while predecessor.right is not None:
                    predecessor = predecessor.right
                
                predecessor.right = node
                left, node.left = node.left, None
                node = left
            else:
                tail.right = tail = node
                node = node.right
        
        return dummy.right
```

**Complexity analysis**
O(n) time - we traverse each node at most two times
O(1) space - no additional data structures were used

**In conclusion**
This is one of the most remarkably interesting algorithms I have ever learned \uD83D\uDC98. This algorithm does not only give you the possibility to collect all the nodes' values of the tree (without using any space) but also can rearrange the whole tree where nodes are present in order and each node has only the right child.

\uD83D\uDCE2 *If you think that that solution is good enough to be recommended to other LeetCoders then upvote.*