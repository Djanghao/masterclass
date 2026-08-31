# Official Solution

**Link:** [https://leetcode.com/problems/invert-binary-tree/solution/](https://leetcode.com/problems/invert-binary-tree/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/605979642?h=1c09dc7189" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Recursive


This is a classic tree problem that is best-suited for a recursive approach.


**Algorithm**

The inverse of an empty tree is the empty tree. The inverse of a tree with root $$r$$, and subtrees $$\text{right}$$ and $$\text{left}$$, is a tree with root $$r$$, whose right subtree is the inverse of $$\text{left}$$, and whose left subtree is the inverse of $$\text{right}$$.

<iframe src="https://leetcode.com/playground/MkBAK8KX/shared" frameBorder="0" width="100%" height="259" name="MkBAK8KX"></iframe>

**Complexity Analysis**

Since each node in the tree is visited only once, the time complexity is $$O(n)$$, where $$n$$ is the number of nodes in the tree. We cannot do better than that, since at the very least we have to visit each node to invert it.

Because of recursion, $$O(h)$$ function calls will be placed on the stack in the worst case, where $$h$$ is the height of the tree. Because $$h\in O(n)$$, the space complexity is $$O(n)$$.

---

### Approach 2: Iterative

Alternatively, we can solve the problem iteratively, in a manner similar to breadth-first search.

**Algorithm**

The idea is that we need to swap the left and right child of all nodes in the tree. So we create a queue to store nodes whose left and right child have not been swapped yet. Initially, only the root is in the queue. As long as the queue is not empty, remove the next node from the queue, swap its children, and add the children to the queue. Null nodes are not added to the queue. Eventually, the queue will be empty and all the children swapped, and we return the original root.

<iframe src="https://leetcode.com/playground/gPUrf9YR/shared" frameBorder="0" width="100%" height="344" name="gPUrf9YR"></iframe>

**Complexity Analysis**

Since each node in the tree is visited / added to the queue only once, the time complexity is $$O(n)$$, where $$n$$ is the number of nodes in the tree.

Space complexity is $$O(n)$$, since in the worst case, the queue will contain all nodes in one level of the binary tree. For a full binary tree, the leaf level has $$\lceil \frac{n}{2}\rceil=O(n)$$ leaves.