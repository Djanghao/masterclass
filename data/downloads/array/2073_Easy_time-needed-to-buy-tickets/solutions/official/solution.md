# Official Solution

**Link:** [https://leetcode.com/problems/time-needed-to-buy-tickets/solution/](https://leetcode.com/problems/time-needed-to-buy-tickets/solution/)

---

[TOC]

## Solution

---

### Overview

We have a queue of people who each want to buy a certain number of tickets. We are given an array where each element represents the number of tickets each person wants to buy. We need to find out how much time it will take for the person at a specific position `k` in the queue to finish buying their tickets.

**Key Observations:**
1. Each person takes exactly 1 second to buy a ticket.
2. A person can only buy 1 ticket at a time before going to the back of the line.
3. Once a person has bought all the tickets they want, they leave the line.
4. The order of people in the line is fixed, meaning the person at the front of the line (position 0) gets served first, then the person behind them, and so on.

---

### Approach 1: Simulation Using Queue

#### Intuition

We can simulate the ticket-buying process by using a queue of indexes. We dequeue each person from the front of the queue and sell them a ticket. If an individual still needs more tickets, we re-enqueue them to the end.

In summary, we simulate the process with a queue containing the indices of the people in `tickets` and iterating until the queue is empty. In each iteration, we dequeue the front person from the queue and sell them one ticket. If the `k`th person has bought all their tickets, we return the time. After processing each index, we add it back to the end of the queue if the corresponding person still needs more tickets.

The following is an illustration demonstrating the queue approach:

!?!../Documents/2073/queue_solution.json:1026,835!?!

> **Note:** The eye symbol with dots indicates the perspective or viewpoint from which the queue container should be observed.

#### Algorithm

- Initialize a queue `queue`.
- Iterate through the `tickets` array:
    - Add the index `i` to the `queue`.

- Initialize `time` to 0.

- Enter a loop that continues until the `queue` is empty:
    - Increment `time` by 1.
    - Get the front element `front` from the `queue`.
    - Decrement `tickets[front]` by 1 to buy one ticket for the person at index `front`.
    - If the person at index `k` has bought all their tickets (`k == front && tickets[front] == 0`):
        - Return the `time`.
    - If there are more tickets at index `front`:
        - Re-add the index `front` to the end of the `queue` (`queue.add(front)`).

- Return `time`.

#### Implementation

<iframe src="https://leetcode.com/playground/TQjZ84Ga/shared" frameBorder="0" width="100%" height="500" name="TQjZ84Ga"></iframe>

#### Complexity Analysis

Let $n$ be the length of the tickets array and $m$ be the maximum number of tickets at each index.

* Time complexity: $O(n \cdot m)$

    The time complexity of this algorithm is dominated by the while loop that simulates the ticket-buying process. This loop runs until the `queue` is empty, and in the worst case, where all people have the maximum number of tickets `m`, the loop will run $O(n \cdot m)$ times.

* Space complexity: $O(n)$

    The space complexity is $O(n)$, as the algorithm uses a `queue` to store the indices of all people, which requires additional space proportional to the length of the tickets array.

---

### Approach 2: Simulation Without Queue

#### Intuition

The above approach used a queue to simulate the ticket-buying process, which introduced auxiliary space. We can simulate this process in constant space by iterating multiple times through all the people in the line and buying one ticket for each person until the person at index `k` has bought all their tickets. 

We use a nested loop to simulate the process. The outer loop represents each pass through the line or the turn, where each person has an opportunity to buy one ticket on each turn.

Inside this outer loop, we have the inner loop. This loop is responsible for actually buying the tickets. The inner loop goes through each person in the line, one after the other, starting from the front of the line and moving towards the end, and buys one ticket for each person who still needs one. After each purchase, we increment the time.

We repeat this process until the target person (at position `k`) has bought all their tickets. Once that happens, we stop the simulation and return the time.

#### Algorithm

- Initialize `n` as the length of the `tickets` array and `time` to 0.

- If the person at index `k` only needs one ticket (`tickets[k] == 1`):
    - Return `k + 1` (the time required to buy that single ticket).

- Enter a loop that continues until the person at index `k` has bought all their tickets:
    - Iterate through the `tickets` array:
        - If the person at index `i` still needs to buy tickets (`tickets[i] != 0`), one ticket is bought for that person by decrementing `tickets[i]` by 1 and incrementing the time by 1. 
        - If the person at index `k` has bought all their tickets (`tickets[k] == 0`), return the `time`.

- Return `time` (the total time required for the person at index `k` to buy all their tickets).

#### Implementation

<iframe src="https://leetcode.com/playground/R8J4kNrd/shared" frameBorder="0" width="100%" height="500" name="R8J4kNrd"></iframe>

#### Complexity Analysis

Let $n$ be the length of the tickets array and $m$ be the maximum number of tickets at each index.

- Time complexity: $O(n \cdot m)$

    The outer while loop continues until the person at position `k` buys all of their tickets. The inner for loop iterates through all people in the tickets array. So, the overall time complexity is $O(n \cdot m)$.

- Space complexity: $O(1)$

    The space complexity is $O(1)$ as the algorithm uses only a constant amount of extra space.

---

### Approach 3: Using One Pass

#### Intuition

The above two solutions explicitly simulated the process of buying tickets for each person in the queue. However, we can develop a more efficient approach because we know how many tickets the `k`th person needs. That is, we can directly calculate the time required based on the number of tickets each person needs without explicitly modeling the entire sequential process of buying tickets.

We can break down the entire problem into two cases:
1. **Case 1:** The current person is before or at the desired person `k`.
2. **Case 2:** The current person is after `k`.

By considering these two cases, we can directly calculate the time required for the `k`th person to buy all their tickets.

**Case 1:** If the current person is before or at the desired person `k`:

- We will buy the minimum number of tickets between what the `k`th person needs and what the current person needs.
- For example: If the `k`th person needs 3 tickets, and the current person needs 2 tickets, we will buy 2 tickets for the current person. Similarly, if the `k`th person needs 2 tickets, and the current person needs 4 tickets, we will buy 2 tickets for the current person.
- This is because we want to ensure that the `k`th person gets the tickets they need, and people before the `k`th person will only have the opportunity to buy up to `tickets[k]` tickets.

**Case 2:** If the current person (`i`) is after `k`th person i.e, `i > k`:

- We buy the minimum of (one less than the number of tickets needed by person `k`) and the current person.
- People after `k` in line will have fewer opportunities to buy tickets than person `k` does. If they need fewer than `tickets[k]` tickets, they will be able to purchase them all. Otherwise, they will purchase `tickets[k] - 1` tickets. 
- For example: If the `k`th person needs 3 tickets (`tickets[k] = 3`), and the current person needs 1 ticket, we will buy 1 ticket for the current person. Conversely, if the current person needs 3 tickets, we will buy 2 tickets for the current person. The current person will only have the opportunity to buy 2 tickets before person `k` has purchased all of their tickets.

In simpler terms, when the current person is before or at the `k`th person, we buy the minimum number of tickets needed by both people. When we are at a person after the `k`th person, we know the current person will only have the opportunity to buy `tickets[k] - 1` tickets, so we buy the minimum between that and the current person's needed tickets.

The following is an illustration demonstrating the one-pass approach:

!?!../Documents/2073/approach_three.json:1000,301!?!

#### Algorithm
 
- Initialize `time` to 0.

- Iterate through the `tickets` array:
    - If the current index `i` is less than or equal to `k` (`i <= k`):
        - Increment `time` by the minimum of `tickets[k]` and `tickets[i]`
    - Else (if the current index `i` is greater than `k`):
        - Increment `time` by the minimum of (`tickets[k] - 1`) and `tickets[i]`

- Return `time` (the total time required for the person at index `k` to buy all their tickets).

#### Implementation

<iframe src="https://leetcode.com/playground/R6zB4yXJ/shared" frameBorder="0" width="100%" height="395" name="R6zB4yXJ"></iframe>

#### Complexity Analysis

Let $n$ be the length of the tickets array.

* Time complexity: $O(n)$

    The algorithm iterates through each person in the `tickets` array once using a for loop. The body of the loop contains constant-time math operations. Therefore, the time complexity is $O(n)$.

* Space complexity: $O(1)$

    The only additional space used in this solution is for variables like `time`, `i`, and `k`. Therefore, the space complexity is $O(1)$.

---