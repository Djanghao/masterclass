# Recursive, Iterative and Iterative using Stack Approaches

**Author:** gsathish
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-upside-down/solutions/4469540/](https://leetcode.com/problems/binary-tree-upside-down/solutions/4469540/)

---

## Overview:

The problem is to `turn the binary tree upside down` and return the new root, which involves tree traversal. We can use either the `recursive approach` or the `iterative approach` to solve this problem.

This is a very interesting problem. We can solve this problem using three approaches. The first approach is the recursive approach. The second approach is the iterative approach. The third approach is the iterative approach using a stack.

### Approach-1: Recursive Approach

#### Intuition:

The intuition behind this approach is that we will recursively call the function for the left child of the root node. This will make the leftmost node as the new root node. Then we will set the left child of the new root node as the right child of the root node and the right child of the new root node as the root node. Then we will set the left and right child of the root node as null. This will be the new root node. We will return the new root node.

#### Algorithm:

1. If root is null or root.left is null, return root.
2. Call the function recursively for root.left.
3. Set root.left.left = root.right.
4. Set root.left.right = root.
5. Set root.left = null.
6. Set root.right = null.
7. Return the new root.

#### Implementation:

##### JavaScript:

```javascript
var upsideDownBinaryTree = function (root) {
  if (root == null || root.left == null) {
    return root;
  }

  let newRoot = upsideDownBinaryTree(root.left);
  root.left.left = root.right;
  root.left.right = root;
  root.left = null;
  root.right = null;
  return newRoot;
};
```

##### Java:

```java
    class Solution {
        public TreeNode upsideDownBinaryTree(TreeNode root) {
            if(root == null || root.left == null){
                return root;
            }

            TreeNode newRoot = upsideDownBinaryTree(root.left);
            root.left.left = root.right;
            root.left.right = root;
            root.left = null;
            root.right = null;
            return newRoot;
        }
    }
```

##### C:

```c
    struct TreeNode* upsideDownBinaryTree(struct TreeNode* root){
        if(root == NULL || root->left == NULL){
            return root;
        }

        struct TreeNode* newRoot = upsideDownBinaryTree(root->left);
        root->left->left = root->right;
        root->left->right = root;
        root->left = NULL;
        root->right = NULL;
        return newRoot;
    }
```

##### C++:

```cpp
    class Solution {
    public:
        TreeNode* upsideDownBinaryTree(TreeNode* root) {
            if(root == NULL || root->left == NULL){
                return root;
            }

            TreeNode* newRoot = upsideDownBinaryTree(root->left);
            root->left->left = root->right;
            root->left->right = root;
            root->left = NULL;
            root->right = NULL;
            return newRoot;
        }
    };
```

##### Python3:

```python
    class Solution:
        def upsideDownBinaryTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
            if root == None or root.left == None:
                return root

            newRoot = self.upsideDownBinaryTree(root.left)
            root.left.left = root.right
            root.left.right = root
            root.left = None
            root.right = None
            return newRoot
```

#### Complexity Analysis:

    Time Complexity: O(N), where N is the number of nodes in the tree. This is because we process each node exactly once.
    Space Complexity: O(N). This is because the recursive approach will consume a stack space of size N during the recursive calls.

### Approach-2: Iterative Approach:

#### Intuition:

The intuition behind this approach is that we will start from the `root` node and go towards the `leftmost node`. We will store the parent node of the current node and the right child of the `current node`. Then we will set the left child of the current node as the right child of the parent node and the right child of the current node as the parent node. Then we will set the left and right child of the current node as `null`. This will be the `new root node`. We will return the new root node.

#### Algorithm:

1. If root is null, return root.
2. Initialize node = root, parent = null, right = null.
3. While node is not null, do the following:
   - Set next = node.left.
   - Set node.left = right.
   - Set right = node.right.
   - Set node.right = parent.
   - Set parent = node.
   - Set node = next.
4. Return parent.

#### Implementation:

##### JavaScript:

```javascript
var upsideDownBinaryTree = function (root) {
  let node = root,
    parent = null,
    right = null;
  while (node != null) {
    let next = node.left;
    node.left = right;
    right = node.right;
    node.right = parent;
    parent = node;
    node = next;
  }
  return parent;
};
```

##### Java

```java
    class Solution {
        public TreeNode upsideDownBinaryTree(TreeNode root) {
            TreeNode node = root, parent = null, right = null;
            while (node != null) {
                TreeNode next = node.left;
                node.left = right;
                right = node.right;
                node.right = parent;
                parent = node;
                node = next;
            }
            return parent;
        }
    }
```

##### C

```c
    struct TreeNode* upsideDownBinaryTree(struct TreeNode* root){
        struct TreeNode* node = root, *parent = NULL, *right = NULL;
        while (node != NULL) {
            struct TreeNode* next = node->left;
            node->left = right;
            right = node->right;
            node->right = parent;
            parent = node;
            node = next;
        }
        return parent;
    }
```

##### C++

```cpp
    class Solution {
    public:
        TreeNode* upsideDownBinaryTree(TreeNode* root) {
            TreeNode* node = root, *parent = NULL, *right = NULL;
            while (node != NULL) {
                TreeNode* next = node->left;
                node->left = right;
                right = node->right;
                node->right = parent;
                parent = node;
                node = next;
            }
            return parent;
        }
    };
```

##### Python3

```python
    class Solution:
        def upsideDownBinaryTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
            node, parent, right = root, None, None
            while node:
                next = node.left
                node.left = right
                right = node.right
                node.right = parent
                parent = node
                node = next
            return parent
```

#### Complexity Analysis:

**Time Complexity:** `O(N)`, where `N` is the `number of nodes` in the tree. This is because we process each node exactly once.
**Space Complexity:** `O(1)`. This is because we use only `constant` extra space.

### Approach-3: Iterative Approach (Using Stack)

#### Intuition:

The intuition behind this approach is that we will start from the root node and go towards the leftmost node. We will store all the nodes in a `stack`. Then we will pop the nodes from the `stack` one by one. We will set the `left child` of the current node as the `right child` of the parent node and the right child of the current node as the parent node. Then we will set the left and right child of the `current node` as `null`. This will be the new root node. We will return the `new root node`.

#### Algorithm:

1.  If root is null, return root.
2.  Initialize stack = [], node = root.
3.  While node is not null, do the following:
    - Push node into stack.
    - Set node = node.left.
4.  Set newRoot = stack.pop(), current = newRoot.
5.  While stack is not empty, do the following:
    - Set parent = stack.pop().
    - Set current.right = parent.
    - Set current.left = parent.right.
    - Set parent.left = null.
    - Set parent.right = null.
    - Set current = parent.
6.  Return newRoot.

#### Implementation:

##### JavaScript:

```javascript
var upsideDownBinaryTree = function (root) {
  if (root == null) {
    return null;
  }
  let stack = [];
  while (root != null) {
    stack.push(root);
    root = root.left;
  }
  let newRoot = stack.pop();
  let current = newRoot;
  while (stack.length > 0) {
    let parent = stack.pop();
    current.right = parent;
    current.left = parent.right;
    parent.left = null;
    parent.right = null;
    current = parent;
  }
  return newRoot;
};
```

##### Java

```java
    class Solution {
        public TreeNode upsideDownBinaryTree(TreeNode root) {
            if (root == null) {
                return null;
            }
            Stack<TreeNode> stack = new Stack<>();
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            TreeNode newRoot = stack.pop();
            TreeNode current = newRoot;
            while (!stack.isEmpty()) {
                parent = stack.pop();
                current.right = parent;
                current.left = parent.right;
                parent.left = null;
                parent.right = null;
                current = parent;
            }
            return newRoot;
        }
    }
```

##### C

```c
    struct TreeNode* upsideDownBinaryTree(struct TreeNode* root){
        if (root == NULL) {
            return NULL;
        }
        struct TreeNode* stack[100];
        int top = -1;
        while (root != NULL) {
            stack[++top] = root;
            root = root->left;
        }
        struct TreeNode* newRoot = stack[top--];
        struct TreeNode* current = newRoot;
        while (top >= 0) {
            struct TreeNode* parent = stack[top--];
            current->right = parent;
            current->left = parent->right;
            parent->left = NULL;
            parent->right = NULL;
            current = parent;
        }
        return newRoot;
    }
```

##### C++

```cpp
    class Solution {
    public:
        TreeNode* upsideDownBinaryTree(TreeNode* root) {
            if (root == NULL) {
                return NULL;
            }
            stack<TreeNode*> stack;
            while (root != NULL) {
                stack.push(root);
                root = root->left;
            }
            TreeNode* newRoot = stack.top();
            TreeNode* current = newRoot;
            while (!stack.empty()) {
                TreeNode* parent = stack.top();
                stack.pop();
                current->right = parent;
                current->left = parent->right;
                parent->left = NULL;
                parent->right = NULL;
                current = parent;
            }
            return newRoot;
        }
    };
```

##### Python3

```python
    class Solution:
        def upsideDownBinaryTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
            if root == None:
                return None
            stack = []
            while root != None:
                stack.append(root)
                root = root.left
            newRoot = stack.pop()
            current = newRoot
            while len(stack) > 0:
                parent = stack.pop()
                current.right = parent
                current.left = parent.right
                parent.left = None
                parent.right = None
                current = parent
            return newRoot
```