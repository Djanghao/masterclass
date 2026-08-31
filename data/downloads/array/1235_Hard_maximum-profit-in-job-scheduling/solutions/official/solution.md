# Official Solution

**Link:** [https://leetcode.com/problems/maximum-profit-in-job-scheduling/solution/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/solution/)

---

[TOC]

## Solution

--- 

### Overview

We have N jobs each having some profit associated with it, and we want to gain maximum profit by selecting some non-conflicting jobs. Two jobs A and B represented as `(startTime, endTime)` by `(startA, endA)` and `(startB, endB)` are **_non-conflicting_** if either job A starts after job B ends which can be represented by condition `startA >= endB`, or if job B starts after job A ends which can be represented by `startB >= endA`.

We can observe that for each job, there are two options, either to schedule it or not. The total number of possible combinations with N jobs is $$2^N$$. The brute force approach is to enumerate every possible combination. However, we want a better-optimized approach. We can achieve this by applying our definition for **_non-conflicting_** jobs. If we schedule the job at index `i` that ends at `endTime[i]`, then all the jobs which have a `startTime` before `endTime[i]` can be discarded. The next job to schedule at index `j` should have a start time, `startTime[j]`, such that `startTime[j] >= endTime[i]`.

There are two key characteristics of this problem that we should take note of at this time.  First, a job cannot be scheduled if a conflicting job has already been scheduled. In other words, each decision we make is affected by the previous decisions we have made.  Second, the problem asks us to **maximize** the profit by scheduling non-conflicting jobs.  These are two common characteristics of dynamic programming problems, and as such we will approach this problem using dynamic programming.

</br>

---

### Approach 1: Top-Down Dynamic Programming + Binary Search

**Intuition**

Let's start at time zero, before the `startTime` of any job, at this point we can choose any job to schedule first. Once the first job has ended, we can iterate over all of the jobs and only consider scheduling those that start after the current time.  The process of repeatedly iterating over the jobs array is very time-consuming and we can do better: if we sort our jobs according to start time, then we can apply binary search to find the next job. After sorting jobs according to `startTime`, to find the index of the first non-conflicting job, binary search for the `endTime` of the current job in the list of start times for all jobs.

For each job, we will try two options:
- Schedule this job and move on to the next non-conflicting job using binary search.
- Skip this job and move on to the next available job. 

Then we can make an informed decision about whether we should schedule the job based on which of the above two options results in the greater profit.

This recursive approach will have repeated subproblems; this can be observed in the figure below. Notice, the subtree with root $$2$$ is repeated signifying that we must solve this subproblem more than once. 
![fig](../Figures/1235/1235A.png)

To address this issue, the first time we calculate `maxProfit` for a certain `position`, we will store the value in an array; this value represents the maximum profit we can get from the jobs at indices from `position` to the end of the array.  The next time we need to calculate `maxProfit` for this `position`, we can look up the result in constant time. This technique is known as memoization and it helps us avoid recalculating repeated subproblems.

**Algorithm**

1. Store the `startTime`, `endTime` and `profit` of each job in `jobs`.
2. Sort the `jobs` according to their starting time.
3. Iterate over jobs from left to right, where `position` is the index of the current job.  For each job, we must compare two options:
   - i. Skip the current job (earn 0 profit) and move on to consider the job at the index `position + 1`.
    - ii. Schedule the current job (earn profit for the current job) and move on to the next non-conflicting job whose index is `nextIndex`. `nextIndex` is determined by using binary search in the `startTime` array.
4. Return the maximum profit of the two choices and record this profit in the array `memo` (memoization).

**Implementation**

<iframe src="https://leetcode.com/playground/XQJPi7Dz/shared" frameBorder="0" width="100%" height="500" name="XQJPi7Dz"></iframe>


**Complexity Analysis**

Let $$N$$ be the length of the `jobs` array.

* Time complexity: $$O(N\log N)$$
                   
  Sorting jobs according to their starting time will take $$O(N\log N)$$.
                   
  The time complexity for the recursion (with memoization) is equal to the number of times `findMaxProfit` is called times the average time of `findMaxProfit`. The number of calls to `findMaxProfit` is $$2*N$$ because each non-memoized call will call `findMaxProfit` twice. 
 Each memoized call will take $$O(1)$$ time while for the non-memoized call, we will perform a binary search that takes $$O(log N)$$ time, hence the time complexity will be $$O(N\log N + N)$$.
                   
  The total time complexity is therefore equal to $$O(N\log N)$$.

* Space complexity: $$O(N)$$

  Storing the starting time, ending time, and profit of each job will take $$3\cdot N$$ space. 
  Hence the complexity is $$O(N)$$.

  The space complexity of the sorting algorithm depends on the implementation of each programming language. For instance, in Java, the Arrays.sort() for primitives is implemented as a variant of quicksort algorithm whose space complexity is $$O(\log 
  N)$$. In C++ sort() function provided by STL is a hybrid of Quick Sort, Heap Sort and 
  Insertion Sort with the worst-case space complexity of $$O(\log N)$$. Thus the use of 
  inbuilt sort() function adds $$O(\log N)$$ to space complexity.
                    
  The result for each `position` will be stored in `memo` and `position` can have the values from $0$ to $N$, thus the space required is $$O(N)$$. Also, stack space in recursion is equal to the maximum number of active functions.  In the scenario where every job is not scheduled, the function call stack will be of size $$N$$.
                    
  The total space complexity is therefore equal to $$O(N)$$.
    

<br/>

---

### Approach 2: Bottom-Up Dynamic Programming + Binary Search

**Intuition**

In the previous approach, the recursive calls incurred stack space. This can be avoided by applying the same approach in an iterative manner which is generally faster than the top-down approach. In this approach, we start from `position = n` which is our base case because when there are no more jobs to schedule the maximum profit must be 0.  We will traverse the `jobs` array from right to left and build up `memo` with the previously calculated maximum profits. In order to build up `memo`, for each index, we will check the profit that can be obtained by scheduling and not scheduling the job at that index. 

1. If we schedule the job at index `i`, we will apply binary search to find the index (`nextIndex`) of the first non-conflicting job. The total profit by scheduling the job at index `i` is the sum of the profit of the current job and the value of `memo[nextIndex]`.
2. If we skip the job at index `i`, the maximum profit will be the same as `memo[i+1]` which is the maximum profit that can be obtained by starting at the next job. 

The maximum profit obtained from the above two options will be stored at `memo[i]` which represents the maximum profit we can achieve by scheduling non-conflicting jobs between index `i` and the end of the array.

**Algorithm**

1. Store the `startTime`, `endTime` and `profit` of each job in `jobs`.
2. Sort the jobs according to their starting time.
3. Iterate over the jobs from right to left find the `currProfit` for each job. `currProfit` is the sum of the current job's profit and the maximum profit obtained by scheduling jobs between `nextIndex` and the end of the jobs array(`memo[nextIndex]`).
4. For each index `i`, set `memo[i]` equal to the maximum between `currProfit` and `memo[i+1]`. If `currProfit` is greater, then it's more profitable to schedule the job at index `i`, otherwise, it's better not to schedule this job.
5. Return the value `memo[0]`.


**Implementation**


<iframe src="https://leetcode.com/playground/YN74exRe/shared" frameBorder="0" width="100%" height="500" name="YN74exRe"></iframe>


**Complexity Analysis**

 Let $$N$$ be the length of the `jobs` array.

* Time complexity: $$O(N\log N)$$

  Sorting jobs according to their starting time will take $$O(N\log N)$$ time.
  
  We iterate over all $$N$$ jobs from right to left and for each job we perform a 
  binary search which takes $$O(\log N)$$, so this step also requires $$O(N\log N)$$ time.
  
  The total time complexity is therefore equal to $$O(N\log N)$$.
  
* Space complexity: $$O(N)$$

  Storing the start time, end time, and profit of each job takes $$3\cdot N$$ space. 
  Hence the complexity is $$O(N)$$.
    

<br/>

---
### Approach 3: Sorting + Priority Queue

**Intuition**

This problem can be correlated to [Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/) where each job can be thought of as a pair of startTime and endTime (a link in the chain). Now consider that each link in the chain has a profit associated with it, and rather than making the longest chain, our goal is to make the most profitable chain. 

Considering the problem this way, it becomes similar to [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) with the goal of maximizing the profit instead of length. As such, we can approach this problem in a similar way, by first sorting the jobs according to their start time and then for each job, choose the most profitable chain of jobs to add the current job to. 

Let's walk through an example to see how this will work:

!?!../Documents/1235_maximum_profit_in_job_scheduling.json:960,720!?! <br>

Notice that for every new job, we iterate over all of the previous job chains to find the most profitable chain that ends at or before the current job starts.  This results in $$O(N^2)$$ time complexity. Can we do better?

Let's take a moment and think about how we can optimize this approach.

There are two key observations to make: 
1. For each job we want to find all chains that end before the current job's start time.  
2. Since the jobs are sorted according to start time if a chain does not conflict with the current job, then it will also not conflict with any future job. 

The first observation tells us that we want to store the existing chains so that those with the earliest end time can be accessed efficiently.  The second observation tells us that we do not need to remember chains that have ended, we only need to remember the maximum profit from any chain that has ended.  These observations (accessing chains that have earlier end times and removing them from the data structure) hint that a heap is an efficient data structure to store the chains.  

**Algorithm**

We will iterate over the jobs from left to right and for each job, we will check if this job can be appended to any previous chain of jobs by popping out the chains from the heap. Among all chains that do not conflict with the current job, we will append the current job to the chain with the highest profit. When we append the current job to the highest profit chain, we form a new chain. This job chain will then be pushed into the heap as a pair of the end time and the total profit (the current job's profit plus maximum profit from non-conflicting chains).

However, there is a tricky part here. When we pop a job chain from the heap we don't push it back into the heap, although this job chain can still be combined with other jobs in the future. To handle this case we introduce a variable `maxProfit` whenever we pop a job chain from heap we compare its profit with the `maxProfit` and update it accordingly. The reason is that the jobs are sorted and hence if we pop out a chain from the heap for the `ith` job then it implies that this chain can be combined with any other job that comes after index `i`. Therefore we only need to store the chain's profit. Furthermore, since it is always optimal to use the most profitable chain, we only need to keep track of the maximum profit seen so far. Formally at the time of `ith` iteration, the value of `maxProfit` will be the maximum profit of a set of job chains to which the `ith` job can be appended.

1. Store the `startTime`, `endTime`, and `profit` of each job in `jobs`.
2. Sort the `jobs` according to their starting time.
3. Iterate over jobs from left to right, where `i` is the index of the current job. For each job
    - While the job chain at the top of the priority queue does not conflict with the current job, pop from the priority queue.
    - For each popped job chain compare its total profit with the `maxProfit` and update `maxProfit` accordingly.
4. Push the pair of ending time and the combined profit (`maxProfit` + profit of this job) into the heap. This item represents the chain created by adding the current job to the most profitable job chain.
5. After iterating over all the jobs, compare the profit of the remaining chains in the priority queue with the `maxProfit`. Return the value of `maxProfit`.

**Implementation**

<iframe src="https://leetcode.com/playground/HwUQ8Ct3/shared" frameBorder="0" width="100%" height="500" name="HwUQ8Ct3"></iframe>


**Complexity Analysis**

 Let $$N$$ be the length of the `jobs` array.

* Time complexity: $$O(N\log N)$$

  Sorting jobs according to their starting time will take $$O(N\log N)$$ time.
  
  We iterate over all $$N$$ jobs. For each job, we push the maximum profit job chain into the heap once which takes $$O(\log N)$$ time.

  The total time complexity is therefore equal to $$O(N\log N)$$.

* Space complexity: $$O(N)$$

  Storing the start time, end time, and profit of each job takes $$3\cdot N$$ space. 
  Hence the complexity is $$O(N)$$.

  The space complexity of the sorting algorithm depends on the implementation of each programming language. For instance, in Java, the Arrays.sort() for primitives is implemented as a variant of quicksort algorithm whose space complexity is $$O(\log 
  N)$$. In C++ sort() function provided by STL is a hybrid of Quick Sort, Heap Sort and 
  Insertion Sort with the worst-case space complexity of $$O(\log N)$$. Thus the use of 
  inbuilt sort() function adds $$O(\log N)$$ to space complexity.
                    
  Each of the $$N$$ jobs will be pushed into the heap.  In the worst-case scenario, when all $$N$$ jobs end later than the last job starts, the heap will reach size $$N$$.
                    
  The total space complexity is therefore equal to $$O(N)$$.

    

<br/>

---