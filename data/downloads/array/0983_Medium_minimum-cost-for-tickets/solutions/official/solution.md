# Official Solution

**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solution/](https://leetcode.com/problems/minimum-cost-for-tickets/solution/)

---

[TOC]

## Solution

### Overview

We are given some integers in the list `days` that represent the days of the year on which we have to travel; these days vary from `1` to `365`. We can travel only if we have a valid train ticket for that day; there are three ticket options.

1. Ticket valid for `1` day at `costs[0]` dollars.
2. Ticket valid for `7` days at `costs[1]` dollars.
3. Ticket valid for `30` days at `costs[2]` dollars.

We need to return the minimum cost that is required to travel on every day that is given. We should take note of two characteristics of this problem at this time. First, as we iterate over the `days`, we must decide if we need to buy a new ticket today or if we already have one that is valid today; this choice will depend on our previous choices of when we bought a ticket and with what validity.  Also, we would need to decide which ticket to buy, which affects future decisions. In other words, each decision we make is affected by the previous decisions we have made. Second, the problem is asking to find the minimum cost required. These two characteristics suggest that we could solve this problem using dynamic programming. We will discuss two approaches using dynamic programming.

---

### Approach 1: Top-Down Dynamic Programming

**Intuition**

On each day, if we don't need to travel, then we don't need to buy another ticket; however, if we need to travel today and don't have a ticket from earlier, then we have three choices; we can choose one of the three tickets with different validity and cost. After this, we will move on to the next day and then repeat the process, i.e., if travel on this day is not required, then move on to the next day; otherwise, make one of the three choices among the tickets. In the end, we will return the cost corresponding to the choice that has the minimum cost. This way, we will iterate over every possibility for each day and return the minimum of all the choices.

For this recursive approach, what are the parameter(s) that we need to track? We only need to track the current day that we are iterating over. We define a function `solve(currDay)` that returns the answer to the problem if we were to start on `currDay`.

In the recursive function, we will start with `currDay` as `1`. The base condition would be when we have covered all the days, which can be identified as `currDay > days[days.length - 1]`. Now we need to decide if we need to travel on this day or not; for this, we will check if the `currDay` is present in `days`. If not, then we don't need to buy a ticket, and hence we simply move on to the next day by returning `solve(currDay + 1)`. To efficiently find if `currDay` is present in `days` or not, we will create a hash set  `isTravelNeeded` which will have all the days on which we need to travel.

If we need to buy a ticket on this day, we have three choices:
1. Buy a 1-day pass. We incur a cost of `costs[0]` and move on to the next day. The total cost is `cost[0] + solve(currDay + 1)`.
2. Buy a 7-day pass. We incur a cost of `costs[1]` and don't need to worry about the next seven days. The total cost is `cost[1] + solve(currDay + 7)`.
3. Buy a 30-day pass. We incur a cost of `costs[2]` and don't need to worry about the next thirty days. The total cost is `cost[2] + solve(currDay + 30)`.

We find all 3 costs and return the minimum of these three options.
This approach, however, is not efficient as there could be three options that we need to iterate over for each of the `K` days (`K` can be `365` at max) that would imply the total operations of $3^K$, which is not efficient. If we observe the below figure, there are repeated subproblems. Notice the green nodes are repeated subproblems signifying that we have already solved these subproblems before. To avoid recalculating results for previously seen subproblems, we will cache the result for each subproblem. The next time we need to calculate the result for a `currDay` we have already calculated, we can look up the result in constant time instead of recalculating the result.

![fig](../Figures/983/983A.png)

**Algorithm**

1. Create a `dp` array with the size of the last day we need to travel plus `1`. Initialize all the values to `-1`, denoting that the answer for this day has not been calculated yet. Also, create a hash set `isTravelNeeded` from `days`.
2. Create a function `solve` that takes `currDay` as an argument:
    - If `currDay` is greater than the last day we need to travel, we can just return `0` as all days have already been covered.
    - Check if `currDay` is not present in `isTravelNeeded` if not, we can just move on to `currDay + 1`.
    - If the answer for `currDay` in the array `dp` isn't `-1`, it implies that the answer has already been calculated; hence just return it.
    - Find the cost for the three tickets we can take for this day, add the corresponding cost, and update `dp[currDay]` accordingly in the recursive call.
3. Call `solve` passing `currDay = 1` and return the answer.

**Implementation**

<iframe src="https://leetcode.com/playground/ge9Smsmn/shared" frameBorder="0" width="100%" height="500" name="ge9Smsmn"></iframe>

**Complexity Analysis**

Here, $K$ is the last day we need to travel, the last value in the array `days`.

* Time complexity: $O(K)$.

  The size of array `dp` is $K + 1$, and we need to find the answer for each of the $K$ states. For each state, the time required is $O(1)$ as there would be only three recursive calls for each state. Therefore, the time complexity would equal $O(K)$.

* Space complexity: $O(K)$.

  The size of array `dp` is $K + 1$; also, there would be some stack space required. The maximum active recursion depth would be $K$, i.e., one for each day. The size of the set `isTravelNeeded` will be equal to the size of `days`, i.e. $N$, considering the integers in `days` will always be strictly increasing we can say $N <= K$. Hence, the space complexity would equal $O(K)$.
  <br/>

---

### Approach 2: Bottom-up Dynamic Programming

**Intuition**

In the previous approach, the recursive calls incurred stack space. This can be avoided by applying the same approach iteratively, which is generally faster than the top-down approach. We will follow a similar approach as the previous one, just in a reverse manner.

We will start with the previous approach's base case and build up the answers for the remaining states using the recursive equation. In this approach, `dp[day]` represents the minimum cost to travel until `day`. For each value of `day`, we got here in one of three ways:

1. We bought a one-day ticket on `day - 1` with cost `costs[0]`.
2. We bought a seven-day ticket on `day - 7` with cost `costs[1]`.
3. We bought a thirty-day ticket on `day - 30` with costs `costs[2]`.

The minimum cost would be the minimum cost of the above three options, i.e.

    dp[day] = Min(dp[day - 1] + costs[0], dp[day - 7] + costs[1], dp[day - 30] + costs[2];

This is the recursive equation that would be required, but as we will iterate over every day from `1` to the last day in the array `days` we need a way to ignore the days where we don't need to travel. For this, we will keep one variable, `i`, that would denote the index of the next day in the array `days` for which we need to travel. If the day we are iterating over now is less than `days[i]` that would imply that we don't need to travel on this day. Hence, the cost for this day would be the same as the previous day.

**Algorithm**

1. Create a `dp` array with a size of the last day we need to travel plus `1`. Initialize all the values to `0`.
2. Initialize `i = 0`; this index represents the index in the array `days` for which we must buy the ticket.
3. Iterate over the days from `1` to the last day in the array `days`, and for each `day`:
    1. If the current `day` is less than `days[i]`, the cost for `dp[day]` would be the same as `dp[day - 1]` as we don't need to travel on this day.
    2. Otherwise, store the minimum of three options per the recursive equation in the array as `dp[day]`. Also, increment the variable `i` as we have bought the ticket for this index and now need to focus on the next index.
4. Return `dp[lastDay]`; `lastDay` is the last value in the array `days`.

**Implementation**

<iframe src="https://leetcode.com/playground/FivkgQ7C/shared" frameBorder="0" width="100%" height="480" name="FivkgQ7C"></iframe>

**Complexity Analysis**

Here, $K$ is the last day that we need to travel, the last value in the array `days`.

* Time complexity: $O(K)$.

  The size of array `dp` is $K$, and we need to iterate over each of the $K$ days. For each day, the work required is $O(1)$. Therefore, the time complexity would equal $O(K)$.

* Space complexity: $O(K)$.

  The size of array `dp` is $K$. Hence, the space complexity would equal $O(K)$.
  <br/>

---