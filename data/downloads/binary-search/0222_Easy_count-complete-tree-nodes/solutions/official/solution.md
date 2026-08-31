# Official Solution

**Link:** [https://leetcode.com/problems/count-complete-tree-nodes/solution/](https://leetcode.com/problems/count-complete-tree-nodes/solution/)

---

[TOC]

## Solution

---

### Approach 1: Linear Time

**Intuition**

This problem is quite popular at Google during the last year.
The naive solution here is a linear time one-liner which counts nodes
recursively one by one.

**Implementation**

<iframe src="https://leetcode.com/playground/hstZgVd3/shared" frameBorder="0" width="100%" height="140" name="hstZgVd3"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N)$$.
* Space complexity : $$\mathcal{O}(d) = \mathcal{O}(\log N)$$ to keep
the recursion stack, where d is a tree depth.
<br /> 
<br />


---
### Approach 2: Binary search

**Intuition**

Approach 1 doesn't profit from the fact that the tree is a complete one.

> In a complete binary tree every level, 
except possibly the last, is completely filled, 
and all nodes in the last level are as far left as possible.

That means that complete tree has $$2^k$$ nodes in the kth level 
if the kth level is not the last one. 
The last level may be not filled completely,
and hence in the last level the number of nodes 
could vary from 1 to $$2^d$$, where d is a tree
depth.

![fig](../Figures/222/tree.png)

Now one could compute the number of nodes in all levels
but the last one: $$\sum_{k = 0}^{k = d - 1}{2^k} = 2^d - 1$$. 
That reduces the problem to the simple check of how many nodes 
the tree has in the last level.

![fic](../Figures/222/level.png)

Now there are two questions:

1. How many nodes in the last level have to be checked?

2. What is the best time performance for such a check?

Let's start from the first question. It's a complete tree, and hence
all nodes in the last level are _as far left as possible_.
That means that instead of checking the existence of all 
$$2^d$$ possible leafs, one could use binary search and check 
$$\log(2^d) = d$$ leafs only.

![pic](../Figures/222/exist.png) 

Let's move to the second question, and enumerate potential nodes
in the last level from 0 to $$2^d - 1$$. 
How to check if the node number idx exists?
Let's use binary search again to reconstruct the sequence of moves 
from root to idx node. For example, idx = 4. idx is in the 
second half of nodes `0,1,2,3,4,5,6,7` and hence the first move is to the
right. Then idx is in the first half of nodes `4,5,6,7` and hence 
the second move is to the left. The idx is in the first half of nodes
`4,5` and hence the next move is to the left. The time complexity
for one check is $$\mathcal{O}(d)$$.

![pif](../Figures/222/check.png)

1 and 2 together result in $$\mathcal{O}(d)$$ checks, each check at
a price of $$\mathcal{O}(d)$$. That means that the overall time complexity
would be $$\mathcal{O}(d^2)$$.
 
**Algorithm**

- Return 0 if the tree is empty.

- Compute the tree depth `d`.

- Return 1 if `d == 0`.

- The number of nodes in all levels but the last one is $$2^d - 1$$.
The number of nodes in the last level could vary from 1 to $$2^d$$.
Enumerate potential nodes from 0 to $$2^d - 1$$ 
and perform the binary search by the node index to check how many 
nodes are in the last level. Use the function `exists(idx, d, root)` to
check if the node with index idx exists.

- Use binary search to implement `exists(idx, d, root)` as well.

- Return $$2^d - 1$$ + the number of nodes in the last level.

**Implementation**

<iframe src="https://leetcode.com/playground/n2NEfrVK/shared" frameBorder="0" width="100%" height="500" name="n2NEfrVK"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(d^2) = \mathcal{O}(\log^2 N)$$,
where $$d$$ is a tree depth.
* Space complexity : $$\mathcal{O}(1)$$.