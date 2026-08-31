# Official Solution

**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solution/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solution/)

---

[TOC]

## Solution

---

### Overview

Given an array of integers `nums`, we need to find the length of its longest subarray that is either strictly increasing or strictly decreasing.

A subarray is a continuous sequence of elements from the original array. For example, in the array `[1, 2, 3, 4, 5]`, valid subarrays include `[2, 3]`, `[1]`, and `[3, 4, 5]`. Note that `[1, 2, 4]` is not a subarray but rather a subsequence, as its elements are not continuous in the original array.

In a strictly increasing subarray, each element must be greater than the previous element. Similarly, in a strictly decreasing subarray, each element must be less than the previous element.
    
> Note: A subsequence is a set of numbers from an array that are in the same order as they appear in the array, but not necessarily in adjacent positions. 

---

### Approach 1: Brute Force

#### Intuition

Since the problem constraints are very small (`nums.length <= 50`), a brute force approach is feasible here. We examine all possible subarrays of `nums`, check if they are increasing, and track the length of the longest increasing one. Then, we repeat the process for decreasing subarrays. The maximum length found among these two is our answer.

We start by iterating through the array, treating each element as the starting point of a subarray. For each starting point, we run an inner loop that continues as long as the current element is greater than the previous one, indicating an increasing sequence. Once this condition fails, we exit the loop. Throughout the process, we track the length of the longest increasing subarray found so far in a variable called `maxLength`.

After completing the search for increasing subarrays, we repeat the same logic, but this time we check for strictly decreasing subarrays. Again, we update `maxLength` whenever we find a longer decreasing subarray.

Once both loops are finished, `maxLength` will contain the length of the longest subarray that is either strictly increasing or strictly decreasing. This value can then be returned as the final result.

#### Algorithm

- Initialize a variable `maxLength` to `0` to track the length of the longest monotonic subarray.
- For finding the longest increasing subarray:
  - Iterate through each position in the array as a potential starting point.
  - Initialize a variable `currLength` to `1` for each starting position.
  - From the start position, iterate through subsequent elements:
     - If the current element is greater than the previous element, increment `currLength` by 1.
     - If the current element is not greater than the previous element, break the inner loop.
  - Update `maxLength` to be the largest of itself and the current `currLength`.
- For finding the longest decreasing subarray, follow the same steps as above, but increment `currLength` if the current element is less than the previous element.
- Return the final value of `maxLength`, which represents the length of the longest strictly increasing or strictly decreasing subarray found.

#### Implementation

<iframe src="https://leetcode.com/playground/4vDyFrMj/shared" frameBorder="0" width="100%" height="500" name="4vDyFrMj"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input array.

- Time complexity: $O(n^2)$

    The solution uses two nested loops to find both increasing and decreasing sequences. For each starting position in the outer loop (which runs $n$ times), the inner loop can potentially examine all remaining elements (up to $n$ elements). This gives us $O(n^2)$ operations for finding increasing sequences. The same process is repeated for finding decreasing sequences, resulting in another $O(n^2)$ operations. Therefore, the total time complexity is $O(n^2)$.

- Space complexity: $O(1)$

    The solution only uses a constant amount of space to store the variables `maxLength` and `currLength`. No additional data structures are created, and the space used does not grow with the input size. Therefore, the space complexity is constant, or $O(1)$.  

---

### Approach 2: Single Iteration

#### Intuition

In our previous approach, we did a lot of repetitive work. In both the loops, we iterate over the array and compare adjacent elements. The only difference was the type of subarray we were counting. This suggests that the two loops can likely be combined into a single loop. Also, when we break from the inner loop after exploring a subarray, we again iterate over almost the same subarray in the next iteration, when the starting element shifts by one to the left. We can make this process more efficient by completing the exploration in a single iteration.

We iterate over `nums` and along with `maxLength`, we'll now maintain two variables `incLength` and `decLength`. These will track the length of the increasing and decreasing subarrays ending at the current element we are iterating over. Here’s how we handle each element during the iteration:
1. Current element $>$ Previous element: This means the current element can extend an increasing subarray. So, we increment `incLength` by `1`. At the same time, we reset `decLength` to `1`, since the longest decreasing subarray ending at this element is the element itself.
2. Current element $<$ Previous element: Now, the current element can extend a decreasing subarray. We increment `decLength` by `1` and reset `incLength` to `1`.
3. Current element $=$ Previous element: Since we are looking for strictly increasing or decreasing subarrays, neither `incLength` nor `decLength` can increase in this case. We reset both to `1`.

At each step, we update `maxLength` with the larger of `incLength` or `decLength`. Once the loop finishes, `maxLength` will hold the length of the longest strictly increasing or decreasing subarray. We then return `maxLength` as the final answer.

The slideshow below demonstrates this algorithm in action:

!?!../Documents/3105/slideshow.json:1042,542!?!

#### Algorithm

- Initialize variables:
  - `incLength` to `1` to track the current length of an increasing sequence.
  - `decLength` to `1` to track the current length of a decreasing sequence.
  - `maxLength` to `1` to store the length of the longest monotonic subarray found.
- Iterate through the array from the first element to the second-to-last element:
  - Compare each element with its next element.
  - If the next element is greater than the current element:
    - Increment `incLength` by `1` to extend the increasing sequence.
    - Reset `decLength` to `1` as the decreasing sequence breaks.
  - If the next element is less than the current element:
    - Increment `decLength` by `1` to extend the decreasing sequence.
    - Reset `incLength` to `1` as the increasing sequence breaks.
  - If the next element equals the current element:
    - Reset both `incLength` and `decLength` to `1` as both sequences break.
  - Update `maxLength` to be the larger among itself, `incLength`, and `decLength`.
- Return the final value of `maxLength`, which represents the length of the longest strictly monotonic subarray.

#### Implementation

<iframe src="https://leetcode.com/playground/Q2CTk6AV/shared" frameBorder="0" width="100%" height="500" name="Q2CTk6AV"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input array `nums`.

- Time complexity: $O(n)$  
  
    The algorithm iterates through the array exactly once using a single loop, comparing adjacent elements to determine whether the sequence is increasing or decreasing. Each comparison and update operation is performed in constant time. Therefore, the overall time complexity is $O(n)$.

- Space complexity: $O(1)$  
  
    The algorithm uses a constant amount of additional space, with variables `incLength`, `decLength`, and `maxLength` to track the lengths of the sequences and the largest length encountered. No extra data structures are used, so the space complexity is $O(1)$.

---