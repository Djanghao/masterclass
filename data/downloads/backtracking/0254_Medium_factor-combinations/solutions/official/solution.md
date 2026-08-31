# Official Solution

**Link:** [https://leetcode.com/problems/factor-combinations/solution/](https://leetcode.com/problems/factor-combinations/solution/)

---

[TOC]

## Solution
---
### Approach 1: Backtracking

#### Intuition

This is a search problem and we need to find all solutions. The key point is to enumerate all the solutions without missing any or duplicating any, so we need a well-defined order to enumerate the solutions.

Each solution is a list where the products of the numbers in the list are equal to `n`. For each solution, we want to try to extend the length of the list to find new solutions. We can do this by choosing a number in the list, let's say `x`, and splitting it into two numbers `a` and `b` such that `a * b = x`.

To avoid duplicates, (`12 = 2 * 2 * 3 = 2 * 3 * 2` etc.), **we keep the factors in each solution sorted ascending**. At each step, we will choose `x` as the last (largest) element in the list, let's call it `lastFactor`. Then, we search for `a, b` such that `a * b = lastFactor`, and replace `lastFactor` with `a, b`. To keep the list sorted after the replacement, we need both `a` and `b` to be greater than or equal to the 2nd largest element in the original list. Let's say we have `n = 96` and one of our solutions is `[2, 3, 16]`. We want to replace the `16`, but both numbers need to be greater than or equal to `3`. If we choose `2, 8`, then after the replacement our list will be `[2, 3, 2, 8]`, which is not sorted. We can choose `4, 4`, and after replacement, we have a new solution: `[2, 3, 4, 4]`. This is how we avoid duplicates.

To get the values of `a` and `b`, we can iterate with an integer `i`. We want to start `i` at the 2nd largest element in the list to ensure the list stays sorted. We can iterate until `sqrt(lastFactor)`, i.e. `i * i > lastFactor`, so iterate until `i > lastFactor / i`.

If the list only contains one number (the first list only has `n`), then we can start iterating from the minimum possible factor, which is `2`.

At each value of `i`, we know that `i` is a factor of `lastFactor` if `lastFactor % i == 0`. Then, we have `a = i` and `b = lastFactor / i`.

At a high level, this kind of question is called "implicit graph search/traversal". For instance, if we take all the sorted factor lists as a graph's nodes and for 2 lists (nodes) `A` and `B`, we add a directed edge from `A` to `B` if and only if `B` can be obtained from `A` by splitting the last integer `lastFactor` in `A` into 2 numbers `a, b` as discussed before. 

Then finding all the solutions is the same as doing a graph traversal. Because in our graph each list only points to another list with a length 1 more than itself, the graph is a tree. (See the figure below for `n = 12`):

<center>
<img src="../Figures/254/254_Factor_Combinations.png" width="500"/>
</center>
<br>

Recursively traversing the tree gives us the backtracking approach.

Every time we perform a split, we can also add the new solution to a variable `ans` to return at the end.


#### Algorithm

Lets define a helper function `backtracking`, it takes 2 parameters, one is `factors` which is a list of integers to all factors and the other is `ans` which is a list of list of integers to save all the `factors` as our return list. We start by calling `backtracking` with an integer list that only contains `n` as `factors` and an empty list for `ans`.

The main logic for `backtracking` is as follows:
* If `factors.size() > 1`, add a copy of it into `ans` since it's one of the desired solutions.
* Get the last element of `factors` `lastFactor` and remove it from `factors`.
* If `factors` is empty, iterate over `i` from 2, otherwise loop `i` from the last value in `factors`. Iterate until `i > lastFactor / i`.
  * For each `i`, if `lastFactor % i == 0`, put `i` and `lastFactor / i` in the `factors` list and call `backtracking(factors, ans)`.
  * Restore the list (backtrack) `factors` by removing the last 2 elements in `factors`.
* Restore the list (backtrack) `factors` by adding the `lastFactor` back.

#### Implementation
<iframe src="https://leetcode.com/playground/dsPandRo/shared" frameBorder="0" width="100%" height="500" name="dsPandRo"></iframe>
 
#### Complexity Analysis


* Time Complexity:  $O(n ^ {1.5})$.

For the number of solutions, according to [this](https://en.wikipedia.org/wiki/Multiplicative_partition), it's $n ^ {1 - o(1)}$ which can be considered as $O(n)$. 

For each factor list, the algorithm tries to find a factor of its last element. The last element `lastFactor` is no larger than `n` and the loop to find its factor takes $O(lastFactor ^ {0.5})$, so the total time complexity to find factors for all the factor lists is $O(n ^ {1.5})$.

Also, the algorithm copies all the factor lists into the answer list, which takes $O(n \cdot \log(n))$ time ($O(n)$ number of solutions and each solution list's length is $O(\log(n))$) which doesn't change the final time complexity. The length of each solution is on the order of $O(\log(n))$ because in the worst case, a solution is `2 * 2 * ... 2`.


* Space Complexity:  $O(\log(n))$.

 We only need to save one factor list when working on it so the space complexity is $O(log(n))$ if we don't take the output space into consideration.
 
 
### Approach 2: Iterative DFS

#### Intuition

The intuition is the same as before. Start with the single number `n` as the list of factors. We again maintain the factors list sorted and at each step, replace the last factor in the list `lastFactor` with `a, b` as discussed in the previous approach. Instead of using recursive backtracking, we can use a stack to traverse the tree iteratively (DFS).

#### Algorithm

* Create a stack `stack` which contains a list with the only element `n` in it initially.
* Create an empty list `ans`.
* Until `stack` is empty, pop a `factors` list:
  * Get the last element of `factors` `lastFactor` and remove it from `factors`.
  * If `factors` is empty, iterate over `i` from 2, otherwise loop `i` from the last value in `factors`. Iterate until `i > lastFactor / i`.
    * For each `i`, if `lastFactor % i == 0`, make one  copy of the list `factors` named `newFactors`. Put `i` and `lastFactor % i` into `newFactors`.
    * Push `newFactors` into the stack `stack`.
    * Push a copy of `newFactors` into the stack `stack`.
* Return `ans`.

#### Implementation
<iframe src="https://leetcode.com/playground/64rg2qns/shared" frameBorder="0" width="100%" height="480" name="64rg2qns"></iframe>

* Time Complexity:  $O(n ^ {1.5})$.

Similar to the previous solution, the cost to iterate and generate all solutions is $O(n ^ {1.5})$.  

When making a factor list, the algorithm copies the old one and modifies it. Note the length of each factor list is $O(\log_2(n))$ since each factor is no smaller than 2. So each copy takes $O(\log(n))$ time, and the time complexity to copy all the factor lists is $O(n \cdot \log(n))$.
Thus the total time complexity is $O(n ^ {1.5})$ + $O(n \cdot log(n))$ = $O(n ^ {1.5})$.

* Space Complexity:  $O(n \cdot \log(n))$.

 Although we don't need to consider the space for the output, we do need to save all the factor lists in the stack. And as mentioned above, the number of solutions is $O(n)$ and the length of each factor list is $O(log(n))$.

----