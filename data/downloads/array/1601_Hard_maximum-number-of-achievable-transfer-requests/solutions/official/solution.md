# Official Solution

**Link:** [https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solution/](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solution/)

---

[TOC]

## Solution

--- 
### Overview

We have $N$ buildings, each having some number of employees; there are some requests by the employees to get transferred from one building to another. We need to return the maximum number of requests that we can accommodate, considering the employee change count in each building should be zero, i.e. if one employee leaves a building, then some other employee should enter it too.

The most important observation is that the total requests could be at a max of $16$. Hence, trying out all the $2^{16}$ possibilities could be a possible solution. We have $16$ requests, and for each one, we can have two options either to consider this request and move the employees or don't consider it and move to the next request. This is similar to the classic 0/1 knapsack problem, as for each request, we can either take it (1) or not (0). We will discuss two approaches, one the recursive and other iterative.

---


### Approach 1: Backtracking

**Intuition**

As we discussed, each request has two options; the first is to accept this and move the employee in request `[x, y]` from building `x` to `y` and the second is to ignore it. Since, in the end, we need to check if the change in each building is zero, we need to have an array where the indices for each building will store the current employee count that has entered or left it.

For every request `[x, y]` that we consider, we will decrement the count for the index `x` in the array and increment the count for `y` denoting that the number of employees in the building `x` has increased by one and similarly for `y` it got decreased by one. When we ignore a request, we don't need to do anything except move on to the next request and repeat the same process until we have reached the end of requests.

Once we iterate over all the requests, we will then check the count for each building, and if it's zero for all, we will count the number of requests we considered in this request and update the maximum requests we have considered so far without violating the constraint. In the end, we can just return the maximum number of requests we considered in a combination.

**Algorithm**

1. Initialize `answer` to `0`; this will store the maximum requests we can consider.
2. Initialize an array `indegree` of size $N$ with all values as `0`. This array will store the employee change count for each building.
3. Start the recursion with `index` and `count` as `0`. The `count` here is the number of requests we have considered in the current combination, for each index:

   i. If we have iterated over all the requests, check if all values in `indegree` are zero. If yes, update the variable `answer` by comparing it to `count`. If all values aren't zero, return.

   ii. For the first option, when we consider this request, update the `indegree` for both the buildings the current request involves. And move on to the next request with count as `count + 1`.

   iii Revert the changes in `indegree` for the  request at `index`; this is the backtracking step.

   iv. For the second option, where we ignore the request, make the recursion call with the following index without changing the `count`.
4. Return `answer`.

**Implementation**

<iframe src="https://leetcode.com/playground/2vVML2oW/shared" frameBorder="0" width="100%" height="500" name="2vVML2oW"></iframe>


**Complexity Analysis**

Here, $N$ is the number of buildings, and $M$ is the number of requests.

* Time complexity: $O(2^M * N)$.

  We iterate over every two possibilities for each of the $M$ requests; this is equal to $2^M$ possibilities. For the leaf nodes, which are $$O(2^{M-1})$$, we will iterate over $N$ buildings to check if the employee change is zero. Therefore the total time complexity would be $O(2^M * N)$.

* Space complexity: $O(N + M)$.

  The array `indegree` is of size $N$, and there would be some stack space as well for the recursion. The maximum number of active stack calls would equal $M$, i.e. when all the requests call would be active. Hence the total space complexity would be $O(N + M)$.
  <br/>

---
### Approach 2: Bitmasking

**Intuition**

We can solve the problem iteratively as well; all we need is a way to iterate over every possible combination of requests that we can consider. We know the number of requests can only go up to $16$, so we can use $N$ bits to represent the state of $N$ requests. The $i^{th}$ bit will be set in the combinations when we consider it; otherwise, it will be zero. Since the number $2^{16}$ is well within the integer limit, we will use an integer to denote the state of a combination.

All the integers from $0$ to $2^{16} - 1$ represent all the possible combinations of requests that we can consider. Each number is a possible combination that we can check if it violates the constraints, i.e. the employee change count should be `0` after considering the requests in this number. Therefore, in this approach, we will iterate over these numbers, considering them as the possible combinations of requests we will consider. For all those combinations that don't violate the constraints, we will update the variable `answer` with the number of `1s` (the number of requests we considered) in the bitwise representation.

![fig](../Figures/1601/1601A.png)

**Algorithm**

1. Initialize `answer` to `0`; this will store the maximum request we can consider.
2. Iterate over the numbers from `0` to `requests.size() - 1`, for each number `mask`:

   i. Initialize the array `indegree` of size $N$ with all values as `0`.

   ii. Store the count of set bits in `mask`  in the variable `bitCount`.

   iii. If `bitCount < answer`, return immediately as this couldn't be a better answer.

   iv. Iterate over the bits in `mask`, and for each set bit, update the array `indegree` for the building it involves.

   v. Iterate over each building and check if the value in the array `indegree` is zero; if it is, then update the variable `answer` to `bitCount`.
3. Return `bitCount`.

**Implementation**


<iframe src="https://leetcode.com/playground/MHzTTuRk/shared" frameBorder="0" width="100%" height="500" name="MHzTTuRk"></iframe>


**Complexity Analysis**

Here, $N$ is the number of buildings, and $M$ is the number of requests.

* Time complexity: $O(2^(M * (M + N))$.

  We iterate over every two possibilities for each of the $M$ requests; this is equal to $2^M$ possibilities. For each bitmask, we may iterate over $N$ buildings and $M$ requests. Therefore the total time complexity would be $O(2^(M * (M + N))$.

* Space complexity: $O(N)$.

  The array `indegree` is of size $N$. Hence the total space complexity would be $O(N)$.
  <br/>

---