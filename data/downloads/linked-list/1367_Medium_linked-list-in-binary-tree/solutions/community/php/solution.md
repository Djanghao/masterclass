# Beats 97.86% in Python3 (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5750106/](https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5750106/)

---

# Approach
The idea is to define two helper functions: is_subpath and traverse. 

1. The is_subpath function checks if the linked list starting from head is a subpath of the tree starting from node. 
2. The traverse function traverses the binary tree and calls is_subpath for each node.

1. In the is_subpath function, we check if the current node's value matches the head of the linked list. 
- If it does, we recursively call is_subpath on the left and right children of the node, passing the next node in the linked list as the new head. 
- If the current node's value does not match the head of the linked list, we return False.

2. In the traverse function, we recursively traverse the binary tree, calling is_subpath for each node. 
- If is_subpath returns True, we return True. 
- If we reach a leaf node and is_subpath returns False, we return False.

3. Finally, we call traverse on the root of the binary tree and return the result.

# Complexity
- Time complexity:
$$O(N*M)$$, N is the number of nodes in the binary tree and M is the length of the linked list.
-- The traverse function visits each node in the binary tree once, which takes O(N) time.
-- For each node, the is_subpath function is called, which can potentially visit up to M nodes in the linked list. 
-- Therefore, the total time complexity is O(N*M).

- Space complexity:
$$O(N + M)$$, N is the number of nodes in the binary tree and M is the length of the linked list.
-- The maximum depth of the recursion call stack is N (for the traverse function) + M (for the is_subpath function), which is O(N + M).
-- The space used to store the input binary tree and linked list is not included in the space complexity, as it is not created by the algorithm itself.

# Code
```python3 []
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubPath(self, head: Optional[ListNode], root: Optional[TreeNode]) -> bool:
        def is_subpath(node, head):
            if not head:
                return True
            if not node:
                return False
            if node.val == head.val:
                return is_subpath(node.left, head.next) or is_subpath(node.right, head.next)
            return False

        def traverse(node):
            if not node:
                return False
            if is_subpath(node, head):
                return True
            return traverse(node.left) or traverse(node.right)

        return traverse(root)
```
``` javascript []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    function isSubPathHelper(node, head) {
        if (!head) return true;
        if (!node) return false;
        if (node.val === head.val) {
            return isSubPathHelper(node.left, head.next) || isSubPathHelper(node.right, head.next);
        }
        return false;
    }

    function traverse(node) {
        if (!node) return false;
        if (isSubPathHelper(node, head)) return true;
        return traverse(node.left) || traverse(node.right);
    }

    return traverse(root);
};
```
``` php []
/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $head
     * @param TreeNode $root
     * @return Boolean
     */
    function isSubPath($head, $root) {
        $this->head = $head;
        return $this->traverse($root);
    }

    private function is_subpath($node, $head) {
        if (!$head) {
            return true;
        }
        if (!$node) {
            return false;
        }
        if ($node->val == $head->val) {
            return $this->is_subpath($node->left, $head->next) || $this->is_subpath($node->right, $head->next);
        }
        return false;
    }

    private function traverse($node) {
        if (!$node) {
            return false;
        }
        if ($this->is_subpath($node, $this->head)) {
            return true;
        }
        return $this->traverse($node->left) || $this->traverse($node->right);
    }
}
```