# Official Solution

**Link:** [https://leetcode.com/problems/surrounded-regions/solution/](https://leetcode.com/problems/surrounded-regions/solution/)

---

[TOC]

## Solution

---
### Overview

This problem is _almost_ identical as the [capture rule](https://en.wikipedia.org/wiki/Rules_of_Go#Capture) of the Go game, where one captures the opponent's stones by surrounding them. The difference is that in the Go game the borders of the board are considered to the walls that surround the stones, while in this problem a group of cells (_i.e._ region) is considered to be _**escaped**_ from the surrounding if it reaches any border.

![pic](../Figures/130/130_eg.png)

This problem is yet another problem concerning the _**traversal of 2D grid**_, _e.g._ [Robot room cleaner](https://leetcode.com/articles/robot-room-cleaner/).

>As similar to the traversal problems in a tree structure, there are generally two approaches in terms of solution: _**DFS**_ (Depth-First Search) and _**BFS**_ (Breadth-First Search).

One can apply either of the above strategies to traverse the 2D grid, while taking some specific actions to resolve the problems.

Given a traversal strategy (_DFS_ or _BFS_), there could be a thousand implementations for a thousand people, if we indulge ourselves to exaggerate a bit. However, there are some common neat _**techniques**_ that we could apply along with both of the strategies, in order to obtain a more optimized solution.
<br/>
<br/>

---
### Approach 1: DFS (Depth-First Search)

**Intuition**

>The goal of this problem is to mark those _**captured**_ cells. 

If we are asked to summarize the algorithm in one sentence, it would be that we enumerate all those candidate cells (_i.e._ the ones filled with `O`), and check _one by one_ if they are _captured_ or not, _i.e._ we start with a candidate cell (`O`), and then apply either DFS or BFS strategy to explore its surrounding cells.

**Algorithm**

Let us start with the DFS algorithm, which usually results in a more concise code than the BFS algorithm. The algorithm consists of three steps:

- Step 1). We select all the cells that are located on the borders of the board.

- Step 2). Start from each of the above selected cell, we then perform the _DFS_ traversal.

    - If a cell on the border happens to be `O`, then we know that this cell is _alive_, together with the other `O` cells that are _connected_ to this border cell, based on the description of the problem. Two cells are _connected_, if there exists a path consisting of only `O` letter that bridges between the two cells.

    - Based on the above conclusion, the goal of our DFS traversal would be to _mark_ out all those _**connected**_ `O` cells that is originated from the border, with any distinguished letter such as `E`.

- Step 3). Once we iterate through all border cells, we would then obtain three types of cells:

    - The one with the `X` letter: the cell that we could consider as the wall.

    - The one with the `O` letter: the cells that are spared in our _DFS_ traversal, _i.e._ these cells has no connection to the border, therefore they are _**captured**_. We then should replace these cell with `X` letter.

    - The one with the `E` letter: these are the cells that are marked during our DFS traversal, _i.e._ these are the cells that has at least one connection to the borders, therefore they are not _captured_. As a result, we would revert the cell to its original letter `O`.
 
 We demonstrate how the DFS works with an example in the following animation. 

!?!../Documents/130_LIS.json:1000,521!?!

<iframe src="https://leetcode.com/playground/WnMgmfsF/shared" frameBorder="0" width="100%" height="500" name="WnMgmfsF"></iframe>

**Optimizations**

In the above implementation, there are a few techniques that we applied _**under the hood**_, in order to further optimize our solution. Here we list them one by one.

>Rather than iterating all candidate cells (the ones filled with `O`), we check only the ones on the **_borders_**.

In the above implementation, our starting points of _DFS_ are those cells that meet two conditions: 1). on the border. 2). filled with `O`.

_As an alternative solution, one might decide to iterate all `O` cells, which is less optimal compared to our starting points._

As one can see, during DFS traversal, the alternative solution would traverse the cells that eventually might be captured, which is not necessary in our approach.

>Rather than using a sort of `visited[cell_index]` map to keep track of the visited cells, we simply mark visited cell _**in place**_.

_This technique helps us gain both in the space and time complexity._

As an alternative approach, one could use a additional data structure to keep track of the visited cells, which goes without saying would require additional memory. And also it requires additional calculation for the comparison. Though one might argue that we could use the hash table data structure for the `visited[]` map, which has the $$\mathcal{O}(1)$$ asymptotic time complexity, but it is still more expensive than the simple comparison on the value of cell.

>Rather than doing the boundary check within the `DFS()` function, we do it _**before**_ the invocation of the function. 

As a comparison, here is the implementation where we do the boundary check within the `DFS()` function.

```python3
def DFS(self, board, row, col):
    if row < 0 or row >= self.ROWS or col < 0 or col >= self.COLS:
        return
    if board[row][col] != "O":
        return
    board[row][col] = "E"
    # jump to the neighbors without boundary checks
    for ro, co in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
        self.DFS(board, row + ro, col + co)
```

_This measure reduces the number of recursion, therefore it reduces the overheads with the function calls._

As trivial as this modification might seem to be, it actually reduces the runtime of the Python implementation from _148 ms_ to _124 ms_, _i.e._ _16%_ of reduction, which beats 97% of submissions instead of 77% at the moment.


**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the number of cells in the board. In the worst case where it contains only the `O` cells on the board, we would traverse each cell twice: once during the DFS traversal and the other time during the cell reversion in the last step.

- Space Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the number of cells in the board. There are mainly two places that we consume some additional memory.

    - We keep a list of border cells as starting points for our traversal. We could consider the number of border cells is proportional to the total number ($$N$$) of cells.

    - During the recursive calls of `DFS()` function, we would consume some space in the function call stack, _i.e._ the call stack will pile up along with the depth of recursive calls. And the maximum depth of recursive calls would be $$N$$ as in the worst scenario mentioned in the time complexity.

    - As a result, the overall space complexity of the algorithm is $$\mathcal{O}(N)$$.
<br/>
<br/>

---
### Approach 2: BFS (Breadth-First Search)

**Intuition**

>In contrary to the DFS strategy, in BFS (Breadth-First Search) we prioritize the visit of a cell's neighbors before moving further (deeper) into the neighbor's neighbor. 

Though the order of visit might differ between DFS and BFS, eventually both strategies would visit the same set of cells, for most of the 2D grid traversal problems. This is also the case for this problem.

**Algorithm**

We could reuse the bulk of the DFS approach, while simply replacing the `DFS()` function with a `BFS()` function.
Here we just elaborate the implementation of the `BFS()` function.

- Essentially we can implement the BFS with the help of queue data structure, which could be of `Array` or more preferably `LinkedList` in Java or `Deque` in Python.

- Through the queue, we maintain the order of visit for the cells. Due to the **FIFO** (First-In First-Out) property of the queue, the one at the head of the queue would have the highest priority to be visited. 

- The main logic of the algorithm is a loop that iterates through the above-mentioned queue. At each iteration of the loop, we _pop out_ the **head** element from the queue.

    - If the popped element is of the candidate cell (_i.e._ `O`), we mark it as escaped, otherwise we skip this iteration.

    - For a candidate cell, we then simply append its neighbor cells into the queue, which would get their turns to be visited in the next iterations.

As comparison, we demonstrate how BFS works with the same example in DFS, in the following animation. 

!?!../Documents/130_SEC.json:1000,533!?!

<iframe src="https://leetcode.com/playground/AKqp9Qhx/shared" frameBorder="0" width="100%" height="500" name="AKqp9Qhx"></iframe>


**From BFS to DFS**

In the above implementation of BFS, the fun part is that we could easily convert the BFS strategy to DFS by changing one single line of code. And the obtained DFS implementation is done in iteration, instead of recursion.

>The key is that instead of using the _**queue**_ data structure which follows the principle of FIFO (First-In First-Out), if we use the _**stack**_ data structure which follows the principle of LIFO (Last-In First-Out), we then switch the strategy from BFS to DFS.

Specifically, at the moment we pop an element from the queue, instead of popping out the _head_ element, we pop the _tail_ element, which then changes the behavior of the container from queue to stack. Here is how it looks like.

<iframe src="https://leetcode.com/playground/bERFUXoC/shared" frameBorder="0" width="100%" height="395" name="bERFUXoC"></iframe>

Note that, though the above implementations indeed follow the DFS strategy, they are NOT equivalent to the previous _**recursive**_ version of DFS, _i.e._ they do not produce the exactly same sequence of visit.

In the recursive DFS, we would visit the _right-hand side_ neighbor `(row, col+1)` first, while in the iterative DFS, we would visit the _up_ neighbor `(row-1, col)` first.

In order to obtain the same order of visit as the recursive DFS, one should _reverse_ the processing order of neighbors in the above iterative DFS.

**Complexity**

- Time Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the number of cells in the board. In the worst case where it contains only the `O` cells on the board, we would traverse each cell twice: once during the BFS traversal and the other time during the cell reversion in the last step.

- Space Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the number of cells in the board. There are mainly two places that we consume some additional memory.

    - We keep a list of border cells as starting points for our traversal. We could consider the number of border cells is proportional to the total number ($$N$$) of cells.

    - Within each invocation of `BFS()` function, we use a queue data structure to hold the cells to be visited. We then need to estimate the upper bound on the size of the queue. _Intuitively we could imagine the unfold of BFS as the structure of an onion._
    Each layer of the onion represents the cells that has the same distance to the starting point. 
    Any given moment the queue would contain no more than two layers of _onion_, which in the worst case might cover _almost_ all cells in the board.

    - As a result, the overall space complexity of the algorithm is $$\mathcal{O}(N)$$.
<br/>
<br/>