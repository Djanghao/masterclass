# Official Solution

**Link:** [https://leetcode.com/problems/count-ways-to-build-good-strings/solution/](https://leetcode.com/problems/count-ways-to-build-good-strings/solution/)

---

[TOC]

## Solution

--- 

### Overview

As shown in the picture, where `low = 2` and `high = 3`, all the 5 good strings are colored in green. Besides, three of the invalid strings are colored in red: 
- `1` is invalid as its length is smaller than `low`.
- `111` is invalid as it can't be made by multiple of `11`.
- `0011` is invalid as its length is larger than `high`.

![img](../Figures/2466/1.png)



Here our task is to find the number of good strings, given `low`, `high`, `zero` and `one`. 

---

### Approach 1: Dynamic Programming (Iterative).

#### Intuition   

We can build an array `dp` to record the number of good strings with each length. Let `dp[i]` be the number of good strings with length `i`. Set `dp[0] = 1` before filling the rest of `dp` as the empty string is the only good string with length `0`.

![img](../Figures/2466/2.png)

Then we try to find the relation between each problem `dp[i]` with smaller subproblems. For example, how do we get the number of good strings of length `5`?

![img](../Figures/2466/3.png)

Note that every good string either ends with `zero` of `0`s or `one` of `1`s, which in our case is `0` or `11`. 

![img](../Figures/2466/4.png)

If a good string of length `5` ends with `0`, it means that every good string of length `4` can be turned into a good string of length `5` by appending `0`. Thus we increment `dp[5]` by `dp[4]`, which in the general case is `dp[end] += dp[end - zero]`.

Note that it is suggested to check if `end >= zero` before we increment `dp[end]`, and only apply the increase if `end >= zero`.  

![img](../Figures/2466/5.png)

Similarly, if the string ends with `11`, it means that every good string of length `3` can be turned into a good string of length `5` by appending `11`. Thus we increment `dp[5]` by `dp[3]`. 

![img](../Figures/2466/6.png)

Now we have found both the base case `dp[0] = 1` and the recurrence relations, it's time to fill the array and find the number of good strings of each length in the range `[low ~ high]`. Here we provide an iterative method.


<br>

#### Algorithm

1) Create an array `dp` of size `1 + high`. Initialize `dp[0] = 1`.

2) Iterate over each length `end`:
    - If `end >= zero`, increment `dp[end]` by `dp[end - zero]`.
    - If `end >= one`, increment `dp[end]` by `dp[end - one]`.

3) Once the iteration ends, add up the numbers in `dp[low ~ high]`.

#### Implementation

<iframe src="https://leetcode.com/playground/dBaRMY6M/shared" frameBorder="0" width="100%" height="500" name="dBaRMY6M"></iframe>


#### Complexity Analysis


* Time complexity: $$O(\text{high})$$

    - We filled the array `dp` iteratively, each step includes at most two summation steps which takes constant time.


* Space complexity: $$O(\text{high})$$

    - We build an array `dp` of length `high + 1`.

<br/>



---

### Approach 2: Dynamic Programming (Recursive)

#### Intuition   

We will implement the same algorithm in approach 1 using a recursive method. Let `dfs(end)` be the number of good strings of length `end`.

The trick is as described before, each time a recursive function calls itself, it reduces the given problem `dfs(end)` into subproblems `dfs(end - zero)` and `dfs(end - one)`. The recursion call continues until it reaches a point where the subproblem can be solved without further recursion, that is `dfs(0) = 1`.

Similarly, we will also build an auxiliary array `dp` to avoid repeated computation. Initially, we set every value `dp[i]` (except `dp[0]`) as `-1`, which also implies that `dp[i]` is not visited. During the recursion, if `dp[end] != -1`, it means we have already calculated `dfs(end)` previously, so just return `dp[end]`. 

![img](../Figures/2466/7.png)

<br>

#### Algorithm

1) Create an array `dp` of size `1 + high`. Initialize `dp[0] = 1` and the value of all the rest cells as `-1`.

2) Define a recursive function `dfs(end)`, if `dp[end] != -1`, return `dp[end]`, otherwise:
    - Set `answer = 0`.
    - If `end >= zero`, increment `answer` by `dfs(end - zero)`.
    - If `end >= one`, increment `answer` by `dfs(end - one)`.
    - Update `dp[end]` as `answer`.  

3) Once the iteration ends, add up the numbers in `dp[low ~ high]`.

#### Implementation

<iframe src="https://leetcode.com/playground/GxUbQ3C3/shared" frameBorder="0" width="100%" height="500" name="GxUbQ3C3"></iframe>


#### Complexity Analysis


* Time complexity: $$O(\text{high})$$

    - Similarly, it takes $$O(\text{high})$$ time to fill `dp` recursively.

    

* Space complexity: $$O(\text{high})$$

    - We build an array `dp` of length `high + 1` which takes $$O(\text{high})$$ space.
    - During the recursion steps, there are at most $$\text{high}$$ self calls in the stack, this also takes $$O(\text{high})$$ space.

<br/>