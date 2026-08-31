# Official Solution

**Link:** [https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/solution/](https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/solution/)

---

[TOC]

## Solution

--- 

### Overview

**How to Solve**

Let's traverse both trees in parallel, and once the target node is identified in the first tree, return the corresponding node from the second tree.

**How to Traverse the Tree: DFS vs BFS**

There are two ways to traverse the tree: DFS _depth first search_ and BFS _breadth first search_. Here is a small summary 

![diff](../Figures/1379/traversals.png)

Both start from the root and go down, both use additional structures, what's the difference? Here is how it looks at the big scale: BFS traverses level by level, and DFS first goes to the leaves.

![diff](../Figures/1379/dfs_bfs_2.png)

> Description doesn't give us any clue which traversal is better to use here. Interview-simple solutions are DFS in order traversals.

In Approach 1 and Approach 2, we're going to discuss recursively inorder DFS and iterative inorder DFS traversals. They both need up to $$\mathcal{O}(H)$$ space to keep stack, where $$H$$ is a tree height.

In Approach 3, we provide a BFS solution. Normally, it's a bad idea to use BFS during the interview, unless the interviewer would push for it by adding new details into the problem description. 

**Could We Solve in Constant Space?**

No. The problem could be solved in constant space using the DFS Morris inorder traversal algorithm, but it modifies the tree, and that isn't allowed here.

**Follow up: Repeated Values are Allowed**

If duplicate values are not allowed, one could compare node values:

<iframe src="https://leetcode.com/playground/XvE3tVVZ/shared" frameBorder="0" width="100%" height="106" name="XvE3tVVZ"></iframe>

Otherwise, one has to compare the nodes:

<iframe src="https://leetcode.com/playground/gdNRDRYo/shared" frameBorder="0" width="100%" height="106" name="gdNRDRYo"></iframe>

<br />
<br />


---
### Approach 1: DFS: Recursive Inorder Traversal.

Recursive inorder traversal is extremely simple: follow `Left->Node->Right` direction, _i.e._, do the recursive call for the _left_ child, then do all the business with the node (= check if the node is a target one or not), and then do the recursive call for the _right_ child.

![diff](../Figures/1379/dfs.png)
*Figure 1. The nodes are enumerated in the order of visits. To compare different DFS strategies, follow `1-2-3-4-5` direction.*


**Implementation**

<iframe src="https://leetcode.com/playground/8CVVBmSp/shared" frameBorder="0" width="100%" height="378" name="8CVVBmSp"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$. Since one has to visit each node, where $$N$$ is the number of nodes. 
    
* Space complexity: $$\mathcal{O}(N)$$. In the degenerative tree case (where the tree is shaped like a linked list), all nodes will be on the run-time stack while the deepest node is being processed. If the tree is balanced, the space complexity will be nearer to $$\mathcal{O}(\log N)$$, but remember that for the purposes of complexity analysis, we mostly consider the worst case.

<br />
<br />


---
### Approach 2: DFS: Iterative Inorder Traversal.

Iterative inorder traversal is straightforward: go left as far as you can, then one step right. Repeat till the end of nodes in the tree.  

!?!../Documents/1379_LIS.json:1000,310!?!

**Implementation**

[Don't use Stack in Java, use ArrayDeque instead](https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html).

<iframe src="https://leetcode.com/playground/2UFXYe3o/shared" frameBorder="0" width="100%" height="480" name="2UFXYe3o"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$. Since one has to visit each node.
    
* Space complexity: $$\mathcal{O}(N)$$. In the degenerative tree case (where the tree is shaped like a linked list), all nodes will be on the stack while the deepest node is being processed. If the tree is balanced, the space complexity will be nearer to $$\mathcal{O}(\log N)$$, but remember that for the purposes of complexity analysis, we mostly consider the worst case.


<br />

---

### Approach 3: BFS: Iterative Traversal.

**Algorithm**

Here we implement standard BFS traversal with the queue:

- Add root into queue.

- While queue is not empty:

    - Pop out a node from queue.
    
    - If the node is a target, we're done.
    
    - Add first _left_ and then _right_ child node into queue.

**Implementation**

[Don't use Stack in Java, use ArrayDeque instead](https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html).

<iframe src="https://leetcode.com/playground/mnfHHeRK/shared" frameBorder="0" width="100%" height="500" name="mnfHHeRK"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ since one has to visit each node.
    
* Space complexity: up to $$\mathcal{O}(N)$$ to keep the queue. Let's use the last level to estimate the queue size. This level could contain up to $$N/2$$ tree nodes in the case of [complete binary tree](https://leetcode.com/problems/count-complete-tree-nodes/).