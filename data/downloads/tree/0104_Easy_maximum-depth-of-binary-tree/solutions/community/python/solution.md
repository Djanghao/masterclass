# Python recursive and iterative solution

**Author:** amchoukir
**Votes:** 299
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/359949/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/359949/)

---

# Recursive

```python
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1
```

# iterative
```python
from collections import deque

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        worklist = deque([root])
        num_node_level = 1
        levels = 0
        while worklist:
            node = worklist.popleft()
            if node.left:
                worklist.append(node.left)
            if node.right:
                worklist.append(node.right)
            num_node_level -= 1
            if num_node_level == 0:
                levels += 1
                num_node_level = len(worklist)
                
        return levels
```

# Explanation

This was kindly requested by @Sharanpatil 

## Recursive

The idea is we start from the top of the tree. Each node adds one level of depth to the subtree rooted at its left and right child. The maximum depth of the tree rooted at the current node is the maximum depth of the tree rooted at the left and right child `+ 1`. The base case for our recursion is when we hit an empty child who does not contribute to increasing the depth of the tree and therefore it's maximum depth is `0`.

Let's take an example:

```
         10
       /    \\
     5      19
           /
         17
``` 

We start the algorithm at node `10`. Note the below is just pseudocode showcasing the expansion of the recursive call.

```python
# self. maxDepth(None) = 0 by definition

self. maxDepth(10)
max(self. maxDepth(5), self. maxDepth(19)) + 1 # First recursive call from node 10
max(max(self. maxDepth(None), self. maxDepth(None)) + 1, self. maxDepth(19)) + 1  # Recursive call on node 5 and its expansion
max(1, self. maxDepth(19)) + 1 # Replacing for self. maxDepth(None) = 0 
max(1, max(self. maxDepth(17), self. maxDepth(None)) + 1) + 1 # Recursive call from node 19
max(1, max(self. maxDepth(17), 0) + 1) + 1 # Replacing for self. maxDepth(None) = 0 
max(1, max(max(self. maxDepth(None), self. maxDepth(None)) + 1, 0) + 1) + 1 # Recursive call from node 17
max(1, max(max(0, 0) + 1, 0) + 1) + 1 # Replacing for self. maxDepth(None) = 0
max(1, max(0 + 1, 0) + 1) + 1 # Replacing the inner most max
max(1, 1 + 1) + 1 # Replacing the inner most max
max(1, 2) + 1
2 + 1 # Replacing the inner most max
3
```

## Iterative

Here the idea is to visit the node of the tree in level order (not BFS or DFS). You can have a look at the following articles to understand traversal and level order in particular:

https://en.wikipedia.org/wiki/Tree_traversal#Breadth-first_search_/_level_order
https://www.geeksforgeeks.org/level-order-tree-traversal/

To do a level order we use a queue (`worklist` of type `deque` in the code) and deque (from the nodes until we exhaust the nodes for a given level. We also enqueue the nodes for the next level. The queue is a First In First Out (FIFO) queue. To keep track of how many nodes for the current level are at the front of the queue we use a counter `num_node_level ` which is populated at each iteration transition (i.e. `num_node_level == 0`). Each time we transition level we increment the `levels` counter. Initially, the worklist contains only the root of the tree and the number of nodes for that level is `1`.

Let's take an example:

```
         10
       /    \\
     5      19
           /
         17
``` 

Please note the below is pseudocode illustrating the state of the algorithm at different iteration.

```python

# Initial state before the while

worklist = [10]
levels = 0
num_node_level = 1

# Iteration with node 10
node = 10
worklist.append(5)
worklist.append(19)
# State of worklist = [5, 19]
num_node_level -= 1
# num_node_level == 0 --> True
levels += 1 # State levels = 1
num_node_level = len(worklist) = 2

# Iteration with node 5
node = 5
# We append nothing as the two child of 5 are empty
# State of worklist = [19]
num_node_level -= 1 # State num_node_level = 1

# Iteration with node 19
node = 19
worklist.append(17)
# We do not append the right child as it is empty
# State of worklist = [17]
num_node_level -= 1
# num_node_level == 0 --> True
levels += 1 # State levels = 2
num_node_level = len(worklist) = 1

# Iteration with node 17
node  = 17
# We append nothing as the two child of 5 are empty
# State of worklist = [] -> Empty
num_node_level -= 1
# num_node_level == 0 --> True
levels += 1 # State levels = 3
num_node_level = len(worklist) = 0

# No more nodes we exit the while loop

return levels # levels = 3
```