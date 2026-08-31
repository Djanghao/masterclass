# Official Solution

**Link:** [https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solution/](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solution/)

---

[TOC]

## Solution

--- 

### Overview

As shown in the picture below, we have found 8 valid paths. Note that:
- A cell itself is also a valid path, so each cell in the grid stands for a unique path.
- The path must be **strictly** increasing, so the paths colored in red are invalid.

![img](../Figures/2328/1.png)

 

---

### Approach 1: Sorting + DP.

#### Intuition   

Let's build an auxiliary array `dp` of the same size as `grid` to represent the number of paths that end at each cell. Initially, the value of each `dp[i][j]` cell is `1`, which stands for the path made by `grid[i][j]` cell itself.

![img](../Figures/2328/2.png)

Then, for each cell `grid[i][j]`, we need to look for its neighbor cells in 4 directions, if there exists a neighbor cell (let's say `grid[i + 1][j]`) that is larger than `grid[i][j]`, it means every path that ends at `grid[i][j]` can be extended to `grid[i + 1][j]`. Therefore, the number of paths ending at `grid[i + 1][j]` should be incremented by `grid[i][j]`.


However, if we traverse all cells by arbitrary order, we might need many repeated updates, as described below.

![img](../Figures/2328/wrong.png)

It implies that we should iterate over all cells by value. If we sort these cells by value, then traverse over them from the smallest. This ensures that the number of paths ending at each cell in `dp` is updated only once.


Please refer to the following slide for an example. 

!?!../Documents/2328/s1.json:601,301!?!



<br>

#### Algorithm

1) Initialize `dp`, a 2-d array of the same size as `grid`, and set every value as `1`.
2) Sort all cells by value and iterate over the sorted cells.
3) For each cell `grid[i][j]`, check its 4-direction neighbor cells, if a neighbor cell `grid[curr_i][curr_j]` has a larger value, then increment `dp[curr_i][curr_j]` by `dp[i][j]`.
4) Return the sum of all cells of `dp` when the iteration ends.

#### Implementation

<iframe src="https://leetcode.com/playground/SLTCPGT6/shared" frameBorder="0" width="100%" height="500" name="SLTCPGT6"></iframe>


#### Complexity Analysis

Let $$m \times n$$ be the size of the input array `grid`.

* Time complexity: $$O(m\cdot n \cdot\log(m\cdot n))$$

    - We sort all cells by value, it takes $$O(k\log k)$$ to sort an array of size $$O(k)$$, so it takes $$O(m\cdot n \cdot\log(m\cdot n))$$ time.
    - The iteration over sorted cells has $$O(m \cdot n)$$ steps, each step consists of checking at most four neighbor cells, thus it takes $$O(m \cdot n)$$ time.
    - For initialization of `dp` and the calculation of `answer` we iterate over all the cells of the `dp` array, which also takes $$O(m \cdot n)$$ time.
    - To sum up, the overall time complexity is $$O(m\cdot n \cdot\log(m\cdot n))$$.

* Space complexity: $$O(m\cdot n)$$

    - We used two arrays, `cellList` and `dp`, they both contain $$O(m \cdot n)$$ elements.

<br/>



---

### Approach 2: DFS with Memoization


#### Intuition   

In the previous approach, we have to sort all cells first to avoid repeated computation. Here, we introduce a better method that doesn't need traversing by order.

We define a function `dfs(i, j)` to calculate the number of increasing paths ending at `grid[i][j]`. `dfs(i, j)` consists of **at most** 5 parts:


- 1, the path consisting of `grid[i][j]` itself.
- `dfs(i - 1, j)`, if `grid[i - 1][j]` exists and is smaller than `grid[i][j]`. 
- `dfs(i, j - 1)`, if `grid[i][j - 1]` exists and is smaller than `grid[i][j]`.
- `dfs(i + 1, j)`, if `grid[i + 1][j]` exists and is smaller than `grid[i][j]`.
- `dfs(i, j + 1)`, if `grid[i][j + 1]` exists and is smaller than `grid[i][j]`.

If a neighbor cell with a smaller value (For example, `grid[i + 1][j] < grid[i][j]`) exists, we can get the number of paths ending at this cell as `dfs(i + 1, j)`, and for all those paths we can extend the path with the current element, so we increment `dfs(i, j)` by `dfs(i + 1, j)`.


![img](../Figures/2328/3.png)

Remember to use the memoization method to avoid repeated computation. Similarly, we create an array `dp` of the same size as `grid`. Initially, each cell `dp[i][j]` is set to `-1`, which means **unvisited**. 


![img](../Figures/2328/4.png)

Once we get the number of paths ending at cell `grid[i][j]` and update `dp[i][j]`, it means the cell `grid[i][j]` is **visited** and the value of `dfs(i, j)` calculated for the first time. If we need `dfs(i, j)` in the further iteration, we don't bother repeating the DFS process to calculate `dfs(i, j)`, but return `dp[i][j]` since `dp[i][j] = dfs(i, j)`.

<br>

As shown in the picture below, suppose we have visited `grid[0][0]` and updated `dp[0][0]`. Now we are visiting `grid[1][0]`, `grid[0][0]` is smaller than `grid[1][0]`, according to the previous definition, we need a step `dfs(1, 0) += dfs(0, 0)`. However, there is no need to recalculate `dfs(0, 0)`, we can just return `dp[0][0]` which will take constant time!

![img](../Figures/2328/5.png)

We can tell that each cell in `dp[i][j]` is only calculated by once.

<br>

#### Algorithm

1) Initialize `dp`, an auxiliary 2-d array of the same size as `grid`, and set every value as `-1`.
2) Iterate over every cell `grid[i][j]` and get `dfs(i, j)`, the number of paths end at it:
    - If `dp[i][j]` is non-zero, it means we have visited this cell, just return `dp[i][j]` and repeat step 2.
    - Otherwise, set `dfs(i, j) = 1`, the path consisting of the cell itself.
    - Check its 4-direction neighbor cells, if a neighbor cell `(prev_i, prev_j)` has a smaller value, increment `dfs(i, j)` by `dfs(prev_i, prev_j)`
    - Update `dp[i][j]` as `dfs(i, j)`.
3) Once the iteration ends, return the sum of `dp`.

#### Implementation

<iframe src="https://leetcode.com/playground/CDEprm5d/shared" frameBorder="0" width="100%" height="500" name="CDEprm5d"></iframe>


#### Complexity Analysis

Let $$m \times n$$ be the size of the input array `grid`.

* Time complexity: $$O(m\cdot n)$$

    - We used `dp` as memory to avoid repeated computation, so each cell is only visited and calculated once. 
    - Initialization of the `dp` array also takes $$O(m \cdot n)$$ time.
    

* Space complexity: $$O(m\cdot n)$$

    - We build the auxiliary array `dp` of the same size as `grid`.
    - The space complexity of recursive algorithm is proportional to the maximum depth of the recursion tree generated. There are at most $$m\cdot n$$ recursive call of `dfs` in the stack simultaneously, thus the stack takes $$O(m\cdot n)$$ space.
    - To sum up, the space complexity is $$O(m\cdot n)$$.

<br/>