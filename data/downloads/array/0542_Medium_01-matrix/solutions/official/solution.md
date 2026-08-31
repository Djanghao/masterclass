# Official Solution

**Link:** [https://leetcode.com/problems/01-matrix/solution/](https://leetcode.com/problems/01-matrix/solution/)

---

[TOC]

## Solution

---

### Overview

Whenever you have a matrix where you can move between adjacent cells, you should immediately think about graphs. A matrix is a very common format for a graph to take.

You can treat each square as a node. There are edges between adjacent nodes. Here are some other graph problems that use matrices:

- [Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)
- [Max Area of Island](https://leetcode.com/problems/max-area-of-island/)
- [Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/)
- [Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/)

---

### Approach 1: Breadth-First Search (BFS)

**Intuition**

The first thing you should think about when it comes to shortest path problems on graphs is BFS. If you're not familiar with BFS, we suggest you read the relevant [LeetCode Explore Card](https://leetcode.com/explore/featured/card/graph/620/breadth-first-search-in-graph/).

First of all, any cell with value `0` does not need to be changed. For a given cell with value `1`, we need to find the nearest `0`. We could perform a BFS starting from the cell and terminate once we find any `0`, as this `0` would be the closest one. By repeating this for every cell with value `1`, we would solve the problem.

The issue with this is that the constraints state that the matrix could have up to `10,000` cells. Think about a matrix where the entire matrix is `1` except for one of the corners. We would need to perform $$O(\text{size})$$ BFS, with each BFS costing up to $$O(\text{size})$$. In the worst-case scenario, the number of operations we would need is on the order of `100,000,000`, which would fail the time limit. We need to think of a more efficient way to perform the BFS.

What if we started the BFS from `0` instead of `1`? Let's say that we started a BFS from a `1` and found that the nearest `0` was `x` steps away. Now, let's start a BFS from that `0` until we reach the original `1`. We will again find that the BFS takes `x` steps. Basically, it doesn't matter if we start from the `0` or `1`, both will result in the same distance.

If we start BFS from `1`, we can only find the shortest distance for that `1`. If we start BFS from `0`, we could find the shortest distance for many `1` at a time. So which `0` should we start from? The answer is all of them!

Let's think about how BFS works. From a source node, we first visit all nodes at a distance of `1`. Next, we visit all nodes at a distance of `2`, then `3`, and so on. We can say a node at a distance of x from the source belongs to "level x". So the source is at level 0, the neighbors of the source are at level 1, the neighbors of those nodes are at level 2, and so on.

We are used to starting BFS from only one source node, i.e. level 0 only has one node. But there is nothing stopping us from having multiple nodes in level 0. If we start with multiple nodes in level 0, then the nodes in level 1 will be all the neighbors of the nodes in level 0. The nodes in level 2 will be all the neighbors of the nodes in level 1, and so on - the logic is identical. The following animation illustrates this idea (cells are labeled by their level):

!?!../Documents/542.json:960,540!?!
<br>

As you can see, we don't need to visit any node more than once, which drastically improves our time complexity.

**Algorithm**

1. Create a copy of `mat`, we'll call it `matrix`.
2. Use a data structure `seen` to mark nodes we have already visited and a `queue` for the BFS.
3. Put all nodes with `0` into the `queue`. We will also track the level/number of steps with each `queue` entry. Mark these nodes in `seen` as well.
4. Perform the BFS:
    - While `queue` is not empty, get the current `row, col, steps` from the `queue`.
    - Iterate over the 4 directions. For each `nextRow, nextCol`, check if it is in bounds and not already visited in `seen`.
    - If so, set `matrix[nextRow][nextCol] = steps + 1` and push `nextRow, nextCol, steps + 1` onto the `queue`. Also mark `nextRow, nextCol` in `seen`.
5. Return `matrix`.

**Implementation**

<iframe src="https://leetcode.com/playground/dw4gumNm/shared" frameBorder="0" width="100%" height="500" name="dw4gumNm"></iframe>

**Complexity Analysis**

Given $$m$$ as the number of rows and $$n$$ as the number of columns,

* Time complexity: $$O(m \cdot n)$$

    The BFS never visits a node more than once due to `seen`. Each node has at most 4 neighbors, so the work done at each node is $$O(1)$$. This gives us a time complexity of $$O(m \cdot n)$$, the number of nodes.

* Space complexity: $$O(m \cdot n)$$

    Note: some people may choose to modify the input `mat` instead of creating a copy `matrix` and using `seen`.

    It is generally not considered good practice to modify the input, especially if it's an array as they are passed by reference. Even then, you would only be saving on **auxiliary space** - if you modify the input as part of your algorithm, you still need to count it towards the space complexity.

    We could also elect to not count `matrix` as part of the space complexity as it serves only as the output and the output does not count towards the space complexity if it is not used in any logic during the algorithm.

    There is a lot of nuance when it comes to these decisions and you should always clarify your decisions with the interviewer.

    In our implementation, `seen` and `queue` uses $$O(m \cdot n)$$ space regardless of interpretation, so that is our space complexity.
    
<br/>

---

### Approach 2: Dynamic Programming

**Intuition**

Let's say we're currently at `row, col`. What is the minimum distance for this cell? We must have arrived from one of the following:

- `row - 1, col`
- `row + 1, col`
- `row, col - 1`
- `row, col + 1`

Therefore the minimum distance for `row, col` is 1 + the minimum distance from these four neighbors. This gives us a natural recurrence that we can solve using DP:

`dp[row][col] = 1 + min(dp[row - 1][col], dp[row + 1][col], dp[row][col - 1], dp[row][col + 1])`

Where `dp[x][y]` is the minimum distance for the cell `mat[x][y]` and `mat[x][y] != 0`.

The issue with this recurrence is that we don't have an obvious order in which we should iterate over `mat`. We can't just iterate over each cell and check the four directions immediately because the other directions haven't been calculated yet. DP only works with values that have been previously calculated. So how do we calculate `dp`?

Let's pretend that we can only move down and right (not allowed to move up and left). That would change the recurrence. To reach `row, col`, we must have arrived from one of:

- `row - 1, col`
- `row, col - 1`

So the new recurrence would be:

`dp[row][col] = 1 + min(dp[row - 1][col], dp[row][col - 1])`

If we start at the top left and iterate row by row, column by column, we will correctly calculate `dp` for any paths that move down and right. Now, let's pretend that we can only move up and left (not allowed to move down and right). Again, this would change our recurrence:

`dp[row][col] = 1 + min(dp[row + 1][col], dp[row][col + 1])`

If we start at the bottom right and iterate backward, we will correctly calculate `dp` for any paths that move up and left. Finally, `dp` is the answer!

<details><summary><b>Click here to see proof of this algorithm's correctness if interested</b></summary>

Assume we have a 2x2 matrix: `[a, b], [c, d]`. There are two possibilities:

1. `a = 0`. On the first pass (moving down and right only), we can correctly calculate `dp`.
2. `a = 1`. One of `b, c, d` must be `0`, since the constraints say there must be at least one `0`. No matter where the `0` is, we can calculate the correct distance for `d`, since it is in the bottom right. Now that we know the answer for `d`, in the second pass, we can calculate the answer for `b, c`, and with that we can calculate the answer of `a`.

Therefore, `a, b, c, d` can always be calculated regardless of their initial values. This logic extends to any size matrix.

</details>

<br>

**Algorithm**

1. Create a copy of `mat`, we'll call it `dp`.
2. Iterate row by row, column by column. At each `row, col`:
    - Initialize `minNeighbor` to a large value. This represents the minimum value of `dp` from the cells we could have arrived from.
    - Making sure to stay in bounds, check the two cells we could have arrived from: `row - 1, col` and `row, col - 1`.
    - Update `minNeighbor` with their `dp` values.
    - Set `dp[row][col] = minNeighbor + 1`.
3. Iterate over `dp` again but in reverse order. At each `row, col`:
    - Initialize `minNeighbor` to a large value.
    - Making sure to stay in bounds, check the two cells we could have arrived from: `row + 1, col` and `row, col + 1`.
    - Update `minNeighbor` with their `dp` values.
    - If `minNeighbor + 1` is less than `dp[row][col]` (the minimum distance if we only considered down-right paths), then update it.
4. Return `dp`.

**Implementation**

<iframe src="https://leetcode.com/playground/bHKXqUcX/shared" frameBorder="0" width="100%" height="500" name="bHKXqUcX"></iframe>

**Complexity Analysis**

Given $$m$$ as the number of rows and $$n$$ as the number of columns,

* Time complexity: $$O(m \cdot n)$$

    We iterate over $$m \cdot n$$ cells twice, performing constant work at each iteration.

* Space complexity: $$O(m \cdot n)$$

    As discussed above, some people may choose to reuse `mat` as `dp`.

    A common misconception is that it would be $$O(1)$$ space. It would only be $$O(1)$$ **auxiliary space**, but as we are modifying the input and using it in the algorithm, it must be included in the space complexity. Again, it is not considered good practice to modify the input anyways, which is why we are creating `dp`, which uses $$O(m \cdot n)$$ space.
    
<br/>

---