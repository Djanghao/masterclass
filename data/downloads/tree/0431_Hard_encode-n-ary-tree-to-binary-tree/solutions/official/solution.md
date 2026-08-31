# Official Solution

**Link:** [https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solution/](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solution/)

---

[TOC]

## Solution

---
#### Intuition

There are several ways to encode the N-ary tree to a binary tree. However, a majority of the algorithms could all be traced back to the one that is documented on the [Wikipedia](https://en.wikipedia.org/wiki/M-ary_tree#Convert_a_m-ary_tree_to_binary_tree).

Here we would like to illustrate intuitively the idea first, which we would implement in different manners in the following sections.

![pic](../Figures/431/431_nary_tree.png)

To put it simple, the algorithm can be summarized in two steps. We use the above N-ary tree as an example for demonstration.

>Step 1). Link all **_siblings_** together, like a singly-linked list.

Each node in the original N-ary tree would correspond uniquely to a node in the resulting binary tree.

In the first step, we first chain up all the sibling nodes together, _i.e._ nodes that share the same parent. By _chaining up_, we would link the nodes via either `left` or `right` child pointers of the binary tree node. Here we choose to do with the _right_ pointer.

![pic](../Figures/431/431_sibling_list.png)

>Step 2). Link the **_head_** of the obtained list of siblings with its **_parent_** node.

Now that the siblings are chained up, we just need to link this sibling list with their parent node.

As one can see, we don't have to link each one of the siblings to its parent, and we cannot do so either, since we only got two pointers for a node in binary tree. It suffices to pick one of the siblings. Naturally, we could link the head of the list with its parent node.

![pic](../Figures/431/431_binary_tree.png)

_Before one notices, after the above two steps, we have already converted the N-ary tree to a binary tree !_

It might not be evident from the above graph. But if one turns the graph 45 degrees clockwise, a binary tree would appear.

![pic](../Figures/431/431_binary_tree_format.png)

As one can imagine, based on the above idea, one can create some variants. For instance, instead of linking the child nodes with the `right` pointers, we could use the `left` pointers. And accordingly, we could start from the last child node to chain up the siblings. Here is the variant.

![pic](../Figures/431/431_variant.png)


<br/>
<br/>

---
### Approach 1: BFS (Breadth-First Search) Traversal

**Intuition**

There are generally two strategies to traverse the tree data structure: _BFS (Breadth-First Search)_ and _DFS (Depth-First Search)_.

Based on the intuition in the above section, one might find it fit well with the BFS strategy, since we are traversing the nodes _level by level_, _i.e._ we chain up the sibling nodes which reside in the same level of the tree. Indeed, we could implement the algorithm with the BFS strategy. But actually, as we would demonstrate later, we could also implement it via the DFS strategy.

**Algorithm**

Let us start with the BFS on the `encode(root)` function:

- Speaking about BFS, one shall recall that it is essentially implemented via the **_queue_** data structure. Indeed, first of all, all the sibling nodes would be pushed into the queue in sequence. And the one at the head of the queue would be processed first, which follows the principle of the queue data structure, **_FIFO_** (_First In, First Out_).

- The main body of the algorithm consists of a _**loop**_ that iterates through the queue until it becomes empty. At each step of the loop, we _pop_ out a node from the head of the queue, and process it.

- For the popped out node, we then run another **_loop_** over its children nodes. As one notices, this is a nested loop inside the previous loop over the queue. At each step of this _nested loop_, for each child node, we do _two_ things:

    - First, we chain this child node with its previous neighbor sibling node.

    - Second, we append this child node into the queue, in order that it would have its turn to be processed as a parent node to encode its own children nodes.

- Voila. That is it. An important note is that we do the traversing of the N-ary tree in parallel with the construction of the desired Binary Tree. As a result, we keep each entry in the queue as a **_tandem_**, _i.e._ `pair(n-ary_tree_node, binary_tree_node)`.

- To render the algorithm more robust, we could handle the case where the input N-ary tree is empty at the beginning of the function.

!?!../Documents/431_LIS.json:1000,501!?!

<iframe src="https://leetcode.com/playground/Q8RBNVXy/shared" frameBorder="0" width="100%" height="500" name="Q8RBNVXy"></iframe>

As to the `decode(node)` function, similarly with our encoding function, we could implement in the _BFS_ manner.

- Again, the main algorithm is organized as a loop around a _queue_ data structure.

- We start from the root node of the encoded binary tree by pushing it into the queue.

- At each step of the iteration, we pop out a binary node from the tree, we then take the `left` child node of the node as its corresponding first child node of the original N-ary node.

- We then recover the rest of the child nodes by following the `right` pointer of the binary nodes.


**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the number of nodes in the N-ary tree. We traverse each node in the tree once and only once.

- Space Complexity: $$\mathcal{O}(L)$$ where $$L$$ is the maximum number of nodes that reside at the same level.
Since $$L$$ is proportional to $$N$$ in the worst case, we could further generalize the time complexity to $$\mathcal{O}(N)$$.

    - We use a queue data structure to do BFS traversal, _i.e._ visiting the nodes level by level.

    - **At any given moment, the queue contains nodes that are _at most_ spread into _two levels_**. As a result, assuming the maximum number of nodes at one level is $$L$$, the size of the queue would be less than $$2L$$ at any time.

    - Therefore, the space complexity of both `encode()` and `decode()` functions is $$\mathcal{O}(L)$$.


---
### Approach 2: DFS (Depth-First Search) Traversal

**Intuition**

As it turned out, we could also implement the idea at the beginning of the article through DFS (Depth-First Search) traversal strategy.

Often the case, we implement the DFS algorithm with the technique of **_recursion_** which could greatly simplify the logic. Instead of ironing out all iterative steps, we could implement the function with the help of the function itself.

>The idea is that while we traverse the N-ary tree _node by node_ in the DFS manner, we **_weave_** the nodes together into a Binary tree, following the same intuition of encoding in the previous approach.


**Algorithm**

Again, let's demonstrate the `encode(node)` function as an example.

>The main idea of the algorithm is that for each node, we only take care the encoding of the node itself, and we invoke the function itself to encode each of its child node, _i.e._ `encode(node.children[i])`.

- At the beginning of the `encode(node)` function, we create a binary tree node to contain the value of the current node.

- Then we put the first child of the N-ary tree node as the left node of the newly-created binary tree node. We call the encoding function recursively to encode the first child node as well.

- For the rest of the children nodes of the N-ary tree node, we chain them up with the `right` pointer of the binary tree node. And again, we call recursively the encoding function to encode each of the child node.

![pic](../Figures/431/431_DFS.png)

_Note:_ the following implementation is inspired from the post by [wangzi6147](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/discuss/153061/Java-Solution-(Next-Level-greater-left-Same-Level-greater-right)) in the discussion forum.

<iframe src="https://leetcode.com/playground/Zbw5XKkM/shared" frameBorder="0" width="100%" height="500" name="Zbw5XKkM"></iframe>


**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the number of nodes in the N-ary tree. We traverse each node in the tree once and only once.

- Space Complexity: $$\mathcal{O}(D)$$ where $$D$$ is the depth of the N-ary tree.
Since $$D$$ is proportional to $$N$$ in the worst case, we could further generalize the time complexity to $$\mathcal{O}(N)$$.

    - Unlike the BFS algorithm, we don't use the queue data structure in the DFS algorithm. However, implicitly the algorithm would consume more space in the function _call stack_ due to the recursive function calls.

    - And this consumption of call stack space is the main space complexity for our DFS algorithm. As we can see, the size of the call stack at any moment is exactly _the number of **level**_ where the currently visited node resides, _e.g._ for the root node (level _0_), the recursive call stack is empty.
<br/>
<br/>