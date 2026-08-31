# Official Solution

**Link:** [https://leetcode.com/problems/even-odd-tree/solution/](https://leetcode.com/problems/even-odd-tree/solution/)

---

[TOC]



## Solution


---

### Overview

Our objective is to determine whether a given binary tree is an **Even-Odd** tree.

To be considered an **Even-Odd** tree, a tree must meet the following conditions:

- Nodes at **even** levels must have **odd** values and be in **increasing (left to right)** order.
- Nodes at **odd** levels must have **even** values and be in **decreasing (left to right)** order.

Some of the conditions involve parity, the property of an integer with respect to being odd or even. We can determine the parity of an integer by using the modulo operation, `%`. For an odd integer `x`, `x % 2` always evaluates to `1` while for even integers `y`, `y % 2` always evaluates to `0`. 


To determine whether a tree is **Even-Odd**, we need to traverse the tree, checking whether each node meets the above conditions.

> If you are not familiar with tree traversal, check out our [Explore Card](https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/)

---

### Approach 1: Depth-First Search


#### Intuition

The conditions depend on the level or depth of the tree, which we will need to track.

One of the primary ways to traverse a tree is a Depth-First Search (DFS). We will use this approach with a preorder traversal.

Binary trees are often traversed using recursive methods. Below is an example pseudocode for a preorder traversal.

##### Recursive Preorder Traversal
1. If the tree is empty, return.
2. Handle the root.
3. Traverse the right subtree - call Preorder(root.left).
4. Traverse the left subtree - call Preorder(root.right).


We can implement a recursive function, `dfs`, to traverse the tree and check the **Even-Odd** conditions.

When writing recursive functions, we start with the base case. When the tree is empty, we return `true`; an empty tree is **Even-Odd**. 

From there, we can build the rest of our recursive function `dfs`. The parameters will be a tree node `current` and `level` because when we encounter a node, we need to know what level we are on because the conditions are different for even and odd levels. 

We also need to know whether the level we are on is even or odd. We can calculate `level % 2`, which will evaluate to `1` on odd levels and  `0` on even levels.

We also need to know the value of the previous node on this level so we can compare the current node and determine whether the values are increasing or decreasing. Depth-First Search does not visit the levels in order, so we will need to save the previously visited node from each level. We will use an array `prev`, indexed by `level`. The previous node on level 1 will be stored at `prev[1]`, and the previous node on level 2 will be stored at `prev[2]`. After handling each node, we will update `prev[level]` to the current node's value for use with the next node on this level.

To handle a node, we must check the conditions to determine whether it meets the requirements to be an **Even-Odd** tree:

Check whether the current value has the correct parity:
 - Nodes on **even** levels must have **odd** values
 - Nodes on **odd** levels must have **even** values

The level and the value should have opposite parity. We can use `current->val % 2 == level % 2` to compare the parity. If the parities are the same, the node breaks **Even-Odd** tree conditions, and we return `false`.

Check whether the current value is in the correct order:

- Nodes on **even** levels must be in strictly **increasing** order.

       node.val <= prev[level] // True when node.val is less than or equal to `prev`

If true, the node breaks the **increasing** condition, and we can return false.
 
- Nodes on **odd** levels must be in strictly **decreasing** order.

       node.val >= prev[level] // True when node.val is greater than or equal to `prev`

If true, the node breaks the **decreasing** condition, and we can return false.

After handling a node, we recursively call `dfs` on its children.

After defining `dfs`, all we have to do to solve the problem is call the function and return.

The algorithm is visualized below:

!?!../Documents/1609/1609_dfs_slideshow.json:960,480!?!


#### Algorithm

1. Declare an array `prev` to store the previous value on each level. 
2. Initialize a node `current` to `root` for traversing the tree.
3. Define a function `dfs` whose parameters are a TreeNode `current` and `level` that performs a depth-first search, checking that the nodes meet the requirements for being an **Even-Odd** tree. If the tree is **Even-Odd**, it returns `true`; otherwise, it returns `false`.
    1. Base case: if the tree is empty, return `true`. An empty tree is **Even-Odd**.
    2. Check whether the current value has the correct parity compared with the level: `current->val % 2 == level % 2`. Return `false` if not.
    3. Resize and add a new level to `prev` if we've reached a new level.
    4. If we have already visited a node on this level, check that the current value is in the correct order depending on the level. 
        - If on an even level, check that `current.val` is greater than the previous. 
        - If on an odd level, check that `current.val` is less than the previous. 
        - Otherwise, return `false`.
    5. Add `current`'s value to the `prev` array. Only the most recent node on this level matters to the next node.
    6. Recursively call `dfs` on the left and right child, incrementing `level`.
4. Call and return `dfs(current, 0)` because the first level will be `0`.




#### Implementation

In the below implementation, we will use tail recursion. Many times, we use tail recursion without even recognizing it. It's a significant concept and an optimization strategy often overlooked in interviews. Tail recursion is a specific optimization technique used in functional programming to avoid the use of explicit loops and improve performance.

In a recursive function, each recursive call creates a new stack frame, which can lead to a stack overflow if the function is called too many times. Tail recursion reduces this problem by reusing the current stack frame instead of creating a new one.

To use tail recursion, the last statement of a function must be a recursive call, and the function must have a base case that can be reached by the recursive call. The base case is used to stop the recursion and return a value.
Since our approach has both conditions, we can use tail recursion in the below implementation.



<iframe src="https://leetcode.com/playground/FHwmAU3N/shared" frameBorder="0" width="100%" height="500" name="FHwmAU3N"></iframe>



#### Complexity Analysis

Let $n$ be the number of nodes in the tree.

- Time complexity: $O(n)$

    Traversing the tree with a DFS costs $O(n)$ as we visit each node exactly once. At each visit, we perform $O(1)$ work.


- Space complexity: $O(n)$

     The space complexity of DFS, when implemented recursively, is determined by the maximum depth of the call stack, which corresponds to the depth of the tree. In the worst case, if the tree is entirely unbalanced (e.g., a linked list or a left/right skewed tree), the call stack can grow as deep as the number of nodes, resulting in a space complexity of $O(n)$. We also use an array, `prev`, which can grow as large as the depth of the tree, making the overall time complexity $O(n)$.

---

### Approach 2: Breadth-First Search

#### Intuition

The other primary way to traverse a tree is a Breath-First Search (BFS). This traversal method, also known as level-order traversal, could apply to this problem because the algorithm visits all the nodes in each level before moving on to the next level. BFS could be helpful because on each level, we need to check that all nodes on the level meet certain conditions. The general algorithm for Breadth-First Search is below.

##### Breadth-First Search
1. Create a queue for storing the nodes on each level.
2. Add the first node to the queue.
3. While the queue is not empty:
    1. Remove the front node of the queue.
    2. Add the adjacent nodes to the queue.

We will adjust a Breath-First Search to determine whether a tree is **Even-Odd**. 

We create a flag `even` to track the current level's parity. It is set to `true` on even levels and `false` on odd levels. The size of the level is tracked to iterate through its nodes. After handling a node and enqueueing its children, we decrement `size`. The `even` flag is flipped with `!even` after processing all nodes on a level, alternating between `true` and `false` for even and odd levels.

To determine whether a tree is **Even-Odd**, we must handle each node, testing its parity.  We must also check the node's value compared to the other nodes on this level. Our BFS traversal will visit each node in each level in order, so we can use a variable `prev` to store the previous node's value. We can use this to check that the current node is greater than or less than the  `prev`, as needed. 

Below are the conditions we will check to ensure the tree is **Even-Odd** :

 Nodes on even levels must have **odd** values and must be in strictly **increasing** order. We check the following conditions:
 - `node.val % 2 == 0` // True when `node.val` is even
 - `node.val <= prev` // True when `node.val` is less than or equal to `prev`

If either of these are `true`, the node breaks **Even-Odd** tree conditions, and we can return `false`.

 Nodes on odd levels must have **even** values and must be in strictly **decreasing** order. We check the following conditions:
 - `node.val % 2 == 1` // True when `node.val` is odd
 - `node.val >= prev` // True when `node.val` is greater than or equal to `prev`

If either of these are `true`, the node breaks **Even-Odd** tree conditions, and we can return `false`.

The algorithm is visualized below:

!?!../Documents/1609/1609_bfs_slideshow.json:685,540!?!



#### Algorithm

1. Initialize a Queue `queue` for storing the nodes on each level.
2. Declare a node `current` and set it to `root`. Add `current` to the queue.
3. Declare a boolean `even`, which will evaluate to `true` on even levels and `false` on odd levels. Initialize to `true`; we will start on level `0` which is even.
4. While `queue` is not empty:
    1. Initialize a variable `size` to store the size of this level.
    2. Declare a variable `prev` to store the value of the previous node on this level, so we can determine whether the nodes are in increasing or decreasing order. Set to `INT_MAX` on odd levels, which will ensure `current.val` is less than `prev`, and set to `INT_MIN` on even levels, which will ensure `current.val` is greater than `prev`.
    3. For each node on this level:
        1. Remove the front node from the queue and save in `current`.
        2. Check to make sure this node meets the conditions of being even-odd:
            - If on an even level, make sure the current node's value is odd and greater than the previous value.
            - If on an odd level, make sure the current node's value is even, and less than the previous value.
            - Otherwise return `false`.
        3. Set `prev` to the current value.
        4. If `current` has a left child, add it to `queue`.
        5. If `current` has a right child, add it to `queue`.
        6. Decrement `size`, we have handled a node on this level.
    4. Flip the value of `even` with `!even`. The next level will have the opposite parity.
5. If the loop completes, every node in the tree has been visited and the whole tree is **Even-Odd**. Return `true`.



#### Implementation

<iframe src="https://leetcode.com/playground/KJibuLLw/shared" frameBorder="0" width="100%" height="500" name="KJibuLLw"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree.

* Time complexity: $O(n)$

    We perform BFS, which costs $O(n)$ because we don't visit a node more than once. At each node, we perform $O(1)$ work.


* Space complexity: $O(n)$

    We require $O(n)$ space for the queue during the BFS for `queue`.