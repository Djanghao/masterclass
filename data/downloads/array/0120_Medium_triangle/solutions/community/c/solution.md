# ✅ [C++/ Python] Simple Solution w/ Explanation | Recursion -> DP

**Author:** r0gue_shinobi
**Votes:** 301
**Link:** [https://leetcode.com/problems/triangle/solutions/2146264/](https://leetcode.com/problems/triangle/solutions/2146264/)

---

Given a triangle array, we need to return the path whose sum from top to bottom is minimum.
There is one constraint: we can only move to lower-left or lower-right elements.
For example, in the triangle depicted below, the only valid path from `5` are `5 -> 1` and `5 -> 8`. The paths `5 -> 4` or `5 -> 3` are invalid.

```text
   2
  3 4
 6 5 7
4 1 8 3
```

Now the question is, can we solve it greedily, i.e., simply check the immediate step and choose the smaller element?
The answer is no. Because the current choice will affect the later decisions. This is illustrated in the following example:

```text
   2
  4 5
 6 5 1
4 1 8 2
```

The greedy strategy will use the path `2 -> 4 -> 5 -> 1`. But, the optimal path is `2 -> 5 -> 1 -> 2`.
We need to use `Dynamic Programming` to solve this problem. Solving a problem using DP is generally tricky. This post will help you understand how to develop a DP approach. So, I highly recommend reading all three methods.

___
___
\u274C **Solution I: Recursion [TLE]**

We can try all valid paths and calculate the sum. Out of all those, return the minimum sum. At each step, we have two choices:

1. Move to lower-left element (`i + 1` and `j`)
2. Move to lower-right element (`i + 1` and `j + 1`)

<iframe src="https://leetcode.com/playground/7GJqkRP3/shared" frameBorder="0" width="1080" height="280"></iframe>

Why have I named the inside function as `dfs`? Because if we trace our actions, we can observe that it forms a binary tree. **Don't worry** if you are not familiar with this term. The following visualization will help you to understand what I mean.

```text
                                                  \u250F\u2501\u2501\u2501\u2513
                            \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2528 2 \u2520\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
                            \u2502                     \u2517\u2501\u2501\u2501\u251B                     \u2502
                          \u250F\u2501\u2537\u2501\u2513                                           \u250F\u2501\u2537\u2501\u2513     
                \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2528 3 \u2520\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E                       \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2528 4 \u2520\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E                 
                \u2502         \u2517\u2501\u2501\u2501\u251B         \u2502                       \u2502         \u2517\u2501\u2501\u2501\u251B         \u2502 
              \u250F\u2501\u2537\u2501\u2513                   \u250F\u2501\u2537\u2501\u2513                   \u250F\u2501\u2537\u2501\u2513                   \u250F\u2501\u2537\u2501\u2513  
        \u256D\u2500\u2500\u2500\u2500\u2500\u2528 6 \u2520\u2500\u2500\u2500\u2500\u2500\u256E       \u256D\u2500\u2500\u2500\u2500\u2500\u2528 5 \u2520\u2500\u2500\u2500\u2500\u2500\u256E       \u256D\u2500\u2500\u2500\u2500\u2500\u2528 5 \u2520\u2500\u2500\u2500\u2500\u2500\u256E       \u256D\u2500\u2500\u2500\u2500\u2500\u2528 7 \u2520\u2500\u2500\u2500\u2500\u2500\u256E 
        \u2502     \u2517\u2501\u2501\u2501\u251B     \u2502       \u2502     \u2517\u2501\u2501\u2501\u251B     \u2502       \u2502     \u2517\u2501\u2501\u2501\u251B     \u2502       \u2502     \u2517\u2501\u2501\u2501\u251B     \u2502 
      \u250F\u2501\u2537\u2501\u2513           \u250F\u2501\u2537\u2501\u2513   \u250F\u2501\u2537\u2501\u2513           \u250F\u2501\u2537\u2501\u2513   \u250F\u2501\u2537\u2501\u2513           \u250F\u2501\u2537\u2501\u2513   \u250F\u2501\u2537\u2501\u2513           \u250F\u2501\u2537\u2501\u2513 
      \u2503 4 \u2503           \u2503 1 \u2503   \u2503 1 \u2503           \u2503 8 \u2503   \u2503 1 \u2503           \u2503 8 \u2503   \u2503 8 \u2503           \u2503 3 \u2503
      \u2517\u2501\u2501\u2501\u251B           \u2517\u2501\u2501\u2501\u251B   \u2517\u2501\u2501\u2501\u251B           \u2517\u2501\u2501\u2501\u251B   \u2517\u2501\u2501\u2501\u251B           \u2517\u2501\u2501\u2501\u251B   \u2517\u2501\u2501\u2501\u251B           \u2517\u2501\u2501\u2501\u251B
```

In dfs, we traverse all the paths one by one. So, here our paths will be:

1. 2 -> 3 -> 6 -> 4
2. 2 -> 3 -> 6 -> 1
3. 2 -> 3 -> 5 -> 1
.
.
.

- **Time Complexity:** `O(2\u207F)`
- **Space Complexity:** `O(n)`

___
\u2705 **Solution II: Top-Down DP or Memoization [Accepted]**

We are doing a lot of repetitive work in the above recursive solution. How?
Have a look at the above example. The subtree with head 5 is repeated twice. We need to compute the minimum sum path during the first time `(2 -> 3 -> 5 -> ...)`. During the second time from `2 -> 4 -> 5`, we can simply use the result from the first time instead of traversing again. This is the essence of memoization.

```text
                                                  \u250F\u2501\u2501\u2501\u2513
                            \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2528 2 \u2520\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
                            \u2502                     \u2517\u2501\u2501\u2501\u251B                     \u2502
                          \u250F\u2501\u2537\u2501\u2513                                           \u250F\u2501\u2537\u2501\u2513     
                \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2528 3 \u2520\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E                       \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2528 4 \u2520\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E                 
                \u2502         \u2517\u2501\u2501\u2501\u251B         \u2502                       \u2502         \u2517\u2501\u2501\u2501\u251B         \u2502 
              \u250F\u2501\u2537\u2501\u2513          .........\u250F\u2501\u2537\u2501\u2513......... .........\u250F\u2501\u2537\u2501\u2513 ........          \u250F\u2501\u2537\u2501\u2513  
        \u256D\u2500\u2500\u2500\u2500\u2500\u2528 6 \u2520\u2500\u2500\u2500\u2500\u2500\u256E    .  \u256D\u2500\u2500\u2500\u2500\u2500\u2528 5 \u2520\u2500\u2500\u2500\u2500\u2500\u256E  . .  \u256D\u2500\u2500\u2500\u2500\u2500\u2528 5 \u2520\u2500\u2500\u2500\u2500\u2500\u256E  .    \u256D\u2500\u2500\u2500\u2500\u2500\u2528 7 \u2520\u2500\u2500\u2500\u2500\u2500\u256E 
        \u2502     \u2517\u2501\u2501\u2501\u251B     \u2502    .  \u2502     \u2517\u2501\u2501\u2501\u251B     \u2502  . .  \u2502     \u2517\u2501\u2501\u2501\u251B     \u2502  .    \u2502     \u2517\u2501\u2501\u2501\u251B     \u2502 
      \u250F\u2501\u2537\u2501\u2513           \u250F\u2501\u2537\u2501\u2513  .\u250F\u2501\u2537\u2501\u2513           \u250F\u2501\u2537\u2501\u2513. .\u250F\u2501\u2537\u2501\u2513           \u250F\u2501\u2537\u2501\u2513.  \u250F\u2501\u2537\u2501\u2513           \u250F\u2501\u2537\u2501\u2513 
      \u2503 4 \u2503           \u2503 1 \u2503  .\u2503 1 \u2503           \u2503 8 \u2503. .\u2503 1 \u2503           \u2503 8 \u2503.  \u2503 8 \u2503           \u2503 3 \u2503
      \u2517\u2501\u2501\u2501\u251B           \u2517\u2501\u2501\u2501\u251B  .\u2517\u2501\u2501\u2501\u251B           \u2517\u2501\u2501\u2501\u251B. .\u2517\u2501\u2501\u2501\u251B           \u2517\u2501\u2501\u2501\u251B.  \u2517\u2501\u2501\u2501\u251B           \u2517\u2501\u2501\u2501\u251B
                             ....................... ....................... 
```

In Python, it is as simple as adding the `@cache` decorator. But, this won't be accepted in the interviews and have many limitations.

```python
class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        @cache
        def dfs(i, j):
            if i == len(triangle):
                return 0

            lower_left = triangle[i][j] + dfs(i + 1, j)
            lower_right = triangle[i][j] + dfs(i + 1, j + 1)

            return min(lower_left, lower_right)

        return dfs(0, 0)
```

We can manually use a way to store the information and use it later. Here, two variables (`i` and `j`) are changing and can be used to store a state. So, we can use a matrix. The following code will make it clear.

<iframe src="https://leetcode.com/playground/mbJEU5da/shared" frameBorder="0" width="1080" height="360"></iframe>

- **Time Complexity:** `O(n\xB2)`
- **Space Complexity:** `O(n\xB2)`

___
\u2705 **Solution III (a): Bottom Up DP or Tabulation [Accepted]**

Recursion is slower than the iterative approach. So, we can further optimize the above solution by using bottom-up DP.
We can do a bottom-up traversal instead of traversing from top to bottom. Coming up with a bottom-up DP is challenging at first and requires practice. Instead of looking at the bigger problem, we look at smaller sub-problems and try to build up the solution. The following example will help you to understand:

```text
1. Suppose that only the last level is given. 

4 1 8 3

Then what should be your answer?

If you thought 1, then congratulations \uD83C\uDF89 you are correct. This is our first subproblem. 

2. Now, the last two levels are given.

 6 5 7
4 1 8 3

Here, what should be the answer and what information do you need to store?

Clearly, the answer is 6 (5 -> 1). But, this may not be the optimal path. So, we need to store all the optimal paths, i.e.,
[(6 -> 1), (5 -> 1), 7 -> 3)] or [7, 6, 10]. This is our second subproblem.

3. Last 3 levels are given.

  3 4
 6 5 7
4 1 8 3

Again, what should be the answer and what information do you need to store (or use)?

Answer is 9 (3 -> 5 -> 1). Do we need to look again at all the paths? Can we use the information that we previously stored?
No and Yes.
If we replace the triangle as
  3 4
 7 6 10
then also, we'll get the same answer. And we can store this information as [(3 -> 6), (4 -> 6)] or [9, 10].

4. All levels are given

   2
  3 4
 6 5 7
4 1 8 3

Which can be replaced as:
   2
  9 10

And hence, our answer is 11 (2 -> 9)

```

<iframe src="https://leetcode.com/playground/deK2NY3Q/shared" frameBorder="0" width="1080" height="330"></iframe>

- **Time Complexity:** `O(n\xB2)`
- **Space Complexity:** `O(n\xB2)`

___
\u2705 **Solution III (b): Bottom Up DP or Tabulation (Space Optimized) [Accepted]**

Notice that we only require the information about the next row. So, instead of creating a `2D` matrix, a `1D` array is sufficient.

<iframe src="https://leetcode.com/playground/FJAZiaam/shared" frameBorder="0" width="1080" height="350"></iframe>

- **Time Complexity:** `O(n\xB2)`
- **Space Complexity:** `O(n)`

___
___
If you like the solution, please **upvote**! \uD83D\uDD3C
For any questions, or discussions, comment below. \uD83D\uDC47\uFE0F
