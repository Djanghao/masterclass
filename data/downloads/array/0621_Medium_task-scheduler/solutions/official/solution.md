# Official Solution

**Link:** [https://leetcode.com/problems/task-scheduler/solution/](https://leetcode.com/problems/task-scheduler/solution/)

---

[TOC]

## Solution

---

### Overview

We are given characters, which are tasks to be scheduled in the CPU. The objective is to find the minimum time required to complete all tasks while including a cooldown period between two identical tasks. The cooldown period is represented by a non-negative integer `n`. During each unit of time, the CPU can either complete a task or stay idle. The goal is to optimize the schedule to minimize the total time required to process all the tasks.

**Key Observations:**
1. Tasks represented by the same character are considered identical.
2. Repeated tasks should be at least `n` intervals apart from each other because of the cooling time.
3. You can put the idle time effectively in between two repetative tasks to schedule them.

Checkout the below visual of example 1 from the problem description:

![overview](../Figures/621_fix/overiew.png)

The result is 8 intervals, which is calculated by tasks + idle time (6 + 2). The problem involves finding how much idle time is required to complete the tasks.


All approaches use a greedy strategy, meaning decisions are made step by step, focusing on what seems best in the moment to reach the overall best solution. To show that this type of approach works well, let's use some illustrations. We can prove its effectiveness by showing what happens if we assume the opposite and reach a contradiction. 

Using the examples below, we can demonstrate that selecting the task with the lowest frequency increases idle time for the scheduler, thereby failing to maximize efficiency. Conversely, choosing tasks with higher frequencies maximizes efficiency.

![contradiction](../Figures/621_fix/contradiction.png)

The Greedy approach optimizes efficiency by prioritizing tasks based on their frequency, thereby reducing intervals and minimizing idle time for the scheduler. This strategy ultimately leads to the maximization of overall efficiency. 

![greedy_works](../Figures/621_fix/greedy_works.png)

> After finishing this problem, take a shot at [Task Scheduler II](https://leetcode.com/problems/task-scheduler-ii/) for a deeper understanding of recognizing patterns.

---

### Approach 1: Using Priority Queue / Max Heap

#### Intuition

To count the occurrences of each task while prioritizing those with the highest frequency, we use a frequency map and a max heap (priority queue).

In each iteration, a cycle of length `n + 1` is considered, signifying the time needed to execute tasks without violating the cooling period constraint. For instance, if there are 2 tasks (`A`) and `n = 2`, the iterations required would be `A-Idle-Idle-A` (`n + 1` iterations before picking a new task `A`).

During each iteration:
- Tasks with the highest frequency are popped from the max heap. In the case of frequency ties, any tied task can be chosen.
- The chosen task's frequency is reduced by 1. If remaining occurrences exist, they are added to a temporary array.
- This process continues until the cycle is completed.

After completing the cycle:
- The temporary array is used to rebuild the heap with updated frequencies of tasks encountered during the cycle. This ensures that updated frequencies are preserved when tasks are popped from the heap.

Post-cycle processing:
- A counter (`time`) is incremented by the actual number of tasks processed in the current cycle (`taskCount`).
- If the heap is not empty, extra idle `time` (`n + 1`) is added to account for the cooling period (n cycles + 1 extra idle time).
- If the heap is empty, only the remaining tasks in the cycle need consideration (`taskCount`).

This process is repeated until the heap is empty. The `time` variable is incremented by the actual number of tasks processed in each cycle, with adjustments for idle time when required.

##### For a better understanding of the intuition let us view an example:

Given a task list (e.g., `['A', 'A', 'A', 'B', 'B', 'B']`) and a cooldown period `n` (e.g., 2), we aim to minimize the idle time during task execution.

1. Create a frequency map (`freq`) to track task occurrences: `{'A': 3, 'B': 3}`.
2. Initialize a max heap (`pq`) with frequencies: `[3, 3]`.
3. Define the cycle length as `n + 1` (e.g., `2 + 1 = 3`) to avoid violating the cooldown idle period.

##### Cycle Repetition:

Repeat cycles until the heap is empty:

- In the first cycle, choose 'A' and 'B', resulting in `[2, 2]`.
- Rebuild heap: `[2, 2]`, and increment time: 2 tasks processed + cooldown idle.
- In the second cycle, choose 'A' and 'B' again, resulting in `[1, 1]`.
- Rebuild heap: `[1, 1]`, and increment time: 2 tasks processed + cooldown idle.
- Continue cycles until the heap is empty.

The accumulated time spent on tasks and idle periods gives the final result: `3 + 3 + 2 = 8` (A-B-IDLE-A-B-IDLE-A-B).


The following is an illustration demonstrating the above max heap example:

![maxheap](../Figures/621_fix/maxheap.png)


#### Algorithm

- Initialize an array `freq` of size 26 to store the frequency of each task.
- Iterate through the `tasks` array and update the frequency of each task in the `freq` array.
- Create a priority queue `pq` and insert the frequencies of the tasks into the queue.
- Initialize a variable `time` to keep track of the total time taken.
- While the priority queue is not empty, repeat the following steps:
  - Initialize a variable `cycle` to `n + 1`, which represents the cooling interval plus one (for the current task).
  - Initialize an empty array `store` to store frequencies of tasks that still need to be processed.
  - Initialize a variable `taskCount` to keep track of the number of tasks processed in the current cycle.
  - While `cycle` is greater than 0 and the priority queue is not empty, repeat the following steps:
    - Decrement `cycle`.
    - Pop the top element (`task` frequency) from the priority queue.
    - If the popped frequency is greater than 1, decrement it by 1 and store it in the `store` array.
    - Increment `taskCount` as it keeps track of the number of tasks processed in the current cycle.
  - After processing tasks in the cycle, restore the updated frequencies (stored in the `store` array) back to the priority queue.
  - Update the `time` by adding either `taskCount` (if the priority queue is empty) or `n + 1` (cooling interval) to the total time.
- Finally, return the total `time`.

#### Implementation

> Note: In Python 3, frequencies are stored as negative values to simulate a max-heap behavior.

<iframe src="https://leetcode.com/playground/HZxtkVcr/shared" frameBorder="0" width="100%" height="500" name="HZxtkVcr"></iframe>

#### Complexity Analysis

Let the number of tasks be $N$. Let $k$ be the size of the priority queue. $k$ can, at maximum, be 26 because the priority queue stores the frequency of each distinct task, which is represented by the letters A to Z. 

* Time complexity: $O(N)$

    In the worst case, all tasks must be processed, and each task might be inserted and extracted from the priority queue. The priority queue operations (insertion and extraction) have a time complexity of $O(\log k)$ each. Therefore, the overall time complexity is $O(N \cdot \log k)$. Since $k$ is at maximum 26, $\log k$ is a constant term. We can simplify the time complexity to $O(N)$. This is a linear time complexity with a high constant factor.

* Space complexity: $O(26)$ = $O(1)$

    The space complexity is mainly determined by the frequency array and the priority queue. The frequency array has a constant size of 26, and the priority queue can have a maximum size of 26 when all distinct tasks are present. Therefore, the overall space complexity is $O(1)$ or $O(26)$, which is considered constant.


---

### Approach 2: Filling the Slots and Sorting

#### Intuition

We need to find the minimum time required to complete all tasks given the constraint that at least `n` units of time must elapse between two identical tasks. To minimize the time, we should first consider scheduling the most frequent tasks so that they are separated by `n` units of time. Then, we can fill the idle slots with the remaining tasks.

##### Example:

Consider the task list `['A', 'A', 'A', 'B', 'B', 'B']` with `n = 2`.

1. Calculate the frequency array: `[3, 3, 0, ..., 0]`, as 'A' appears 3 times and 'B' appears 3 times.
2. Sort the frequency array in ascending order: `[0, 0, ..., 3, 3]`.
3. Calculate `maxFreq` as `freq[25] - 1`. In this case, `maxFreq = 3 - 1 = 2`.
4. Calculate the number of idle slots: `idleSlots = maxFreq * n = 2 * 2 = 4`.
5. The loop starts from the second highest frequency (index 24 in the sorted array) and goes down to the lowest frequency. This ensures that the highest frequency task's idle slots are considered only once, as it was accounted for when calculating `maxFreq` in the earlier step.
6. In each iteration, subtract the minimum of `maxFreq` and the current frequency from `idleSlots`. For the first iteration, subtract `min(2, 2) = 2` from `idleSlots`, resulting in `idleSlots = 4 - 2 = 2`.
7. If `idleSlots > 0`, add the remaining idle slots to the total number of tasks. In this example, there are 2 idle slots, so the final result is obtained by adding these idle slots (2) to the total number of tasks (6).
8. Thus, the minimum time required to complete all tasks, considering the cooldown period, is `8`.

#### Algorithm

- Create a `freq` array of size 26 to keep track of the count of each task.
- Iterate through the `tasks` array and update the frequency array with the frequency of each task.
- Sort the frequency array in non-decreasing order (ascending order = smallest to largest). This is done to process tasks with higher frequencies first.
- Calculate the maximum frequency of the most frequent task. Subtract 1 because we want to find the number of intervals, not the number of occurrences.
- Calculate the number of `idleSlots` that will be required by multiplying the maximum frequency by the cooldown period.
- Iterate over the frequency array from the second highest frequency to the lowest frequency.
    - Subtract the minimum of the maximum frequency and the current frequency from the `idleSlots`.
- If there are any `idleSlots` left, add them to the total number of tasks and return this as the answer. Otherwise, return the total number of tasks.

#### Implementation

<iframe src="https://leetcode.com/playground/CzQYBKg3/shared" frameBorder="0" width="100%" height="497" name="CzQYBKg3"></iframe>

#### Complexity Analysis

Let the number of tasks be $N$. There are up to 26 distinct tasks because the tasks are represented by the letters A to Z.

* Time complexity: $O(N)$

    The time complexity of the algorithm is $O(26 \log 26 + N)$, where $26 \log 26$ is the time complexity of sorting the frequency array, and $N$ is the length of the input task list, which is the dominating term. 

* Space complexity: $O(26) = O(1)$

    The frequency array has a size of $26$.
    
    Note that some extra space is used when we sort arrays in place. The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(N)$ additional space.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log N )$ for sorting array.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log N )$.
    
    We sort the frequency array, which has a size of $26$. The space used for sorting takes $O(26)$ or $O(\log 26)$, which is constant, so the space complexity of the algorithm is $O(26)$, which is constant, i.e. $O(1)$.

---


### Approach 3: Greedy Approach

#### Intuition

The key is to determine the required number of idle intervals. Let's start by exploring how to arrange tasks. It is apparent that a "greedy arrangement" works well: always arrange tasks with the highest frequency first. The goal is to arrange tasks with the highest frequency first, ensuring that they are separated by at least `n` units of time.

##### Step 1: Task Arrangement

For instance, if tasks are `["A","A","A","B","B","C"]` with `n = 2`, the initial arrangement would be:

A _ _ A _ _ A      ("_" denotes empty slots)

The same approach can be applied to arrange B. The final schedule would look like this:

A B _ A B _ A

After arranging B tasks, we have 2 empty slots, but only one task remains. We can place task C and IDLE time in those slots. 

A B C A B _ A

The final schedule could be:

A B C A B IDLE A

##### Step 2: Calculate Idle Intervals

Now that we have a method for arranging tasks, the next step is to calculate the total number of idle intervals required. The solution to the problem is the sum of idle intervals and the number of tasks.

Consider the same example of tasks: `["A","A","A","B","B","C"]` with `n = 2`. After arranging A, we get:
A _ _ A _ _ A

Observe that A separates the empty slots into `(count(A) - 1)` = 2 parts, each with a length of `n`. A has the highest frequency, so it requires more idle intervals than any other task.

To calculate parts, empty slots, and available tasks:
1. Find the number of parts separated by A: `partCount = count(A) - 1`.
2. Determine the number of empty slots: `emptySlots = partCount * n`.
3. Identify the number of tasks to be placed into those slots: `availableTasks = tasks.length - count(A)`.

If `emptySlots > availableTasks`, indicating insufficient tasks to fill all empty slots, the remaining slots are filled with idle intervals: `idles = max(0, emptySlots - availableTasks)`.


##### Special Case:

A special case arises when there is more than one task with the highest frequency. For instance, with `["A","A","A","B","B","B","C","C","D"]` and `n = 3`, arranging A results in:
A _ _ _ A _ _ _ A 

When arranging B, it becomes evident that each B must follow each A. Considering "A B" as a special task "X," the arrangement becomes:
X _ _ X _ _ X

In this case, the calculations for parts, empty slots, and available tasks are adjusted:
- `partCount = count(A) - 1`
- `emptySlots = partCount * (n - (count of tasks with the highest frequency - 1))`
- `availableTasks = tasks.length - count(A) * count of tasks with the highest frequency`

If `emptySlots` is negative, it means there are already enough tasks to make the "distance" between the same tasks longer than `n`, and no idle intervals are needed. In this case, `idles = max(0, emptySlots - availableTasks)` provides the time it takes to complete the tasks.

The final result is then calculated as `result = tasks.length + idles`.


The visuals below provide an illustration of a general case where all tasks have different frequencies.

![greedy_ex1](../Figures/621_fix/greedy_ex1.png)


The visuals below illustrate a special case where more than one task occurs with the highest frequency.

![greedy_ex2](../Figures/621_fix/greedy_ex2.png)

#### Algorithm

- Initialize a `counter` array of size 26 to store the frequency of each task and variables `maximum` and `maxCount` to track the maximum frequency and the number of tasks with that frequency.
- Traverse through the `tasks` and update the `counter` array. If the frequency of a task is equal to the current maximum frequency, increment `maxCount`. If the frequency is greater than the current maximum frequency, update `maximum` and set `maxCount` to 1.
- Calculate the number of `emptySlots` by multiplying `partCount` `(maximum - 1)` and `partLength` `(n - (maxCount - 1))`.
- Calculate the number of `availableTasks` by subtracting the product of `maximum` and `maxCount` from the total number of tasks.
- Calculate the number of `idles` periods needed by taking the maximum of 0 and the difference between the number of `emptySlots` and the number of `availableTasks`.
- Return the total time required by adding the number of tasks to the number of `idles` periods.

#### Implementation

> **Note:** A more concise way of calculating the return value is `max(tasks.length, (n + 1) * (max-1) + maxCount)`. We have used the below method instead for the sake of readability.

<iframe src="https://leetcode.com/playground/gExdf5Qa/shared" frameBorder="0" width="100%" height="500" name="gExdf5Qa"></iframe>

#### Complexity Analysis

Let $N$ be the number of tasks.

* Time complexity: $O(N)$

    To obtain count(A) and the count of tasks with the highest frequency, we iterate through the inputs, calculating counts for each distinct character. This process has a time complexity of $O(N)$. All other operations have a time complexity of $O(1)$, resulting in an overall time complexity of $O(N)$

* Space complexity: $O(26)$ = $O(1)$

    The array `count` is size $26$ because the tasks are represented by the letters A to Z. No data structures that vary with input size are used, resulting in an overall space complexity of $O(1)$.

---

### Approach 4: Using Math Formula

#### Intuition

Each occurrence of task X takes one CPU cycle. There are `(maxCountX - 1)` scheduled occurrences, and between each two consecutive occurrences, there are at least `N` CPU cycles.

Therefore, the total CPU cycles can be calculated as follows:

$Total CPU cycles = (maxCountX - 1) \cdot (N + 1)$ 

**Where:**
- `(maxCountX - 1)` represents the number of occurrences of X scheduled, excluding the last one. We exclude the last occurrence of the repeated task in this term because it doesn't need additional cycles between it and the next task; it's the last task from all the repeated tasks of the same character.
- `(N + 1)` represents the CPU cycles required for each occurrence of `maxCountX`. The element `maxCountX` itself takes one CPU cycle, and there are at least `N` additional cycles between each two consecutive occurrences.

For example, given tasks `["A","A","A","B","B", "B", "C"]` and `n = 3`:
- `countA = 3`, `countB = 3`, `countC = 1`.
- `maxCount = max(countA, countB, countC) = 3`.
- Scheduling `maxCount-1` occurrences: `Total CPU cycles = (maxCount - 1) * (n + 1) = 8`.
- Scheduling the final round: `Ans = Total CPU cycles + 1`, as the last task from all the repeated tasks of the same character is left out, and that task doesn't need `N + 1` cycles to get completed.

If there are multiple elements with a frequency equal to `maxCount`, add 1 cycle each: `Ans += numberOfMaxFrequencyElements = 8 + 2 = 10`.

The following illustration provides a clearer insight into the underlying approach:

![math_approach](../Figures/621_fix/math_approach.png)

#### Algorithm

- Initialize a frequency array `freq` with all elements set to 0 and a variable `maxCount` to 0.
- Iterate through the `tasks` array and update the frequency of each task in the `freq` array. Update `maxCount` with the maximum frequency encountered.
- Calculate the total time needed for execution by multiplying `(maxCount - 1)` with `(n + 1)`.
- Iterate through the `freq` array, and if the frequency of a task is equal to `maxCount`, increment the total time by 1.
- Return the maximum of the total time needed and the length of the tasks array.

#### Implementation

<iframe src="https://leetcode.com/playground/asVJpxgp/shared" frameBorder="0" width="100%" height="480" name="asVJpxgp"></iframe>

#### Complexity Analysis

Let $N$ be the number of tasks.

* Time complexity: $O(N)$

    The loop iterating over the tasks array has a time complexity of $O(N)$. The loop iterating over the `freq` array has a time complexity proportional to the number of unique tasks, which is at most $26$ because the tasks are represented by the letters A to Z. Therefore, the overall time complexity is $O(N + 26)$, which simplifies to $O(N)$.

* Space complexity: $O(26)$ = $O(1)$

    The `freq` array can store at most $26$ unique tasks, resulting in $O(26)$ space complexity. Other variables used in the algorithm have constant space requirements. Therefore, the overall space complexity is $O(1)$.

---