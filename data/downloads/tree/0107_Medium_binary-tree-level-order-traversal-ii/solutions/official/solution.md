# Official Solution

**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solution/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solution/)

---

[TOC]

## Solution

---

### How to traverse the tree

There are two general strategies to traverse a tree:
     
- *Depth First Search* (`DFS`)

    In this strategy, we adopt the `depth` as the priority, so that one
    would start from a root and reach all the way down to a certain leaf,
    and then back to root to reach another branch.

    The DFS strategy can further be distinguished as
    `preorder`, `inorder`, and `postorder` depending on the relative order
    among the root node, left node, and right node.
    
- *Breadth First Search* (`BFS`)

    We scan through the tree level by level, following the order of height,
    from top to bottom. The nodes on a higher level would be visited before the ones 
    on lower levels.
    
In the following figure the nodes are enumerated in the order you visit them,
please follow ```1-2-3-4-5``` to compare different strategies.

![postorder](../Figures/107/ddfs.png)

Here the problem is to implement split-level BFS traversal : `[[4, 5], [2, 3], [1]]`.
That means we could use one of the `Node->Left->Right` techniques: BFS or DFS Preorder.

We already discussed [three different ways](https://leetcode.com/articles/binary-tree-right-side-view/) 
to implement iterative BFS traversal with the queue, and compared 
[iterative BFS vs. iterative DFS](https://leetcode.com/problems/deepest-leaves-sum/solution/).
Let's use this article to discuss the two most simple and fast techniques:

- Recursive DFS.

- Iterative BFS with two queues.

> Note, that both approaches are root-to-bottom traversals, and we're asked to provide 
bottom-up output. To achieve that, the final result should be reversed. 

<br /> 
<br />


---
### Approach 1: Recursion: DFS Preorder Traversal

**Intuition**

The first step is to ensure that the tree is not empty. 
The second step is to implement the recursive function 
`helper(node, level)`, which takes the current node and its level as the arguments.

**Algorithm for the Recursive Function**

Here is its implementation:

- Initialize the output list `levels`. 
The length of this list determines which level is currently updated.
You should compare this level `len(levels)` with a node level `level`, 
to ensure that you add the node on the correct level.
If you're still on the previous level - 
add the new level by adding a new list into `levels`.

- Append the node value to the last level in `levels`.

- Process recursively child nodes if they are not `None`: 
`helper(node.left / node.right, level + 1)`.

**Implementation**

!?!../Documents/107_LIS.json:1000,406!?!

<iframe src="https://leetcode.com/playground/WnZgJXy9/shared" frameBorder="0" width="100%" height="500" name="WnZgJXy9"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ since each node is processed
exactly once.
 
* Space complexity: $$\mathcal{O}(N)$$ to keep the output structure 
which contains $$N$$ node values.
<br />
<br />


---
### Approach 2: Iteration: BFS Traversal

**Algorithm**

The recursion above could be rewritten in the iteration form.

Let's keep each tree level in the _queue_ structure,
which typically orders elements in a FIFO (first-in-first-out) manner.
In Java one could use [`ArrayDeque` implementation of the `Queue` interface](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayDeque.html).
In Python using [`Queue` structure](https://docs.python.org/3/library/queue.html)
would be an overkill since it's designed for a safe exchange between multiple threads
and hence requires locking which leads to a performance downgrade. 
In Python the queue implementation with a fast atomic `append()`
and `popleft()` is [`deque`](https://docs.python.org/3/library/collections.html#collections.deque).

**Algorithm**

- Initialize two queues: one for the current level, 
and one for the next. Add root into `nextLevel` queue.

- While `nextLevel` queue is not empty:

    - Initialize the current level `currLevel = nextLevel`,
    and empty the next level `nextLevel`. 
    
    - Iterate over the current level queue:

        - Append the node value to the last level in `levels`.
        
        - Add first _left_ and then _right_ child node into `nextLevel`
        queue.
    
- Return reversed `levels`.

**Implementation**

<iframe src="https://leetcode.com/playground/jZc8ypmQ/shared" frameBorder="0" width="100%" height="500" name="jZc8ypmQ"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ since each node is processed
exactly once.
 
* Space complexity: $$\mathcal{O}(N)$$ to keep the output structure which
contains $$N$$ node values.