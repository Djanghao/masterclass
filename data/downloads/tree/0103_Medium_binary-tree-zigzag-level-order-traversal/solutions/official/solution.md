# Official Solution

**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solution/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solution/)

---

[TOC]

## Solution

---
### Approach 1: BFS (Breadth-First Search)

**Intuition**

Following the description of the problem, the most intuitive solution would be the *BFS* (Breadth-First Search) approach through which we traverse the tree level-by-level.

The default ordering of BFS within a single level is from left to right. As a result, we should adjust the BFS algorithm a bit to generate the desired zigzag ordering.

>One of the keys here is to store the values that are of the same level with the `deque` (double-ended queue) data structure, where we could add new values on either end of a queue.

So if we want to have the ordering of **FIFO** (first-in-first-out), we simply append the new elements to the *tail* of the queue, _i.e._ the latecomers stand last in the queue. If we want to have the ordering of **FILO** (first-in-last-out), we insert the new elements to the *head* of the queue, _i.e._ the latecomers jump the queue.

![pic](../Figures/103/103_BFS.png)


**Algorithm**

There are several ways to implement the BFS algorithm.

- One way would be to run a two-level nested loop, with the *outer loop* iterating each level on the tree, and with the *inner loop* iterating each node within a single level.
<br/>
- We could also implement BFS with a single loop though. The trick is that we append the nodes to be visited into a queue and we separate nodes of different levels with a sort of **delimiter** (_e.g._ an empty node). The delimiter marks the end of a level, as well as the beginning of a new level.

Here we adopt the *second* approach above. One can start with the normal BFS algorithm, upon which we add a touch of *zigzag* order with the help of `deque`. For each level, we start from an empty deque container to hold all the values of the same level. Depending on the ordering of each level, _i.e._ either from left to right or from right to left, we decide at which end of the deque to add the new element:

![pic](../Figures/103/103_deque.png)

- For the ordering of from-left-to-right (FIFO), we _append_ the new element to the **_tail_** of the queue, so that the element that comes late would get out late as well. As we can see from the above graph, given an input sequence of `[1, 2, 3, 4, 5]`, with FIFO ordering, we would have an output sequence of `[1, 2, 3, 4, 5]`.

- For the ordering of from-right-to-left (FILO), we _insert_ the new element to the **_head_** of the queue, so that the element that comes late would get out first. With the same input sequence of `[1, 2, 3, 4, 5]`, with FILO ordering, we would obtain an output sequence of `[5, 4, 3, 2, 1]`.

<iframe src="https://leetcode.com/playground/WpFb2xyq/shared" frameBorder="0" width="100%" height="500" name="WpFb2xyq"></iframe>

Note: as an alternative approach, one can also implement the normal BFS algorithm first, which would generate the ordering of from-left-to-right for each of the levels. Then, at the end of the algorithm, we can simply **_reverse_** the ordering of certain levels, following the zigzag steps.

**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(N)$$, where $$N$$ is the number of nodes in the tree.

    - We visit each node once and only once.

    - In addition, the insertion operation on either end of the deque takes a constant time, rather than using the array/list data structure where the inserting at the head could take the $$\mathcal{O}(K)$$ time where $$K$$ is the length of the list.

- Space Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the number of nodes in the tree.

    - The main memory consumption of the algorithm is the `node_queue` that we use for the loop, apart from the array that we use to keep the final output.

    - As one can see, at any given moment, the `node_queue` would hold the nodes that are _at most_ across two levels. Therefore, at most, the size of the queue would be no more than $$2 \cdot L$$, assuming $$L$$ is the maximum number of nodes that might reside on the same level. Since we have a binary tree, the level that contains the most nodes could occur to consist of all the leave nodes in a full binary tree, which is roughly $$L = \frac{N}{2}$$. As a result, we have the space complexity of $$2 \cdot \frac{N}{2} = N$$ in the worst case.   

---
### Approach 2: DFS (Depth-First Search)

**Intuition**

Though not intuitive, we could also obtain the _BFS_ traversal ordering via the _DFS_ (Depth-First Search) traversal in the tree.

>The trick is that during the DFS traversal, we maintain the results in a _global_ array that is indexed by the level, _i.e._ the element `array[level]` would contain all the nodes that are at the same level. The global array would then be referred to and updated at each step of DFS.

![pic](../Figures/103/103_DFS.png)

Similar with the above modified BFS algorithm, we employ the `deque` data structure to hold the nodes that are of the same level, and we alternate the insertion direction (_i.e._ either to the head or to the tail) to generate the desired output ordering.

**Algorithm**

Here we implement the DFS algorithm via _recursion_. We define a recursive function called `DFS(node, level)` which only takes care of the current `node` which is located at the specified `level`. Within the function, here are three steps that we would perform:

- If this is the first time that we visit any node at the `level`, _i.e._ the deque for the level does not exist, then we simply create the deque with the current node value as the initial element.

- If the deque for this level exists, then depending on the ordering, we insert the current node value either to the head or to the tail of the queue.

- At the end, we _recursively_ call the function for each of its child nodes.


<iframe src="https://leetcode.com/playground/9Khv25m4/shared" frameBorder="0" width="100%" height="500" name="9Khv25m4"></iframe>

It might go without saying that, one can also implement the DFS traversal via **_iteration_** rather than recursion, which could be one of the followup questions by an interviewer.

**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(N)$$, where $$N$$ is the number of nodes in the tree.

    - Same as the previous BFS approach, we visit each node once and only once.

- Space Complexity: $$O(N)$$.

    - Unlike the BFS approach, in the DFS approach, we do not need to maintain the `node_queue` data structure for the traversal.

    - However, the function recursion will incur additional memory consumption on the _function call stack_. As we can see, the size of the call stack for any invocation of `DFS(node, level)` will be exactly the number of `level` that the current node resides on. Therefore, the space complexity of our DFS algorithm is $$O(H)$$, where $$H$$ is the height of the tree. In the worst-case scenario, when the tree is very skewed, the tree height could be $$N$$. Thus the space complexity is also $$O(N)$$. 

  - Note that if the tree were guaranteed to be balanced, then the maximum height of the tree would be $$\log N$$ which would result in a better space complexity than the BFS approach.