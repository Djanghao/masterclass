# Official Solution

**Link:** [https://leetcode.com/problems/n-th-tribonacci-number/solution/](https://leetcode.com/problems/n-th-tribonacci-number/solution/)

---

[TOC]

## Solution

---

### Approach 1: Dynamic Programming (Top Down)

#### Intuition   


Let `dfs(i)` be the value of the $$i^{th}$$ tribonacci number, and according to the given recurrence relation, we have:
`dfs(i) = dfs(i - 1) + dfs(i - 2) + dfs(i - 3)`. 

Note that the solution to the current problem `dfs(i)` can be built from the solutions to its subproblems (`dfs(i - 1)`, `dfs(i - 2)`, `dfs(i - 3)`). Dynamic programming is exactly based on the concept of **overlapping subproblems** and **optimal substructure**, thus it can be a powerful tool to solve this problem efficiently. 



> For example, suppose we are given `n = 5`. We have `dfs(5) = dfs(4) + dfs(3) + dfs(2)` according to the recurrsion relation. 
>
> However, we don't know the values of `dfs(4)` or `dfs(3)`, so we need to continue referring to the recursion relation, first on `dfs(4)`: `dfs(4) = dfs(3) + dfs(2) + dfs(1)`.  
>
>We don't know the value of `dfs(3)` either, continue referring to the recursion relation: `dfs(3) = dfs(2) + dfs(1) + dfs(0)`.
>
>Great, now we have some known solutions, as the values of the first three tribonacci numbers are given in the problem description: 
>
> - `dfs(0) = 0`
> - `dfs(1) = 1`
> - `dfs(2) = 1`
>
> With these base cases, we can find `dfs(3)`. Once we have `dfs(3) = 2`, this allows us to find the answer of `dfs(4)`, and then finally `dfs(5)`.


In general, we recursively break the current problem down into subproblems, until we reach the base cases: the first three tribonacci numbers. 


For these base cases, we don't need further recursion. For any other `i > 2`, we can refer to the recurrence relation above. Since the subproblem always has a smaller `i` than the current problem, we are guaranteed to eventually reach base cases.



However, we notice that the same `dfs(i)` may be calculated multiple times. To avoid the high time complexity caused by repeated calculations, we can use a hash map `dp` to save results. This is a technique called memoization.

![img](../Figures/1137/td.png)

In later calculations, if we find that `dp[i]` already exists, we know that we have already computed the value of `dfs(i)`, and we can simply return the precomputed solution `dp[i]` without further recursion. This can significantly reduce the computational time and make the algorithm more efficient.

If you're new to recursion or dyanamic programming, please check out our [recursion explore card](https://leetcode.com/explore/featured/card/recursion-i/) and [dynamic programming card](https://leetcode.com/explore/featured/card/dynamic-programming/).


<br>

#### Algorithm

1) Create a hash map `dp` to store the value of computed tribonacci numbers, initialized with the base cases `dp[0] = 0, dp[1] = 1, dp[2] = 1`.

2) Let `dfs(i)` be the value of $i^{th}$ tribonacci numbers:


    - If `i` is in `dp`, return `dp[i]`.

    - Otherwise, recursively solve `answer = dfs(i - 1) + dfs(i - 2) + dfs(i - 3)` and set `dp[i] = answer`. Then return `answer`.


4) Return `dfs(n)`.

#### Implementation

<iframe src="https://leetcode.com/playground/HydosGq3/shared" frameBorder="0" width="100%" height="446" name="HydosGq3"></iframe>


#### Complexity Analysis

* Time complexity: $$O(n)$$

    - We recursively call `dfs` on subproblems and each subproblem `dfs(i)` is computed once.
    

* Space complexity: $$O(n)$$

    - The hash map `dp` contains at most `n + 1` key-value pairs.


<br/>




---


### Approach 2: Dynamic Programming (Bottom Up)

#### Intuition   

Different from the previous recursive approach that breaks the problem into subproblems, we can also start from the subproblems and gradually build up to the larger ones until reaching the final problem `dfs(n)`. This approach is called bottom-up dynamic programming.


Suppose we let the function `f(i)` represent the value of the $i^{th}$ tribonacci number, according to the description, we have the following relation:


`f(i) = f(i - 1) + f(i - 2) + f(i - 3)`.


Each problem `f(i)` is related to three subproblems. Thus we can store tribonacci numbers in an array `dp` where `dp[i]` represents the $i^{th}$ term. Then we can then iterate through the index `i` and calculate each term using the given relation, as shown in the picture below.


`dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]`.


![img](../Figures/1137/bu.png)

<br>

One advantage of this solution is that we precompute each tribonacci number. If we have multiple requests on the value of the $i^{th}$ tribonacci number later, we can simply refer to `dp[i]` in a constant time, rather than computing `dp[i]` again. This method is called tabulation. 

![img](../Figures/1137/bu2.png)



<br>

#### Algorithm

1) Initialize an array `dp` of size `n + 1`. Set the base cases `dp[0] = 0, dp[1] = 1, dp[2] = 1`.

2) Iterate over index `i` from `3` to `n`, update `dp[i]` as `dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]`.

3) Return `dp[n]`.


#### Implementation

<iframe src="https://leetcode.com/playground/iy64Mmph/shared" frameBorder="0" width="100%" height="361" name="iy64Mmph"></iframe>


#### Complexity Analysis

* Time complexity: $$O(n)$$

    - Iterating over indices from `3` to `n` takes $$O(n)$$ time.
    

* Space complexity: $$O(n)$$

    - We build an array of size `n + 1`, which takes $$O(n)$$ space.

<br/>



---

### Approach 3: Better Dynamic Programming (Bottom Up)

#### Intuition   

The previous solution requires $$O(n)$$ space complexity since we store all visited tribonacci numbers in `dp`, let's optimize it. 

Note that the value of each tribonacci number only depends on its three previous terms, and the terms before that do not affect its value. Therefore, it's unnecessary to store all the terms. Instead, we only need to store the three most recent tribonacci numbers, let's call them `a`, `b`, and `c`. Then, the next tribonacci number is simply `a + b + c`. 


Afterward, we update `a`, `b`, and `c` as the most recent three tribonacci numbers: 
- `a = b`
- `b = c`
- `c = a + b + c`

We can continue obtaining the value of the next term using the same method of `a + b + c`. This approach only requires constant space complexity, as shown in the picture below.

![img](../Figures/1137/bbu.png)

<br>

#### Algorithm

1) If `n < 3`, return the value of the $n^{th}$ term as indicated by the problem description.

2) Initialize `a`, `b`, and `c` as the base cases. Set `a = 0, b = 1, c = 1`.

3) For the next `n - 2` steps, update `a, b, c` as `a = b, b = c, c = a + b + c`.
4) Return `c`.

#### Implementation

<iframe src="https://leetcode.com/playground/kdY5y8Yz/shared" frameBorder="0" width="100%" height="378" name="kdY5y8Yz"></iframe>


#### Complexity Analysis

* Time complexity: $$O(n)$$

    - We have to update the value of `a`, `b` and `c` by `n - 2` times, each update takes constant time. Thus it takes $$O(n)$$ time.
    

* Space complexity: $$O(1)$$

    - We only need to update several parameters `a, b, c` and `tmp`, which takes $$O(1)$$ space.

<br/>