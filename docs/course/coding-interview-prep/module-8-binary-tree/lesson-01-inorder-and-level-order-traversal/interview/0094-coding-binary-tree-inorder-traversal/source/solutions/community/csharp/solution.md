# 🔍 Mastering In-Order Traversal: 3 Approaches, Detailed Explanation, and Insightful Dry Runs 🔥

**Author:** LakshayBrejwal_1_0
**Votes:** 15
**Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/4380775/](https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/4380775/)

---

# \uD83C\uDF32 Exploring Inorder Tree Traversal \uD83C\uDF33

---

## \uD83D\uDCBB Solution

### \uD83D\uDCA1Approach

The solution defines a class `Solution` with a method `inorderTraversal` for performing inorder tree traversal. The algorithm uses recursion to traverse the tree in an inorder manner, collecting node values in a vector.

### \uD83D\uDCDDDry Run

Input Tree:
```
      1
     / \\
    2   3
   / \\
  4   5
```

#### Steps:
1. **Inorder Traversal:**
   - Traverse left subtree (2).
     - Traverse left subtree (4).
       - No left child.
       - Add 4 to the vector.
       - No right child.
     - Add 2 to the vector.
     - Traverse right subtree (5).
       - No left child.
       - Add 5 to the vector.
       - No right child.
   - Add 1 to the vector.
   - Traverse right subtree (3).
     - No left child.
     - Add 3 to the vector.
     - No right child.

#### Final Output:
The vector is [4, 2, 5, 1, 3].

### \uD83D\uDD0DEdge Cases

- Handles scenarios with null nodes and varying tree structures.

### \uD83D\uDD78\uFE0FComplexity Analysis
- **Time Complexity:** O(N), where N is the number of nodes in the tree.
- **Space Complexity:** O(N), as the algorithm uses a vector to store node values.

### \uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBBCodes in (C++) (Java) (Python) (C#) (JavaScript)

```cpp []
class Solution {
public:
    vector<int> ans;

    vector<int> inorderTraversal(TreeNode* root) {
        if(root == NULL) return {};
        inorderTraversal(root->left);
        ans.push_back(root->val);
        inorderTraversal(root->right);
        return ans;
    }
};
```

```java []
class Solution {
    List<Integer> ans = new ArrayList<>();

    public List<Integer> inorderTraversal(TreeNode root) {
        if (root == null) return Collections.emptyList();
        inorderTraversal(root.left);
        ans.add(root.val);
        inorderTraversal(root.right);
        return ans;
    }
}
```

```python []
class Solution:
    def inorderTraversal(self, root):
        ans = []
        def inorder(node):
            if node:
                inorder(node.left)
                ans.append(node.val)
                inorder(node.right)
        inorder(root)
        return ans
```

```csharp []
public class Solution {
    List<int> ans = new List<int>();

    public IList<int> InorderTraversal(TreeNode root) {
        if (root == null) return ans;
        InorderTraversal(root.left);
        ans.Add(root.val);
        InorderTraversal(root.right);
        return ans;
    }
}
```

```javascript []
var inorderTraversal = function(root) {
    const ans = [];
    const inorder = (node) => {
        if (node) {
            inorder(node.left);
            ans.push(node.val);
            inorder(node.right);
        }
    };
    inorder(root);
    return ans;
};
```

---
# \uD83C\uDF32 Inorder Tree Traversal with Stack Exploration \uD83C\uDF33

---

## \uD83D\uDCBB Solution

### \uD83D\uDCA1Approach 2: Iterative Approach with Stack

The iterative approach utilizes a stack to simulate the recursive call stack. It traverses the tree in an inorder manner, pushing nodes onto the stack until reaching the leftmost node. It then pops nodes, processes them, and moves to the right child if available.

### \u2728Explanation

1. Initialize an empty stack and an empty list to store the result.
2. Start with the root node and iterate until the stack is empty or the current node is null.
3. While the current node is not null, push it onto the stack and move to its left child.
4. If the current node is null, pop a node from the stack, process it (add to the result list), and move to its right child.
5. Repeat steps 3-4 until the stack is empty.

### \uD83D\uDCDDDry Run

Input Tree:
```
      1
     / \\
    2   3
   / \\
  4   5
```

#### Steps:
1. Stack: [], Result: []
2. Start with the root (1), push onto the stack, and move to the left child (2).
3. Stack: [1], Result: []
4. Move to the left child (4).
5. Stack: [1, 2], Result: []
6. Move to the left child (null), pop 4, process (add to result), move to the right child (null).
7. Stack: [1], Result: [4]
8. Move to the right child (2).
9. Stack: [1, 2], Result: [4]
10. Move to the left child (null), pop 2, process, move to the right child (5).
11. Stack: [1], Result: [4, 2]
12. Move to the left child (null), pop 1, process, move to the right child (3).
13. Stack: [], Result: [4, 2, 1]
14. Move to the left child (null), pop 3, process, move to the right child (null).
15. Stack: [], Result: [4, 2, 1, 3]

#### Final Output:
The result list is [4, 2, 1, 3].

### \uD83D\uDD0DEdge Cases

- Handles scenarios with null nodes and varying tree structures.

### \uD83D\uDD78\uFE0FComplexity Analysis
- **Time Complexity:** O(N), where N is the number of nodes in the tree.
- **Space Complexity:** O(N), as the algorithm uses a stack to store nodes.

### \uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBBCodes in (C++) (Java) (Python) (C#) (JavaScript)

```cpp []
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> result;
        stack<TreeNode*> st;

        while (root || !st.empty()) {
            while (root) {
                st.push(root);
                root = root->left;
            }
            root = st.top();
            st.pop();
            result.push_back(root->val);
            root = root->right;
        }

        return result;
    }
};
```

```java []
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();

        while (root != null || !stack.isEmpty()) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();
            result.add(root.val);
            root = root.right;
        }

        return result;
    }
}
```

```python []
class Solution:
    def inorderTraversal(self, root):
        result = []
        stack = []

        while root or stack:
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            result.append(root.val)
            root = root.right

        return result
```

```csharp []
public class Solution {
    public IList<int> InorderTraversal(TreeNode root) {
        List<int> result = new List<int>();
        Stack<TreeNode> stack = new Stack<TreeNode>();

        while (root != null || stack.Count > 0) {
            while (root != null) {
                stack.Push(root);
                root = root.left;
            }
            root = stack.Pop();
            result.Add(root.val);
            root = root.right;
        }

        return result;
    }
}
```

```javascript []
var inorderTraversal = function(root) {
    const result = [];
    const stack = [];

    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        result.push(root.val);
        root = root.right;
    }

    return result;
};
```

---
# \uD83C\uDF32 Morris Traversal for Inorder Tree Traversal \uD83C\uDF33

---

## \uD83D\uDCBB Solution

### \uD83D\uDCA1Approach 3: Morris Traversal

Morris Traversal is an ingenious algorithm that enables efficient tree traversal without using a stack or recursion. It utilizes threaded binary trees by modifying the tree structure temporarily during the traversal.

### \u2728Explanation

1. Initialize the current node as the root.
2. While the current node is not null:
   - If the current node has no left child:
      - Process the node.
      - Move to the right child.
   - If the current node has a left child:
      - Find the rightmost node in the left subtree (inorder predecessor).
      - If the rightmost node's right child is null:
         - Make the current node the right child of the rightmost node.
         - Move to the left child.
      - If the rightmost node's right child is the current node:
         - Revert the changes made in step 3.
         - Process the current node.
         - Move to the right child.

### \uD83D\uDCDDDry Run

Input Tree:
```
      1
     / \\
    2   3
   / \\
  4   5
```

#### Steps:
1. Initialize: current = 1.
2. Current has left child (2).
   - Find rightmost node in left subtree (5).
   - 5's right child is null, make 1 the right child of 5, move to left child (2).
3. Current has left child (4).
   - Find rightmost node in left subtree (4).
   - 4's right child is null, make 2 the right child of 4, move to left child (null).
4. Process 1, move to right child (3).
5. Process 2, move to right child (4).
6. Revert changes made in step 3.
7. Process 3, move to right child (null).
8. Process 4, move to right child (5).
9. Revert changes made in step 2.
10. Process 5, move to right child (null).

#### Final Output:
The result list is [4, 2, 1, 3, 5].

### \uD83D\uDD0DEdge Cases

- Handles scenarios with null nodes and varying tree structures.

### \uD83D\uDD78\uFE0FComplexity Analysis
- **Time Complexity:** O(N), where N is the number of nodes in the tree.
- **Space Complexity:** O(1), as the algorithm modifies the tree in-place.

### \uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBBCodes in (C++) (Java) (Python) (C#) (JavaScript)

```cpp []
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> result;
        TreeNode* current = root;

        while (current) {
            if (!current->left) {
                result.push_back(current->val);
                current = current->right;
            } else {
                TreeNode* predecessor = current->left;

                while (predecessor->right && predecessor->right != current) {
                    predecessor = predecessor->right;
                }

                if (!predecessor->right) {
                    predecessor->right = current;
                    current = current->left;
                } else {
                    predecessor->right = nullptr;
                    result.push_back(current->val);
                    current = current->right;
                }
            }
        }

        return result;
    }
};
```

```java []
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        TreeNode current = root;

        while (current != null) {
            if (current.left == null) {
                result.add(current.val);
                current = current.right;
            } else {
                TreeNode predecessor = current.left;

                while (predecessor.right != null && predecessor.right != current) {
                    predecessor = predecessor.right;
                }

                if (predecessor.right == null) {
                    predecessor.right = current;
                    current = current.left;
                } else {
                    predecessor.right = null;
                    result.add(current.val);
                    current = current.right;
                }
            }
        }

        return result;
    }
}
```

```python []
class Solution:
    def inorderTraversal(self, root):
        result = []
        current = root

        while current:
            if not current.left:
                result.append(current.val)
                current = current.right
            else:
                predecessor = current.left

                while predecessor.right and predecessor.right != current:
                    predecessor = predecessor.right

                if not predecessor.right:
                    predecessor.right = current
                    current = current.left
                else:
                    predecessor.right = None
                    result.append(current.val)
                    current = current.right

        return result
    }
```

```csharp []
public class Solution {
    public IList<int> InorderTraversal(TreeNode root) {
        List<int> result = new List<int>();
        TreeNode current = root;

        while (current != null) {
            if (current.left == null) {
                result.Add(current.val);
                current = current.right;
            } else {
                TreeNode predecessor = current.left;

                while (predecessor.right != null && predecessor.right != current) {
                    predecessor = predecessor.right;
                }

                if (predecessor.right == null) {
                    predecessor.right = current;
                    current = current

.left;
                } else {
                    predecessor.right = null;
                    result.Add(current.val);
                    current = current.right;
                }
            }
        }

        return result;
    }
}
```

```javascript []
var inorderTraversal = function(root) {
    const result = [];
    let current = root;

    while (current) {
        if (!current.left) {
            result.push(current.val);
            current = current.right;
        } else {
            let predecessor = current.left;

            while (predecessor.right && predecessor.right !== current) {
                predecessor = predecessor.right;
            }

            if (!predecessor.right) {
                predecessor.right = current;
                current = current.left;
            } else {
                predecessor.right = null;
                result.push(current.val);
                current = current.right;
            }
        }
    }

    return result;
};
```

---
![image.png](./images/0.png)





# \uD83E\uDDD1\u200D\uD83D\uDCBB Happy Coding! \uD83C\uDF1F

 -- *MR.ROBOT SIGNING OFF*
