# Recursive solution in O(n) time

**Author:** user1969U
**Votes:** 0
**Link:** [https://leetcode.com/problems/invert-binary-tree/solutions/6095843/](https://leetcode.com/problems/invert-binary-tree/solutions/6095843/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- We are given a binary tree, and the task is to invert it by swapping its branches. This means the left subtree becomes the right subtree, and the right subtree becomes the left subtree.

# Approach
<!-- Describe your approach to solving the problem. -->
- Recursion is a natural fit for this problem since the tree's structure lends itself well to a divide-and-conquer approach.
- The **base case** is straightforward: if the tree is empty (i.e., `root` is `#f`), we return `#f`. In other words, if there is no node, there is nothing to invert.
- For the **recursive case**, we process the current node by:
  1. Keeping the root value the same.
  2. Inverting the left subtree and placing it in the right position.
  3. Inverting the right subtree and placing it in the left position.

# Complexity
- **Time complexity:**
  The time complexity is $$O(n)$$, where $$n$$ is the number of nodes in the tree. This is because we visit each node exactly once during the recursion.

- **Space complexity:**
  The space complexity is $$O(h)$$, where $$h$$ is the height of the tree. This accounts for the maximum depth of the recursive call stack. In the worst case (a skewed tree), $$h = n$$. For a balanced tree, $$h = O(\\log n)$$.

# Code
```racket
; Definition for a binary tree node.
#|
; val : integer?
; left : (or/c tree-node? #f)
; right : (or/c tree-node? #f)
(struct tree-node
  (val left right) #:mutable #:transparent)

; Helper function to create a tree node.
|#
(define (make-tree-node val [left #f] [right #f])
  (tree-node val left right))

; Function to invert a binary tree.
(define/contract (invert-tree root)
  (-> (or/c tree-node? #f) (or/c tree-node? #f))
  (cond
    [(not root) #f] ; Base case: empty tree.
    [else
     (make-tree-node
      (tree-node-val root)                   ; Root value remains the same.
      (invert-tree (tree-node-right root))  ; Invert right subtree and assign to left.
      (invert-tree (tree-node-left root)))])) ; Invert left subtree and assign to right.
