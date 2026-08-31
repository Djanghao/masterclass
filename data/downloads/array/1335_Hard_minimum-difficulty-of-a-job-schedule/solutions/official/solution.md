# Official Solution

**Link:** [https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solution/](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solution/)

---

[TOC]

### Overview
In this question, we want to distribute `n` jobs across `d` days in a way that minimizes the difficulty of the job schedule. The difficulty of a job schedule is the sum of the maximum difficulty job for each day and every day must have at least one job. Whenever you need to search for the most efficient way to distribute `n` items, brute force is always an option. Typically, brute force solutions are very slow, but they serve as a good starting point that can be optimized later. The brute force solution to this problem is to generate all valid ways to distribute the `n` jobs across `d` days, and then calculate the minimum job difficulty of each way.

How many possible valid ways are there to distribute the jobs? Without thinking about the implementation details, we can abstract the question into inserting `d - 1` boards to divide `n` balls into `d` piles, which is a classic problem in permutations and combinations.

Let's illustrate the scenario using Example 4 (`jobDifficulty = [7,1,7,1,7,1], d = 3`).
![separate n job into d days](../Figures/1335/1335_1BruteForce.JPG)

How do we code the brute force solution? Depth-first search (DFS) is a reasonable option because it is guaranteed to explore every possible sequence of states that results in scheduling all jobs in `d` days. Each state is a different combination of the starting index in the `jobDifficulty` array, and the number of days remaining. Thus, a job schedule is a valid sequence of `d` states that schedules all jobs and at least one job per day.  The output will be the minimum difficulty among all valid job schedules.

In this example, we want to get the result for `min_diff(0, 3)`, which represents the minimum job difficulty when starting from the $$0^{th}$$ index with 3 days remaining. Refer to the top panel of the image below to see the backtracking process.
Each edge signifies how the state from a top row can be derived from the state in a bottom row. For instance, the edge connecting `dp(0,3)` and `dp(1,2)` means the state `min_diff(0, 3)` (starting from the $$0^{th}$$ index with 3 days remaining) can be derived from `min_diff(1, 2)` (starting from the $$1^{st}$$ index with 2 days remaining, if only the $$0^{th}$$ job is performed on that day). Notice that some states, `min_diff(5, 1)` for instance, were calculated many times. Therefore, to improve the time complexity, we can use memoization to avoid such repeated calculations. Adding memoization to DFS is an example of dynamic programming and is illustrated in the bottom panel of the image below.

![dfs to dp](../Figures/1335/1335_2DFS_to_dp.JPG)

We will go over progressively more efficient approaches to solve the problem using dynamic programming. We will start with the most intuitive approach, top-down DP (Approach 1), followed by bottom-up DP (Approach 2), and then bottom-up DP with optimized space complexity (Approach 3). Lastly, we will explore an advanced stack solution that is the optimal approach (Approach 4).

</br>

---

### Approach 1: Top-down DP

**Intuition**

Thinking back, how did we figure out this question can be solved using dynamic programming? We were given a few clues.  First, the problem asks us to **minimize** something, in this case, the difficulty of the job schedule.  Second, our current decisions (what jobs to schedule today) depend on our previous decisions (what jobs have already been scheduled).  Lastly, as shown in the diagram above, the original problem can be broken into smaller subproblems, and we can reuse the results of those subproblems to solve the original problem. These three traits are characteristic of problems that can be solved with dynamic programming. In most cases, this problem included, it is more intuitive to solve DP problems using a top-down approach as opposed to a bottom-up approach. So, for our first approach, we will use top-down dynamic programming.
Now, let's take a closer look at how we can break the original problem into smaller subproblems and reuse the results of those subproblems to solve the original problem.

In this case, we need to find all possible ways to schedule the job today and define the subproblem as starting from a larger index `j` with one day less.
That is, to solve for `min_diff(i, d)`, we must first calculate `min_diff(j, d - 1)` for all `j > i`, and then take the minimum job difficulty of all these possibilities as the output.

Finally, when there is only 1 day left, we must complete all of the remaining jobs on that final day; this is the base case.

**Algorithm**

The dynamic programming solution to this problem consists of three components:
1. State definition:

     Index `i` (the index of the **first** task for **today** in the `jobDifficulty` array) and day `d` (number of remaining days) will define the DP state. `min_diff(i, d)` refers to the minimum difficulty when starting at the $$i^{th}$$ job with `d` days left.

     `min_diff(0, d)` will be the final answer since it represents starting at the beginning of the job array and finishing all jobs in exactly `d` days.

2. State transition function:

     The job at index `j` will be the **first** task for the **upcoming** day, therefore, the jobs to be finished today are all jobs with indices between `i` and `j`,  which is `jobDifficulty[i:j]`.  Since the difficulty of a day is the maximum difficulty of a job done in that day, the maximum of `jobDifficulty[i:j]` will be added to the sum of job difficulties.

     With this in mind, let's formulate the state transition function as follows:

     `min_diff(i, d) = min_diff(j, d - 1) + max(jobDifficulty[i:j]) for all j > i`

3. Base case:

     When there is only 1 day remaining, we need to finish all unfinished jobs on that day and increase the difficulty of the job schedule by the maximum difficulty of these jobs.

Before we dive into the code, let's take a moment to consider edge cases and optimizations.

One edge case that we must consider is if the number of days is more than the number of tasks, then we won't be able to arrange at least one job per day; in this case, we should return `-1`.

Finally, one optimization that we can implement is to use a variable, `daily_max_job_diff`, to keep track of the most difficult job scheduled on the current day. As we scan through the jobs for the current day, we do not need to revisit the full subarray of `jobDifficulty[i:j]` every time we want to calculate the maximum difficulty. Instead, each day, we can update the maximum job difficulty seen so far if the current job difficulty is greater than `daily_max_job_diff`.

<iframe src="https://leetcode.com/playground/A36ZCMqd/shared" frameBorder="0" width="100%" height="500" name="A36ZCMqd"></iframe>

**Complexity Analysis**


Let $$n$$ be the length of the `jobDifficulty` array, and $$d$$ be the total number of days.

* Time complexity: $$O(n^2 \cdot d)$$ since there are $$n \cdot d$$ possible states, and we need $$O(n)$$ time to calculate the result for each state.

* Space complexity: $$O(n \cdot d)$$ space is required to memoize all $$n \cdot d$$ states.

</br>

---

### Approach 2: Bottom-up 2D DP

**Intuition**

The previous solution used a function call stack to manage recursive calls; this requires additional space and time to maintain. We can circumvent the need for a function call stack by implementing the same approach using bottom-up DP.  Bottom-up DP is not as flexible as top-down DP because it must solve the subproblems in a specific order and usually needs to solve every subproblem (which sometimes may be more subproblems than that of top-down DP).  Although the overall time complexity remains the same for the bottom-up DP, it is often slightly faster than top-down DP because it is an iterative approach and does not need to maintain a function call stack.  Readers may check out [Comparison of top-down and bottom-up DP](https://awjin.me/algos-js/dp/tab-memo.html) for more detailed comparisons between the two approaches.  So let's reimplement the solution from Approach 1 using bottom-up DP.

The key to writing bottom-up DP is to determine the dimensions of the DP matrix first and then understand how states transfer from one row to another.  Remember each state is a combination of the starting index, `i`, and the number of days remaining, `d`.

When transferring states, we need to ensure there are enough tasks remaining to arrange at least one job per day.  See below for an example to schedule 7 jobs in 3 days. The line from (2 days remaining, index 2) to (1 day remaining, index 5) can be interpreted as:
(1) jobs 5 and 6 are scheduled with 1 day remaining because our base case is to finish all jobs on the last day.  
(2) jobs 2, 3 and 4 are scheduled with 2 days remaining since `i` is the index of the first job done on the current day.
(3) jobs 0, 1 and 2 are scheduled with 3 days remaining.

![Bottom-up dp illustration](../Figures/1335/1335_3Bottom-up_dp.JPG)

There is no dependency between `min_diff[d][i]` and `min_diff[d][j]` if `i != j`, because the value of `min_diff[d][i]` only depends on the results of `min_diff[d - 1][j]` when `j > i`. By identifying such relationships, we can draw viable edges for state transfer between different cells in the DP matrix.

**Algorithm**

1. State definition:

     Index `i` (starting index in the `jobDifficulty` array) and day `d` (number of remaining days) will define the DP state. `min_diff[d][i]` refers to the minimum difficulty when starting at the $$i^{th}$$ job with `d` days left.

     `min_diff[d][0]` will be the final answer since it represents starting at the beginning of the job array and finishing all jobs in `d` days.

2. State transfer function:

     The number of rows in the DP matrix is the total number of remaining days plus one (`d + 1`), and the number of columns in the DP matrix is the length of the `jobDifficulty` array plus one (`n + 1`). Note, for `n` jobs to be completed, there are `n + 1` possible states, ranging from 0 jobs being done, to all `n` jobs being completed.

     The value of `min_diff[d][i]` only depends on the results of `min_diff[d - 1][j]` when `j > i`. The statements can be expressed as:

     `min_diff[d][i] = min(daily_max_job_diff + min_diff[d - 1][j])` for all `j > i`,

      where `daily_max_job_diff` is the maximum difficulty of jobs between index `i` and index `j` not including `j`, and `i` is the index of the first job that is done on the current day and `j` is the index of the first job that is done on the next day.

3. Base case:

     We will prefill the last column of the matrix with zeros, to indicate that when there are no remaining jobs, the maximum job difficulty to be added is 0.

<iframe src="https://leetcode.com/playground/eSPoZ7kH/shared" frameBorder="0" width="100%" height="500" name="eSPoZ7kH"></iframe>

**Complexity Analysis**

Let $$n$$ be the length of the `jobDifficulty` array, and $$d$$ be the total number of days.

* Time complexity: $$O(n^2 \cdot d)$$ since there are $$n \cdot d$$ possible states, and we need $$O(n)$$ time to calculate the result for each state.

* Space complexity: $$O(n \cdot d)$$ is required for the $$(n + 1) \times (d + 1)$$ DP array.

</br>

---

### Approach 3: Bottom-up 1D DP

**Intuition**

As mentioned in the previous approach, bottom-up DP requires subproblems to be solved in a specific order.  While this makes bottom-up DP less flexible than top-down DP, with some clever planning, this constraint allows us to reduce the amount of space used.  Because the subproblems are solved in a specific order, sometimes the results of subproblems will be referenced early in the iterative process and then never referenced again.  Therefore, once we are certain we do not need to reference the results of these subproblems, the results can be removed from memory. Let's see if we can improve the previous approach by implementing this optimization.

Notice that in Approach 2, any state with `d` days remaining only depends on the results for states with `d - 1` days remaining.  Therefore, we do not need to store the states with less than `d - 1` days remaining.
Therefore, the space complexity can be further improved.

**Algorithm**

Since the result in `min_diff[d][i]` only depends on `min_diff[d - 1][j]`, we only need to store the states of the current day and the next day as two DP arrays of size `n`, where `n` is the number of jobs.

This approach is very similar to Approach 2, the few changes made include:  `min_diff[d][i]` has been replaced by with `min_diff_curr_day[i]`, and `min_diff[d - 1][j]` has been replaced with `min_diff_next_day[j]`.
`min_diff_curr_day[i]` records all the results for the current day, while `min_diff_next_day[j]` records all the results for the next day (with one less remaining day).

<iframe src="https://leetcode.com/playground/kaYkcgPo/shared" frameBorder="0" width="100%" height="500" name="kaYkcgPo"></iframe>

**Complexity Analysis**


Let $$n$$ be the length of the `jobDifficulty` array, and $$d$$ be the total number of days.

* Time complexity: $$O(n^2 \cdot d)$$ since there are $$n \cdot d$$ possible states, and we need $$O(n)$$ time to calculate the result for each state.

* Space complexity: $$O(n)$$ as we only use two arrays of length $$n + 1$$ to store all relevant states at any given time.


</br>

---

### Approach 4: Monotonic Stack - Better Time Complexity

**Intuition**

We have walked through the intuition and implementation of the top-down and bottom-up DP approaches. Being able to clearly articulate the logic and time/space complexity for these approaches will be more than sufficient for most interviews.

But is there an even better solution? Can we improve even more?

The answer is yes! This approach falls outside the scope of a typical interview.  However, it will be fun to explore the solution, and to think about where else this methodology could be applied!

First, let's consider what inefficiency exists in the previous approach that we can improve on.

Remember our conclusion in the previous approaches that the value of `min_diff[d][i]` only depends on the results of `min_diff[d - 1][j]` when `j > i`. From the state transfer function `min_diff_curr_day[i] = min(min_diff_curr_day[i], dailyMaxJobDiff + min_diff_next_day[j])`, it is evident that the job difficulty of the current day is solely determined by the maximum job difficulty seen so far, on the current day (between index `i` and `j`). Therefore, when `jobDifficulty[i]` and `jobDifficulty[j]` are the two jobs with the highest job difficulty between `i` and `j`, then the values of other job difficulties between `i` and `j` do not affect the difficulty of the current day as shown in the figure below.

![Ignore jobs with lower job difficulties](../Figures/1335/1335_lower_job_difficulties.JPG)

With this in mind, we do not actually need to check every combination of `i` and `j` and update their values in the DP matrix. Instead, we can use a monotonic stack to reduce the total amount of calculations.

To better understand how we can use a monotonic stack to exploit this observation, let's start by focusing on two indices, `j` and `i` (where out of all the jobs between `j` and `i` inclusive, jobs at `j` and `i` will have the two greatest difficulties). Notice that the order of `i` and `j` is a different this time.  Instead of `i` being the index of the first job done today and `j` being the index of the first job done tomorrow, in this approach, `i` is the index of the **last** job that we try to schedule for today, and `j` is the index of a job in the job schedule that is scheduled for today **before** index `i` (i.e., `j` < `i`).

Given that the $$j^{th}$$ job is scheduled on the current day, let's find out how to update the value of minimum job schedule difficulty when we include the $$i^{th}$$ job on the current day. There are two possible scenarios:

- Scenario 1: `jobDifficulty[j] <= jobDifficulty[i]`. After we include the $$i^{th}$$ job on the current day, the minimum job schedule difficulty on the current day will increase by at most `jobDifficulty[i] - jobDifficulty[j]` compared with when the $$j^{th}$$ job is the **last** job scheduled for the current day. Since job `i` has higher job difficulty than job `j`, the value for `jobDifficulty[j]` becomes irrelevant when scheduling any future jobs on the current day, so index `j` can be popped from the stack.

![Scenario 1](../Figures/1335/1335_Scenario_1.JPG)

- Scenario 2: `jobDifficulty[j] > jobDifficulty[i]`. The minimum job schedule difficulty on the current day only depends on the most difficult job scheduled on that day, which is `jobDifficulty[j]`. So after we include the $$i^{th}$$ job on the current day, the minimum job schedule difficulty will be no higher than that of when the $$j^{th}$$ job is the **last** job scheduled for the current day. We still need to keep job `j` in the stack for scheduling future jobs on the current day.

![Scenario 2](../Figures/1335/1335_Scenario_2.JPG)

To recap, in the above scenarios, every time a new job (`i`) is added to the current day's schedule, if any prior job (`j`) has a lower or equal job difficulty, then we can discard the job `j` as it becomes irrelevant for the job schedule difficulty of the current day (as in scenario 1). Otherwise, we will need to keep the value the job `j` when `jobDifficulty[j] > jobDifficulty[i]` (as in scenario 2).  As a result, at any given moment, the difficulty of the jobs we keep in the stack will be monotonically decreasing. The monotonically decreasing relationship is a hint that we may be able to solve this problem more efficiently by using a monotonic stack. Notice that when the $$i^{th}$$ job is added to the current day's schedule, we focus on whether previous jobs should be popped out from the stack and how to update the current state of job difficulty using the popped out job.

Now, with a monotonic stack in mind, let's approach the problem from a different angle (credit to @Lee215), as demonstrated in the slides below.

> Note, for the monotonic stack used here, instead of recording the values, we will keep track of the corresponding indices since we can always look up values in the `jobDifficulty` array and `min_diff_curr_day` array.  So, the values that correspond to the indices contained in the stack are monotonically decreasing.

Contrary to the previous approach, where we iterated over the `days_remaining` from `1` to `d`. Here, we will iterate over the current day from `day` equals 0, which is the start of the job schedule, to `day` equals `d - 1`, which is the last day of the job schedule.

Each day, we will iterate over the indices `i` of all jobs that could be scheduled on the current day. We start at `i` equals `day` because at least one job per day must have been scheduled on previous days. For each index `i`, we will say this will be the index of the **last** job scheduled today. Thus, the current day's job minimum schedule difficulty will start as `jobDifficulty[i]` for `i = day` because, so far, the job at `i` is the only job scheduled today, and the job schedule difficulty (`min_diff_curr_day[i]`) is the difficulty of the job at index `i` plus the minimum difficulty of the job schedule that ended yesterday at index `i - 1`, which is `min_diff_prev_day[i - 1]`.

Now, let's try to schedule more jobs for today by increasing `i` and see how previous jobs at index `j` where `day <= j < i` will impact the minimum job difficulty of the current day. Here's the trick, as long as the difficulty of the job at index `i` is greater than the difficulty of all jobs between `j` and `i`, then extending a job schedule to include all jobs up to and including `i` will change the schedule difficulty by `jobDifficulty[i] - jobDifficulty[j]`. This is because `jobDifficulty[j]` is the most difficult job scheduled today so far, and by extending the schedule to include the job at `i`, the schedule difficulty for today will increase to `jobDifficulty[i]` from `jobDifficulty[j]`.

A naive way is to repeat this process by including each potential index `i`, and compare it with all previous job `j`, we will update the minimum job difficulty schedule that ends at job `i`. However, doing this for each `i` will result in $$O(n^2 \cdot d)$$ total time required for this approach... which is no better than the previous approach.

So what makes this approach more efficient? The key insight is that after extending the job schedule that ends at index `i` once, we never need to consider extending it again. Here's why. Consider the case where we update the job schedule difficulty at `i` (`min_diff_curr_day[i]`) by extending the job schedule that ends at index `j` like so: `min_diff_curr_day[i] <= min_diff_curr_day[j] + (jobDifficulty[i]- jobDifficulty[j])`. Then at a later index (say `i + 1`), we update the job schedule difficulty at `i + 1` by extending the job schedule that ends at index `i` following the same equation. Let's take a close look at `min_diff_curr_day[i + 1]` when we extend the job schedule ending at `i` and `jobDifficulty[j] < jobDifficulty[i]`.

    min_diff_curr_day[i + 1] <= min_diff_curr_day[i] + jobDifficulty[i + 1] - jobDifficulty[i]
    # Substitute in the above equation for min_diff_curr_day[i]
                             <= min_diff_curr_day[j] + jobDifficulty[i] - jobDifficulty[j]
                                                     + jobDifficulty[i + 1] - jobDifficulty[i]
                             = min_diff_curr_day[j] + jobDifficulty[i + 1] - jobDifficulty[j]

Notice that extending the job schedule ending at `i` to include all jobs up to `i + 1` has a equal or tighter bound than extending the job schedule ending at `j` to include all jobs up to `i + 1` given `jobDifficulty[j] < jobDifficulty[i]`. For this reason, we only need to consider extending the job schedule that ends at `j` once, then the difficulty of the job schedule that ends at `j` can be forgotten.

The key insight is: once we have considered extending a schedule once, we never need to consider extending it again. Only considering the most recent schedules where today's difficulty is less than job `i` and safely ignoring schedules that have already been extended suggest that a stack will be a good data structure. For each `i`, we will pop the job schedules from the top of the stack where the difficulty of job `j` (the top of the stack) is less than `i`, and consider extending the popped job schedule to include `i`.

> "Consider extending the schedule" means updating `min_diff_curr_day[i]` to `min_diff_curr_day[j] + jobDifficulty[i] - jobDifficulty[j]` if it is less than the value of `min_diff_curr_day[i]`.

After popping all `j` from the stack where `jobDifficulty[j] <= jobDifficulty[i]` (scenario 1), if the stack is not empty, we will check scenario 2 once. Finally, we can push `i` onto the stack since we may consider extending the job schedule that ends at `i` later.

Now, let's take a look at how to maintain the monotonic stack and summarize the steps of the algorithm.

**Algorithm**

1. We will need two arrays, `min_diff_curr_day` and `min_diff_prev_day` to record the minimum total job difficulty of the current day and the previous day (one more day remaining).

For instance, `min_diff_curr_day[i]` records the minimum total job difficulty after completing the $$i^{th}$$ job on the current day.  Since we need to complete at lease one job on each day, when we are at day 0 (with `d` remaining days), we can only perform the $$0^{th}$$ job, so `min_diff_curr_day[i]` is `jobDifficulty[0]`. When we are not at the very first day, then we must have previously completed at least $$day-1^{th}$$ jobs. On the current day, by completing the $$i = day^{th}$$ job, `min_diff_curr_day[i]` will be `min_diff_prev_day[i-1] + jobDifficulty[i]`.

Refer to the slides below for two examples of initialization at `day = 0` and `day = 1`, respectively.
!?!../Documents/1335/1335_initialization.json:1119,636!?! <br />

2. We will then iterate through each day and update the `min_diff_curr_day` along the way for each possible last job scheduled on that day.

Specifically, we iterate through jobs with indices ranging from `i` equals `day` to `n`. To maintain a monotonically decreasing stack, if the job difficulty of the last element in the stack (`j`) is smaller than or equal to the current job (`i`), we will pop the last element (`j`) from the stack.

Since `jobDifficulty[j] <= jobDifficulty[i]`, by additionally completing jobs from index `j + 1` to index `i`, the total job difficulty `min_diff_curr_day[i]` will be no more than `min_diff_curr_day[j] + jobDifficulty[i] - jobDifficulty[j]`. So, we can update `min_diff_curr_day[i]` as `min(min_diff_curr_day[i], min_diff_curr_day[j] + jobDifficulty[i] - jobDifficulty[j])`

3. On each day, after we iterate through each indices `i`, popping all indices `j` off the stack where `jobDifficulty[j] <= jobDifficulty[i]`, and updating `min_diff_curr_day[i]`, there may be some remaining indices in the monotonically decreasing stack. Since we are using a monotonically decreasing stack, we know that `jobDifficulty[j] > jobDifficulty[i]` for all of the remaining indices in the stack. Until now, while updating `min_diff_curr_day[i]`, we only considered scenario 1 (when `jobDifficulty[j] <= jobDifficulty[i]`). Before we move to the next day, we must consider scenario 2 as well. Thus, if the stack is not empty, we compare the minimum difficulty job schedule ending at job `j` where `j` is on the top of the stack, and the total job difficulty in the current day `min_diff_curr_day[i]` will be no more than `min_diff_curr_day[j]`. So, we can update `min_diff_curr_day[i]` as `min(min_diff_curr_day[i], min_diff_curr_day[j])`.

4. At the end, we will return the total minimum job difficulty on the $$d^{th}$$ day after completing the $$n-1^{th}$$ job, which is `min_diff_prev_day[n - 1]`.

Refer to the slides below for how to update the DP states with the monotonically decreasing stack step by step. The height of each circle corresponds to the job difficulty.

!?!../Documents/1335/1335_stack_solution.json:1119,636!?! <br />

**Implementation**

<iframe src="https://leetcode.com/playground/DxvBPNtR/shared" frameBorder="0" width="100%" height="500" name="DxvBPNtR"></iframe>

**Complexity Analysis**


Let $$n$$ be the length of the `jobDifficulty` array, and $$d$$ be the total number of days.

* Time complexity: $$O(n \cdot d)$$ as there are $$n \cdot d$$ possible states. Using the stack solution, we need $$O(n)$$ time to calculate all $$n$$ states for each day.

* Space complexity: $$O(n)$$ as we only use one array of length `n` to store all DP states for the prior day and the current day, and the stack that will contain at most `n` elements.

If you are interested in practicing the skill to optimize the DP solution using a monotonic stack, you may want to try the following two LeetCode problems.

 [LeetCode 32. Longest Valid Parenthesis](https://leetcode.com/problems/longest-valid-parentheses/). Check out Approach 3 in the official solution.

 [LeetCode 85. Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/). Check out Approach 3 in the official solution.