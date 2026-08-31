# Official Solution

**Link:** [https://leetcode.com/problems/make-array-strictly-increasing/solution/](https://leetcode.com/problems/make-array-strictly-increasing/solution/)

---

[TOC]

## Solution

--- 

### Overview

We will iterate over `arr1` and at each index `i`, we aim to make the prefix `arr1[0 ~ i]` sorted. In case `arr1[i]` requires replacement with a value from `arr2`, the smallest element in `arr2` that will maintain increasing order is always preferred. Hence, by sorting `arr2`, we can efficiently identify the smallest element that meets this criterion using binary search, which takes logarithmic time. If `arr2` is not sorted, we would have to search the entire array to find the smallest element that meets this requirement, leading to a linear time complexity for each operation.


![img](../Figures/1187/1.png)

Therefore, all subsequent solutions are based on the sorted `arr2`.

---

### Approach 1: Top-down Dynamic Programming

#### Intuition   

> If you are not familiar with dynamic programming, please refer to our explore cards [Dynamic Programming Explore Card](https://leetcode.com/explore/featured/card/dynamic-programming/). We will focus on the usage in this article and not the underlying principles or implementation details.


As we update `arr1` from left to right, each element `arr1[i]` can be subjected to several potential operations:

- If `arr1[i]` is less than or equal to `arr1[i - 1]`, we **must** replace `arr1[i]` with the smallest value in `arr2`that is greater than `arr1[i - 1]`,  which we can identify using binary search. Otherwise, we can't make `arr1` sorted.


![img](../Figures/1187/2.png)

- If `arr1[i]` is greater than `arr1[i - 1]`, we have two possible options:

    - Leave it unchanged and continue with the next index. No changes need to be made as `arr1[i]` is already greater than `arr1[i - 1]`.
    - Replace it with a smaller value (as doing so may make it easier to ensure that subsequent numbers are greater than `arr1[i]`). We will use binary search to locate the smallest value greater than `arr1[i - 1]` in `arr2`.

![img](../Figures/1187/3.png)

In summary:

![img](../Figures/1187/4.png)

<br>

We utilize a recursive approach named `dfs(i)` to determine the minimum number of operations needed to make the subarray `arr1[i:]` sorted. Given that we modify `arr1[i]` based on the value of `arr[i - 1]`, `dfs` requires an additional parameter called `prev`, which represents the value of `arr1[i - 1]`. Hence, the complete function is defined as `dfs(i, prev)`.

Since there is no preceding element for the first element of `arr1`, we can assign an imaginary value of `-1` before `arr1[0]`. This allows `dfs` to operate on the first element with `prev = -1`.

Consider the following figure, which illustrates the recursive steps of `dfs(i = 0, prev = -1)`:

![img](../Figures/1187/5.png)

Starting from the first element of `arr1`, we compare `arr1[0]` to `prev = -1`. Since `arr1[0]` is greater than `prev`, we do not need to make any changes and call `dfs` recursively on the next index by passing the current value `1` as `prev`, which is `dfs(0, -1)` = `dfs(1, 1)`.

![img](../Figures/1187/6.png)

Moving on to the next element `arr1[1]`, we compare it to `prev = 1` (which is the value of the previous element `arr1[0]`).

![img](../Figures/1187/7.png)


As `arr1[1] = 5` is larger than `prev = 1`, there are two options in `dfs(1, 1)`:
- Leave `arr1[1]` unchanged and continue with the next index, requiring no operation: `dfs(1, 1) = dfs(2, 5)`.
- Find the smallest value in `arr2` that is greater than `prev` by binary search (which is `2`), since `2` is smaller than `arr[1]`, we can replace `arr1[1]` with `2`, and recursively call `dfs` on the next index, which is `dfs(1, 1) = 1 + dfs(2, 2)`.

![img](../Figures/1187/8.png)

Therefore, `dfs(1, 1)` can be obtained by taking the minimum value between `dfs(1, 1) = min(dfs(2, 5), 1 + dfs(2, 2))`.

<br>

If `arr1[i]` cannot be replaced with any valid value in `arr2` when it needs to be changed, `dfs` returns a large number such as `inf` to indicate that it is impossible to make `arr1` sorted.

We use memoization to store the minimum number of operations to reach each state `(i, prev)`, which improves the efficiency of the algorithm. This helps us avoid re-solving the same subproblems multiple times and significantly reduces the time complexity.

Finally, we call `dfs(0, -1)` and examine the value it returns. If the value is reasonable and smaller than the large one we assigned to impossible moves, we return the result of `dfs(0, -1)`. Otherwise, we return `-1`.

<br>

#### Algorithm

1) Sort `arr2`.

2) Initialize a hash map `dp` as memory.

3) Define a function `dfs(i, prev)` as the minimum number of operations to make `arr[i:]` sorted when `arr[i - 1] = prev`.

    - Check if `(i, prev)` exists in `dp`, and if so, return `dp[(i, prev)]`
    - Initialize `cost` to `float('inf')`
    - If `arr1[i] > prev`, set `cost` to `dfs(i+1, arr1[i])`
    - Find the index `idx` of the smallest value in `arr2` that is greater than `prev` using binary search. If `idx < len(arr2)`, set `cost` to `min(cost, 1 + dfs(i+1, arr2[idx]))`

    - Update `dp[(i, prev)]` as `cost`
    - Return `cost`

4) Return the value of `dfs(0, -1)` if it is not equal to `float('inf')`, otherwise, return `-1`.

#### Implementation

<iframe src="https://leetcode.com/playground/6LSQDWuq/shared" frameBorder="0" width="100%" height="500" name="6LSQDWuq"></iframe>


#### Complexity Analysis

Let $$m, n$$ be the length of `arr1` and `arr2`.

* Time complexity: $$O(m \cdot n \cdot\log n)$$

    - Sorting `arr2` takes $$O(n \log n)$$ time.
    - To improve the efficiency of the algorithm, we use memoization and store the minimum number of operations to reach each state `(i, prev)` in a hash map `dp`. There are $$m$$ indices and at most $$n + 1$$ possible `prev` as we might replace `arr[i]` with any value in `arr2`. Each state is computed with a binary search over `arr2`, which takes $$O(\log n)$$. 
    

* Space complexity: $$O(m \cdot n)$$

    - The maximum number of distinct states in `dp` is $$m \cdot n$$.

<br/>



---

### Approach 2: Bottom-up Dynamic Programming

#### Intuition   

Instead of using recursion, we can also solve this problem iteratively. We start by initializing a hash map `dp` that stores each state we can reach for index `i`. Each state is represented as `{prev: count}`, where `prev` is the previous value and `count` is the minimum number of operations needed to reach this state.

Similar to the recursive solution, we set an imaginary value `-1` before `arr1[0]` and add an initial key-value pair of `{-1: 0}` to `dp`, indicating that reaching `prev = -1` takes no operations. 

![img](../Figures/1187/9.png)

We then iterate over `arr1` and for each index `i`, we initialize an empty dictionary `new_dp` to store the states we can reach for index `i`.

Loop through all the states in `dp` and for each state `{prev: count}`: 

- If `arr1[i]` is less than or equal to `prev`, we **must** replace `arr1[i]` with the smallest value `arr2[index]` in `arr2` that is greater than `prev`, which we can identify using binary search. 

    - Create a new state `{arr2[index]: count + 1}`.
    - Otherwise, we can't update this state at `i`.


- If `arr1[i]` is greater than `prev`, there are two possible options:
    - Leave it unchanged by creating state `{arr1[i]: count}` in `new_dp`.
    - Replace `arr[i]` with a smaller value in `arr2` that is larger than `prev`. Once again, we will use binary search to locate the smallest value `arr2[index]` that is greater than `arr1[i - 1]` in `arr2`, create a state `{arr2[index]: count + 1}`.

![img](../Figures/1187/13.png)

After looping through all the keys in `dp`, we set `dp` to `new_dp` so it represents all reachable states at index `i`.

<br>

Please refer to the following example:

For `i = 0`, `dp` has one state: `{-1: 0}`, since `arr[0] > prev`, we can leave `arr[0]` unchanged, thus we can reach a new state of `{1: 0}`, store it in `new_dp`.

![img](../Figures/1187/10.png)

Continue with `i = 1` by setting `dp` as `new_dp` and resetting `new_dp`. `dp` has one state `{1: 0}`, since `arr[1] > prev`, we can either:

- Leave `arr[1]` unchanged and reach a new state `{5: 0}`.
- Replace it with `arr2[1] = 2` with 1 operation, and reach another new state `{2: 1}`.

Therefore, we have created two states `new_dp = {2: 1, 5: 0}` for index `1`. 

![img](../Figures/1187/11.png)

During each iteration, `new_dp` stores the **minimum** number of operations needed to reach each state from the previous index. We can achieve this by initializing the value of each key in `new_dp` to a large number like `inf` and updating it as the minimum value we encounter.

After iterating over `arr1`, we return the smallest value in `dp` as the minimum number of operations required to reach the last index and make the entire `arr1` sorted. If the value is `inf`, it indicates that there is no way to reach any states at the last index, and we return `-1`.

<br>

#### Algorithm

1) Sort `arr2`.

2) Create a hash map `dp` with an initial key-value pair of `{-1: 0}`.

3) Iterate over `arr1`, for each index `i`, create a new hash map `new_dp` with default value of `float('inf')` and do the following:

4) Iterate over each key `prev` in `dp`:
    - If `arr1[i]` is greater than `prev`, update `new_dp[arr1[i]]` as `min(new_dp[arr1[i]], dp[prev])`. 
    - Otherwise, find the index `idx` of the smallest value in `arr2` that is greater than `prev`. If such a value exists, update `new_dp[arr2[idx]]` as `min(new_dp[arr2[idx]], 1 + dp[prev])`.

Let `dp = new_dp`, and repeat from step 3.

5) When the iteration is complete, return the minimum value in `dp` if it is less than `float('inf')`, otherwise return `-1`.


#### Implementation

<iframe src="https://leetcode.com/playground/2FUmTJ4p/shared" frameBorder="0" width="100%" height="500" name="2FUmTJ4p"></iframe>


#### Complexity Analysis

Let $$m, n$$ be the length of `arr1` and `arr2`.

* Time complexity: $$O(m \cdot n \cdot\log n)$$

    - Sorting `arr2` takes $$O(n \log n)$$ time.
    - We update `dp` by $$m$$ rounds. In each round at index `i`, there are at most $$n + 1$$ possible `prev` as we might replace `arr[i]` with any of the $$n$$ values in `arr2` or leave it unchanged. Each state is computed with a binary search over all start times, which takes $$O(\log n)$$. 
    

* Space complexity: $$O(n)$$

    - We keep track of all states `(i, prev)` of two latest indices in `dp` and `new_dp`, respectively. At each index, the number of possible distinct states is at most $$n + 1$$.

<br/>