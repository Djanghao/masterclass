# Official Solution

**Link:** [https://leetcode.com/problems/winner-of-the-linked-list-game/solution/](https://leetcode.com/problems/winner-of-the-linked-list-game/solution/)

---

[TOC]

## Solution

---

### Overview

The linked list is made up of pairs of **odd** and **even** nodes. **Even** nodes are at even indexes and have even values. **Odd** nodes are at odd indexes and have odd values. For a given pair of **odd** and **even** nodes, the node with the higher value's team gets a point.

Note there is an equal number of **odd** and **even** nodes in the linked list. 

### Approach: Two Pointer

#### Intuition

We will need to compare the values of each pair of nodes to determine the winning team. To calculate the number of points each team receives, we will traverse the linked list. Linked list traversal is often done using a while loop.

We will create a pointer `even` that starts at the head of the linked list. Every other node is **even**, and the node directly after each **even** node is the corresponding **odd** node in the pair. With each iteration, we set a pointer `odd` to `even.next`. We can then compare the values of `odd` and `even` and assign a point to the appropriate team. After determining which team from this pair receives a point, we set `even` to `odd.next`, which is the next **even** node in the linked list. 

The initial state of the pointers is shown in the image below:

![Example 1](../Figures/3062/3062_1.png)

After processing the list and calculating the points for each team, we use an `if` / `else if` / `else` statement to return the team with the most points: `"Odd"`or `"Even"`,  or `"Tie"` if the teams have the same number of points.

#### Algorithm

1. Initializations:
    - Initialize a ListNode `even` to `head`.
    - Initialize two variables, `odd_points` and `even_points` to `0`.
2. Iterate through the nodes in the linked list while `even != null`:
    - Set a ListNode `odd` to `even.next`.
    - If `even.val > odd.val`, add `1` to `even_points`.
    - Otherwise, the odd node in this pair must have a higher value, so add `1` to `odd_points`. The nodes will never have an equal value because odd-indexed nodes always have odd values and even-indexed nodes always have even values.
    - Set `even` to `odd.next`.
3. Return the winning team:
    - If `odd_points` is greater than `even_points`, return `"Odd"`.
    - Else if `odd_points` is less than `even_points`, return `"Even"`.
    - Otherwise, both teams have the same amount of points, so return `"Tie"`.

#### Implementation

<iframe src="https://leetcode.com/playground/BQiqC6Wi/shared" frameBorder="0" width="100%" height="500" name="BQiqC6Wi"></iframe>

> Note: The `odd` pointer is used for the sake of readability. The comparison `even.val > odd.val` could be done with `even.val > even.next.val`, and at the end of the while loop, `even` would be set to `even.next.next`, which is the standard way to skip a node.

#### Complexity Analysis

Let $n$ be the length of the linked list.

* Time complexity: $O(n)$

    We use a `while` loop to process the list. With each iteration of the while loop, two nodes are processed. The while loop will run $\frac{n}{2}$ times since there are $n$ nodes in the list. With each iteration, we perform $O(1)$ work. Therefore, the time complexity will be linear, i.e. $O(n)$.

* Space complexity: $O(1)$

    We use a handful of variables and no extra space that grows with input size, so the space complexity is constant, i.e. $O(1)$.

---

### Approach 2: Point Difference

#### Intuition

In the above solution, we used two variables to store points. Since there are only two teams, we can use just one variable, `point_difference`, if we represent the `"Even"` team's points as positive and the `"Odd"` team's points as positive negative. A positive `point_difference` indicates the `"Even"` team wins, a negative `point_difference` indicates the `"Odd"` team wins, and a `point_difference` of zero indicates a tie.

**Example 1**

> Input: head = [2,1]
> The "Even" team gets 1 point and the "Odd" team gets 0 points.
> 1 + 0 = 1
> The score is positive, so the "Even" team wins.

**Example 2**

> Input: head = [2,5,4,7,20,5]
> The "Even" team gets 1 point and the "Odd" team gets 2 points.
> 1 + (-2) = -1
> The score is negative, so the "Odd" team wins.

We can traverse the linked list, comparing the values of each pair of nodes. If the **even** node has a higher value, we add `1` to  `point_difference`, whereas if the **odd** node has a higher value, we subtract `1`.

As noted in the above approach, we can use just one node to compare the values of a pair of nodes. For a given pair, `current` is the **even** node, and `current.next` is the corresponding **odd** node.

The initial state of the pointers is shown in the image below:

![Example 2](../Figures/3062/3062_2.png)

#### Algorithm

1. Initializations:
    - Initialize a ListNode `current` to `head`.
    - Initialize a variable, `point_difference`  to `0`.
2. Iterate through the nodes in the linked list while `current != null`:
    - Compare the **even** node (`current_node.val`) with the **odd** node (`current_node.next.val`), adding `1` to `point_difference` if the **even** node has a higher value and subtracting `1` if the **odd** node has a higher value.
    - Set `current` to `current.next.next`.
3. Return the winning team:
    - If `point_difference` is negative, return `"Odd"`.
    - Else if `point_difference` is positive, return `"Even"`.
    - Otherwise, both teams have the same amount of points, so return `"Tie"`. 

#### Implementation

The below implementations use two ways to compare the node values:

1. Boolean Subtraction: (python3)

Expression A: `current.val > current.next.val` 
Evaluates to `true`, the boolean value `1`, when the **even** node has a higher value.

Expression B: `current.val < current.next.val` 
Evaluates to `true`, the boolean value `1`, when the **odd** node has a higher value.

For a given pair of **even** and **odd** nodes, one expression will always evaluate `1` and the other to `0`. To calculate `point_difference`, we subtract expression B from expression A. When the even node has a higher value, it will be `1 - 0`, and when the odd node has a higher value, it will be `0 - 1`. This way, we either add or subtract `1` from the `point_difference`.

2. Ternary: (Java & C++)

The ternary operator functions like an `if` / `else` statement. `condition ? Expression1: Expression2` means "if (condition) then expression 1, else expression 2".

> Note: The comparison could be implemented with a standard `if` / `else` statement like the first approach. These other methods are included in this implementation for demonstrative purposes. Boolean Subtraction can solve some problems more efficiently. The ternary operator should be used with care; it improves readability in some situations but detracts from it in others. In an interview setting it's always best to use common, readable coding practices, and use these tools when they improve readability or are needed for your code's functionality. 

<iframe src="https://leetcode.com/playground/dZ6QAeEJ/shared" frameBorder="0" width="100%" height="480" name="dZ6QAeEJ"></iframe>

#### Complexity Analysis

Let $n$ be the length of the linked list.

* Time complexity: $O(n)$

    We use a `while` loop to process the list. With each iteration of the while loop, two nodes are processed. The while loop will run $\frac{n}{2}$ times since there are $n$ nodes in the list. With each iteration, we perform $O(1)$ work. Therefore, the time complexity will be linear, i.e. $O(n)$.

* Space complexity: $O(1)$

    We use a handful of variables and no extra space that grows with input size, so the space complexity is constant, i.e. $O(1)$.