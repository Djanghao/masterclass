# ✅ [PHP][JavaScript] Recursive & Iterative Solutions

**Author:** akunopaka
**Votes:** 25
**Link:** [https://leetcode.com/problems/symmetric-tree/solutions/3293275/](https://leetcode.com/problems/symmetric-tree/solutions/3293275/)

---

### 1. Recursive Solution
This solution uses recursion to check if a binary tree is symmetric. The recursive helper function isMirror() checks if the two nodes of the binary tree are mirror images of each other, by comparing their values, and then recursively checking if their left and right nodes are mirror images of each other. If the values are equal and the subtrees are mirrors, then the function returns true. Otherwise, it returns false.

The *time complexity* of this solution is O(n) as all nodes in the binary tree must be visited in order to determine if the tree is symmetric. 
The *space complexity* is also O(n) as the recursive stack may contain up to n elements.


```javascript []
var isSymmetric = function (root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);

    function isMirror(leftNode, rightNode) {
        if (leftNode == null && rightNode == null) return true;
        if (leftNode == null || rightNode == null) return false;
        return leftNode.val === rightNode.val &&
            isMirror(leftNode.left, rightNode.right) &&
            isMirror(leftNode.right, rightNode.left);
    }
};
```
```PHP []
class Solution
{
    /**
     * @param TreeNode $root
     * @return Boolean
     */
    function isSymmetric(TreeNode $root): bool {
        if ($root === null) {
            return true;
        }
        return $this->isNodesMirror($root->left, $root->right);
    }

    function isNodesMirror(?TreeNode $leftNode, ?TreeNode $rightNode): bool {
        if ($leftNode === null && $rightNode === null) {
            return true;
        }
        if ($leftNode === null || $rightNode === null) {
            return false;
        }
        return $leftNode->val === $rightNode->val &&
            $this->isNodesMirror($leftNode->left, $rightNode->right) &&
            $this->isNodesMirror($leftNode->right, $rightNode->left);
    }
}
```


### 2. Iterative Solution
This solution uses a Breadth-First Search approach to traverse the tree. A queue is used to store left and right nodes of the tree at each level. If the left node and right node are both null then the loop continues. If either one is null or the values of the nodes do not match then false is returned. If the values match then the left and right children of each node are pushed to the queue for comparison. If the loop completes without returning false then true is returned.
*Time complexity*: O(n) as the algorithm visits each node once.
*Space complexity*: O(n) as the queue stores all nodes at each level.

```javascript []
var isSymmetric = function (root) {
    if (root == null) return true;
    let queue = [root.left, root.right];
    while (queue.length > 0) {
        let leftNode = queue.shift();
        let rightNode = queue.shift();
        if (leftNode == null && rightNode == null) continue;
        if (leftNode == null ||
            rightNode == null ||
            leftNode.val !== rightNode.val) {
            return false;
        }
        queue.push(leftNode.left, rightNode.right);
        queue.push(leftNode.right, rightNode.left);
    }
    return true;
}
```
```PHP []
class Solution
{
    /**
     * @param TreeNode $root
     * @return Boolean
     */
    function isSymmetric(?TreeNode $root): bool {
        if ($root === null) {
            return true;
        }
        $queue = [[$root->left, $root->right]];

        while ($queue) {
            $newQueue = [];
            foreach ($queue as [$leftNode, $rightNode]) {
                if ($leftNode === null && $rightNode === null) {
                    continue;
                }
                if ($leftNode->val !== $rightNode->val ||
                    $leftNode === null ||
                    $rightNode === null) {
                    return false;
                }
                $newQueue[] = [$leftNode->left, $rightNode->right];
                $newQueue[] = [$leftNode->right, $rightNode->left];
            }
            $queue = $newQueue;
        }
        return true;
    }
}
```



### If my work was useful for you, please upvote
\uD83D\uDC4D\uD83D\uDC4D\uD83D\uDC4D