# Official Solution

**Link:** [https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solution/](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solution/)

---

[TOC]

## Solution

---

### Approach 1: BFS + DFS

#### Intuition

The problem requires finding the shortest path between two given nodes using step-by-step directions. Shortest path problems are common in graph theory, and several efficient algorithms can be learned to solve them. Let's explore solving the problem with one of these algorithms. 

To apply one of these algorithms, we first must convert the tree to a bidirectional graph. In a binary tree, each node can connect to its children but not directly to its parent. To facilitate all the movement from a node to its parent, we commonly use a `parent` table. This table stores the parent of each node, built by traversing the tree and marking each node's children with their respective parent.

With the ability to traverse the tree in any direction, we first locate the starting node. Once we've identified it, we can then proceed to calculate the shortest path.

To efficiently determine the shortest path, we use a breadth-first search (BFS) to explore nodes at the current depth before moving deeper. For those unfamiliar with BFS, the LeetCode [Explore Card](https://leetcode.com/explore/learn/card/graph/620/breadth-first-search-in-graph/) provides a helpful introduction.

During the BFS traversal, we use a map `pathTracker` to record the path taken to each node. In `pathTracker`, each key represents a node, while its corresponding value is a pair containing the parent node and the direction from that parent. Upon reaching the destination node, we backtrack using `pathTracker` to trace the path back to the start node. The path string is constructed by appending directions from `pathTracker` and moving to the parent node stored in the tuple.

This process continues until we reach the start node. Since directions are recorded in reverse order during backtracking, we reverse the path string to obtain the correct sequence of directions from the start node to the destination node. Finally, we return this reversed string as the result.

#### Algorithm

Main method `getDirections`:

- Initialize a map `parentMap` to store parent nodes for each node in the tree.
- Find the `startNode` using the `findStartNode` method, which recursively searches the tree for the node with `startValue`.
- Populate `parentMap` using the `populateParentMap` method, which traverses the tree and maps each child node to its parent.
- For the BFS, initialize 
  - A queue containing the `startNode`.
  - A set `visitedNodes` to keep track of visited nodes to avoid cycles.
  - A map `pathTracker` to record the path taken by the BFS.
- While the queue is not empty:
  - Dequeue a TreeNode from the queue.
  - If the current node's value matches `destValue`, we have found our path. Call `backtrackPath` and return the path calculated by it.
- If `parentMap` contains a parent for the current node and it hasn't been visited, enqueue the parent node and add an entry to `pathTracker` with the current node as the key and a pair containing the parent node and direction 'U' as the value.
- If the left child exists and hasn't been visited, enqueue the left child and add an entry to `pathTracker` with the current node as the key and a pair containing the left child and direction 'L' as the value.
- If the right child exists and hasn't been visited, enqueue the right child and add an entry to `pathTracker` with the current node as the key and a pair containing the right child and direction 'R' as the value.
- If the destination node is never reached, an empty string is returned.

Helper method `backtrackPath`:

- Define `backtrackPath` with parameters: destination `node` (TreeNode) and `pathTracker` map.
- Initialize an empty string `path`.
- While `node` exists in `pathTracker`:
  - Retrieve the parent node and direction from `pathTracker`.
  - Append the direction to `path`.
  - Set `node` to the parent node.
- Reverse and return `path`.

Helper method `populateParentMap`:

- Define `populateParentMap` with parameters: current `node` (TreeNode) and `parentMap`.
- If `node` is `null`, return.
- If left or right children exist, add them to `parentMap` with `node` as their parent.
- Recurse on left and right children.

Helper method `findStartNode`:

- Define `findStartNode` with parameters: current `node` (TreeNode) and `startValue`.
- If `node` is `null`, return.
- If `node`'s value matches `startValue`, return `node`.
- Recursively search the left subtree. If a node is found, return it.
- Otherwise, search the right subtree and return the result.

#### Implementation

<iframe src="https://leetcode.com/playground/FRpYHkx3/shared" frameBorder="0" width="100%" height="500" name="FRpYHkx3"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree.

- Time complexity: $O(n)$

    The `findStartNode` method traverses the tree once to find the start node, which has a worst case time complexity of $O(n)$ (skewed tree). 

    The `populateParentMap` method visits each node once to populate the map. It has a time complexity of $O(n)$.

    In the worst case, the BFS to find the path might visit all nodes of the tree. Inside the BFS loop, the operations on the set and map are $O(1)$ on average. Thus, the time complexity of the BFS remains $O(n)$.

    The `backtrackPath` method can take at most $O(n)$ time to traverse over the entire length of the resultant path, which can be of length $n$ in the worst case.

    The time complexity of the entire algorithm is sum of these individual complexities, which is $O(n)$.

- Space complexity: $O(n)$

    The `parentMap` stores the parent information for each node, taking $O(n)$ space.

    The `backtrackPath` method stores the length of the final path, which can have a maximum length of $n$.

    The recursive call stacks in the `findStartNode` and `populateParentMap` methods can have a worst case space complexity of $O(n)$ (e.g. a skewed tree).

    The queue for the BFS can contain up to $n/2$ nodes in the worst case (for a complete binary tree). So, it has a space complexity of $O(n/2)$, which simplifies to $O(n)$. The `visitedNodes` set and `pathTracker` map used in the BFS uses another $O(n)$ space each.

    Thus, the overall space complexity of the algorithm is $6 \cdot O(n)$, which simplifies to $O(n)$.

---

### Approach 2: LCA + DFS

#### Intuition

A more optimal method exists to solve a tree problem that doesn't involve converting it to a bidirectional graph. Let's try to solve it as a tree this time.

If we trace paths from the root to the two nodes, we see that these paths share a common segment until a certain point, after which they diverge. This last intersection is the Lowest Common Ancestor (LCA). Since it is the last shared point, any path connecting the two nodes must pass through this LCA. We won't discuss the methods to find the LCA in a binary tree in this article, as it is a separate and popular problem. Here we will be focusing on the application of it. If you are unfamiliar with LCA, check out [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/).

Check out how the LCA is a part of the common paths for the start and destination nodes in this image:

![LCA Image](../Figures/2096/image1.png)

The path between the start node and the destination node can be divided into two parts: the path from the start node to the LCA and the path from the LCA to the destination node. The path from the start node to the LCA consists only of the direction 'U' since all moves are from a child node to a parent node.

To find these paths, we use depth-first search starting from the LCA and moving towards the target nodes. Initially, we explore the left subtree appending 'L' to the path. Upon finding the target node, we return immediately. If not found, we backtrack by replacing 'L' with 'R' to explore the right subtree. If the target node isn't found in either subtree, we backtrack to the parent node. This recursive process continues until the target node is located.

Check out this slideshow to better understand how to find the path for a node:

!?!../Documents/2096/slideshow.json:1244,1008!?!

Now that we have the directions to both the start and destination nodes from the LCA, we can piece together the full path. We transform the path from the LCA to the start node by replacing all directions with "U" and prepend it to the path to the destination node. The resulting sequence gives the step-by-step directions from the start node to the end node in the binary tree

#### Algorithm

Main method `getDirections`:

- Find the `lowestCommonAncestor` of `startValue` and `destValue` using the `findLowestCommonAncestor` method.
- Initialize `pathToStart` and `pathToDest` to store paths from the LCA to the start and destination nodes, respectively.
- Call `findPath` to determine these paths.
- Initialize `directions` to store the final result.
- Add "U" for each step in `pathToStart`.
- Append `pathToDest` to `directions`.
- Return `directions`, which contains the step-by-step directions from the start node to the destination node.

Helper method `findLowestCommonAncestor`:

- Define `findLowestCommonAncestor` with parameters: `node`, `value1`, and `value2`.
- If `node` is null, return `null`.
- If `node`'s value matches `value1` or `value2`, return `node`.
- Recursively search for the LCA in the left and right subtrees, storing results in `leftLCA` and `rightLCA`.
- If `leftLCA` is null, return `rightLCA`.
- If `rightLCA` is null, return `leftLCA`.
- If both `leftLCA` and `rightLCA` contain nodes, the current node is the lowest common ancestor. Return `node`.

Helper method `findPath`:

- Define `findPath` with parameters: `node`, `targetValue`, and `path`.
- If `node` is null, return `false`.
- If `node`'s value matches `targetValue`, return `true`.
- Append "L" to `path` and search the left subtree. If the target node is found, return `true`.
- If not found, remove the last character from `path`.
- Append "R" to `path` and search the right subtree. If the target node is found, return `true`.
- If not found, remove the last character from `path`.
- Return `false` if the target node is not found in either subtree.

#### Implementation

<iframe src="https://leetcode.com/playground/NTY9QGUk/shared" frameBorder="0" width="100%" height="500" name="NTY9QGUk"></iframe>

#### Complexity Analysis

Let $n$ be the total number of nodes in the tree.

* Time complexity: $O(n)$

    The `findLowestCommonAncestor` method is called once and traverses the tree to find the LCA, which takes $O(n)$ time in the worst case. 
    
    The `findPath` method is called twice, once for the path from the LCA to `startValue` and once for the path to `destValue`. Each call can traverse up to the height of the tree, which is $n$ in the worst case (e.g., a skewed tree), making the total time complexity for both calls $O(n) + O(n) = O(n)$.

    Adding "U" for all upward movements and constructing the final path also takes $O(n)$ time. Therefore, the total time complexity of the entire algorithm is $3 \cdot O(n)$, which simplifies to $O(n)$.

* Space complexity: $O(n)$

    The recursive call stacks for `findLowestCommonAncestor` and `findPath` can each have a space complexity of $O(n)$ in the worst case. The variables `pathToStart`, `pathToDest`, and `directions` can store a path of length up to the height of the tree, which is $O(n)$ in the worst case.

    Combining all elements, the algorithm has a space complexity of $O(n)$.

---

### Approach 3: LCA + DFS (Optimized)

#### Intuition

Instead of focusing on finding the LCA and identifying paths from the LCA to both nodes, we can directly find the full paths from the root to each node and then trim off their common part ourselves. This approach eliminates the need to explicitly find the LCA, resulting in significantly shorter and simpler code.

We'll use the `findPath` method from our previous approach to determine the paths from the root to both the start and end nodes. After obtaining these paths, we identify and remove their common initial segment. Then, we adjust the remaining portion of the start node's path by replacing each step with "U" to indicate upward movement. Finally, we concatenate this adjusted path with the unique part of the end node's path, giving us the step-by-step directions from the start node to the end node.

#### Algorithm

Main method `getDirections`:

- Initialize `startPath` and `destPath` to store paths from the root to the start node and the destination node, respectively.
- Determine `startPath` and `destPath` using `findPath`. 
- Initialize `directions` to store the resultant directions.
- Compare `startPath` and `endPath` to find the length of common path. Store it in `commonPathLength`.
- Iterate through the difference between the length of `startPath` and `commonPathLength`. For each step, add "U" to `directions`.
- From `destPath`, add the directions from index `commonPathLength` to the end of the string to `directions`.
- Return `directions`.

Helper method `findPath`:

- Define `findPath` with parameters: `node`, `targetValue`, and `path`.
- If `node` is `null`, return `false`.
- If `node.val == targetValue`, return `true`.
- Add "L" to `path` and search the left subtree recursively. If the target node is found, return `true`.
- If not found, remove the last character from `path`.
- Add "R" to `path` and search the right subtree recursively. If the target node is found, return `true`.
- If not found, remove the last character from `path`.
- Return `false` if the target node was not found in either subtrees.

#### Implementation

<iframe src="https://leetcode.com/playground/NenqfY3B/shared" frameBorder="0" width="100%" height="500" name="NenqfY3B"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree.

* Time complexity: $O(n)$

    The `findPath` method is called twice, once for the start node and once for the destination node. Each call may traverse the entire tree in the worst case (skewed tree), making the time complexity $2 \cdot O(n)$, which simplifies to $O(n)$.

    To construct the final result, we iterate over the entire lengths of `startPath` and `destPath`, each of which could have a complexity of $O(n)$ in the worst case. 

    Thus, the overall time complexity of the algorithm is $O(n) + O(n)$, simplifying to $O(n)$. 

* Space complexity: $O(n)$

    The recursive call stack of the `findPath` method can have a space complexity of $O(n)$ in the worst case. The variables `startPath`, `destPath`, and `directions` can each have a length equal to the height of the tree, which is $n$ in the worst case (skewed tree). 

    Thus, the total space complexity of the algorithm is $4 \cdot O(n)$, or $O(n)$.

---