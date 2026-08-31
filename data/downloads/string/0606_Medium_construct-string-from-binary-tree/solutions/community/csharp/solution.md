# 🔥More Than One Method🔥| Java | C++ | Python | JavaScript |

**Author:** Akhilesh21
**Votes:** 41
**Link:** [https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4376634/](https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4376634/)

---

# 1st Method :- DFS\uD83D\uDD25

## \u2712\uFE0FCode
``` Java []
class Solution {
    public String tree2str(TreeNode root) {
        if (root == null) {
            return "";
        }
        
        // Step 1: Start with an empty result string
        StringBuilder result = new StringBuilder();
        
        // Step 2: Perform preorder traversal
        preorderTraversal(root, result);
        
        // Step 3: Return the final result string
        return result.toString();
    }

    private void preorderTraversal(TreeNode node, StringBuilder result) {
        if (node == null) {
            return;
        }
        
        // Step 4: Append the current node's value to the result
        result.append(node.val);
        
        // Step 5: Check if the current node has a left child or a right child
        if (node.left != null || node.right != null) {
            
            // Step 6: If there is a left child, add empty parentheses for it
            result.append("(");
            preorderTraversal(node.left, result);
            result.append(")");
        }
        
        // Step 7: If there is a right child, process it similarly
        if (node.right != null) {
            result.append("(");
            preorderTraversal(node.right, result);
            result.append(")");
        }
        
        // Step 8: The recursion will handle all the child nodes
    }
}

```
``` C++ []

class Solution {
public:
    string tree2str(TreeNode* root) {
        if (root == nullptr) {
            return "";
        }

        // Step 1: Start with an empty result string
        stringstream result;

        // Step 2: Perform preorder traversal
        preorderTraversal(root, result);

        // Step 3: Return the final result string
        return result.str();
    }

private:
    void preorderTraversal(TreeNode* node, stringstream& result) {
        if (node == nullptr) {
            return;
        }

        // Step 4: Append the current node's value to the result
        result << node->val;

        // Step 5: Check if the current node has a left child or a right child
        if (node->left != nullptr || node->right != nullptr) {

            // Step 6: If there is a left child, add empty parentheses for it
            result << "(";
            preorderTraversal(node->left, result);
            result << ")";
        }

        // Step 7: If there is a right child, process it similarly
        if (node->right != nullptr) {
            result << "(";
            preorderTraversal(node->right, result);
            result << ")";
        }

        // Step 8: The recursion will handle all the child nodes
    }
};

```
``` Python []
class Solution:
    def tree2str(self, root):
        if root is None:
            return ""

        # Step 1: Start with an empty result string
        result = []

        # Step 2: Perform preorder traversal
        self.preorderTraversal(root, result)

        # Step 3: Return the final result string
        return ''.join(result)

    def preorderTraversal(self, node, result):
        if node is None:
            return

        # Step 4: Append the current node's value to the result
        result.append(str(node.val))

        # Step 5: Check if the current node has a left child or a right child
        if node.left is not None or node.right is not None:

            # Step 6: If there is a left child, add empty parentheses for it
            result.append("(")
            self.preorderTraversal(node.left, result)
            result.append(")")

        # Step 7: If there is a right child, process it similarly
        if node.right is not None:
            result.append("(")
            self.preorderTraversal(node.right, result)
            result.append(")")

        # Step 8: The recursion will handle all the child nodes

```
``` JavaScript []
var tree2str = function(root) {
    // Step 1: Start with an empty result array
    let result = [];

    // Step 2: Perform preorder traversal
    preorderTraversal(root, result);

    // Step 3: Return the final result string
    return result.join('');

    // Step 4: Define the preorderTraversal function
    function preorderTraversal(node, result) {
        // Step 5: Check if the current node is null
        if (node === null) {
            return;
        }

        // Step 6: Append the current node's value to the result
        result.push(node.val);

        // Step 7: Check if the current node has a left child or a right child
        if (node.left !== null || node.right !== null) {

            // Step 8: If there is a left child, add empty parentheses for it
            result.push("(");
            preorderTraversal(node.left, result);
            result.push(")");
        }

        // Step 9: If there is a right child, process it similarly
        if (node.right !== null) {
            result.push("(");
            preorderTraversal(node.right, result);
            result.push(")");
        }

        // Step 10: The recursion will handle all the child nodes
    }
};

```
``` C# []
public class Solution {
    public string Tree2str(TreeNode root) {
        if (root == null) {
            return "";
        }
        
        // Step 1: Start with an empty result string
        StringBuilder result = new StringBuilder();
        
        // Step 2: Perform preorder traversal
        PreorderTraversal(root, result);
        
        // Step 3: Return the final result string
        return result.ToString();
    }

    private void PreorderTraversal(TreeNode node, StringBuilder result) {
        if (node == null) {
            return;
        }
        
        // Step 4: Append the current node's value to the result
        result.Append(node.val);
        
        // Step 5: Check if the current node has a left child or a right child
        if (node.left != null || node.right != null) {
            
            // Step 6: If there is a left child, add empty parentheses for it
            result.Append("(");
            PreorderTraversal(node.left, result);
            result.Append(")");
        }
        
        // Step 7: If there is a right child, process it similarly
        if (node.right != null) {
            result.Append("(");
            PreorderTraversal(node.right, result);
            result.Append(")");
        }
        
        // Step 8: The recursion will handle all the child nodes
    }
}
```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(n)
- The time complexity is determined by the number of nodes in the binary tree.
- In the worst case, the algorithm visits each node once during the preorder traversal.
- Therefore, the time complexity is O(n), where n is the number of nodes in the binary tree.

### \uD83C\uDFF9Space complexity: O(n)
- The space complexity is determined by the maximum depth of the recursion stack.
- In the worst case, when the binary tree is skewed (essentially a linked list), the maximum depth of the recursion stack is equal to the number of nodes.
- Therefore, the space complexity is O(n) in the worst case.

![vote.jpg](./images/0.jpeg)

---
# 2nd Method :- DFS\uD83D\uDD25

## \u2712\uFE0FCode
``` Java []
public class Solution {
    public String tree2str(TreeNode root) {
        // Step 1: Base case - if the root is null, return an empty string
        if (root == null) return "";
        
        // Step 2: Start with the value of the current node as the result string
        String result = root.val + "";
        
        // Step 3: Recursively process the left and right subtrees
        String leftSubtree = tree2str(root.left);
        String rightSubtree = tree2str(root.right);
        
        // Step 4: Check conditions to determine the final result
        if (leftSubtree.equals("") && rightSubtree.equals("")) {
            // Both left and right subtrees are empty, return the current result
            return result;
        }
        if (leftSubtree.equals("")) {
            // Left subtree is empty, include empty parentheses for it
            return result + "()" + "(" + rightSubtree + ")";
        }
        if (rightSubtree.equals("")) {
            // Right subtree is empty, include the left subtree
            return result + "(" + leftSubtree + ")";
        }
        
        // Both left and right subtrees are non-empty, include both in the result
        return result + "(" + leftSubtree + ")" + "(" + rightSubtree + ")";
    }
}

```
``` C++ []

class Solution {
public:
    std::string tree2str(TreeNode* root) {
        // Step 1: Base case - if the root is null, return an empty string
        if (root == nullptr) {
            return "";
        }

        // Step 2: Start with the value of the current node as the result string
        std::string result = std::to_string(root->val);

        // Step 3: Recursively process the left and right subtrees
        std::string leftSubtree = tree2str(root->left);
        std::string rightSubtree = tree2str(root->right);

        // Step 4: Check conditions to determine the final result
        if (leftSubtree.empty() && rightSubtree.empty()) {
            // Both left and right subtrees are empty, return the current result
            return result;
        }
        if (leftSubtree.empty()) {
            // Left subtree is empty, include empty parentheses for it and the right subtree
            return result + "()" + "(" + rightSubtree + ")";
        }
        if (rightSubtree.empty()) {
            // Right subtree is empty, include the left subtree
            return result + "(" + leftSubtree + ")";
        }

        // Both left and right subtrees are non-empty, include both in the result
        return result + "(" + leftSubtree + ")" + "(" + rightSubtree + ")";
    }
};
```
``` Python []
class Solution:
    def tree2str(self, root):
        # Step 1: Base case - if the root is None, return an empty string
        if root is None:
            return ""

        # Step 2: Start with the value of the current node as the result string
        result = str(root.val)

        # Step 3: Recursively process the left and right subtrees
        left_subtree = self.tree2str(root.left)
        right_subtree = self.tree2str(root.right)

        # Step 4: Check conditions to determine the final result
        if not left_subtree and not right_subtree:
            # Both left and right subtrees are empty, return the current result
            return result
        if not left_subtree:
            # Left subtree is empty, include empty parentheses for it and the right subtree
            return result + "()" + "(" + right_subtree + ")"
        if not right_subtree:
            # Right subtree is empty, include the left subtree
            return result + "(" + left_subtree + ")"

        # Both left and right subtrees are non-empty, include both in the result
        return result + "(" + left_subtree + ")" + "(" + right_subtree + ")"
```
``` JavaScript []
var tree2str = function(root) {
    // Step 1: Base case - if the root is null, return an empty string
    if (root === null) return "";

    // Step 2: Start with the value of the current node as the result string
    let result = root.val.toString();

    // Step 3: Recursively process the left and right subtrees
    let leftSubtree = tree2str(root.left);
    let rightSubtree = tree2str(root.right);

    // Step 4: Check conditions to determine the final result
    if (leftSubtree === "" && rightSubtree === "") {
        // Both left and right subtrees are empty, return the current result
        return result;
    }
    if (leftSubtree === "") {
        // Left subtree is empty, include empty parentheses for it and the right subtree
        return result + "()" + "(" + rightSubtree + ")";
    }
    if (rightSubtree === "") {
        // Right subtree is empty, include the left subtree
        return result + "(" + leftSubtree + ")";
    }

    // Both left and right subtrees are non-empty, include both in the result
    return result + "(" + leftSubtree + ")" + "(" + rightSubtree + ")";
};

```
``` C# []
public class Solution {
    public string Tree2str(TreeNode root) {
        // Step 1: Base case - if the root is null, return an empty string
        if (root == null) return "";

        // Step 2: Start with the value of the current node as the result string
        string result = root.val.ToString();

        // Step 3: Recursively process the left and right subtrees
        string leftSubtree = Tree2str(root.left);
        string rightSubtree = Tree2str(root.right);

        // Step 4: Check conditions to determine the final result
        if (leftSubtree == "" && rightSubtree == "") {
            // Both left and right subtrees are empty, return the current result
            return result;
        }
        if (leftSubtree == "") {
            // Left subtree is empty, include empty parentheses for it and the right subtree
            return result + "()" + "(" + rightSubtree + ")";
        }
        if (rightSubtree == "") {
            // Right subtree is empty, include the left subtree
            return result + "(" + leftSubtree + ")";
        }

        // Both left and right subtrees are non-empty, include both in the result
        return result + "(" + leftSubtree + ")" + "(" + rightSubtree + ")";
    }
}
```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(n)
The time complexity is primarily determined by the recursive function `tree2str`. In each recursive call, the code performs constant-time operations, and the recursion is called once for each node in the binary tree. Therefore, the time complexity is O(n), where n is the number of nodes in the binary tree.

### \uD83C\uDFF9Space complexity: O(n)

The space complexity is influenced by the recursive calls and the depth of the recursion stack. In each recursive call, a constant amount of space is used for the local variables (result, leftSubtree, rightSubtree). The maximum depth of the recursion stack is equal to the height of the binary tree.

In the worst case, for a skewed binary tree (essentially a linked list), the height is n (number of nodes), leading to a space complexity of O(n). In the average case for a balanced binary tree, the height is log(n), resulting in a space complexity of O(log n).
