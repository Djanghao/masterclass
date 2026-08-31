# Official Solution

**Link:** [https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solution/](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solution/)

---

## Solution

---

### Overview

We are given a string representation of a preorder traversal of a binary tree, where each node is represented as `D` dashes followed by its value. The number of dashes `D` indicates the depth of the node in the tree, with the root having depth `0`. Each node may have one or two children, and if a node has only one child, it is always the left child. Our task is to reconstruct the original binary tree from this traversal string.  

Since preorder traversal follows the **root → left → right** order, we process the nodes in sequence and assign them to their correct positions.

For example, given `traversal = "1-2--3--4-5--6--7"`, we can break it down as follows:  

```css
1  (Root)
|- 2  (Depth 1, Left child of 1)
|  |- 3  (Depth 2, Left child of 2)
|  |- 4  (Depth 2, Right child of 2)
|- 5  (Depth 1, Right child of 1)
   |- 6  (Depth 2, Left child of 5)
   |- 7  (Depth 2, Right child of 5)
```

This means the tree structure is:  

```css
       1
      / \
     2   5
    / \  / \
   3   4 6  7
```

The output should be: `[1, 2, 5, 3, 4, 6, 7]`.

Before diving into specific approaches, let’s first build a high-level strategy that applies to all the approaches.  

1. **Depth determines hierarchy**

Each node’s position in the tree is determined by the number of dashes (`-`) before its value:  
- A node with depth `D` is the child of the last node with depth `D - 1`.  
- If a node has a sibling, it appears immediately after its left sibling in the traversal.  
- If a node does not have a sibling, it is the only child of its parent.  

This means that the structure of the tree is fully determined by depth information, without requiring additional information like explicit left/right indicators. Because nodes appear before their children in preorder, we can sequentially assign them to their parents without needing to look ahead or backtrack significantly.  

2. **Maintaining a Structure to Track Parent-Child Relationships**

To efficiently determine the correct parent for each node, we need a mechanism to track nodes at different depths. There are two main ways to do this:  
- Using Recursion: We can recursively parse the string and build the tree.
- Using Stack: We maintain a stack where each node is pushed when encountered. When we process a new node, we find its correct parent by checking the stack for the most recent node with `depth - 1`.  

Regardless of the approach, the core idea is the same: When we encounter a new node, we determine its depth. We find the last node at `depth - 1` and attach the new node as its child. Then we ensure that the first child assigned to a parent is the left child, and the second (if present) is the right child.

---

### Approach 1: Brute Force (Recursive with String Manipulation)

#### Intuition

The simplest way to reconstruct a tree from a string is to process the input step by step as the input is in the format of preorder traversal. We know that each number in the string represents a node in the tree, and the number of dashes before it tells us how deep it should be.

To build the tree, first, we count the number of dashes (-). The more dashes we see, the deeper the node is in the tree. After counting the dashes, we extract the number that follows. This number becomes the value of a new node.

Once we have a node, we need to figure out where to place it in the tree. Since the nodes appear in depth-first (preorder) order in the string, we know that every new node belongs as a child of the most recently encountered node that has space for a child. If a node is at a greater depth than the previous one, it must be its left child. If it's at the same depth as the last node, it means we have moved to a new subtree, and it should be attached as a right child instead.

To implement this, we use recursion. A helper function takes the string and the current index, processes the node at that position, and then calls itself to construct the left and right children. This recursion follows the same logic as a depth-first traversal of a tree. If the function encounters a node at the wrong depth, it stops and returns, ensuring that nodes are placed correctly.

> For a more comprehensive understanding of recursion, check out the [Recursion Explore Card 🔗](https://leetcode.com/explore/learn/card/recursion-i/).

#### Algorithm

- Start with `index = 0` and call the recursive `helper` function with `depth = 0`.

- In `helper` function:
  - If `index` exceeds the length of `traversal`, return `nullptr`.

  - Count the number of dashes (`dashCount`) at `index`:
    - Iterate while the character at `index + dashCount` is `'-'`.
    - Increase `dashCount` accordingly.

  - If `dashCount` does not match `depth`, return `nullptr` (ensures correct tree structure).

  - Move `index` past the dashes.

  - Extract the numeric value for the node:
    - Initialize `value = 0`.
    - While `index` points to a digit, update `value` using `value * 10 + (digit)`.
    - Increment `index` for each digit processed.

  - Create a new `TreeNode` with the extracted value.

  - Recursively construct left and right children:
    - Call `helper` with `depth + 1` for the left subtree.
    - Call `helper` with `depth + 1` for the right subtree.

  - Return the constructed `TreeNode`.

#### Implementation

<iframe src="https://leetcode.com/playground/dFsKLqhx/shared" frameBorder="0" width="100%" height="500" name="dFsKLqhx"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree.  

- Time complexity: $O(n^2)$  

    We traverse the input string exactly once while parsing node values and dashes. Each character is processed a constant number of times. However, the depth of the tree impacts the reconstruction process. In the worst case, when the tree is skewed, finding the correct parent for each node involves scanning up to $O(n)$ previous nodes, leading to an overall $O(n^2)$ time complexity.

- Space complexity: $O(n)$  

    The recursion depth is determined by the depth of the tree, which in the worst case (a skewed tree) can be $O(n)$, leading to an $O(n)$ recursive call stack space. Additionally, we allocate $O(n)$ new `TreeNode` objects, contributing to an extra $O(n)$ memory usage.  

    Thus, the overall space complexity is $O(n)$.
 
---

### Approach 2: Iterative Approach with Stack (Single Pass)

#### Intuition

Recursion is useful, but it can be slow because it involves extra function calls and memory overhead. A more efficient way to process the string is to use a stack to keep track of nodes as we build the tree.

Think of the stack as a way to remember where we are in the tree. Each time we find a new node, we check how deep it should be by counting dashes. If the stack already has more nodes than this depth, it means we have finished processing a subtree, so we remove nodes from the stack until we reach the correct depth. The node left at the top of the stack is the parent of the new node.

Since the stack always holds the path from the root to the current node, its length at any point represents how deep we are in the tree. When we encounter a new node, we count the dashes to determine its depth. If the stack is longer than the depth, it means we need to move up in the tree, so we remove nodes from the stack until it matches the correct depth.

Once we identify the parent, we decide whether to attach the new node as its left or right child. If the left child doesn’t exist, we set it as the left child. Otherwise, it must be the right child. Finally, we push the new node onto the stack because it might have its own children in later steps.

The algorithm is visualized below: 

![approach__4](../Figures/1028/approach__4.png)

> For a more comprehensive understanding of stacks, check out the [Stack Explore Card 🔗](https://leetcode.com/explore/learn/card/queue-stack/). 

#### Algorithm

- Initialize a `stack` to keep track of nodes at different depths.
- Initialize `index` to 0 for traversing the `traversal` string.

- Iterate while `index` is within the bounds of `traversal`:
  - Count the number of dashes (`-`) to determine the `depth` of the current node.
  - Extract the numerical value of the node by iterating through the digits.
  - Create a new `TreeNode` with the extracted value.
  - Adjust the `stack` to ensure it aligns with the correct depth by popping elements if necessary.
  - Attach the newly created node to its parent:
    - If the top node of the stack has no left child, assign the new node as the left child.
    - Otherwise, assign it as the right child.
  - Push the new node onto the stack.

- Ensure the root node is correctly identified by popping extra elements from the stack until only one remains.
- Return the remaining node in the stack as the root of the reconstructed tree.

#### Implementation

<iframe src="https://leetcode.com/playground/aTogXeZG/shared" frameBorder="0" width="100%" height="500" name="aTogXeZG"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree.   

- Time complexity: $O(n^2)$  

    We traverse the input string exactly once while counting dashes and extracting node values. Each character is processed a constant number of times, contributing $O(n)$.  

    However, in the worst case (a skewed tree), finding the correct parent node may require scanning up to $O(n)$ previous nodes. This results in an additional $O(n)$ factor, leading to an overall $O(n^2)$ time complexity.

- Space complexity: $O(n)$  

    The maximum depth of the tree determines the maximum size of the stack. In the worst case (a skewed tree), the depth can be $O(n)$, leading to an $O(n)$ stack size.  

    Additionally, we allocate $O(n)$ `TreeNode` objects, contributing to an extra $O(n)$ memory usage.  

    Thus, the overall space complexity is $O(n)$.
 
---

### Approach 3: Iterative Approach with List

#### Intuition

Instead of using a stack, we can implement the solution using a list, as some may find list operations more intuitive. Both a stack and a list perform similar operations, such as appending elements to the end and removing them in a last-in, first-out (LIFO) manner. As a result, the overall time and space complexity remain the same. The choice between the two is mainly a matter of readability and personal preference rather than performance. In fact, in Python 3, there will be negligible difference between the two approaches since both utilize a list for storage.

We traverse the input while keeping track of depth using dashes. Whenever we encounter a digit, we extract the node value directly and create a new node. Instead of using a stack, we maintain a `levels` list where `levels[depth]` always holds the last node at that depth. 

After extracting a node’s value, we update `levels` to ensure that the new node is correctly positioned. If a node at the same depth already exists, we replace it; otherwise, we append the new node. The parent of the new node is always stored at `levels[depth - 1]`, ensuring that the tree structure remains correct as we attach nodes to their left or right children.

#### Algorithm

- Initialize `levels` array to track the last node at each depth level.
- Set `index` to 0 and `n` to the length of `traversal`.

- Iterate while `index < n`:
  - Count `depth` by counting consecutive dashes (`-`).
  - Extract `value` by reading digits until a non-digit character is encountered.
  - Create a new `TreeNode` with the extracted `value`.

  - If `depth` is smaller than `levels.size()`, replace `levels[depth]` with the new node.
  - Otherwise, append the new node to `levels`.

  - If `depth > 0`, attach the new node as a child:
    - Retrieve its `parent` from `levels[depth - 1]`.
    - If `parent->left` is null, assign the new node to `parent->left`.
    - Otherwise, assign the new node to `parent->right`.

- Return `levels[0]` as the root of the reconstructed tree.

#### Implementation

<iframe src="https://leetcode.com/playground/fUWWjT7L/shared" frameBorder="0" width="100%" height="500" name="fUWWjT7L"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree.   

- Time complexity: $O(n)$  

    We traverse the input string exactly once to count dashes and extract numeric values. Each character is processed a constant number of times, contributing $O(n)$.  

    However, in the worst case (a skewed tree), maintaining the list of levels and finding the correct parent may require scanning up to $O(n)$ previous nodes. This results in an additional $O(n)$ factor, leading to an overall $O(n^2)$ time complexity.

- Space complexity: $O(n)$  

    The levels list keeps track of at most $O(h)$ nodes, where the tree height $h$ can be at most $O(n)$ in the worst case. Additionally, we allocate $O(n)$ `TreeNode` objects for the tree itself.  

    Thus, the overall space complexity is $O(n)$.
 
---