# Official Solution

**Link:** [https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solution/](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solution/)

---

[TOC]

## Solution

---

### Overview

We need to find the longest subarray in an integer array where the bitwise AND of all elements equals the maximum possible bitwise AND of any subarray. Bitwise AND results in a value that is always less than or equal to the operands and this operation is commonly used in fields like network filtering, hardware design, and cryptography for tasks such as subnet masking, configuration checks, and data analysis.

--- 

### Approach: Longest consecutive sequence of the maximum value

#### Intuition

To understand this problem, we first need to understand what a bitwise AND operation is. In simple terms, a bitwise AND operation takes two binary representations of an integer and performs the logical AND operation on each pair of the corresponding bits. If both bits are 1, the result is 1; otherwise, it's 0.

For example, take the numbers 12 (which is `1100` in binary) and 7 (`0111` in binary). 
Performing a bitwise AND on these numbers gives the following:

| Bit Position | 3rd Bit | 2nd Bit | 1st Bit | 0th Bit |
|--------------|---------|---------|---------|---------|
| Number 12    |    1    |    1    |    0    |    0    |
| Number 7     |    0    |    1    |    1    |    1    |
| Bitwise AND  |    0    |    1    |    0    |    0    |

As we can see, the result is `0100`, which is the binary representation of `4`.

Now, let’s look at the problem. We're given an array, and the goal is to find a subarray where the bitwise AND of all the numbers is as large as possible. A subarray is a continuous portion of the array, and we want to return the length of the subarray that has the highest bitwise AND value.

The maximum possible bitwise AND of a subarray would be the maximum number in the array itself. This is because the bitwise AND operation with a larger number and a smaller number would always result in a number less than or equal to the smaller number. Therefore, the maximum possible bitwise AND of a subarray can only be achieved when all the numbers in the subarray are equal to the maximum number in the array.

Let’s look at some examples of subarrays and their bitwise AND results:

| Subarray | Bitwise AND Calculation | Result |
|----------|-------------------------|--------|
| [4, 6] | 4 AND 6 = 0100 AND 0110 | 0100 = 4 |
| [4, 6, 7] | 4 AND 6 AND 7 = 0100 AND 0110 AND 0111 | 0100 = 4 |
| [4, 6, 7, 8] | 4 AND 6 AND 7 AND 8 = 0100 AND 0110 AND 0111 AND 1000 | 0000 = 0 |
| [6, 7] | 6 AND 7 = 0110 AND 0111 | 0110 = 6 |
| [6, 7, 8] | 6 AND 7 AND 8 = 0110 AND 0111 AND 1000 | 0000 = 0 |
| [7, 8] | 7 AND 8 = 0111 AND 1000 | 0000 = 0 |
| [8, 8] | 8 AND 8 = 1000 AND 1000 | 1000 = 8 |

From this, we can see that the largest bitwise AND can only be achieved when all the elements in the subarray are equal to the maximum number. So, the task is to find the longest subarray where all the numbers are the maximum value in the array.

#### Algorithm

1. Initialize `max_val = 0`, `ans = 0`, and `current_streak = 0` to track the maximum value, the length of the longest subarray, and the current streak of elements, respectively.
2. Iterate through each element `num` in the array `nums`.
3. If `max_val < num`, update `max_val` to `num`, and reset `ans` and `current_streak` to 0 since a new maximum value is found.
4. If `max_val == num`, increment `current_streak` by 1 because the current element is equal to the maximum value.
5. If `max_val != num`, reset `current_streak` to 0 as the current element breaks the streak of numbers equal to the maximum value.
6. Update `ans` to be the maximum of `ans` and `current_streak` to ensure `ans` holds the length of the longest subarray with the maximum value.
7. After the loop finishes, return `ans`, which represents the length of the longest subarray where the bitwise AND equals the maximum value.

#### Implementation 

<iframe src="https://leetcode.com/playground/7VjPNXee/shared" frameBorder="0" width="100%" height="429" name="7VjPNXee"></iframe>

Let $N$ be the length of `nums`.

* Time Complexity: $O(N)$

    The time complexity is $O(N)$ because the function processes each element of the `nums` list exactly once. This is done through a single loop that iterates over the array. Each operation inside the loop—whether it's comparisons, assignments, or finding the maximum—takes constant time. As a result, the total time required scales linearly with the size of the input array.

* Space Complexity: $O(1)$
    
    The function uses a fixed amount of extra space regardless of the size of the input array `nums`. Specifically, it only requires a few variables (`max_val`, `ans`, `current_streak`, and `num`) to keep track of intermediate values. This fixed space usage means the space complexity remains constant.

---