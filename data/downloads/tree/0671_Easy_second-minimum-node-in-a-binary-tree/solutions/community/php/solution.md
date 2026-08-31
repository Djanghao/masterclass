# Recursive DFS (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/5414081/](https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/5414081/)

---

# Approach
This solution uses Depth-First Search (DFS) to traverse the binary tree.

The in_order method is a recursive DFS function that visits the nodes of the tree in in-order traversal, which means it visits the left subtree, then the current node, and then the right subtree. This is done to store the values of the nodes in the data list in ascending order.

The findSecondMinimumValue method sorts the data list and then iterates over it to find the second smallest value. It skips any duplicates and stops when it finds a value that is different from the previous one, which is the second smallest value.

# Complexity
- Time complexity:
$$O(n log n)$$, where n is the number of nodes in the binary tree. This is because the function performs an in-order traversal of the tree, which has a time complexity of O(n) in the worst case. Additionally, the function sorts the list of values, which has a time complexity of O(n log n) in the worst case.

- Space complexity:
$$O(n)$$, where n is the number of nodes in the binary tree. This is because the solution stores all the values of the nodes in the data list, which can have a maximum size of n.

# Code
``` python3 []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.data = []

    def findSecondMinimumValue(self, root: Optional[TreeNode]) -> int:
        # Traverse the tree in in-order and store the values in a list.
        self.in_order(root)
        self.data.sort()

        for i in range(len(self.data) - 1):
            # If the current element is the same as the next element,
            # move to the next element.
            if self.data[i] == self.data[i+1]:
                continue
            # If a second minimum value is found, return it.
            else:
                return self.data[i+1]

        # If no second minimum value is found, return -1.
        return -1

    def in_order(self, root: TreeNode):
        if root is None:
            return

        # Traverse the left subtree.
        self.in_order(root.left)

        # Store the value of the current node in the list.
        self.data.append(root.val)

        # Traverse the right subtree.
        self.in_order(root.right)

```
``` javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    var data = [];

    var inOrder = function(node) {
        if (node === null) {
            return;
        }

        // Traverse the left subtree.
        inOrder(node.left);

        // Store the value of the current node in the list.
        data.push(node.val);

        // Traverse the right subtree.
        inOrder(node.right);
    };

    // Traverse the tree in in-order and store the values in a list.
    inOrder(root);
    data.sort((a, b) => a - b);

    for (let i = 0; i < data.length - 1; i++) {
        // If the current element is the same as the next element,
        // move to the next element.
        if (data[i] === data[i + 1]) {
            continue;
        }
        // If a second minimum value is found, return it.
        else {
            return data[i + 1];
        }
    }

    // If no second minimum value is found, return -1.
    return -1;
};
```
``` php []
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
    public $data = [];

    /**
     * @param TreeNode $root
     * @return Integer
     */
    function findSecondMinimumValue($root) {
        // Traverse the tree in in-order and store the values in a list.
        $this->in_order($root);
        sort($this->data);

        for ($i = 0; $i < count($this->data) - 1; $i++) {
            // If the current element is the same as the next element,
            // move to the next element.
            if ($this->data[$i] == $this->data[$i+1]) {
                continue;
            }
            // If a second minimum value is found, return it.
            else {
                return $this->data[$i+1];
            }
        }

        // If no second minimum value is found, return -1.
        return -1;
    }

    function in_order(?TreeNode $root): void {
        if ($root === null) {
            return;
        }

        // Traverse the left subtree.
        $this->in_order($root->left);

        // Store the value of the current node in the list.
        $this->data[] = $root->val;

        // Traverse the right subtree.
        $this->in_order($root->right);
    }
}
```