# Official Solution

**Link:** [https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solution/](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/505493427" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Overview

This is yet another problem about Binary Tree traversals. As one would probably know, the common strategies to traverse a _Tree_ data structure are **_Breadth-First Search_** (_a.k.a._ BFS) and **_Depth-First Search_** (_a.k.a._ DFS).

The DFS strategy can be further distinguished as _preorder DFS_, _inorder DFS_ and _postorder DFS_, depending on the relative order of visit among the node itself and its child nodes.

If one is not familiar with the concepts of BFS and DFS, we have an Explore card called [Queue & Stack](https://leetcode.com/explore/learn/card/queue-stack/) where we cover the [BFS traversal](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/) as well as the [DFS traversal](https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/).
Hence, in this article, we won't repeat ourselves on these concepts.

In this problem, we are asked to return the **_vertical_** order of a binary tree, which implies three sub-orders (denoted as `<column, row, value>`) as follows:

- **column-wise order**
    <br/>

    First, we look at a binary tree _horizontally_. Each node would be aligned to a specific `column`, based on its relative _offset_ to the root node of the tree.
    <br/>

    Let us assume that the root node has a column index of `0`, then its left child node would have a column index of `-1`, and its right child node would have a column index of `+1`, and so on.
    <br/>

- **row-wise order**
    <br>

    Secondly, we look at the binary tree _vertically_. Each node would be assigned to a specific `row`, based on its _level_ (_i.e._ the vertical distance to the root node).
    <br/>

    Let us assume that the root node has a row index of `0`, then both its child nodes would have the row index of `1`.
    Note that the convention we adopt here is slightly different from the one in the problem description where the row index of a parent node is larger than the one of its child nodes.
    This, though, would not jeopardize our solution. On the contrary, it would help us to simplify the solution, as one will see later.
    <br/>

- **value-wise order**
    <br/>

    Finally, given the definitions of the above two sub-orders, there could be a case where two different nodes have the same `<column, row>` index. As a result, to resolve the draw situation, as stated in the problem description, the node that has a smaller `value` should come first.

>Given the above definitions, we can now formulate the problem as a task to **sort** the nodes based on the 3-dimensional coordinates (_i.e._ `<column, row, value>`) that we defined above.

The priority of each coordinate is determined by its order.
For example, the coordinate `column` comes first, therefore it has the highest priority.
A node with the lowest `column` index would come up first, regardless the other two coordinates.

Before proceeding to the solutions, we would like to mention that there is another _almost_ identical problem called [314. Binary Tree Vertical Order Traversal](https://leetcode.com/problems/binary-tree-vertical-order-traversal/) in the LeetCode.

The only difference between these two problems lies in the _third_ sub-order.
When two nodes have the same `<column, row>` index, in this problem we would further order them based on their values, while in the problem of _314_ we would order them based on the horizontal order from left to right.
To illustrate the difference, we show an example in the following graph on how two nodes of the same `<column, row>` index should be ordered respectively in these two problems.

![problem 987 vs. problem 314](../Figures/987/987_314_comparison.png)

A subtle difference as it seems to be, yet it has a significant impact on the solutions.
As a spoiler alert, one could solve the problem of _314_ without resorting to the sorting operation, while for this problem the sorting is _inevitable_ due to the third sub-order required in the problem.
<br/>
<br/>

---
### Approach 1: BFS/DFS with Global Sorting

**Intuition**

In the overview section, we've reduced the problem into a sorting problem, based on the order of 3-dimensional coordinates `<column, row, value>` as we defined.

>As a result, the idea to solve the problem would be as intuitive as **_building_** a list where each element in the list corresponds to the 3-dimensional coordinates of each node in the tree, and then **_sorting_** the list based on the coordinates.

To build such a list, we would need to traverse all the nodes in the tree, which we could do with either Breadth-First Search (**BFS**) or Depth-First Search (**DFS**).
Most of the time, facing the problems of binary tree traversal, we need to make a choice between them.
However, in this case, both of the approaches would work.
Because both of them would lead to a list that contains the coordinates of all nodes. Though the order of elements in the list would differ depending on the approach, it does not matter, since we would _sort_ the list anyway. 

**Algorithm**

Based on the above intuition, we could implement the solution in 3 simple steps:

- **Step 1)**: we traverse the input tree either by BFS or DFS, in order to generate a list that contains the 3-dimensional coordinates (_i.e._ `<column, row, value>`) of each node.

    - Note that, we assign a higher `row` index value to a node's child node.
    This convention is at odds with the denotation given in the problem description.
    This is done _intentionally_, in order to keep the ordering of all coordinates consistent, _i.e._ a lower value in any specific coordinate represents a higher order.
    As a result, a sorting operation in ascending order would work for each coordinate consistently.


- **Step 2)**: Once we generate the desired list, we then _sort_ the list.

- **Step 3)**: From the _sorted_ list, we then extract the results, and group them by the `column` index.

In the following, we give some sample implementations with both the BFS traversal and the DFS traversal.

***BFS Traversal***

<iframe src="https://leetcode.com/playground/4V9ybGJK/shared" frameBorder="0" width="100%" height="500" name="4V9ybGJK"></iframe>

Note: when extracting the desired result from the _sorted_ list, one would use the hashmap data structure, which could make the code more concise, as we did in the Python implementation.

Or, one could do so solely with the list data structure as we did in the Java implementation, which theoretically could be more efficient since we do not need to convert the results from hashmap to list.


***DFS Traversal***

<iframe src="https://leetcode.com/playground/JfuEbkDv/shared" frameBorder="0" width="100%" height="500" name="JfuEbkDv"></iframe>


**Complexity Analysis**

Let $$N$$ be the number of nodes in the input tree.

- Time Complexity: $$\mathcal{O}(N \log N)$$, which applies to both the BFS and DFS approaches.

    - In the first step of the algorithm, we traverse the input tree with either BFS or DFS, which would take $$\mathcal{O}(N)$$ time.

    - Secondly, we sort the obtained list of coordinates which contains $$N$$ elements. The sorting operation would take $$\mathcal{O}(N \log N)$$ time.

    - Finally, we extract the results from the sorted list, which would take another $$\mathcal{O}(N)$$ time.

    - To summarize, the overall time complexity of the algorithm would be $$\mathcal{O}(N \log N)$$, which is dominated by the sorting operation in the second step.

- Space Complexity: $$\mathcal{O}(N)$$. Again this applies to both the BFS and DFS approaches.

    - In the first step of the algorithm, we build a list that contains the coordinates of all the nodes. Hence, we need $$\mathcal{O}(N)$$ space for this list.

    - Additionally, for the BFS approach, we used a queue data structure to maintain the order of visits. At any given moment, the queue contains no more than **two levels** of nodes in the tree. The maximal number of nodes at one level is $$\frac{N}{2}$$, which is the number of the leaf nodes in a balanced binary tree. As a result, the space needed for the queue would be $$\mathcal{O}(\frac{N}{2} \cdot 2) = \mathcal{O}(N)$$.

    - Although we don't need the queue data structure for the DFS approach, the recursion in the DFS approach incurs some additional memory consumption on the function call stack. In the worst case, the input tree might be completely imbalanced, _e.g._ each node has only the left child node. In this case, the recursion would occur up to $$N$$ times, which in turn would consume $$\mathcal{O}(N)$$ space in the function call stack.

    - To summarize, the space complexity for the BFS approach would be $$\mathcal{O}(N) + \mathcal{O}(N) = \mathcal{O}(N)$$. And the same applies to the DFS approach.
<br/>
<br/>

---
### Approach 2: BFS/DFS with Partition Sorting

**Intuition**

As we can see in the above approaches, the overall time complexity is dominated by the sorting operation on the list of coordinates.
In order to further optimize the solution, we can try to do something with the sorting.

It would be hard, if not impossible, to eliminate the sorting operation, since we still need a means to resolve the draw situation when two nodes share the same `<column, row>` index.

One might argue that we could use the **heap** data structure (also known as `PriorityQueue` in Java) to maintain the list of coordinates.
The elements in the heap data structure are ordered automatically, and this does eliminate the sorting operation.
However, to maintain the elements in order, each insertion operation in heap would take $$\mathcal{O}(\log N)$$ time complexity.
In other words, one can consider the heap data structure as another form of sorting, which amortizes the cost of sorting operating over each insertion.

One could apply the head data structure to replace the sorting operation here, which could make the code more concise. But this is not the main point here.

>That being said, one thing that we can do is to reduce the scope of sorting, by **partitioning** the list of coordinates into subgroups based on the `column` index.

![nodes partition](../Figures/987/987_nodes_partition.png)

Although we would still need to sort the subgroups respectively, it would be **_faster_** to sort a series of subgroups than sorting them all together in a single group. Here is a not-so-rigid proof.

Suppose that we have a list of $$N$$ elements, it would then take $$\mathcal{O}(N \log N)$$ time to sort this list.

Next, we divide the list into $$k$$ sublists equally. Each list would contain $$\frac{N}{k}$$ elements.
Similarly, it would take $$\mathcal{O}(\frac{N}{k} \log \frac{N}{k})$$ time to sort each sublist.

In total, to sort all the $$k$$ sublists, it would take $$\mathcal{O}(k \cdot \frac{N}{k} \log \frac{N}{k}) = \mathcal{O}(N \log \frac{N}{k})$$, which is **less than** the time complexity of sorting the original list (_i.e._ $$\mathcal{O}(N \log N)$$).

>More importantly, another rationale to partition the list into `column` based groups is that this is also the format of results that are asked in the problem.

Once we sort the `column` based groups, we can directly return the groups as results, without the need for extraction as we did in the previous approach.

This is also the reason why we would _not_ recommend to further partition the list based on the combination of `<column, row>` index.
Although _theoretically_, the more groups that we partition the list into, the faster the sorting operations would be.

If we partition the list into the groups lead by `<column row>` index, we would need some additional processing to extract the results.
Hence, it would become an overkill.

**Algorithm**

We could implement the above intuition based on the previous approaches. Again, we could break it down into 3 steps:

- **Step 1)**: First of all, we create a hashmap called `columnTable` with the `column` index as key and the list of `<row, value>` tuples as value. This hashmap is used to hold the groups of coordinates.

    - We traverse the input tree by either BFS or DFS. During the traversal, we populate the hashmap that we created above.

    - Meanwhile, we also note down the minimal and maximal column index during the traversal. The minimal and maximal column index defines the range of column index. With this range, we could iterate through columns in order without the need for sorting, as one will see later.


- **Step 2)**: Once we populate the above hashmap, we then _sort_ the value in each entry of the hashmap, _i.e._ we sort each group of coordinates led by the `column` index.

- **Step 3)**: From the _sorted_ hashmap, we extract the results that are grouped by the `column` index.

In the following, we give some sample implementations with both the BFS traversal and the DFS traversal.


***BFS Traversal***

<iframe src="https://leetcode.com/playground/Um8kbKHT/shared" frameBorder="0" width="100%" height="500" name="Um8kbKHT"></iframe>


***DFS traversal***

<iframe src="https://leetcode.com/playground/D5qTEPtC/shared" frameBorder="0" width="100%" height="500" name="D5qTEPtC"></iframe>


**Complexity Analysis**

Let $$N$$ be the number of nodes in the tree.

- Time Complexity: $$\mathcal{O}(N \log{\frac{N}{k}})$$ where $$k$$ is the width of the tree, _i.e._ $$k$$ is also the number of columns in the result. 

    - In the first step, it takes $$\mathcal{O}(N)$$ time complexity for both the BFS and DFS traversal.

    - In the second step, we need to sort the hashmap entry by entry. As we shown in the intuition section, the time complexity of sorting $$k$$ equal-sized subgroups of with total $$N$$ elements would be $$\mathcal{O}(k \cdot \frac{N}{k} \log{\frac{N}{k}}) =  \mathcal{O}(N \log{\frac{N}{k}}) $$. If we assume that the nodes are evenly aligned in the columns, then this would be the time complexity of sorting the obtained hashmap.

    - Finally, it takes another $$\mathcal{O}(N)$$ time complexity to extract the results from the hashmap.

    - As a result, the overall time complexity is $$\mathcal{O}(N \log{\frac{N}{k}})$$.

    - Although the sorting operation in the second step still dominates, it is more optimized compared to the previous approach of sorting the entire coordinates.
    Let us look at one particular example. In the case where the tree is complete imbalanced (_e.g._ a node has only left node), the tree would be partitioned into exactly $$N$$ groups. Each group contains a single element. It would take no time to sort each group. As a result, the overall time complexity of this approach becomes $$N \cdot \mathcal{O}(1) = \mathcal{O}(N)$$.
    While for the previous approach, its overall time complexity remains $$\mathcal{O}(N \log N)$$. 

- Space Complexity: $$\mathcal{O}(N)$$. Again this applies to both the BFS and DFS approaches. The analysis is the same as the previous approach.


---