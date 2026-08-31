# 💯Faster✅💯 Lesser✅Detailed Explaination🎯DFS🧠Step-by-Step Explaination✅Python🐍Java🍵

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 75
**Link:** [https://leetcode.com/problems/add-one-row-to-tree/solutions/5029902/](https://leetcode.com/problems/add-one-row-to-tree/solutions/5029902/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share solution to this question with detailed explanation:

# \uD83C\uDFAFProblem Explaination: 
- We are given the `root` of a binary tree and two integers `val` and `depth`.
- The goal is to add a row of nodes with value `val` at the given depth `depth`, and to do so we are given a set of instructions that we need to follow, they are:
    - For a Binary Tree `root`(Given that the `root` node is at depth 1) and `val` and `depth`(let's assume `val = 1` and `depth = 3`) for each not null node at `depth - 1`(for this example that is `2`) we are supposed to add two tree nodes with value `val` as left child and right child.
```
    4 (depth 1)
   /
  2 (depth 2)
 / \\
3   1 (depth 3)
```
At `depth - 1` that is `2` we have `node with value 2` to this node we are supposed to add 2 node as left child and right child with value `val`
```
    4 (depth 1)
   /
  2 (depth 2)
 / \\
1   1 (depth 3)
/   \\
3    1 (depth 4)
```
- Other rule:
    - If `depth == 1` that means there is no depth `depth - 1` at all, then create a tree node with value `val` as the new root of the whole original tree, and the original tree is the new root's left subtree.
```
depth = 1, val = 1
Binary Tree:
    4 (depth 1)
   /
  2 (depth 2)
 / \\
3   1 (depth 3)
```
If `depth = 1` then we are supposed to create a new node with value `val` as root node and then add the previous root node as left child.
```
      1 (depth 1)
     /
    4 (depth 2)
   /
  2 (depth 3)
 / \\
3   1 (depth 4)
```
We can solve it using `BFS` and `DFS`. Below approach and code is for `DFS`:
# \u2705Approach:
- **Base Case**:
  - If the `root` is `null`, return `null` (handle empty tree).

- **Adding at Depth 1**:
  - If `depth` is 1, create a new root (`newRoot`) with the specified value (`val`) and make the existing `root` its left child.
  - Return the new root.

- **Recursive Adding at Specific Depth**:
  - If the current depth (`curr`) is one less than the desired depth (`depth - 1`), perform the following steps:
    - Save the current left and right children of the node (`lTemp` and `rTemp`).
    - Create new nodes with value `val` and set them as the left and right children of the current node.
    - Attach the original left and right children (`lTemp` and `rTemp`) to the newly added nodes.
  - Recursively call the `add` method on the left and right subtrees to continue adding the row at the specified depth.

# Code\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB(DFS):
```Python []
class Solution:
    def add(self, root, val, depth, curr):
        if not root:
            return None

        if curr == depth - 1:
            lTemp = root.left
            rTemp = root.right

            root.left = TreeNode(val)
            root.right = TreeNode(val)
            root.left.left = lTemp
            root.right.right = rTemp

            return root

        root.left = self.add(root.left, val, depth, curr + 1)
        root.right = self.add(root.right, val, depth, curr + 1)

        return root

    def addOneRow(self, root, val, depth):
        if depth == 1:
            newRoot = TreeNode(val)
            newRoot.left = root
            return newRoot

        return self.add(root, val, depth, 1)
           
```
```Java []
public class Solution {
    public TreeNode add(TreeNode root, int val, int depth, int curr) {
        if (root == null)
            return null;

        if (curr == depth - 1) {
            TreeNode lTemp = root.left;
            TreeNode rTemp = root.right;

            root.left = new TreeNode(val);
            root.right = new TreeNode(val);
            root.left.left = lTemp;
            root.right.right = rTemp;

            return root;
        }

        root.left = add(root.left, val, depth, curr + 1);
        root.right = add(root.right, val, depth, curr + 1);

        return root;
    }

    public TreeNode addOneRow(TreeNode root, int val, int depth) {
        if (depth == 1) {
            TreeNode newRoot = new TreeNode(val);
            newRoot.left = root;
            return newRoot;
        }

        return add(root, val, depth, 1);
    }
}
```
```C++ []
class Solution {
public:
    TreeNode* add(TreeNode* root, int val, int depth, int curr) {
        if (!root)
            return nullptr;

        if (curr == depth - 1) {
            TreeNode* lTemp = root->left;
            TreeNode* rTemp = root->right;

            root->left = new TreeNode(val);
            root->right = new TreeNode(val);
            root->left->left = lTemp;
            root->right->right = rTemp;

            return root;
        }

        root->left = add(root->left, val, depth, curr + 1);
        root->right = add(root->right, val, depth, curr + 1);

        return root;
    }

    TreeNode* addOneRow(TreeNode* root, int val, int depth) {
        if (depth == 1) {
            TreeNode* newRoot = new TreeNode(val);
            newRoot->left = root;
            return newRoot;
        }

        return add(root, val, depth, 1);
    }
};
```
# Code Explanation\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:

The goal is to add a new row of nodes with a given value `val` at a specific depth `depth` in a binary tree. If `depth` is 1, the new nodes will become the root's children.

### TreeNode Class Definition

First, let's define the `TreeNode` class used in this solution:

```java
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int val) {
        this.val = val;
    }
}
```

### Solution Class

The `Solution` class contains two main methods:
- `addOneRow(TreeNode root, int val, int depth)`: This method is the entry point for adding a new row.
- `add(TreeNode root, int val, int depth, int curr)`: This recursive helper method actually performs the insertion of nodes at the specified depth.

### Step-by-Step Breakdown

Let's go through the implementation step by step:

#### 1. `addOneRow(TreeNode root, int val, int depth)`

This method is called to add a row of nodes to the binary tree. It checks if `depth` is 1:
- If `depth` is 1, it creates a new root with `val` as its value and assigns the current root as its left child. Then, it returns this new root.
- If `depth` is greater than 1, it calls the `add` method to add nodes at the specified `depth`.

```java
public TreeNode addOneRow(TreeNode root, int val, int depth) {
    if (depth == 1) {
        TreeNode newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }

    return add(root, val, depth, 1);
}
```

#### 2. `add(TreeNode root, int val, int depth, int curr)`

This recursive method navigates through the tree:
- If the current depth `curr` is one less than the target depth (`depth - 1`), it reaches the desired depth.
  - It stores the original left and right children of the current node.
  - It then creates new nodes with value `val` and sets them as the left and right children of the current node.
  - It assigns the original left and right children to these newly added nodes.
- If the current node is not at the desired depth, it recursively calls itself on the left and right subtrees, incrementing `curr` to track the current depth.

```java
public TreeNode add(TreeNode root, int val, int depth, int curr) {
    if (root == null)
        return null;

    if (curr == depth - 1) {
        TreeNode lTemp = root.left;
        TreeNode rTemp = root.right;

        root.left = new TreeNode(val);
        root.right = new TreeNode(val);
        root.left.left = lTemp;
        root.right.right = rTemp;

        return root;
    }

    root.left = add(root.left, val, depth, curr + 1);
    root.right = add(root.right, val, depth, curr + 1);

    return root;
}
```










