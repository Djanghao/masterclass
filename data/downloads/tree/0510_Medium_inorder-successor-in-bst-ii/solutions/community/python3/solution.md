# Python 3 | Iterative, Scenario Discussion | Explanation

**Author:** idontknoooo
**Votes:** 10
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/848149/](https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/848149/)

---

### Explanation
- There are only 3 ways that one node may have a successor
	- it has a right child
	- it has a parent
		- it is the left child of its parent
		- it is the right child of its parent
- Discuss the scenarios accordingly will get the answer, check comments for more detail
### Implementation
```
class Solution:
    def inorderSuccessor(self, node: 'Node') -> 'Node':
        if not node: return None                        # if not node: return None
        elif node.right:                                # if node has right child, return most left of right child
            node = cur = node.right
            while node: cur, node = node, node.left
            return cur
        elif node.parent and node.parent.left == node:  # if node is a left child of its parent, return parent
            return node.parent
        elif node.parent and node.parent.right == node: # if node is a right child of its parent, reaching to parent until node is a left child of the parent
            while node.parent and node == node.parent.right: 
                node = node.parent
            return node.parent    
        else: return None                               # return None
```