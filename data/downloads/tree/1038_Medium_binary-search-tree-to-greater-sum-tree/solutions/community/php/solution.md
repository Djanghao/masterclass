# [Binary Tree Tutorial] Binary Search Tree to Greater Sum Tree

**Author:** never_get_piped
**Votes:** 12
**Link:** [https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5364659/](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5364659/)

---

**Topic** :  Binary Tree
A **Binary Tree** Data Structure is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child. It is commonly used in computer science for efficient storage and retrieval of data, with various operations such as insertion, deletion, and traversal. (GFG)

**Binary Search Tree**  is a special tree that satisfies these constraints:
* The left subtree of a node contains only nodes with keys less than the node's key.
* The right subtree of a node contains only nodes with keys greater than the node's key.
* Both the left and right subtrees must also be binary search trees.

The **inorder traversal** of a binary search tree exhibits a unique property: it produces elements in sorted order, which we can utilize to solve various problems efficiently.
<br/>


## Solution
We can leverage the property of inorder traversal on a binary search tree to solve this problem effectively.

For inorder traversal, we typically visit the left subtree first, then the current node, and finally the right subtree. Here is a pseudocode for inorder traversal:
```
inorder(node) {
	if(node == null) return;
	inorder(node.left);
	print(node.val);
	inorder(node.right);
}
```
This results in the values being displayed in ascending order. The question simply asks for the postfix sum of these displayed elements. Consider an array `[1, 2, 3, 4, 5]` representing the elements of our inorder traversal. The resulting array `[15, 14, 12, 9, 5]` corresponds to each node in the binary search tree. The resulting array is the postfix sum array of the original array.

We can reverse our inorder traversal by visiting the right subtree first and simultaneously calculating the accumulated sum. This approach allows us to traverse our sorted array in reverse order. Here is the pseudocode code:
```
inorder(node) {
	if(node == null) return;
	inorder(node.right);
	postfixSum += node.val;
	node.val = postfixSum;
	inorder(node.left);
}
```

The pseudocode above is easy to understand and can be converted to actual code easily. The solution code below utilizes a stack for performing inorder traversal. 

<br/><br/>
```c++ []
class Solution {
public:
    TreeNode* bstToGst(TreeNode* root) {
        vector<TreeNode*> stk;
        TreeNode* u = root;
        while(u) {
            stk.push_back(u);
            u = u -> right;
        }
        int greater = 0;
        while(stk.size()) {
            TreeNode* node = stk.back();
            stk.pop_back();
            greater += node -> val;
            node -> val = greater;
            node = node -> left;
            while(node != NULL) {
                stk.push_back(node);
                node = node -> right;
            }
        }
        return root;
    }
};
```
```java []
class Solution {
    public TreeNode bstToGst(TreeNode root) {
        Stack<TreeNode> stack = new Stack<>();
        TreeNode u = root;
        while (u != null) {
            stack.push(u);
            u = u.right;
        }
        int greater = 0;
        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();
            greater += node.val;
            node.val = greater;
            node = node.left;
            while (node != null) {
                stack.push(node);
                node = node.right;
            }
        }
        return root;
    }
}
```
```python []
class Solution:
    def bstToGst(self, root: TreeNode) -> TreeNode:
        stack = []
        u = root
        while u:
            stack.append(u)
            u = u.right
        greater = 0
        while stack:
            node = stack.pop()
            greater += node.val
            node.val = greater
            node = node.left
            while node:
                stack.append(node)
                node = node.right
        return root 
```
```go []
func bstToGst(root *TreeNode) *TreeNode {
    stack := list.New()
    u := root
    for u != nil {
        stack.PushBack(u)
        u = u.Right
    }
    greater := 0
    for stack.Len() > 0 {
        elem := stack.Back()
        stack.Remove(elem)
        node := elem.Value.(*TreeNode)
        greater += node.Val
        node.Val = greater
        node = node.Left
        for node != nil {
            stack.PushBack(node)
            node = node.Right
        }
    }
    return root
}
```
```php []
class Solution {

    /**
     * @param TreeNode $root
     * @return TreeNode
     */
    function bstToGst($root) {
        $stack = [];
        $u = $root;
        while ($u !== null) {
            array_push($stack, $u);
            $u = $u->right;
        }
        $greater = 0;
        while (!empty($stack)) {
            $node = array_pop($stack);
            $greater += $node->val;
            $node->val = $greater;
            $node = $node->left;
            while ($node !== null) {
                array_push($stack, $node);
                $node = $node->right;
            }
        }
        return $root;
    }
}
```
```javascript []
var bstToGst = function(root) {
    let stack = [];
    let u = root;
    while (u !== null) {
        stack.push(u);
        u = u.right;
    }
    let greater = 0;
    while (stack.length > 0) {
        let node = stack.pop();
        greater += node.val;
        node.val = greater;
        node = node.left;
        while (node !== null) {
            stack.push(node);
            node = node.right;
        }
    }
    return root;
};
```

**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(h)` where `h` is the height of the tree

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**