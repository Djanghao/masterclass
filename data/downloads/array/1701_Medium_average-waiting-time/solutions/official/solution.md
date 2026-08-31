# Official Solution

**Link:** [https://leetcode.com/problems/average-waiting-time/solution/](https://leetcode.com/problems/average-waiting-time/solution/)

---

[TOC]

## Solution

---

### Overview

There is a restaurant with a single chef. We are given the arrival time and order preparation time for every customer. This data is already sorted in non-decreasing order of arrival time.

The chef prepares the orders strictly on a **first-come, first-serve** basis. If the chef is busy preparing another order, all the subsequent customers need to wait for their turn. We need to find the average waiting time of all customers. The food preparation time should be included in the waiting time.

Constraints on the number of customers, denoted by `n`, are `1 <= n <= 100000`. Therefore, we need to consider an approach with linear or log-linear time complexity.

---

### Approach: Simulation

#### Intuition

The chef prepares customer orders as soon as they arrive at the restaurant, provided he isn't already busy. He never takes a rest if there is a queue of pending orders. Therefore, the average waiting time will always be minimal. Also, we are not allowed to change the order of customers. So, we can simulate the process in the provided order, maintaining the time when each customer receives their order. Subtracting this time from the customer's arrival time gives us the waiting time for that customer.

There is no waiting time for the first customer apart from the preparation time. Let's say another customer arrives while the chef is preparing this order. How much does this customer need to wait to place their order? The waiting time is given by the time gap between their arrival time and when the first customer receives his order. 

In other words, the chef can only start preparing a customer's order when he is idle or when the customer has arrived at the restaurant, whichever happens later. Adding this to the preparation time gives us the time when the customer receives their order. The waiting time for the customer is given by the difference between the order's delivery time and the customer's arrival time.

Using this approach, we can calculate the sum of the waiting time for all the customers. Dividing it by the total number of customers gives us the average waiting time per customer. Don't forget to calculate this average in a floating-point/double data type for precision.

#### Algorithm

1. Initialize integers `nextIdleTime` and `netWaitTime` with 0.
2. Iterate through the `customers` array:
    - Set `nextIdleTime` as the maximum of customer's arrival time and the current value of `nextIdleTime` plus the order preparation time.
    - Increment `netWaitTime` by the difference of `nextIdleTime` and the customer's arrival time.
3. Divide the `netWaitTime` by `customers.size` to get the `averageWaitTime`.
4. Return the `averageWaitTime`.

!?!../Documents/1701_republish/slideshow1_republish.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/EwJjFmVX/shared" frameBorder="0" width="100%" height="429" name="EwJjFmVX"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `customers` array.

- Time complexity: $O(n)$

   The time complexity remains linear, as the loop traverses the array only once.

- Space complexity: $O(1)$

   We do not use any additional space, so the space complexity is constant.

---