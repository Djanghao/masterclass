# Official Solution

**Link:** [https://leetcode.com/problems/clone-n-ary-tree/solution/](https://leetcode.com/problems/clone-n-ary-tree/solution/)

---

[TOC]

## Solution

---
### Overview

The problem asks us to make a clone of a tree.
The task is not as intuitive as making a copy of an object.
By default, when we create a new object by copying another object, we simply copy the **primitive** values within the object.
This is called **_shallow copy_**.
The problem with the shallow copy is that if the object contains references or pointers to other objects, the newly-copied object will point to the same objects rather than making another copies of these referred objects.
In constrast to the _shallow copy_, the **_deep copy_** refers to the scenario that we make substantial copies of these referred objects.
For the tree data structure, the referred objects are the child nodes inside a node.
In order to make a deep copy of a node, not only we need to make a copy of the node value itself, but also we need to make substantial copies of its child nodes.

>To solve the problem, the overall idea is that we traverse the nodes one by one and for each node we make a **_deep copy_** of it.

When it comes to the traversal of tree, one cannot overlook the technique of **DFS** (Depth-First Search) and **_BFS_** (Breadth-First Search).
Indeed, in this article, we will cover three approaches namely **_recursion_**, **_DFS_** and **_BFS_**.

As one will see later, there is a fine line between the approach using _recursion_ and the approach using _DFS_. Some of you might consider the _recursion_ approach the same as the _DFS_.
Indeed, one can consider our _recursion_ approach as _DFS_ that is implemented in the form of recursion, as opposed to the _DFS_ in the form of iteration.

Despite the stark contrast between the ideas of _DFS_ and _BFS_ approaches, their implementations can be quite similar.
In fact, as we will discover later, they are almost _identical_.


---
### Approach 1: Recursion

**Intuition**

When it comes to problems that require us to traverse a tree, *recursion* is a concept that we cannot overlook.
First of all, tree data structures can be defined using recursion, _i.e._ a tree consists of a set of sub-trees, and each of those sub-trees consists of another set of sub-trees, and so on.
Therefore, it is only natural that often we can use _recursion_ to solve tree-related problems.
This is also the case for our problem here.

To better understand how we can apply recursion here, let's rephrase our problem in a _recursive_ manner as follows:
>To clone a tree, we can first clone the root node, then we can clone each _subtree_ **_recursively_** under the root node.

In addition to the _recursive_ relationship that we defined above, we need to define the **base cases** where no further recursion is invoked.
There are two base cases in our problem here:

- **Case 1:** When the node is a leaf node (it does not have any child nodes), we only need to clone the node itself. The node does not have any subtrees, so no additional recursive calls are needed.

- **Case 2:** When the node is empty, no clone is needed. Given case 1, this will only happen when the tree's root node is null.

Since recursion is a fundamental topic that is required for many algorithms, we have two Explore Cards that cover concepts and applications related to recursion, namely [Recursion I](https://leetcode.com/explore/learn/card/recursion-i) and [Recursion II](https://leetcode.com/explore/learn/card/recursion-ii).


**Note**, some may refer to this approach as **DFS** (Depth-First Search).
However, here we have entitled the approach *recursion* because we conceptualize the approach from the perspective of recursion (as in the mathematical term) rather than from the perspective of the DFS algorithm.
Furthermore, when talking about DFS, we typically emphasize the order of traversal.
However, in this approach, the order of traversal does not play an essential role in solving the problem. As long as we traverse all nodes, we will produce a valid deep copy of the tree.


**Algorithm**

Given the intuition above, we can **_literally_** translate it into implementation.
Due to the mathematical nature of recursion, sometimes we can simply *express* the solution in only a few lines of _formula-like_ code.
Here are a few steps to implement the recursive approach:

- First, we check the base case when the given node in the input is null. In this case, we simply return null.

- If the node is not null, we then make a copy of the node itself, by creating a new node and initializing it with the same value as the node.

- Furthermore, if the node contains any child node, we then **_recursively_** clone each child node by invoking our target function here.

- Finally, we return the cloned copy of the node as the returned value of our target function.


Here are a few sample implementations, which should speak _louder_ and _clearer_ than the explanation in words.

<iframe src="https://leetcode.com/playground/Wa5xCYuD/shared" frameBorder="0" width="100%" height="361" name="Wa5xCYuD"></iframe>


**Complexity Analysis**

Let $$M$$ be the number of nodes in the input tree.

- Time Complexity: $$O(M)$$

    - We traverse each node in the tree once and only once.

- Space Complexity: $$O(M)$$

    - First of all, our function returns a deep copy of the original tree as the result. As a common convention, the space that is allocated for the result is usually excluded from the space complexity analysis.

    - Within the recursive function, we do not allocate any extra space other than what is needed for the result.

    - However, we should pay attention to the extra space cost in the function call stack incurred by the recursive calls. In some cases, the space cost can cause _stack overflow_ when the piled recursive calls exceed the memory limit.

    - In the worst case for our recursion approach, the number of active recursive calls could equal the number of nodes in the tree (when the tree forms a line).
    As a result, the space complexity incurred by the call stack is $$O(M)$$.


---
### Approach 2: DFS with Iteration

**Intuition**

We can consider the above recursive solution as a DFS approach where we traverse the nodes in a tree in a manner that prioritizes the depth.

As an alternative to implement the DFS approach, we can also implement it in an **_iterative_** manner.
>The key idea is to simulate the function call stack with an actual **_stack_** data structure.

The stack data structure mainly serves two purposes:
- Maintaining the order of DFS visits.
- Keeping the context information for each visit.

For more details concerning the algorithm of DFS, one can refer to our Explore Card named [Queue & Stack](https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/).

**Algorithm**

To implement the DFS approach with iteration, here are a few steps:

- First, we create an empty stack, _e.g._ in Python we can simply use the `List` data structure.

- Each element in the stack will be a pair of nodes `(old, new)`, _i.e._ one is the original node to copy and the other one is the newly-created clone.

- We then build a loop around the stack. At each iteration, we pop one element `(old, new)` out of the stack. Then for each child node from the original node, we make a clone and append the child node along with the clone into the stack.

- The loop will terminate when there are no more elements in the stack, which means that we have traversed all the nodes in the tree.


<iframe src="https://leetcode.com/playground/LgR2XJEr/shared" frameBorder="0" width="100%" height="500" name="LgR2XJEr"></iframe>

For illustration, here we show a tree example and highlight the order of visiting for each node when we apply the DFS algorithm, as follows:

![DFS](../Figures/1490/1490_dfs.png)

As the name _"depth-first"_ sugguests, we prioritize the visits of nodes following the depth of a branch.
Before following the lead of another branch, we will fully explore all nodes in one branch.
For example, before visiting the node `4`, we first visit the branch of its sibling node `2`.
As a result, the order of nodes that we visit before the node `4` is `[1, 2, 3]`, starting from the root node `1`.


**Complexity Analysis**

Let $$M$$ be the number of nodes in the input tree and $$N$$ be the maximum number of children that a node can have.

- Time Complexity: $$O(M)$$

    - Same as the recursion approach, we traverse each node in the tree once and only once.

- Space Complexity: $$O(\log_{n}{M})$$

    - We use a stack data structure to keep track of the nodes we visit during the DFS traversal. Due to the nature of DFS, the maximal size of stack is _proportional_ to the **_depth_** of the tree. For a full N-nary tree, the total number of nodes can be represented with the depth of the tree as $$M = \frac{(n^d - 1)}{n-1}$$, where $$d$$ is the depth of the tree. As a result, the space complexity of the stack is $$d ~= O(\log_{n}{M})$$.

    - Note that, the worst case scenario in our recursion approach where the tree forms a line is **not** the worst case for our DFS approach in terms of space complexity.
    On the contrary, when the tree forms a line, the space complexity for our DFS approach becomes constant.


---
### Approach 3: BFS

**Intuition**

More often than not, problems that can be solved using the DFS algorithm can also be solved using the BFS (Breadth-First Search) algorithm.
This is indeed the case for this problem.

Let us go over the problem again. We are asked to clone the entire tree.
To clone the tree, we need to traverse each node one by one and make a deep copy.
>However, the order of traversal does not play an essential role in solving this problem.
Indeed, we can either clone the tree following the **lineage** order (_i.e._ DFS) or level by level (_i.e._ BFS).

As a comparison, with the same example tree in the DFS approach, we highlight the order in which each node is visited when we apply the BFS algorithm, as follows:

![BFS](../Figures/1490/1490_bfs.png)

**Algorithm**

Similar to the DFS algorithm, there are several ways to implement the BFS algorithm.
We provide some templates of BFS implementation in our [Queue & Stack Explore Card](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/).

As a matter of fact, one of the implementations of BFS is rather similar to the above **DFS Iteration** approach.
>We can simply replace the **_stack_** data structure in the DFS approach with the **_queue_** data structure, which will turn the approach into **BFS**.

Due to the **FIFO** (First-In First-Out) characteristic of the queue data structure, as opposed to the **LIFO** (Last-In First-Out) characteristic of the stack data structure, when maintaining the order with queue, we will end up traversing the tree _level by level_.


<iframe src="https://leetcode.com/playground/fBnpakKn/shared" frameBorder="0" width="100%" height="500" name="fBnpakKn"></iframe>



**Complexity Analysis**

Let $$M$$ be the number of nodes in the input tree.

- Time Complexity: $$O(M)$$

    - Same as the above approaches, we traverse each node in the tree once and only once.

- Space Complexity: $$O(M)$$

    - Instead of the stack data structure, we apply the `queue` data structure to keep track of the nodes we visit during the BFS traversal.
    At any moment, the queue contains no more than two levels of nodes in the tree.
    Therefore, the space complexity of the queue is $$O(M)$$.


---