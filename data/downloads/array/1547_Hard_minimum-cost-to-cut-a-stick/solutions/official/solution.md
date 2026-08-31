# Official Solution

**Link:** [https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solution/](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solution/)

---

[TOC]

## Solution

--- 

### Overview


> > If you are not familiar with Dynamic Programming (DP), you can refer to our [Dynamic Programming Explore Card](https://leetcode.com/explore/featured/card/dynamic-programming/)


Based on observations, we can conclude that this problem exhibits optimal substructure and overlapping subproblems, which makes it an ideal candidate for dynamic programming. Every time we perform a cut, we get two new sticks. We can use dynamic programming to solve these smaller fragments optimally, then combine their costs to find the answer to the original problem.

---

### Approach 1: Top-down Dynamic Programming 

#### Intuition   

We can consider various plans for cutting the stick into pieces, but let us begin by examining the costs and outcomes of some potential **first cuts**.

If we select `cuts[p1]` as the first cutting position, it would result in a cost of `n` and split the stick into two pieces of length `cuts[p1]` and `n - cuts[p1]`, respectively.

![img](../Figures/1547/1.png)

Choosing another first cutting position, say `cuts[p2]` would also bring a cost of `n` and split the stick into two pieces of length `cuts[p2]` and `n - cuts[p2]`.

![img](../Figures/1547/2.png)


<br>

We define a function `cost(left, right)` that returns the minimum cost of all the cuts on the stick fragment with both ends at `cuts[left]` and `cuts[right]`. Since the two ends of the original stick `0` and `n` are not included in `cuts`, we create a new array `new_cuts` that includes these two ends and all `m` cutting positions in `cuts`. This allows us to represent every stick fragment using two indices from `new_cuts`.

> The `new_cuts` array is defined as `new_cuts = [0, cuts[0], cuts[1], ..., cuts[m - 1], n]` (Suppose the length of `cuts` is `m`)
> where `new_cuts[0] = 0` and `new_cuts[m + 1] = n`
> Finally, we should sort `new_cuts` so that all the cutting positions are ordered.


Hence, the minimum cost of all the cuts required on the original stick can be denoted as `cost(0, m + 1)`. 

![img](../Figures/1547/3.png)

As a base case, we know `cost(left, left + 1) = 0, (left < m + 1)`, because we do not need to continue cutting fragments that contain no cutting positions (For example, `[new_cuts[0], new_cuts[1]]`).


<br>

Now let's move on to find `cost(0, m + 1)`. No matter where we cut, we will incur a cost equal to the length, which is `new_cuts[m + 1] - new_cuts[0]`. Let's see what happens when we choose cutting positions:

- If we choose `new_cuts[1]` as the first cutting position, we end up with two stick fragments `[new_cuts[0], new_cuts[1]]` and `[new_cuts[1], new_cuts[m + 1]]`. This means our overall cost will be `cost(0, 1) + cost(1, m + 1) + new_cuts[m + 1] - new_cuts[0]` (the cost of cutting the two new sticks plus the cost of cutting the current stick as already established)


- If we choose `new_cuts[2]` as the first cutting position, we end up with two stick fragments `[new_cuts[0], new_cuts[1]]` and `[new_cuts[1], new_cuts[m + 1]]`. This means our overall cost will be `cost(0, 2) + cost(2, m + 1) + new_cuts[m + 1] - new_cuts[0]` 

- ...

![img](../Figures/1547/4.png)

<br>

There is still more work to be done: take the first scenario above, we need to compute `cost(0, 1)` and `cost(1, m + 1)` as part of the dynamic programming process. Even though we know that `cost(0, 1) = 0`, we still need to determine the value of `cost(1, m + 1)`. To do this, we will once again try the first cut on each cutting position on the fragment `[new_cuts[1], new_cuts[m + 1]]`:


![img](../Figures/1547/5.png)

- If we choose `new_cuts[2]` as the first cutting position, we end up with a cost of `new_cuts[m + 1] - new_cuts[1]` and two stick fragments `[new_cuts[1], new_cuts[2]]` and `[new_cuts[2], new_cuts[m + 1]]`, thus the overall cost would be `cost(1, 2) + cost(2, m + 1) + new_cuts[m + 1] - new_cuts[1]`  


- If we choose `new_cuts[3]` as the first cutting position, we end up with a cost of `new_cuts[m + 1] - new_cuts[1]` and two stick fragments `[new_cuts[1], new_cuts[3]]` and `[new_cuts[3], new_cuts[m + 1]]`, thus the overall cost would be `cost(1, 3) + cost(3, m + 1) + new_cuts[m + 1] - new_cuts[1]` 

- ...


![img](../Figures/1547/6.png)


At every state of `cost`, we need to try all possible cuts and take the one with the lowest cost.


Once the cost function `cost` and memoization table `dp` are defined, the problem can be solved by invoking the cost function with the initial subproblem of cutting the stick. The cost function will recursively compute the minimum cost of cutting the stick between any two adjacent points in the cuts list.

To prevent repetitive computation and improve performance, we can create a dictionary or a 2D array `dp` and store the solution of each solved subproblem `cost(left, right)` in the memoization table. 





#### Algorithm

1) Build an array `new_cuts` that contains the ends of the stick and all cutting positions sorted: `new_cuts = [0, cuts[0], cuts[1], ..., cuts[m - 1], n]`.


2) Initialize a hash map or 2D array `dp` as memory.
3) Define `cost(left, right)` as minimum cost of all the cuts on the stick fragment with both ends at `new_cuts[left]` and `new_cuts[right]`:
    - If `right - left = 1`, return `0`.
    - If we have computed the cost of `cost(left, right)` before, return the saved answer.
    - Otherwise, set the default answer as `answer = infinity`.
    - For each cutting position between `new_cuts[left]` and `new_cuts[right]`, update answer as `answer = min(answer, cost(left, mid) + cost(mid, right) + new_cuts[right] - new_cuts[left])`.
    - Save `answer` in `dp` and return `answer`.

4) Return `cost(0, new_cuts.length - 1)`.


#### Implementation

<iframe src="https://leetcode.com/playground/mKs249SF/shared" frameBorder="0" width="100%" height="500" name="mKs249SF"></iframe>


#### Complexity Analysis

Let $$m$$ be the length of the input array `cuts`.

* Time complexity: $$O(m^3)$$

The number of states in our DP is the number of possible combinations of `(left, right)`, which is $$O(m^2)$$ subproblems. For each subproblem `cost(left, right)`, we need to try all possible cutting positions between `new_cuts[left]` and `new_cuts[right]`, resulting in an additional factor of $$m$$. Therefore, the overall time complexity is $$O(m^3)$$.

    

* Space complexity: $$O(m^2)$$

    - We need to store the solutions for all $$(m^2)$$ subproblems in memory.


<br/>



---

### Approach 2: Bottom-up Dynamic Programming 

#### Intuition   

The problem can also be solved iteratively, starting from the minimum cost of cutting stick fragments that do not contain any cutting positions, then moving on to fragments with one cutting position, and finally obtaining the optimal cost of cutting the entire stick.

To accomplish this, we can use a two-dimensional array `dp` to store the minimum cost of cutting each stick fragment, where `dp[left][right]` represents the minimum cost of cutting the stick fragment `[new_cuts[left], new_cuts[right]]`. This is equivalent to what the call `cost(left, right)` returned in the previous approach.



To build up the table, we start with stick fragments that contain no cutting position, and gradually increasing the number of cutting positions. For each subproblem on the stick fragment `[new_cuts[left], new_cuts[right]]`, we try all possible cutting positions `mid` between the exclusive range of `(left, right)` and store the minimum cost in `dp[left][right]`.


Starting with fragments that contains no cutting positions, the cost of cutting these fragments is 0 since there is no need to cut them anymore.

![img](../Figures/1547/bu.png)


Next, we move on to stick fragments that contain only one cutting position. For example, the two fragments colored in red and blue in the picture below. Since each of them only contains one cutting position, there is only one possible minimum cost for each:

- `dp[0][2] = dp[0][1] + dp[1][2] + new_cuts[2] - new_cuts[0]`.

- `dp[4][6] = dp[4][5] + dp[5][6] + new_cuts[6] - new_cuts[4]`.

![img](../Figures/1547/bu1.png)

We move on to stick fragments that contain `2` cutting positions, for example, the fragment `[new_cuts[0], new_cuts[3]]`. Since this fragment contains two cutting positions `new_cuts[1]` and `new_cuts[2]`, the optimal cost `dp[0][3]` can be computed as the minimum cost among the following two possibilities:
- `dp[0][3] = dp[0][1] + dp[1][3] + new_cuts[3] - new_cuts[0]`
or
- `dp[0][3] = dp[0][2] + dp[2][3] + new_cuts[3] - new_cuts[0]`

![img](../Figures/1547/bu2.png)

After computing the minimum cost for every subproblem, we can finally obtain the minimum cost of cutting the entire stick by returning the value stored in `dp[0][m + 1]`.

<br>

#### Algorithm

1) Build a sorted array `new_cuts` that contains the two ends of the original stick and `m` cutting positions: `new_cuts = [0, cuts[0], cuts[1], ..., cuts[m - 1], n]`.
2) Initialize an all-zeros 2D array of size `(m + 1) * (m + 1)`.

3) Iterate over the number of cutting positions `diff` of stick fragments from `2` to `m + 1`. 

4) For each `diff`, we iterate over each stick with the left end's position as `new_cuts[left]`. The right ends' position of the stick is `new_cuts[right] = new_cuts[left + diff]`.

5) Set the minimum cost `dp[left][right] = infinity`. We iterate over every cutting position in `(left, right)`. For each cutting position `mid`, we update `dp[left][right]` as `min(dp[left][right], dp[left][mid] + dp[mid][right] + new_cuts[right] - new_cuts[left])`.


6) Return `dp[0][m + 1]` when the nested iteration is complete.



#### Implementation

<iframe src="https://leetcode.com/playground/EmEbQrby/shared" frameBorder="0" width="100%" height="463" name="EmEbQrby"></iframe>


#### Complexity Analysis

* Time complexity: $$O(m^3)$$

    - The number of states in our DP is the number of possible combinations of `(left, right)`, which is $$O(m^2)$$. For each subproblem `dp[left][right]`, we need to try all possible cutting positions between `new_cuts[left]` and `new_cuts[right]`, which is `right - left - 1`, resulting in an additional factor of $$m$$. Therefore, the overall time complexity is $$O(m^3)$$.

    

* Space complexity: $$O(m^2)$$

    - We create a table of size $$(m + 2)\times (m + 2)$$ or a hash map that contains at most $$O(m \times m)$$ values, which is the number of different kinds of stick fragments.

<br/>