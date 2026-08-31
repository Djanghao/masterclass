# Official Solution

**Link:** [https://leetcode.com/problems/the-maze-iii/solution/](https://leetcode.com/problems/the-maze-iii/solution/)

---

[TOC]

## Solution

---

### Approach: Dijkstra's

**Intuition**

This is the third installment of The Maze series. We recommend solving [first](https://leetcode.com/problems/the-maze/) and [second](https://leetcode.com/problems/the-maze-ii/) installments first before attempting this problem.

Users that have solved the previous installments will recognize the maze as a graph. A matrix with well-defined rules of movement is a very common format for graphs. We can treat each square in the maze as a node. For a given node, we can find the neighbors by moving in the 4 orthogonal directions until we reach a wall.

In this problem, we need to determine the shortest path from a starting square to a destination square. The standard algorithm to use when looking for a shortest path is BFS. However, BFS requires that the graph is unweighted. In this problem, edges between neighbors have varying distances. One edge could only cost `1` distance, while another could cost `50`. As such, the edges in this problem are weighted and we need a more advanced algorithm like Dijkstra's.

Dijkstra's is a very useful algorithm for finding the shortest path to all nodes from a given source node. If you are not familiar with Dijkstra's, we recommend checking out the article on it in [the graph explore card](https://leetcode.com/explore/featured/card/graph/622/single-source-shortest-path-algorithm/3862/).

We can simply run Dijkstra's starting from the `ball` and terminate as soon as we find the `hole`. If we never find the `hole`, we know there exists no path and can return `"impossible"`.

There is an added task in the problem - instead of returning the minimum distance, we need to return the movement instructions. In each entry of the heap/priority queue, we will store the following:

- Row of the node (integer)
- Column of the node (integer)
- Current distance (integer)
- Current path (string)

Elements in the heap will have a higher priority if they have a lower distance. The problem description states that if there are multiple paths with the shortest distance, we should return the one that produces the lexicographical minimal instructions. As such, we need to make sure the heap breaks tiebreaks according to the path string.

When we consider the neighbors of a node, we must also consider the direction (`"l", "r", "d", "u"`) and add it to the current path.

If there are many paths that have equal distances, our algorithm will handle them correctly. Consider a node with distance `d`. When we pop this node from the heap, **all** other paths of distance `d` must necessarily be in the heap already. This is because those paths are constructed from nodes with distances less than `d`, which must have already been processed if we are currently considering a node with distance `d`.

Typically when implementing Dijkstra's, we use a `dist` array to store the minimum distance seen so far for each node from the source. In this problem, we only care about the destination and will return immediately upon reaching it, so instead of using this `dist` array we only need to use a standard set or array `seen` to keep track of which nodes have already been visited.

**Algorithm**

1. Define a helper function `valid` that takes a coordinate `(row, col)` as an argument. In this function, we check if `(row, col)` is a valid node. It is valid if it is in bounds and `maze[row][col] == 0`.
2. Define a helper function `getNeighbors` that takes a node `(row, col)` as an argument. In this function, we will return a list of neighbors. We can find the neighbors by considering the 4 directions (up, down, left, right). For each direction, we use a while loop to move in the direction until we hit a wall. We can make use of our `valid` function here. We must also consider the direction's instruction (`"l", "r", "d", "u"`) for each neighbor.
3. Initialize a heap/priority queue with `ball`. Configure it so that elements with lower distance have higher priority, and tiebreaks are broken by the path string. Also, create a data structure `seen` to keep track of nodes we have already visited.
4. Run Dijkstra's. While the heap is not empty:
    - Pop a node from the heap. If the node has already been visited, continue to the next node.
    - If the node is the `hole`, return the current `path`.
    - Otherwise, mark the current node in `seen` and use the `getNeighbors` helper function to get the neighbors.
    - Push each of the neighbors onto the heap while updating the `dist` and `path`.
5. If we get to this point, there is no path. Return `"impossible"`.

**Implementation**

<iframe src="https://leetcode.com/playground/brtuM22x/shared" frameBorder="0" width="100%" height="500" name="brtuM22x"></iframe>

**Complexity Analysis**

Given $$n$$ as the number of squares in `maze`,

* Time complexity: $$O(n \cdot \log n)$$

    In a typical graph problem, most if not all nodes are visited by the algorithm. In this problem, due to the nature of the edges, the majority of test cases will result in most squares not being visited. However, one can think of a worst-case scenario where $$O(n)$$ nodes are visited. For example, look at the following input:

    <img src="../Figures/499/1.png" width="960"> <br>

    It's hard to demonstrate without using a **huge** board (`n ~= 10,000`), but by moving diagonally repeatedly, a path of length $$O(n)$$ may exist. Note that there would be a significant constant divisor, but by the rules of big O, it would still be $$O(n)$$.

    The example image here contains only one path, but one could also devise a worst case scenario where there are $$O(n)$$ nodes and many different paths. In this case, the heap could grow to a size of $$O(n)$$, and thus the operations would cost $$O(\log n)$$. For $$O(n)$$ nodes and $$O(n)$$ heap operations, this could cost up to $$O(n \cdot \log n)$$.

    Note that we may also consider the string operations. In this editorial, we have used simple string concatenation, which can be an expensive operation. If the path has a length of $$O(n)$$, then it would cost $$O(n^2)$$ just in string operations. However, one may use a language like C++ where strings are mutable, and concatenation is $$O(1)$$.

    Note that even in the worst-case scenarios, there is a significant constant divisor. In the vast majority of test cases, the heap will not grow to a size anywhere close to $$n$$, and we will not handle anywhere near $$n$$ nodes.

* Space complexity: $$O(n)$$

    The heap and `seen` both require up to $$O(n)$$ space.

> Note: this problem can also be solved using DFS or BFS, but Dijkstra's is the most intuitive option once we recognize the edges are weighted, and also more efficient as performing DFS or BFS without a heap on a weighted graph requires modifications.

<br>

---