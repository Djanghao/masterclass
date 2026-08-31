# Official Solution

**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solution/](https://leetcode.com/problems/find-leaves-of-binary-tree/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/806523757" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: DFS (Depth-First Search) with sorting

**Intuition**

The order in which the elements (nodes) will be collected in the final answer depends on the "height" of these nodes. The height of a node is the number of edges from the node to the deepest leaf. The nodes that are located in the i<sup>th</sup> height will be appear in the i<sup>th</sup> collection in the final answer. For any given node in the binary tree, the height is obtained by adding 1 to the maximum height of any children. Formally, for a given node of the binary tree $$\text{root}$$, it's height can be represented as

$$
    \text{height(root)} = \text{1} + \text{max(height(root.left), height(root.right))}
$$

Where $$\text{root.left}$$ and $$\text{root.right}$$ are left and right children of the root respectively

**Algorithm**

In our first approach, we'll simply traverse the tree recursively in a depth first search manner using the function `int getHeight(node)`, which will return the height of the given node in the binary tree. Since height of any node depends on the height of it's children node, hence we traverse the tree in a post-order manner (i.e. height of the childrens are calculated first before calculating the height of the given node). Additionally, whenever we encounter a null node, we simply return -1 as it's height.

Next, we'll store the pair `(height, val)` for all the nodes which will be sorted later to obtain the final answer. The sorting will be done in increasing order considering the height first and then the val. Hence we'll obtain all the pairs in the increasing order of their height in the given binary tree.

Attached below is the video which shows the calculation of height in a height-first-search manner for the binary tree given in the example.

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/810324564" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

Below is the implementaion of this approach

<iframe src="https://leetcode.com/playground/V2Ks6UXv/shared" frameBorder="0" width="100%" height="500" name="V2Ks6UXv"></iframe>

**Complexity Analysis**

* Time Complexity: Assuming $$N$$ is the total number of nodes in the binary tree, traversing the tree takes $$O(N)$$ time. Sorting all the pairs based on their height takes $$O(N \log N)$$ time. Hence overall time complexity of this approach is $$O(N \log N)$$

* Space Complexity: $$O(N)$$, the space used by `pairs` and the recursion call stack during `getHeight`.

---

### Approach 2: DFS (Depth-First Search) without sorting

We've seen in approach 1 that there is an additional sorting that is being performed, which increases the overall time complexity to $$O(N \log N)$$. The question we can ask here is, can we do better than this? To answer this, we try to remove the sorting by directly placing all the values in their respective positions, i.e. instead of using the `pairs` array to collect all the `(height, val)` pairs and then sorting them based on their heights, we'll directly obtain the solution by placing each element (`val`) to its correct position in the solution array. To clarify, in the given binary tree, `[4, 3, 5]` goes into the first position, `[2]` goes into the second position and `[1]` goes into the third position in the solution array.

To do this, we modify our `getHeight` method to directly insert the node's value in the solution array at the correct location. Solution array is kept empty in the beginning and as we encounter elements with increasing height, we'll keep increasing the size of the solution array to accomodate for these elements. For example, if our solution array currently is `[[4, 3, 5]]` and if we want to insert 2 at the second position, we first create the space for 2 by increasing the size of the solution array by 1 and then insert 2 at it's correct location.

* `[[4, 3, 5]] -> [[4, 3, 5], []] # increase the size of solution array`

* `[[4, 3, 5], []] -> [[4, 3, 5], [2]] # insert 2 at it's correct location`

Below is the implementation of the above mentioned approach.

<iframe src="https://leetcode.com/playground/Fdha4UCM/shared" frameBorder="0" width="100%" height="500" name="Fdha4UCM"></iframe>

**Complexity Analysis**

* Time Complexity: Assuming $$N$$ is the total number of nodes in the binary tree, traversing the tree takes $$O(N)$$ time and storing all the pairs at the correct position also takes $$O(N)$$ time. Hence overall time complexity of this approach is $$O(N)$$.

* Space Complexity: $$O(N)$$, the space used by the recursion call stack.