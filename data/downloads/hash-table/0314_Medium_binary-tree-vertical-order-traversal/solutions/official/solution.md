# Official Solution

**Link:** [https://leetcode.com/problems/binary-tree-vertical-order-traversal/solution/](https://leetcode.com/problems/binary-tree-vertical-order-traversal/solution/)

---

[TOC]

## Solution

---
### Overview

This is yet another problem about Binary Tree traversals. As one would probably know, the common strategies to traverse a _Tree_ data structure are **_Breadth-First Search_** (_a.k.a_ BFS) and **_Depth-First Search_** (_a.k.a._ DFS).

The DFS strategy can be further distinguished as _preorder DFS_, _inorder DFS_ and _postorder DFS_, depending on the relative order of visit among the node itself and its child nodes.

If one is not familiar with the concepts of BFS and DFS, one can find the corresponding problems on LeetCode to practice with. Also, we have an Explore card called [Queue & Stack](https://leetcode.com/explore/learn/card/queue-stack/) where we cover both [the BFS traversal](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/) as well as [the DFS traversal](https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/).
Hence, in this article, we won't repeat ourselves on these concepts.

In the problem description, we are asked to return the **_vertical_** order of a binary tree, which actually implies two sub-orders, where each node would have a 2-dimensional index (denoted as `<column, row>`) 

![tree in 2D coordinates](../Figures/314/314_coordinates.png)

- **column-wise order**
    <br/>

    If we look at a binary tree _horizontally_, each node can be aligned to a specific `column`, based on its relative _offset_ to the root node of the tree.
    <br/>

    Let us assume that the root node has a column index of `0`, then its left child node would have a column index of `-1` and its right child node would have a column index of `+1`, and so on.
    <br/>

- **row-wise order**
    <br>
    Now if we put the nodes into a *vertical* dimension, each node would be assigned to a specific `row`, based on its _level_ (_i.e._ the vertical distance to the root node).
    <br/>

    Let us assume that the root node has a row index of `0`, then both its child nodes would have the row index of `1`.

>Given the above definitions, we can now formulate the problem as a task to order the nodes based on the 2-dimensional coordinates that we defined above.

More specifically, the nodes should be ordered by `column` first, and further the nodes on the same column should be ordered _**vertically**_ based on their `row` indices.
<br/>
<br/>

---
### Approach 1: Breadth-First Search (BFS)

**Intuition**

With the formulation of the problem in the overview section, one of the most intuitive solutions to tackle the problem would be applying the BFS traversal, where the nodes would be visited _level by level_.

With the BFS traversal, we naturally can guarantee the vertical order of the visits, _i.e._ the nodes at _higher_ levels (large `row` values) would get visited later than the ones at lower levels.

However, we are still missing the horizontal order ( the `column` order). To ensure this order, we need to do some additional processing during the BFS traversal.

>The idea is that we keep a hash table (let's denote it as `columnTable<key, value>`), where we keep the node values grouped by the `column` index.

The `key` in the hash table would be the `column` index, and the corresponding `value` would be a list which contains the values of all the nodes that share the same column index.

In addition, the values in the corresponding list should be ordered by their `row` indices, which would be guaranteed by the BFS traversal as we mentioned before.


**Algorithm**

We elaborate on the steps to implement the above idea. 

- First, we create a hash table named `columnTable` to keep track of the results.
<br/>

- As to the BFS traversal, a common code pattern would be to use a `queue` data structure to keep track of the order we need to visit nodes.
We initialize the queue by putting the root node along with its column index value (`0`).
<br/>

- We then run the BFS traversal with a loop consuming the elements from the queue.
<br/>

- At each iteration within the BFS, we pop out an element from the queue. The element consists of a `node` and its corresponding `column` index. If the node is not empty, we then populate the `columnTable` with the value of the node. Subsequently, we then put its child nodes along with their respective column indices (_i.e._ `column-1` and `column+1`) into the queue. 
<br/>

- At the end of the BFS traversal, we obtain a hash table that contains the desired node values grouped by their `column` indices. For each group of values, they are further ordered by their `row` indices.
<br/>

- We then sort the hash table by its keys, _i.e._ `column` index in ascending order. And finally we return the results _column by column_.

<iframe src="https://leetcode.com/playground/CufM8Hj3/shared" frameBorder="0" width="100%" height="500" name="CufM8Hj3"></iframe>


**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(N \log N)$$ where $$N$$ is the number of nodes in the tree. 

    In the first part of the algorithm, we do the BFS traversal, whose time complexity is $$\mathcal{O}(N)$$ since we traversed each node once and only once.

    In the second part, in order to return the ordered results, we then sort the obtained hash table by its keys, which could result in the $$\mathcal{O}(N \log N)$$ time complexity in the worst case scenario where the binary tree is extremely imbalanced (for instance, each node has only left child node.)

    As a result, the overall time complexity of the algorithm would be $$\mathcal{O}(N \log N)$$.


- Space Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the number of nodes in the tree.

    First of all, we use a hash table to group the nodes with the same column index. The hash table consists of keys and values. In any case, the values would consume $$\mathcal{O}(N)$$ memory. While the space for the keys could vary, in the worst case, each node has a unique column index, _i.e._ there would be as many keys as the values. Hence, the total space complexity for the hash table would still be $$\mathcal{O}(N)$$.

    During the BFS traversal, we use a `queue` data structure to keep track of the next nodes to visit. At any given moment, the queue would hold no more two levels of nodes. For a binary tree, the maximum number of nodes at a level would be $$\frac{N+1}{2}$$ which is also the number of leafs in a full binary tree. As a result, in the worst case, our queue would consume at most $$\mathcal{O}(\frac{N+1}{2} \cdot 2) = \mathcal{O}(N) $$ space.

    Lastly, we also need some space to hold the results, which is basically a reordered hash table of size $$\mathcal{O}(N)$$ as we discussed before.

    To sum up, the overall space complexity of our algorithm would be $$\mathcal{O}(N)$$.

<br/>
<br/>

---
### Approach 2: BFS without Sorting

**Intuition**

In the previous approach, it is a pity that the sorting of results overshadows the main part of the algorithm which is the BFS traversal. One might wonder if we have a way to eliminate the need for sorting. And the answer is yes.

>The key insight is that we only need to know the **range** of the column index (_i.e._ `[min_column, max_column]`). Then we can simply _**iterate**_ through this range to generate the outputs without the need for sorting.

The above insight would work under the _condition_ that there won't be any missing column index in the given range. And the condition always holds, since there won't be any broken branch in a binary tree.

**Algorithm**

To implement this optimization, it suffices to make some small modifications to our previous BFS approach.

During the BFS traversal, we could obtain the range of the column indices, _i.e._ with the variable of `min_column` and `max_column`.

At the end of the BFS traversal, we would then walk through the column range `[min_column, max_column]` and retrieve the results accordingly.

!?!../Documents/314_LIS.json:1000,570!?!

<iframe src="https://leetcode.com/playground/86BoXdhW/shared" frameBorder="0" width="100%" height="500" name="86BoXdhW"></iframe>


**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the number of nodes in the tree. 
    <br/>
    Following the same analysis in the previous BFS approach, the only difference is that this time we don't need the costy sorting operation (_i.e._ $$\mathcal{O}(N \log N)$$).

- Space Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the number of nodes in the tree. The analysis follows the same logic as in the previous BFS approach.
<br/>
<br/>

---
### Approach 3: Depth-First Search (DFS)

**Intuition**

Although we applied a BFS traversal in both of the previous approaches, it is not impossible to solve the problem with a DFS traversal.

>As we discussed in the overview section, once we assign a 2-dimensional index (_i.e._ `<column, row>`) for each node in the binary tree, to output the tree in _**vertical**_ order is to sort the nodes based on the 2-dimensional index, firstly by `column` then by `row`, as shown in the following graph.

![tree to table](../Figures/314/314_table.png)

Compared to the DFS traversal, the BFS traversal gives us a head start, since the nodes in higher rows would be visited later than the ones in the lower lows. As a result, we only need to focus on the `column` order.

That being said, we could simply traverse the tree in any DFS order (preorder, inorder or postorder), then we sort the resulting list strictly based on two keys `<column, row>`, which would give us the same results as the BFS traversal.

>An important note is that two nodes might share the same `<column, row>`, in the case, as stated in the problem, the order between these two nodes should be from **left** to **right** as we did for BFS traversals.
As a result, to ensure such a priority, one should make sure to visit the left child node before the right child node during the DFS traversal.


**Algorithm**

- Here we implement the above algorithm, with the trick that we applied in Approach 2 (BFS without sorting) where we obtained the range of `column` during the traversal.
<br/>

- First, we conduct a DFS traversal on the input tree. During the traversal, we would then build a similar `columnTable` with the `column` index as the key and the list of `(row, val)` tuples as the value. 
<br/>

- At the end of the DFS traversal, we iterate through the `columnTable` via the key of `column` index. Accordingly, we have a list of `(row, val)` tuples associated with each key. We then sort this list, based on the `row` index.
<br/>

- After the above steps, we would then obtain a list of node values ordered firstly by its `column` index and then by its `row` index, which is exactly the the _vertical_ order traversal of binary tree as defined in the problem.

<iframe src="https://leetcode.com/playground/4unzzfEk/shared" frameBorder="0" width="100%" height="500" name="4unzzfEk"></iframe>


**Complexity Analysis**

- Time Complexity: $$\mathcal{O}\big(W \cdot H \log{H})\big)$$ where $$W$$ is the width of the binary tree (_i.e._ the number of columns in the result) and $$H$$ is the height of the tree. 
    <br/>
    In the first part of the algorithm, we traverse the tree in DFS, which results in $$\mathcal{O}(N)$$ time complexity.
    <br/>

    Once we build the `columnTable`, we then have to sort it _column by column_.
    <br/>

    Let us assume the time complexity of the sorting algorithm to be $$\mathcal{O}(K \log K)$$ where $$K$$ is the length of the input. The maximal number of nodes in a column would be $$\frac{H}{2}$$ where $$H$$ is the height of the tree, due to the zigzag nature of the node distribution. As a result, the upper bound of time complexity to sort a column in a binary tree would be $$\mathcal{O}(\frac{H}{2} \log \frac{H}{2})$$. 
    <br/>

    Since we need to sort $$W$$ columns, the total time complexity of the sorting operation would then be $$\mathcal{O}\big(W \cdot (\frac{H}{2} \log{\frac{H}{2}})\big) = \mathcal{O}(W \cdot H \log{H}) $$. Note that, the total number of nodes $$N$$ in a tree is bounded by $$W \cdot H$$, _i.e._ $$ N < W \cdot H $$. As a result, the time complexity of $$\mathcal{O}\big(W \cdot H \log{H}\big)$$ will dominate the $$\mathcal{O}(N)$$ of the DFS traversal in the first part.
    <br/>

    At the end of the DFS traversal, we have to iterate through the `columnTable` in order to retrieve the values, which will take another $$\mathcal{O}(N)$$ time.
    <br/>

    To sum up, the overall time complexity of the algorithm would be $$\mathcal{O}\big(W \cdot H \log{H}\big)$$.
    <br/>
    
    An interesting thing to note is that in the case where the binary tree is completely imbalanced (_e.g._ node has only left child.), this DFS approach would have the $$\mathcal{O}(N)$$ time complexity, since the sorting takes no time on columns that contains only a single node. While the time complexity for our first BFS approach would be $$\mathcal{O}{(N \log N)}$$, since we have to sort the $$N$$ keys in the `columnTable`.

- Space Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the number of nodes in the tree.

    We kept the `columnTable` which contains all the node values in the binary tree. Together with the keys, it would consume $$\mathcal{O}(N)$$ space as we discussed in previous approaches.
    <br/>

    Since we apply the recursion for our DFS traversal, it would incur additional space consumption on the function call stack. In the worst case where the tree is completely imbalanced, we would have the size of call stack up to $$\mathcal{O}(N)$$.
    <br/>

    Finally, we have the output which contains all the values in the binary tree, thus $$\mathcal{O}(N)$$ space.
    <br/>

    So in total, the overall space complexity of this algorithm remains $$\mathcal{O}(N)$$.
<br/>
<br/>