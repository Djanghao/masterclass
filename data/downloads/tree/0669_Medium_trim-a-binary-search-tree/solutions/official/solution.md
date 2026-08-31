# Official Solution

**Link:** [https://leetcode.com/problems/trim-a-binary-search-tree/solution/](https://leetcode.com/problems/trim-a-binary-search-tree/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/778197870" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---
### Approach #1: Recursion

**Intuition**

Let `trim(node)` be the desired answer for the subtree at that node. We can construct the answer recursively.

**Algorithm**

When $$\text{node.val > high}$$, we know that the trimmed binary tree must occur to the left of the node. Similarly, when $$\text{node.val < low}$$, the trimmed binary tree occurs to the right of the node. Otherwise, we will trim both sides of the tree.

<iframe src="https://leetcode.com/playground/3oTT244t/shared" frameBorder="0" width="100%" height="500" name="3oTT244t"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$, where $$N$$ is the total number of nodes in the given tree. We visit each node at most once.

* Space Complexity: $$O(N)$$. Even though we don't explicitly use any additional memory, the call stack of our recursion could be as large as the number of nodes in the worst case.

---