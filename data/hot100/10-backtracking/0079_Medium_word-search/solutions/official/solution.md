# Official Solution

**Link:** [https://leetcode.com/problems/word-search/solution/](https://leetcode.com/problems/word-search/solution/)

---

[TOC]

## Solution

---

### Approach 1: Backtracking

#### Intuition

This problem is yet another 2D grid traversal problem, which is similar with another problem called [489. Robot Room Cleaner](https://leetcode.com/articles/robot-room-cleaner/).

Many people in the [discussion forum](https://leetcode.com/problems/word-search/discuss/) claimed that the solution is of _**DFS**_ (Depth-First Search). Although it is true that we would explore the 2D grid with the DFS strategy for this problem, it does not capture the entire nature of the solution.

>We argue that a more accurate term to summarize the solution would be _**backtracking**_, which is a methodology where we mark the current path of exploration, if the path does not lead to a solution, we then revert the change (_i.e._ backtracking) and try another path.

As the general idea for the solution, we would walk around the 2D grid, and at each step, we _mark_ our choice before jumping into the next step. And at the end of each step, we would also revert our mark so that we will have a _clean slate_ to try another _direction_. In addition, the exploration is done via the _DFS_ strategy, where we go as far as possible before we try the next direction.

![pic](../Figures/79/79_example.png)

#### Algorithm

There is a certain code pattern for all the algorithms of backtracking. For example, one can find one template in our [Explore card of Recursion II](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2793/).

The skeleton of the algorithm is a loop that iterates through each cell in the grid. For each cell, we invoke the _backtracking_ function (_i.e._ `backtrack()`) to check if we would obtain a solution, starting from this very cell.

For the backtracking function `backtrack(row, col, suffix)`, as a DFS algorithm, it is often implemented as a _recursive_ function. The function can be broke down into the following four steps:

- Step 1). At the beginning, first we check if we reach the bottom case of the recursion, where the word to be matched is empty, _i.e._ we have already found the match for each prefix of the word.

- Step 2). We then check if the current state is invalid, either the position of the cell is out of the boundary of the board or the letter in the current cell does not match with the first letter of the word.

- Step 3). If the current step is valid, we then start the exploration of backtracking with the strategy of DFS. First, we mark the current cell as _visited_, _e.g._ any non-alphabetic letter will do. Then we iterate through the four possible directions, namely _up_, _right_, _down_ and _left_. The order of the directions can be altered, to one's preference.

- Step 4). At the end of the exploration, we revert the cell back to its original state. Finally we return the result of the exploration.

We demonstrate how it works with an example in the following animation.

!?!../Documents/79_LIS.json:1000,476!?!

#### Implementation

<iframe src="https://leetcode.com/playground/k2TxrtMN/shared" frameBorder="0" width="100%" height="500" name="k2TxrtMN"></iframe>


**Notes**

There are a few choices that we made for our backtracking algorithm, here we elaborate some thoughts that are behind those choices.

>Instead of returning directly once we find a match, we simply _break_ out of the loop and do the cleanup before returning.

Here is what the alternative solution might look like.

<iframe src="https://leetcode.com/playground/ha4zC2J6/shared" frameBorder="0" width="100%" height="500" name="ha4zC2J6"></iframe>

As one may notice, we simply `return True` if the result of the recursive call to `backtrack()` is positive. Though this minor modification would have no impact on the time or space complexity, it would however leave with a "side-effect," _i.e._ the matched letters in the original board would be altered to `#`.

>Instead of doing the boundary checks before the recursive call on the `backtrack()` function, we do it within the function.

This is an important choice though. Doing the boundary check within the function would allow us to reach the bottom case, for the test case where the board contains only a single cell, since either of neighbor indices would not be valid.

#### Complexity Analysis

- Time Complexity: $$\mathcal{O}(N \cdot 3 ^ L)$$ where $$N$$ is the number of cells in the board and $$L$$ is the length of the word to be matched.

    - For the backtracking function, initially we could have at most 4 directions to explore, but further the choices are reduced into 3 (since we won't go back to where we come from).
    As a result, the execution trace after the first step could be visualized as a 3-nary tree, each of the branches represent a potential exploration in the corresponding direction. Therefore, in the worst case, the total number of invocation would be the number of nodes in a full 3-nary tree, which is about $$3^L$$.

    - We iterate through the board for backtracking, _i.e._ there could be $$N$$ times invocation for the backtracking function in the worst case.

    - As a result, overall the time complexity of the algorithm would be $$\mathcal{O}(N \cdot 3 ^ L)$$.

- Space Complexity: $$\mathcal{O}(L)$$ where $$L$$ is the length of the word to be matched.

    - The main consumption of the memory lies in the recursion call of the backtracking function. The maximum length of the call stack would be the length of the word. Therefore, the space complexity of the algorithm is $$\mathcal{O}(L)$$.
<br/>
<br/>