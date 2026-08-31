# Official Solution

**Link:** [https://leetcode.com/problems/find-the-winner-of-the-circular-game/solution/](https://leetcode.com/problems/find-the-winner-of-the-circular-game/solution/)

---

[TOC]

## Solution

---

### Overview

In this circular game, `n` friends numbered from `1` to `n` stand in a circle. In the first round, we start counting from friend 1 and eliminate the `k`-th friend. In each subsequent round, counting starts from the friend immediately clockwise to the one just eliminated, and the `k`-th friend is eliminated again. This process repeats until only one person remains.

A straightforward approach for turn-based games can be to simulate the game's rules. Here, our algorithm can eliminate the `k`-th friend in each iteration. However, optimizations are often possible, as in this problem, where we can reduce space and time complexity. 

We will start with a simulation approach and then explore more efficient methods that avoid manually following the game's rules.

> Note: This is famously known as the Josephus Problem.

---

### Approach 1: Simulation with List

### Intuition

To simulate this elimination game, we can start by representing the `n` friends using a list data structure. Initially, this list contains all the friends labeled from `1` to `n`. The idea is to repeatedly count to the `k`-th friend in the list and remove them from the game. By continually removing every `k`-th friend and adjusting our starting point after each removal, we can narrow down the group until only one friend remains. This final remaining friend is the winner of the game.

### Algorithm

1. Initialize a list of size `n`, representing `n` friends labeled from `1` to `n`
2. Maintain a `startIndex` variable that keeps track of the position from where counting begins, initially set to 0.
3. While more than 1 friend is remaining:
    * Calculate the new index of the next friend to remove as `(startIndex + k - 1) % numFriendsRemaining`. We apply the modulus operator to ensure counting wraps around the circle.
    * Remove the friend at the calculated index
    * Update `startIndex` to the removed index
4. Return the label of the last remaining friend 

### Implementation 

<iframe src="https://leetcode.com/playground/P2pXifyP/shared" frameBorder="0" width="100%" height="500" name="P2pXifyP"></iframe>


### Complexity Analysis

Let $n$ be the initial size of the friend circle.

* Time Complexity: $O(n^2)$

    Considering the `pop` operation inside the loop, the time complexity for each iteration can be $O(n)$ in the worst case (when `pop` shifts all subsequent elements). Since we might potentially perform $n-1$ `pop` operations (removing `n-1` friends), the overall worst-case time complexity is $O(n^2)$.

* Space Complexity: $O(n)$

    The space complexity of the algorithm is primarily dominated by the `circle` list, which stores `n` integers representing the friends. Therefore, the space complexity is $O(n)$. Other variables like `startIndex` and `removalIndex` are integers and require constant additional space, $O(1)$.

### Approach 2: Simulation with Queue

### Intuition

Instead of using a list to manage eliminations (which can be a costly $O(n)$ operation), we can optimize the elimination process by using a queue. In a queue, removing the first element is done in $O(1)$ time. Initially, we fill the queue with friends labeled from `1` to `n`. The key insight is how eliminations can be handled at each round. In each round, we simulate the process by rotating the queue `k-1` times. This action effectively moves the `k`-th friend to the front of the queue, ready for removal. Once positioned, removing this front element simulates eliminating that friend from the game. This rotation and removal process continues until only one friend remains in the queue, who is then declared the winner of the game.

With the use of a queue, the cost of the pop operation, which was $O(n)$ in the list approach, is now reduced to $O(1)$. The traversal operation remains the only operation with linear time complexity.

### Algorithm

1. Initialize a queue of size `n`, where the elements are labeled 1 to `n`.
2. While more than 1 friend is remaining
    - Remove the next `k-1` friends and re-add them to the queue.
    - Remove the next friend (the `k`-th friend that should be eliminated in the game)
3. Return the value of the last friend remaining 

### Implementation 

<iframe src="https://leetcode.com/playground/nDy7g7me/shared" frameBorder="0" width="100%" height="446" name="nDy7g7me"></iframe>


### Complexity Analysis

Let $n$ be the number of friends and $k$ be the step count for elimination.

* Time Complexity: $O(n \cdot k)$

    The time complexity is $O(n \cdot k)$ because each elimination cycle involves rotating the queue $k-1$ times, and this happens $n-1$ times.

* Space Complexity: $O(n)$

    The space complexity is $O(n)$ due to the queue storing all $n$ friends initially.

### Approach 3: Recursion

### Intuition

The game involves repetitively eliminating the `k`-th friend from a circle, shrinking the size of the circle at every turn. This suggests that we can break down the problem into smaller, similar subproblems.

Let’s look at a smaller instance of the problem where n=4 and k=2. We'll track both the number and index of each friend in the circle.

At the start of the game, friend 0 is at the beginning of the circle, and each friend's number corresponds to their index (we'll use zero-based indexing for now and adjust to one-based indexing later as required by the problem):

![Beginning of first turn](../Figures/1823/first_turn_start.png)

In the first round, we start our count at friend 0 and eliminate the k-th friend. With k=2, we eliminate friend 1 at index 1, leaving three friends in the circle. 

![First elimination](../Figures/1823/first_turn_elimination.png)

For the second round, we treat the friend immediately after friend 1 (friend 2) as the new starting point. The updated indices now appear as follows:

![Beginning of second turn](../Figures/1823/second_turn_start.png)

From this process, there are two key insights:

1. The problem, initially dealing with a circle of `n` friends, now reduces to a subproblem with `n-1` friends
2. In the new subproblem, friend indices shift by `-k`. For instance, friend 3 moves from index `3` to index `1` in the new circle.

These observations suggest a recurrence relation for a recursive solution. Let's define $f(n,k)$ as function that returns the index of the winning friend with a game of `n` friends and a step size of `k`. In our example above, $f(4,2)$ would yield the final answer.

We observed that after the first turn/elimination, our problem reduces to a smaller subproblem of $f(n-1, k)$. Accounting for the indexing offset discussed above, we can form the following relationship between $f(n,k)$ and $f(n-1,k)$:

$$f(n, k) = (f(n-1, k) + k) \bmod n$$

We add k to $f(n-1, k)$ to convert back to the original indexing of the circle of size `n` (we saw above how the new indexing on a circle of size `n-1` shifts the original indexing by `-k`). Like before, we mod this value by the size of the circle to account for cases where the offset wraps around to the start of the circle.

The base case is $f(1, k) = 0$, as the last remaining friend will always be at index `0`

### Algorithm

1. Define a `winnerHelper(int n, int k)` function where:
    - If the base case is reached (`n == 1`), return `0`.
    - Otherwise, return the recurrence relation expression: $(\text{winnerHelper}(n-1, k) + k)  \bmod  n$.
2. Return the value of the last friend remaining.

### Implementation 

<iframe src="https://leetcode.com/playground/E6BKmr6U/shared" frameBorder="0" width="100%" height="276" name="E6BKmr6U"></iframe>


### Complexity Analysis

Let $n$ be the initial size of the friend circle.

* Time Complexity: $O(n)$

    The function makes $n$ recursive calls, each performing $O(1)$ operations (modulo and addition).

* Space Complexity: $O(n)$

    The space complexity is determined by the maximum depth of the recursion stack, which is $n$.

### Approach 4: Iterative

### Intuition

We can further leverage the recurrence relation we found earlier, but optimize it by eliminating the extra space overhead incurred by the recursive calls. To achieve this, we can start by solving the base case where `n = 1` and iteratively compute the position of the winner, building up to solving the solution for `n = N`. This iteration will efficiently compute the solution with no extra space needed.

### Algorithm

1. Initialize `ans` to 0, representing the answer for the base case `n = 1`
2. Iterate through values of `n` from 2 to `N`:
    - Compute the answer for the current `n` using the recurrence relation: `ans = (ans + k) % n`
3. Return `ans + 1`


### Implementation 

<iframe src="https://leetcode.com/playground/U32t5twS/shared" frameBorder="0" width="100%" height="242" name="U32t5twS"></iframe>


### Complexity Analysis

Let $n$ be the initial size of the friend circle.

* Time Complexity: $O(n)$

    The loop runs $O(n)$ times, where each iteration involves a constant time calculation. Thus, the total time complexity is $O(n)$.

* Space Complexity: $O(1)$

    Unlike the recursive approach, no extra memory is needed to maintain a call stack. Furthermore, no auxiliary data structures are used. Thus, the space complexity is constant.