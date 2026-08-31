# Official Solution

**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solution/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given a binary string called `boxes`. Each element in this string represents a box:  
- `0` means the box is empty,  
- `1` means the box contains one ball.

In each operation, we can move a ball to any adjacent box (either to the left or right). Multiple balls can be in the same box at the same time, and we need to figure out how many operations are needed to move all balls to each box.

> Note: The calculation of answer for each index is done considering the initial state of the `boxes` array.

---

### Approach 1: Brute Force

#### Intuition   

Given that the number of boxes is bounded by 2000, we can use brute force techniques to solve this problem. This involves calculating the total number of operations for each box individually and storing the results in an array.

First, we go through all the boxes to check if a box contains a ball. If a box has a ball, we then calculate how many operations are needed to move that ball to the current box by iterating through all other boxes. The number of operations needed to move a ball from one box to another is based on the distance between their positions. This is simply the absolute difference between the indices of the two boxes.

Next, we add up the differences for all the balls and keep a running total of the operations required for each box. These totals are stored in an `answer` array, which holds the result for each box. Finally, after processing all boxes, we return the `answer` array.

#### Algorithm

1. Initialize the Result Array:
   - Create an array `answer` of size equal to the length of the input string `boxes` and initialize all elements to 0.

2. Iterate Through Each Box:
   - Loop through the boxes using an index variable `currentBox`.

3. Check for Balls in the Current Box:
   - If the current box contains a ball (i.e., `boxes.charAt(currentBox) == '1'`):
     - Iterate through all other boxes using an index variable `newPosition`.
       - For each box, calculate the distance to the `currentBox` using the absolute difference `Math.abs(newPosition - currentBox)`.
       - Add this distance to `answer[newPosition]`.

4. Return the Result:
   - After processing all boxes, return the `answer` array.

#### Implementation

<iframe src="https://leetcode.com/playground/4LUJ7Wre/shared" frameBorder="0" width="100%" height="378" name="4LUJ7Wre"></iframe>

#### Complexity Analysis

Let $n$ be the size of the string `boxes`.

- Time Complexity: $O(n^2)$

    The algorithm iterates through each box, and for each box containing a ball, it iterates through all other boxes to calculate the distances. This results in a nested loop structure with $n$ iterations for both the outer and inner loops, leading to a total time complexity of $O(n^2)$.

- Space Complexity: $O(1)$

    We use an `answer` array to store the result. However, since this array is part of the output defined by the problem, it is not considered in the space complexity analysis. Therefore, the overall space complexity remains $O(1)$.

---

### Approach 2: Sum of Left and Right Moves

#### Intuition   

From the previous approach, observe that a ball can move in only one direction: either left or right. If the target box is to the left of the ball, it will move left. If the target box is to the right of the ball, it will move right. So, for each box, some balls will come from the left side, and others will come from the right side.

To calculate the distances for all the balls coming from the left in just one pass, we use a combined approach within a single loop. As we iterate through the boxes from left to right, we keep track of how many balls we’ve encountered so far using the variable `ballsToLeft`. Each time we move to the next box, the distance for all the balls we’ve passed increases by one. So, the total number of operations for those balls increases by the number of balls we've encountered up to that point. We also keep track of the cumulative number of moves using the variable `movesToLeft`.

Similarly, we calculate the distances for the balls coming from the right by iterating through the boxes from right to left. This is achieved using the variable `ballsToRight` to track how many balls we’ve encountered, and `movesToRight` to track the cumulative moves. During this reverse pass, we simultaneously calculate and accumulate the number of moves required for balls coming from the right.

In each iteration, we update the `answer` array by adding the moves calculated from both the left and right sides. The value for each box in `answer[i]` (for the left pass) and `answer[j]` (for the right pass) represents the total moves required for balls to reach that box. 

At the end of the loop, the `answer` array will contain the total number of moves for each box, and we return this array.

#### Algorithm

- Initialize `n` as the length of the `boxes` string and create an array `answer` to store the result.
- Initialize variables `ballsToLeft`, `movesToLeft`, `ballsToRight`, and `movesToRight` to track the number of balls and the moves required to move balls to the left and right, respectively.

- Single pass through the string `boxes`:
  - For each index `i`:
    - Left pass (first half of the loop):
      - Add the current number of moves to the left (`movesToLeft`) to the corresponding index in the `answer` array.
      - Update `ballsToLeft` by adding the number of balls in the current box.
      - Update `movesToLeft` by adding `ballsToLeft` (total balls to the left) to account for the moves required for the next balls.

    - Right pass (second half of the loop):
      - Calculate the corresponding index `j` for the right pass (`n - 1 - i`).
      - Add the current number of moves to the right (`movesToRight`) to the corresponding index in the `answer` array.
      - Update `ballsToRight` by adding the number of balls in the current box.
      - Update `movesToRight` by adding `ballsToRight` (total balls to the right) to account for the moves required for the next balls.

- Return the `answer` array containing the minimum number of operations for each box.

#### Implementation

<iframe src="https://leetcode.com/playground/7kzM6czu/shared" frameBorder="0" width="100%" height="497" name="7kzM6czu"></iframe>

#### Complexity Analysis

Let $n$ be the size of the string `boxes`.

- Time Complexity: $O(n)$

    The algorithm uses a single loop that iterates over the string `boxes` once. Within this loop, it performs constant-time operations such as accessing characters, updating variables, and updating the `answer` array. Since the loop runs $n$ times, the overall time complexity is $O(n)$.

- Space Complexity: $O(1)$

    We use a few integer variables (`ballsToLeft`, `movesToLeft`, `ballsToRight`, `movesToRight`), all of which require constant space. Additionally, we use an `answer` array to store the result. However, since this array is part of the output defined by the problem, it is not considered in the space complexity analysis. Therefore, the overall space complexity remains $O(1)$.
  
---