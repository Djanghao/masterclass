# Official Solution

**Link:** [https://leetcode.com/problems/combination-sum/solution/](https://leetcode.com/problems/combination-sum/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/810685819" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Overview

This is one of the problems in the series of combination sum.
They all can be solved with the same algorithm, _i.e._ **backtracking**.

Before tackling this problem, we would recommend one to start with another almost identical problem called [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/), which is arguably easier and one can tweak the solution a bit to solve this problem.

For the sake of this article, we will present the backtracking algorithm.
Furthermore, we will list some other problems on LeetCode that one can solve with the same algorithm presented here.


---
### Approach 1: Backtracking

**Intuition**

>As a reminder, [backtracking](https://en.wikipedia.org/wiki/Backtracking) is a general algorithm for finding all (or some) solutions to some computational problems. The idea is that it **_incrementally_** builds candidates to the solutions, and abandons a candidate ("backtrack") as soon as it determines that this candidate cannot lead to a final solution.

Specifically, to our problem, we could _incrementally_ build the combination, and once we find the current combination is not valid, we _backtrack_ and try another option.

To demonstrate the idea, we showcase how it works with a concrete example in the following graph:

![exploration tree](../Figures/39/39_exploration_tree.png)

For the given list of candidates `[3, 4, 5]` and a target sum `8`, we start off from empty combination `[]` as indicated as the root node in the above graph.

- Each node represents an action we take at a step, and within the node we also indicate the combination we build sofar.

- From top to down, at each level we descend, we add one more element into the current combination.

- The nodes marked in blue are the ones that could sum up to the target value, _i.e._ they are the desired combination solutions.

- The nodes marked in red are the ones that _exceed_ the target value. Since all the candidates are positive value, there is no way we could bring the sum down to the target value, if we explore further.

- At any instant, we can **only** be at one of the nodes.
When we _backtrack_, we are moving from a node to its parent node.

>An important detail on choosing the next number for the combination is that we select the candidates **in order**, where the total candidates are treated as a list.
Once a candidate is added into the current combination, we will not __look back__ to all the previous candidates in the next explorations.

![zoom in](../Figures/39/39_zoom_in.png)

To demonstrate the idea, let us zoom in a node (as we shown in the above graph) to see how we can choose the next numbers.

- When we are at the node of `[4]`, the precedent candidates are `[3]`, and the candidates followed are `[4, 5]`.

- We don't add the precedent numbers into the current node, since they would have been explored in the nodes in the left part of the subtree, _i.e._ the node of `[3]`.

- Even though we have already the element `4` in the current combination, we are giving the element _another chance_ in the next exploration, since the combination can contain **duplicate** numbers.

- As a result, we would branch out in two directions, by adding the element `4` and `5` respectively into the current combination.

**Algorithm**

As one can see, the above backtracking algorithm is unfolded as a _DFS_ (Depth-First Search) tree traversal, which is often implemented with recursion.

Here we define a recursive function of `backtrack(remain, comb, start)` (in Python), which populates the combinations, starting from the current combination (`comb`), the remaining sum to fulfill (`remain`) and the current cursor (`start`) to the list of candidates.
Note that, the signature of the recursive function is slightly different in Java. But the idea remains the same.

- For the first base case of the recursive function, if the `remain==0`, _i.e._ we fulfill the desired target sum, therefore we can add the current combination to the final list.

- As another base case, if `remain < 0`, _i.e._ we exceed the target value, we will cease the exploration here.

- Other than the above two base cases, we would then continue to explore the sublist of candidates as `[start ... n]`.
For each of the candidate, we invoke the recursive function itself with updated parameters.

    - Specifically, we add the current candidate into the combination.

    - With the added candidate, we now have less sum to fulfill, _i.e._ `remain - candidate`.

    - For the next exploration, still we start from the current cursor `start`.

    - At the end of each exploration, we __*backtrack*__ by popping out the candidate out of the combination.


<iframe src="https://leetcode.com/playground/6otxs6kC/shared" frameBorder="0" width="100%" height="500" name="6otxs6kC"></iframe>


**Complexity Analysis**

Let $$N$$ be the number of candidates, $$T$$ be the target value, and $$M$$ be the minimal value among the candidates.

- Time Complexity: $$\mathcal{O}(N^{\frac{T}{M}+1})$$

    - As we illustrated before, the execution of the backtracking is unfolded as a DFS traversal in a n-ary tree.
    The total number of steps during the backtracking would be the number of nodes in the tree.

    - At each node, it takes a constant time to process, except the leaf nodes which could take a linear time to make a copy of combination. So we can say that the time complexity is linear to the number of nodes of the execution tree.

    - Here we provide a _loose_ upper bound on the number of nodes.

        - First of all, the fan-out of each node would be bounded to $$N$$, _i.e._ the total number of candidates.

        - The maximal depth of the tree, would be $$\frac{T}{M}$$, where we keep on adding the smallest element to the combination.

        - As we know, the maximal number of nodes in N-ary tree of $$\frac{T}{M}$$ height would be $$N^{\frac{T}{M}+1}$$.

    - **Note that**, the actual number of nodes in the execution tree would be much smaller than the upper bound, since the fan-out of the nodes are decreasing level by level.

- Space Complexity: $$\mathcal{O}(\frac{T}{M})$$

    - We implement the algorithm in recursion, which consumes some additional memory in the function call stack.

    - The number of recursive calls can pile up to $$\frac{T}{M}$$, where we keep on adding the smallest element to the combination.
    As a result, the space overhead of the recursion is $$\mathcal{O}(\frac{T}{M})$$.

    - In addition, we keep a combination of numbers during the execution, which requires at most $$\mathcal{O}(\frac{T}{M})$$ space as well.

    - To sum up, the total space complexity of the algorithm would be $$\mathcal{O}(\frac{T}{M})$$.

    - Note that, we did not take into the account the space used to hold the final results for the space complexity.


---
### Similar Problems

Once one figures out how it works with the backtracking algorithm for this problem, one can go ahead and apply this _"hammer"_ to solve a series of similar problems.

For instance, if one goes back to the problem of [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/), if suffices to tweak a bit on the invocation of the recursive function to solve the problem, in addition to some other minor adjustments on the base cases.

More specifically, in this problem, we give the current candidate another chance in the further explorations, while for the problem of [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/) we simply **move on** to the candidates followed.

Here are a series of problems that one can solve, with some tweaks of the backtracking algorithm presented in this article,
thanks to the great list compiled by [issac3](https://leetcode.com/problems/combination-sum/discuss/16502/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partitioning)) in the discussion forum.

- [Subsets](https://leetcode.com/problems/subsets)
- [Subsets II](https://leetcode.com/problems/subsets-ii)
- [Permutations](https://leetcode.com/problems/permutations/)
- [Permutations II](https://leetcode.com/problems/permutations-ii/)
- [Combinations](https://leetcode.com/problems/combinations/)
- [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)
- [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)
- [Palindrome Partition](https://leetcode.com/problems/palindrome-partitioning/)


---