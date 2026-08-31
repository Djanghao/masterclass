# Official Solution

**Link:** [https://leetcode.com/problems/minimum-falling-path-sum-ii/solution/](https://leetcode.com/problems/minimum-falling-path-sum-ii/solution/)

---

[TOC]

## Solution

--- 

### Overview

Given an `n x n` integer matrix `grid`, we have to find the minimum sum of a **falling path with non-zero shifts**.

> A **falling path with non-zero shifts** is a choice of exactly one element from each row of the `grid` such that no two elements chosen in adjacent rows are in the same column.

When choosing elements for the **falling path with non-zero shifts**, we must meet the following conditions:
- Choose one element from each row
- No two elements chosen in adjacent rows should be in the same column

In other words, if `grid[row][col]` is chosen, then `grid[row + 1][col]` and `grid[row - 1][col]` cannot be chosen.

The editorial systematically solves the problem by developing an approach and refining it.

---

### Approach 1: Top-Down Dynamic Programming

#### Intuition

Let's try solving the problem in a brute-force manner. It is a straightforward way to solve problems. 

> Though the brute force approach is considered to be the most naïve approach, it is a good starting point to understand the problem.
>
> Brute force is exhaustive, and often not efficient. However, it gives a deeper understanding of the basis of the problem, which can further help to shape a better-optimized solution.

We can try all possible combinations of elements from each row and find the minimum sum.

Let's select the element from every row, starting from the first row.

- We can select any element from the first row. There are `n` such possibilities. We don't know which element will lead to the minimum sum. Hence, we try all of them.
    
    > **Word of Caution:** The very assumption that we should start with the minimum element in the first row is wrong.
    > 
    > ![image](../Figures/1289/1289_slide_images_used/Slide2_1.PNG)
    >
    > If we choose `50` in the first row, then in the second row we only have the possibility of selecting `100`. Thus, we will end up with `151`.
    > However, selecting `100` in the first row will permit us to choose `1` in the second row. Thus, we will end up with `102`, which is the optimal minimum sum.

- After selecting an element from the first row, we have to select an element from the second row. We can select any element from the second row, except the element in the same column as the element selected from the first row. There are `n - 1` such possibilities. We don't know which element will lead to the minimum sum. Hence, we try all of them.

- After selecting an element from the second row, we have to select an element from the third row. We can select any element from the third row, except the element in the same column as the element selected from the second row. There are `n - 1` such possibilities. We don't know which element will lead to the minimum sum. Hence, we try all of them.

- We will do this until we reach the last row. After selecting an element from the last row, we will have a path. The minimum sum of all these paths will be the answer.

To formulate this, let's define a function `optimal(row, col)` which returns the minimum sum of a falling path with non-zero shifts, starting from row `row` and column `col`.

- If `row == n - 1`, then it means that we have reached the last row. Thus, the only path from this point is the value of the cell itself. Thus, we return `grid[row][col]`. 

- Otherwise, we have to select `grid[row][col]`. Now from this point, we have `n - 1` choices for selecting an element from the next row. 

    We will choose from the next row the cell which leads to the minimum sum. 
    
    Which function returns the minimum sum of a falling path with non-zero shifts, starting from a given row and column?   
    Our very own `optimal` function.

    > The paradigm of solving a problem using a function that solves the same problem is called **recursion**.
    >
    > For solving `optimal` in a particular row `row`, we are calling `optimal` in the next row `row + 1`. Thus, `optimal` is calling itself. This is called **recursion**.
    >
    > We are sure that `optimal` will terminate because there exists a row whose next row is not present. 

    Thus, `optimal(row, col)` will return `grid[row][col] + min(optimal(row + 1, next_row_col))` where `0 <= next_row_col < n` and `next_row_col != col`.

Thus, using these observations, we can formulate the recursive solution. We are trying all the possible combinations by performing a depth-first search on the `grid`.

> The **depth-first search** is a systematic way of exploring all the possible combinations of a problem. It is called **depth-first** because we are exploring the depth of the problem first, and then moving to the next branch.
>
> It is an exhaustive search process wherein we will traverse all the cells in a path. On reaching the end of the path, we must undo our last step in the current path and try a different possible next step to extend the path.

It's worth noting that we need to call `optimal` from every element of the first row because any element can be the starting point of the falling path. We will return the minimum sum of all these calls.

```Algorithm []
1. Save the size of the square `grid` in a variable `n`.

2. Define a recursive function `optimal`. It takes the row number `row` 
   and column number `col` as input of the cell from which we have to
   start the falling path. It returns the minimum sum of a falling path 
   with non-zero shifts, starting from cell `grid[row][col]`.

    Apart from `row` and `col`, make sure to pass the necessary 
    parameters that need to be accessed in the function.

    a. If `row == n - 1`, then there is no row left to select. 
       Thus, we return `grid[row][col]`.

    b. Otherwise, initialize a variable `next_minimum` with `INT_MAX`. 
       This variable will store the minimum sum of a falling path with 
       non-zero shifts, starting from the next row. 

    c. From this cell, we have `n - 1` possibilities of selecting an 
       element from the next row. 

       Thus traverse linearly in the `row + 1` using the variable 
       `next_row_col`. If `next_row_col != col`, then we can select 
       `grid[row + 1][next_row_col]`. 
        
        We need to select `next_row_col` for which `next_minimum` is the 
        minimum. Thus, `next_minimum` will be 
        `min(optimal(row + 1, next_row_col))` where 
        `0 <= next_row_col < n` and `next_row_col != col`.
    
    d. From this cell, the minimum sum of a falling path with non-zero 
       shifts is `grid[row][col] + next_minimum`. Return this value.

3. We can select any element from the first row. We will select the 
   element which leads to the minimum sum. Thus, initialize a variable 
   `answer` with `INT_MAX`.

    Traverse linearly in the first row using variable `col`. For every 
    cell, call `optimal(0, col)`. Variable `answer` will be 
    `min(optimal(0, col))` where `0 <= col < n`.

4. Return `answer`.
```
```python3 []
class Solution:
    def minFallingPathSum(self, grid: List[List[int]]) -> int:
        # Save the size of the square grid
        n = len(grid)

        # The optimal(row, col) function returns the minimum sum of a 
        # falling path with non-zero shifts, starting from grid[row][col]
        def optimal(row, col):
            # If the last row, then return the value of the cell itself
            if row == n - 1:
                return grid[row][col]

            # Select grid[row][col], and move on to next row. For next
            # row, choose the cell that leads to the minimum sum
            next_minimum = inf
            for next_row_col in range(n):
                if next_row_col != col:
                    next_minimum = min(next_minimum, optimal(row + 1, next_row_col))

            # Minimum cost from this cell
            return grid[row][col] + next_minimum
        
        # We can select any element from the first row. We will select
        # the element which leads to minimum sum.
        answer = inf
        for col in range(n):
            answer = min(answer, optimal(0, col))
        
        # Return the minimum sum
        return answer
```
```java []
class Solution {
    public int minFallingPathSum(int[][] grid) {
        // We can select any element from the first row. We will select
        // the element which leads to minimum sum.
        int answer = Integer.MAX_VALUE;
        for (int col = 0; col < grid.length; col++) {
            answer = Math.min(answer, optimal(0, col, grid));
        }

        // Return the minimum sum
        return answer;
    }

    // The optimal(row, col) function returns the minimum sum of a
    // falling path with non-zero shifts, starting from grid[row][col]
    int optimal(int row, int col, int[][] grid) {
        // If the last row, then return the value of the cell itself
        if (row == grid.length - 1) {
            return grid[row][col];
        }

        // Select grid[row][col], and move on to next row. For next
        // row, choose the cell that leads to the minimum sum
        int nextMinimum = Integer.MAX_VALUE;
        for (int nextRowCol = 0; nextRowCol < grid.length; nextRowCol++) {
            if (nextRowCol != col) {
                nextMinimum = Math.min(nextMinimum, optimal(row + 1, nextRowCol, grid));
            }
        }

        // Minimum cost from this cell
        return grid[row][col] + nextMinimum;
    }
}
```
```cpp []
class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& grid) {
        // We can select any element from the first row. We will select
        // the element which leads to minimum sum.
        int answer = INT_MAX;
        for (int col = 0; col < grid.size(); col++) {
            answer = min(answer, optimal(0, col, grid));
        }

        // Return the minimum sum
        return answer;
    }

    // The optimal(row, col) function returns the minimum sum of a
    // falling path with non-zero shifts, starting from grid[row][col]
    int optimal(int row, int col, vector<vector<int>>& grid) {
        // If the last row, then return the value of the cell itself
        if (row == grid.size() - 1) {
            return grid[row][col];
        }

        // Select grid[row][col], and move on to next row. For next
        // row, choose the cell that leads to the minimum sum
        int nextMinimum = INT_MAX;
        for (int nextRowCol = 0; nextRowCol < grid.size(); nextRowCol++) {
            if (nextRowCol != col) {
                nextMinimum = min(nextMinimum, optimal(row + 1, nextRowCol, grid));
            }
        }

        // Minimum cost from this cell
        return grid[row][col] + nextMinimum;
    }
};
```

The algorithm is inefficient. It has exponential time complexity and is not feasible for large inputs.

<details><summary>For detailed complexity analysis, click here!</summary>

<p>

Let $N$ be the number of rows of the square `grid`. Every row has $N$ columns.

* Time complexity: $O(N \cdot (N - 1)^N)$

    In the main function, we are calling `optimal` from every element of the first row. 

    Now let's fix our focus on one such call to one cell.

    - In `optimal`, we are recursively calling `optimal` for every column of the next row, except for one column. 
    - Thus, there will be $N - 1$ such calls from a particular row.
    - There are $N$ such rows from which recursive calls are made.

    Thus, the time complexity from one cell of the first row is $O((N - 1)^N)$.

    There are $N$ such cells in the first row. Thus, time complexity will be $O(N \cdot (N - 1)^N)$.
    
* Space complexity: $O(N)$

    - The space complexity of a recursive function depends on the maximum number of recursive calls on the stack. 

        At any point in time, there will be at most $N$ recursive calls on the stack, as each recursive call is made from a different row. In each recursive call, we have constant space complexity independent of input size. Therefore, space complexity because of the recursive call stack will be $O(N)$.

    - All other variables use constant space independent of input size.

    Hence, the overall space complexity will be $O(N + 1)$, which is $O(N)$. 

$\downarrow_{\text{Section after Complexity Analysis}}$

</p>
</details>
<br/>

For optimization, let's examine the recursion tree for `optimal(0, 0)`, when `n = 4`.

> A recursion tree is a tree where every node is a recursive call. The root node is the first call to the function. The leaf nodes are the base cases. The intermediate nodes are the recursive calls.

![Recursion Tree](../Figures/1289/1289_slide_images_used/Slide1.PNG)

As visible in the recursion tree, there are many same-colored overlapping sub-problems. **Is there any point in calculating the same sub-problem again and again?** No, right?

**What if we store the result of each sub-problem and use it when required?** This is the foundation of dynamic programming. We store the result of each sub-problem and use it when required.

> Dynamic programming is a programming paradigm in which we break a problem into sub-problems, store the result of each sub-problem, and use it when required. To dive deep into dynamic programming, readers can visit [Dynamic Programming Explore Card](https://leetcode.com/explore/featured/card/dynamic-programming/).

Since there are two state variables `row` and `col`, we can use a two-dimensional array to store the result of each sub-problem.

> If there are $T$ state variables, then we need an array of at most $T$ dimensions to store the result of each sub-problem.

We also need to decide how and using which data structure we will store the result of each sub-problem. We have the following options.

- Use a hash map `memo` to cache the result. The key of the hash map will be a pair of integer indices `(row, col)`, and the value will be the result of `optimal(row, col)`. 

- Use a two-dimensional array `memo` to cache the result. `memo[row][col]` will store the result of `optimal(row, col)`.

In this approach, we will use the hash map `memo` to cache the result. Readers are encouraged to implement the solution using a two-dimensional array as well.

#### Algorithm

1. Save the size of the square `grid` in a variable `n`.

2. Initialize a hash map `memo` to cache the minimum sum of a falling path with non-zero shifts, starting from a particular cell. The key will be a pair of integer indices `(row, col)`, and a value as an integer.

3. Define a recursive function `optimal`. It takes as input the row number `row` and column number `col` of the cell from which we start the falling path. It returns the minimum sum of a falling path with non-zero shifts, starting from cell `grid[row][col]`.

    In addition to `row` and `col`, make sure to pass any parameters to the function that need to be accessed in the function.

    - If `row == n - 1`, then there is no row left to select. Thus, we return `grid[row][col]`.

    - If the result of this sub-problem is already cached, then return the cached result. In other words, if `(row, col)` is present in `memo`, then return `memo[(row, col)]`.

    - Otherwise, initialize a variable `next_minimum` with `INT_MAX`. This variable will store the minimum sum of a falling path with non-zero shifts, starting from the next row. 

    - From this cell, we have `n - 1` possibilities of selecting an element from the next row. 

        Traverse linearly in the next row `row + 1` using variable `next_row_col`. If `next_row_col != col`, then we can select `grid[row + 1][next_row_col]`. 
        
        We need to select `next_row_col` for which `next_minimum` is the minimum. Thus, `next_minimum` will be `min(optimal(row + 1, next_row_col))` where `0 <= next_row_col < n` and `next_row_col != col`.
    
    - Thus, from this cell, the minimum sum of a falling path with non-zero shifts is `grid[row][col] + next_minimum`. Cache this value in `memo` with the key as `(row, col)` and return this value.

4. We can select any element from the first row. We will select the element which leads to the minimum sum. Thus, initialize a variable `answer` with `INT_MAX`.

    Traverse linearly in the first row using variable `col`. For every cell, call `optimal(0, col)`. Variable `answer` will be `min(optimal(0, col))` where `0 <= col < n`.

5. Return `answer`.

#### Implementation

<iframe src="https://leetcode.com/playground/cp7XYnDb/shared" frameBorder="0" width="100%" height="500" name="cp7XYnDb"></iframe>

**Note:** It *may* give Time Limit Exceeded/Memory Limit Exceeded because of
- large constant factor associated with the asymptotic complexity of the algorithm
- large auxiliary stack space required for recursion
- slow internal functions

It's worth mentioning that if readers are using an array instead of a hash map, then they must make sure NOT to initialize the array with `-1` because `-1` could be an answer, and we will never be able to distinguish between the case when the state is not computed, and the case when the state is computed and the answer is `-1`.

#### Complexity Analysis

Let $N$ be the number of rows of the square `grid`. Every row has $N$ columns.

* Time complexity: $O(N^3)$

    In the main function, we are calling `optimal` from every element of the first row. Let's analyze every element separately.

    - **Calling `optimal(0, 0)`**. Readers can appreciate that due to the recursive nature of the function, all yellow-highlighted sub-problems will be called, and their results will be saved in `memo` after the first call. 

        ![opt_0_0](../Figures/1289/1289_slide_images_used/Slide2_2.PNG)

        This is because every cell calls `optimal` for every column of the next row, except for one in the same column. 

        Thus, $1 + \bigg( (N -1) \cdot N \bigg) - 1$ sub-problems will be called, which is $O(N^2)$.

        In each sub-problem call, we are traversing linearly in the next row. Thus, the time complexity of each sub-problem call is $O(N)$.

        Hence, the time complexity of `optimal(0, 0)` is $O( N^2 \cdot N)$, which is $O(N^3)$.
    
    - **Calling `optimal(0, 1)`**. It will directly call all the cells having red dots on them.

        ![opt_0_1](../Figures/1289/1289_slide_images_used/Slide2_3.PNG)

        - The value of the yellow-highlighted cell will be fetched from `memo`. Thus, there will be no recursive call from that cell. There are $N - 2$ such cells, and they will have constant time complexity.

        - The value of the cell that is not yellow-highlighted will be calculated by calling `optimal` for $N - 1$ columns of the third row. 
            
            There is $1$ such cell, and it will have linear time complexity.
        
        Hence, time complexity of `optimal(0, 1)` is $O((N - 2) \cdot 1 + 1 \cdot N)$, which is $O(N)$.

        After the end of this call, the optimal value of all yellow-highlighted cells will be cached in `memo`. 

        ![after_opt_0_1](../Figures/1289/1289_slide_images_used/Slide3_1.PNG)
    
    - We have $N - 2$ cells remaining in first row. They will pick the minimum result of $N - 1$ valid cells from the second row. 

        Thus, for remaining cells, time complexity will be $O((N - 2) \cdot (N - 1))$, which is $O(N^2)$.
    
    Hence, the time complexity of the main function is $O(N^3 + N + N^2)$, which is $O(N^3)$.

* Space complexity: $O(N^2)$

    - The space complexity of a recursive function depends on the maximum number of recursive calls on the stack. 

        At any point in time, there will be at most $N$ recursive calls on the stack, as each recursive call is made from a different row. In each recursive call, we have constant space complexity independent of input size. Therefore, space complexity because of the recursive call stack will be $O(N)$.

    - We are using a hash map `memo` to cache the result of each sub-problem. There are $N^2$ such sub-problems. Therefore, space complexity because of caching will be $O(N^2)$.

    - All other variables use constant space independent of input size.
    
    Hence, the overall space complexity will be $O(N + N^2 + 1)$, which is $O(N^2)$.
        
---

### Approach 2: Bottom-Up Dynamic Programming

#### Intuition

The [top-down dynamic programming](#approach-1-top-down-dynamic-programming) approach is a recursive solution, which has overhead due to recursive calls and maintaining the call stack. We can eliminate this overhead by using an iterative approach. Thus, let's transform the recursive solution into an iterative solution.

For this let's write the mathematical recurrence for the problem. 

$\text{optimal}(row, col)$ represents the minimum sum of a falling path with non-zero shifts, starting from cell `grid[row][col]`. The equation for the recurrence (which is often called the Bellman equation) is

$$\text{optimal}(row, col) = \begin{cases} \text{grid}[row][col] & \text{if } row = n - 1 \\ \text{grid}[row][col] + \min_{\substack{0 \leq next\_row\_col < n \\ next\_row\_col \neq col}} \text{optimal}(row + 1, next\_row\_col) & \text{otherwise} \end{cases}$$

Since there are two state variables $row$ and $col$, we will use a two-dimensional array to store the result of each sub-problem. Let's call this array `memo`. 

> The size of the `memo` array will depend on the range of the state variables. 
> - `row` can take values from `0` to `n - 1`.
> - `col` can take values from `0` to `n - 1`.
>
> Hence, the size of the `memo` array will be `n x n`, the same as the size of the `grid`.

Our goal is to fill the array in a bottom-up manner. This means that we will fill the array first for base case(s), and then for subsequent recursive cases.

In this problem, the base case is when `row = n - 1`. Hence, we will fill the array in a bottom-up manner starting from the last row and moving upwards. We traverse the array row-wise from the last row to the first row, and within each row, we traverse from left to right.

The answer will be the minimum value in the first row of the `memo` array.

> It's worth noting that it is bottom-up because we are **moving from the solved base case to the unsolved sub-problems**. 
>
> The order of traversal from bottom-row to up has **nothing to do** with the term bottom-up dynamic programming. Many problems require traversal in a diagonal manner. Thus, critically analyze the Bellman Equation to conclude the order of filling the array.

Readers are encouraged to implement the solution on their own.

#### Algorithm

1. Save the size of the square `grid` in a variable `n`.

2. Declare a two-dimensional array `memo` to cache the minimum sum of a falling path with non-zero shifts, starting from a particular cell. It will have size `n x n`.

3. Fill the base case. For every cell in last row, `memo[n - 1][col]` will be `grid[n - 1][col]`.

4. Fill the recursive cases. For every row from `n - 2` to `0`, and for every column from `0` to `n - 1`, do the following

    - Initialize a variable `next_minimum` with `INT_MAX`. This variable will store the minimum sum of a falling path with non-zero shifts, starting from the next row. 

    - From this cell, we have `n - 1` possibilities of selecting an element from the next row. 

        Thus traverse linearly in the next row `row + 1` using variable `next_row_col`. If `next_row_col != col`, then we can select `memo[row + 1][next_row_col]`. 
        
        We need to select `next_row_col` for which `next_minimum` is the minimum. Thus, `next_minimum` will be `min(memo[row + 1][next_row_col])` where `0 <= next_row_col < n` and `next_row_col != col`.
    
    - Thus, from this cell, the minimum sum of a falling path with non-zero shifts is `grid[row][col] + next_minimum`. Cache this value in `memo[row][col]`.

5. Find the minimum from the first row of `memo`. Return this value.

#### Implementation

<iframe src="https://leetcode.com/playground/YrmE9La7/shared" frameBorder="0" width="100%" height="500" name="YrmE9La7"></iframe>

#### Complexity Analysis

Let $N$ be the number of rows of the square `grid`. Every row has $N$ columns.

* Time complexity: $O(N^3)$

    We are traversing in every cell of the `memo` array once.

    - For the last row, we do a constant time operation of assigning `grid[row][col]` to `memo[row][col]`. There are $N$ such cells, and each cell will take constant time. Thus, the time complexity will be $O(N)$.

    - For the remaining rows, we find a minimum from valid elements of the next row. There are $(N - 1) \cdot N$ such cells, and each cell will take linear time. Thus, the time complexity will be $O((N - 1) \cdot N \cdot N)$, which is $O(N^3)$.

    At the end, we find the minimum from the first row. It will take $O(N)$ time.

    Thus, overall time complexity will be $O(N + N^3 + N)$, which is $O(N^3)$.

* Space complexity: $O(N^2)$

    We used a two-dimensional array `memo` of size $N \times N$. Thus, space complexity will be $O(N^2)$. All other variables use constant space independent of input size. 
        
---

### Approach 3: Bottom-Up Dynamic Programming. Save Minimum and Second Minimum

#### Intuition

In [bottom-up dynamic programming](#approach-2-bottom-up-dynamic-programming), we visited every cell of the `memo` array.

However, computing `memo[row][col]` requires traversal in the `memo[row + 1]` array. The purpose of this traversal was to find the *minimum* from **valid elements** of the next row. 

Assume this *minimum* is represented by the red cell in the following figure.

![minimum](../Figures/1289/1289_slide_images_used/Slide3_2.PNG)

This red-cell *minimum* is **valid** for all green elements since it is not in the same column as the green elements. 

However, it is **invalid** for the blue element since it is in the same column as the red element. Thus, for the blue element, we need to find the *minimum* excluding the red cell, which will be the *second minimum* of the next row.

Thus, for computing any element in `memo`, what ultimately matters is the *minimum* and *second minimum* of the next row. Hence while traversing and filling `memo`, we can store the *minimum* and *second minimum* of the current row, which will help the previous row in computing `memo[row][col]`.

Here is the visualization of the algorithm for the input `[[99,1,60,4,3], [49, 1, 10, 42, 56], [87, 28, 78, 60, 5], [23, 12, 53, 69, 6], [3, 5, 15, 6, 7]]`

!?!../Documents/1289/1289_slideshow.json:960,540!?!   
<br/>

**In what condition we will be prompted to use *second minimum*?**   
When the column of *minimum* is the same as the column of the current element. Hence, instead of saving **values** of *minimum* and *second minimum*, we can save the **column** of *minimum* and *second minimum*. From **column**, we can fetch the **value**.

#### Algorithm

1. Save the size of the square `grid` in a variable `n`.

2. Declare a two-dimensional array `memo` to cache the minimum sum of a falling path with non-zero shifts, starting from a particular cell. It will have size `n x n`.

3. Declare two variables `next_min1_c` and `next_min2_c` to store the column of *minimum* and *second minimum* respectively. Initialize them with `None`.

4. Fill Base Case in `memo`, and in the same traversal, update the values of `next_min1_c` and `next_min2_c`.

    - For every cell in last row, `memo[n - 1][col]` will be `grid[n - 1][col]`.

    - If `next_min1_c` is `None` or `memo[n - 1][col]` is less than or equal to `memo[n - 1][next_min1_c]`, then
      
        - Update `next_min2_c` with `next_min1_c`
       
        - Update `next_min1_c` with `col`  

    - Otherwise, if `next_min2_c` is `None` or `memo[n - 1][col]` is less than or equal to `memo[n - 1][next_min2_c]`, then update `next_min2_c` with `col`.

    > The updates done in the above two points are the standard approach of finding the minimum and second minimum from an array. For more details, read [this editorial](https://leetcode.com/problems/buy-two-chocolates/editorial/#approach-5-one-pass)

    They are *minimum* and *second minimum* of the current row, and will act as *minimum* and *second minimum* of the next row for the previous row elements.

5. Fill the recursive cases. For every row from `n - 2` to `0`.

    - Declare two variables `min1_c` and `min2_c` to store the column of *minimum* and *second minimum*, respectively, for `memo[row]`. The `memo[row]` is not computed yet. Initialize them with `None`.

    - Traverse from column `0` to `n - 1` using variable `col`. For every column, do the following

        - If `col != next_min1_c`, then we can select minimum element from `memo[row + 1]` array. Thus, `memo[row][col]` will be `grid[row][col] + memo[row + 1][next_min1_c]`.

           Otherwise, `memo[row][col]` will be `grid[row][col] + memo[row + 1][next_min2_c]`. 

        - If `min1_c` is `None` or `memo[row][col]` is less than or equal to `memo[row][min1_c]`, then 
            - Update `min2_c` with `min1_c`
             
            - Update `min1_c` with `col`  

        - Otherwise, if `min2_c` is `None` or `memo[row][col]` is less than or equal to `memo[row][min2_c]`, then update `min2_c` with `col`.

        > The updates done in the above two points are the standard approach of finding the minimum and second minimum from an array. For more details, read [this editorial](https://leetcode.com/problems/buy-two-chocolates/editorial/#approach-5-one-pass)
    
    - Update `next_min1_c` and `next_min2_c` with `min1_c` and `min2_c` respectively. The current row is the next row for the previous row elements.

6. Return the minimum from the first row of `memo`. It will be the `memo[0][next_min1_c]`.` 

#### Implementation

<iframe src="https://leetcode.com/playground/DSRCPgfn/shared" frameBorder="0" width="100%" height="500" name="DSRCPgfn"></iframe>

#### Complexity Analysis

Let $N$ be the number of rows of the square `grid`. Every row has $N$ columns.

* Time complexity: $O(N^2)$

    We are traversing in every cell of the `memo` array once.

    For all the cells, we do two main operations
    - Computing `memo[row][col]`. In the base case, and even in recursive cases, the operation is constant time.
      
    - Ensuring loop invariant of `next_min1_c` and `next_min2_c`. 
    
    Both of these are constant time operations.

    Thus, $N^2$ cells take $O(1)$ time. Hence, the overall time complexity will be $O(N^2)$.

* Space complexity: $O(N^2)$ 

    We are using a two-dimensional array `memo` of size $N \cdot N$. Thus, space complexity will be $O(N^2)$. All other variables use constant space independent of input size.
        
---

### Approach 4: Space-Optimized Bottom-Up Dynamic Programming

#### Intuition

The rule of thumb is:

> If there are $T$ state variables, then we need an array of **at most** $T$ dimensions to store the result of each sub-problem.

The term **at most** is a good signal. We might be able to reduce the number of dimensions of the array by carefully analyzing the recurrence relation. 

$$\text{optimal}(row, col) = \begin{cases} \text{grid}[row][col] & \text{if } row = n - 1 \\ \text{grid}[row][col] + \min_{\substack{0 \leq next\_row\_col < n \\ next\_row\_col \neq col}} \text{optimal}(row + 1, next\_row\_col) & \text{otherwise} \end{cases}$$

We can observe the fact that the value of $\text{optimal}(row, \_)$ depends only on the values of $\text{optimal}(row + 1, \_)$.

In other words, instead of saving the entire `memo` array, we can save only the recently processed row of the `memo` array. This will reduce space complexity from $O(N^2)$ to $O(N)$. Readers are encouraged to implement this approach.

$\downarrow$

**However, do we even need to save one row of the `memo` array?**  
From [previous approach](#approach-3-bottom-up-dynamic-programming-save-minimum-and-second-minimum), we realize the fact that only **column** of *minimum* and *second minimum* of the next row is required.  
From these **columns**, we fetched the **values**. These columns ensured that we were not selecting the same column as the current element.

**What if we saved values as well?**   
This will help us develop an approach with no `memo` array. 

$\downarrow$

Hence, as we process the row, we will save four variables
- `next_min1_c` and `next_min2_c` to store the column of *minimum* and *second minimum*, respectively, of (non-existent) next row of the `memo` array.
- `next_min1` and `next_min2` to store the value of *minimum* and *second minimum*, respectively, of (non-existent) next row of the `memo` array.


#### Algorithm

1. Save the size of the square `grid` in a variable `n`.

2. Declare and Initialize four variables

   - `next_min1_c` to store the column of *minimum* of (non-existent) next row of the `memo` array. Initialize it with `None`. 

    - `next_min2_c` to store the column of *second minimum* of (non-existent) next row of the `memo` array. Initialize it with `None`.

    - `next_min1` to store the value of *minimum* of (non-existent) next row of the `memo` array. Initialize it with `None`.

    - `next_min2` to store the value of *second minimum* of (non-existent) next row of the `memo` array. Initialize it with `None`.

3. Traverse in the last row of `grid` using variable `col`. For every column, do the following

    - If `next_min1` is `None` or `grid[n - 1][col]` is less than or equal to `next_min1`, then

        - Update `next_min2` with `next_min1`
       
        - Update `next_min1` with `grid[n - 1][col]`  

        - Update `next_min2_c` with `next_min1_c`

        - Update `next_min1_c` with `col` 

    - Otherwise, if `next_min2` is `None` or `grid[n - 1][col]` is less than or equal to `next_min2`, then 

        - Update `next_min2` with `grid[n - 1][col]`

        - Update `next_min2_c` with `col`

    > The updates done are the standard approach of finding the minimum and second minimum from an array. For more details, read [this editorial](https://leetcode.com/problems/buy-two-chocolates/editorial/#approach-5-one-pass)
 
4. Traverse in the remaining rows of `grid` from `n - 2` to `0` using variable `row`. For every row, do the following

    - Declare and initialize four variables

        - `min1_c` to store the column of *minimum* of (non-existent) current row of the `memo` array. Initialize it with `None`.

        - `min2_c` to store the column of *second minimum* of the (non-existent) current row of the `memo` array. Initialize it with `None`.

        - `min1` to store the value of *minimum* of (non-existent) current row of the `memo` array. Initialize it with `None`.

        - `min2` to store the value of *second minimum* of the (non-existent) current row of the `memo` array. Initialize it with `None`.

    - Traverse in the current row of `grid` using variable `col`. For every column, do the following

        - If `col != next_min1_c`, then we can select the minimum element from the (non-existent) next row of the `memo` array. Thus, the optimal `value` from this cell will be `grid[row][col] + next_min1`.

           Otherwise, the optimal `value` from this cell will be `grid[row][col] + next_min2`.
        
        - If `min1` is `None` or `value` is less than or equal to `min1`, then 
            - Update `min2` with `min1`
              
            - Update `min1` with `value`  

            - Update `min2_c` with `min1_c`
             
            - Update `min1_c` with `col`

        - Otherwise, if `min2` is `None` or `value` is less than or equal to `min2`, then               
            - Update `min2` with `value`
             
            - Update `min2_c` with `col`  
    
    - Update `next_min1_c`, `next_min2_c`, `next_min1`, and `next_min2` with `min1_c`, `min2_c`, `min1`, and `min2` respectively. The current row is the next row for the previous row elements.

5. Return the minimum from the first row of the `grid`. It will be `next_min1`. 
 
#### Implementation

<iframe src="https://leetcode.com/playground/DGJcpkkz/shared" frameBorder="0" width="100%" height="500" name="DGJcpkkz"></iframe>

#### Complexity Analysis

Let $N$ be the number of rows of the square `grid`. Every row has $N$ columns.

* Time complexity: $O(N^2)$

    We are traversing in every cell of the `grid` array once.

    For all the cells, we are doing two main operations
    - Computing `value`. It will take constant time.
     
    - Ensuring loop invariant of `next_min1_c`, `next_min2_c`, `next_min1`, and `next_min2`.

    All these operations are constant time operations.

    Thus, $N^2$ cells take $O(1)$ time. Hence, the overall time complexity will be $O(N^2)$. 

* Space complexity: $O(1)$

    We are using only a handful of variables, which are independent of input size. Thus, space complexity will be $O(1)$.
        
---

**Follow-up**: What if we were asked to print the path as well? Readers are encouraged to take this as an exercise and comment with their solution below.

---