# Official Solution

**Link:** [https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solution/](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solution/)

---

[TOC]

## Solution

--- 

### Approach: Binary Search + Greedy Worker Selection

#### Hint 1

If we already know that it’s possible to complete exactly $k$ tasks, then:

* We should select the $k$ lowest-valued tasks from the `tasks` array.
* We should select the $k$ highest-valued workers from the `workers` array.

#### Hint 2

If it’s possible to complete $k$ tasks while satisfying Hint 1, then it’s also possible to complete $k - 1$ tasks using the $k - 1$ lowest-valued tasks and the $k - 1$ highest-valued workers, which also satisfies Hint 1.

#### Intuition

Based on Hint 2, we can use binary search to find the largest value $k'$ such that we can complete $k'$ tasks, but not $k' + 1$. This value $k'$ is our final answer.

During each step of binary search, after selecting the $k$ lowest-valued tasks and the $k$ highest-valued workers, we need to determine whether it’s possible to assign the tasks to the workers.

To do this, we process the selected tasks in decreasing order of value. For each task, we consider the following two cases:

- **Case 1**: The worker with the highest available value is greater than or equal to the task value.
  In this case, we do not need to use a pill. We assign this worker (with the maximum value) to this task and remove them from the pool.

  > Why this is optimal: Since this is the most difficult (i.e., highest-valued) task, any worker who can complete it can also complete the easier ones. If we assign a weaker worker instead (even with a pill), and later assign the stronger worker to an easier task, we could have swapped the assignments to make a better match. So it’s always optimal to assign the strongest available worker to the hardest task that doesn't need a pill.

- **Case 2**: No worker can complete the task without a pill.
  In this case, we must use a pill. We look for the weakest worker who can complete the task with the pill (i.e., a worker with value ≥ $t - \textit{strength}$) and remove them from the pool.

  > Why this is optimal: Again, since we're processing the hardest task first, any worker who can complete it using a pill can also complete easier tasks using a pill. So, it is always safe (and best) to use the weakest such worker for this hardest task.

Therefore, we can iterate through the tasks in decreasing order of difficulty and maintain an ordered set of available workers. For each task value $t$:

* If the maximum value in the set is ≥ $t$, we remove that maximum worker (no pill needed).
* If not, we look for the minimum worker with value ≥ $t - \textit{strength}$. If such a worker exists and we still have pills remaining, we use a pill and remove that worker.
  Otherwise, it's not possible to complete all tasks with the current value of $k$.

Using this process, we can find whether a given value of $k$ is feasible.

#### Implementation

<iframe src="https://leetcode.com/playground/ZDR4QtLx/shared" frameBorder="0" width="100%" height="500" name="ZDR4QtLx"></iframe>

#### Complexity Analysis

- Time complexity: $O(n \log n + m \log m + \min(m, n) \log^2 \min(m, n))$

    - Sorting the `tasks` array requires $O(n \log n)$ time.

    - Sorting the `workers` array requires $O(m \log m)$ time.

    - The lower bound of binary search is 1, and the upper bound is the smaller value between $m$ and $n$, so the number of binary search iterations is $\log \min(m, n)$. Each iteration involves enumerating $\min(m, n)$ tasks. During this enumeration, deletion operations are performed on the ordered set of workers, with the time complexity of a single operation being $\log \min(m, n)$. Therefore, the total time complexity of binary search is $O(\min(m, n) \log^2 \min(m, n))$.

- Space complexity: $O(\log n + \log m + \min(m, n))$

    - Sorting the `tasks` array requires $O(\log n)$ stack space.

    - Sorting the `workers` array requires $O(\log m)$ stack space.

    - The ordered set used in binary search requires $O(\min(m, n))$ space.

#### Expansion:

It can be observed that when we enumerate each task from highest to lowest value, and maintain all workers who can complete the task (with the help of pills), then:

- If there is a worker who can complete the task without using a pill, we select (and remove) the worker with the highest value.

- If all available workers need to use a pill to complete the task, we select (and remove) the worker with the lowest value.

As the task value decreases, the number of workers who can complete it increases or remains the same, but never decreases. Therefore, we can use a deque to maintain all workers who can complete the task (with the use of pills). At this point, we either select (and remove) the worker at the front of the deque or the worker at the back. This reduces the time complexity of a single deletion operation from $O(\log \min(m, n))$ to $O(1)$, and the total time complexity becomes:

$$
O(n \log n + m \log m + \min(m, n) \log \min(m, n)) = O(n \log n + m \log m)
$$

#### Implementation

<iframe src="https://leetcode.com/playground/3C6y8buD/shared" frameBorder="0" width="100%" height="500" name="3C6y8buD"></iframe>