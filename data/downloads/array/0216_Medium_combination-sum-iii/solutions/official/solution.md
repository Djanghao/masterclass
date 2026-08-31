# Official Solution

**Link:** [https://leetcode.com/problems/combination-sum-iii/solution/](https://leetcode.com/problems/combination-sum-iii/solution/)

---

[TOC]

## Solution

---
### Approach: Backtracking

**Intuition**

The problem asks us to come up with some fixed-length combinations that meet certain conditions.

To solve the problem, it would be beneficial to build a combination by hand.

If we represent the combination as an array, we then could fill the array **_one element at a time_**.

For example, given the input $$k=3$$ and $$n=9$$, _i.e._ the size of the combination is 3, and the sum of the digits in the combination should be 9.
Here are a few steps that we could do:

- 1). We could pick a digit for the **_first_** element in the combination.
Initially, the list of candidates is `[1, 2, 3, 4, 5, 6, 7, 8. 9]` for any element in the combination, as stated in the problem. 
Let us pick `1` as the first element. The current combination is `[1]`.

![first element](../Figures/216/216_element_I.png)

- 2). Now that we picked the first element, we have two more elements to fill in the final combination.
Before we proceed, let us review the conditions that we should fullfil for the next steps.

    - Since we've already picked the digit `1`, we should exclude the digit from the original candidate list for the remaining elements, in order to ensure that the combination does not contain any **_duplicate_** digits, as required in the problem.

    - In addition, the sum of the remaining two elements should be $$9 - 1 = 8$$.

- 3). Based on the above conditions, for the second element, we could have several choices.
Let us pick the digit `2`, which is not a duplicate of the first element, plus it does not exceed the desired sum (_i.e._ $$8$$) neither.
The combination now becomes `[1, 2]`.

![second element](../Figures/216/216_element_II.png)

- 4). Now for the third element, with all the constraints, it leaves us no choice but to pick the digit `6` as the final element in the combination of `[1, 2, 6]`.

![third element](../Figures/216/216_element_III.png)

- 5). As we mentioned before, for the second element, we could have several choices.
For instance, we could have picked the digit `3`, instead of the digit `2`. Eventually, it could _lead_ us to another solution as `[1, 3, 5]`.

- 6). As one can see, for each element in the combination, we could **_revisit_** our choices, and **_try out_** other possibilities to see if it leads to a valid solution.


If you have followed the above steps, it should become _evident_ that **_backtracking_** would be the technique that we could use to come up an algorithm for this problem.

![backtrack](../Figures/216/216_backtrack.png)

>Indeed, we could resort to _backtracking_, where we try to fill the combination **one element at a step**. Each choice we make at certain step might lead us to a final solution. If not, we simply revisit the choice and try out other choices, _i.e._ backtrack. 


**Algorithm**

There are many ways to implement a backtracking algorithm.
One could also refer to our [Explore card](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/) where we give some examples of backtracking algorithms.

To implement the algorithm, one could literally follow the steps in the Intuition section.
However, we would like to highlight a key **_trick_** that we employed, in order to ensure the **_non-redundancy_** among the digits within a single combination, as well as the **_non-redundancy_** among the combinations. 

>The trick is that we pick the candidates **_in order_**.
We treat the candidate digits as a list with order, _i.e._ `[1, 2, 3, 4, 5, 6, 7, 8. 9]`.
At any given step, once we pick a digit, _e.g._ `6`, we will not consider any digits before the chosen digit for the following steps, _e.g._ the candidates are reduced down to `[7, 8, 9]`. 

With the above strategy, we could ensure that a digit will never be picked twice for the same combination.
Also, all the combinations that we come up with would be unique.

Here are some sample implementations based on the above ideas.

<iframe src="https://leetcode.com/playground/fJWUXia3/shared" frameBorder="0" width="100%" height="500" name="fJWUXia3"></iframe>



**Complexity Analysis**

Let $$K$$ be the number of digits in a combination.

- Time complexity: $O(K \times C(9, K))$

    The algorithm involves generating all possible combinations of $K$ distinct numbers chosen from the range [1, 9].
      
    The number of ways to choose $K$ distinct numbers from the set ${1, 2, ..., 9}$ is represented by the permutation $C(9, K)$, which is the number of ways to arrange $K$ numbers from 9. The formula for $C(9, K)$ is: $C(9, K) = \frac{9!}{K! \cdot (9 - K)!}$
      
    For each valid combination, it takes $O(K)$ time to construct the combination, as copying the current combination into the result requires $O(K)$ operations.

    Therefore, the overall time complexity becomes: $O(K \times C(9, K))$

- Space Complexity: $$\mathcal{O}(K)$$

    - During the backtracking, we used a list to keep the current combination, which holds up to $$K$$ elements, _i.e._ $$\mathcal{O}(K)$$.

    - Since we employed recursion in the backtracking, we would need some additional space for the function call stack, which could pile up to $$K$$ consecutive invocations, _i.e._ $$\mathcal{O}(K)$$.

    - Hence, to sum up, the overall space complexity would be $$\mathcal{O}(K)$$.

    - **Note that**, we did not take into account the space for the final results in the space complexity.


---