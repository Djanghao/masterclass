# Official Solution

**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solution/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/537007535" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Overview

We need to rearrange the `1`s in the given array so that they are grouped within a single contiguous subarray of length equal to the total count of `1`s in the array. The fewer `0`s present in this subarray, the fewer swaps we will need to achieve the desired arrangement.

To determine the minimum number of swaps required, we should look for a subarray of length `ones` that already contains the maximum possible number of `1`s. If we can find such a subarray, then the number of swaps needed will simply be the count of `0`s within it. 

![Swapping 0's and 1's](../Figures/1151/1151-1.png)

*Figure 1. Find a subarray of length `ones` and swapping 0's with 1's.*

---

### Approach 1: Sliding Window with Two Pointers

#### Intuition

We need an efficient way to track subarrays of length `ones` while keeping count of how many `1`s each subarray contains. A brute-force approach that checks all possible subarrays would be too slow, so we use a sliding window technique with two pointers, `left` and `right`.

To start, we initialize a window of size `ones` and count how many `1`s it contains, storing this in `cnt_one`. As we slide the window one step at a time by moving `right` forward, we also update `cnt_one` by adding the new element at `data[right]` and removing the element at `data[left]`. This way, we efficiently track the number of `1`s in the current window without recalculating from scratch.

As we slide the window across the array, we keep track of the maximum count of `1`s found in any window and store it in `max_one`. Since our goal is to have all `1`s grouped in a window, the minimum swaps required to achieve this will be the number of `0`s in the best window, which is `ones - max_one`.

!?!../Documents/1151_Minimum_Swaps_to_Group_All_1s_Together.json:758,368!?!

#### Algorithm

- Count the total number of ones in `data` which determines the required window size for grouping ones together.
- Initialize `cnt_one` to track the count of ones in the current window and `max_one` to store the maximum number of ones found in any valid window.
- Use two pointers, `left` and `right`, to define a sliding window.
- Iterate over `data` with `right`, adding each element to `cnt_one` to keep track of the number of ones in the current window.
- If the window size exceeds `ones`, shrink the window by removing the leftmost element and updating `cnt_one` accordingly.
- Update `max_one` with the maximum number of ones found in any valid window.
- Compute the minimum swaps needed as `ones - max_one`, representing the number of zeros that need to be swapped to group all ones together.
- Return the computed minimum swaps.

#### Implementation

<iframe src="https://leetcode.com/playground/WvWi9LiZ/shared" frameBorder="0" width="100%" height="412" name="WvWi9LiZ"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input array `data`.

- Time complexity: $O(n)$

    The algorithm iterates through the array once using a sliding window approach. The `while` loop runs until the `right` pointer reaches the end of the array, which takes $O(n)$ time. Inside the loop, the operations (updating `cnt_one`, checking the window size, and updating `max_one`) are all constant time operations, $O(1)$. The initial sum calculation also takes $O(n)$ time. Therefore, the overall time complexity is $O(n)$.

- Space complexity: $O(1)$

    The algorithm uses a constant amount of extra space. The variables `ones`, `cnt_one`, `max_one`, `left`, and `right` are all integers and do not depend on the input size. No additional data structures are used that scale with the input size. Therefore, the space complexity is $O(1)$.

---

### Approach 2: Sliding Window with Deque (Double-ended Queue)

#### Intuition

Instead of using two pointers to manage the sliding window, we can use a deque (double-ended queue) to efficiently maintain a window of size `ones`. The main idea remains the same: we want to keep track of the number of `1`s within a fixed-length window while iterating through the array.

We begin by initializing a deque, `deque`, and populating it with the first `ones` elements. This gives us our starting window. From there, as we slide the window forward, we push new elements to the right end while simultaneously removing the oldest element from the left end. This ensures that `deque` always holds exactly `ones` elements at any given time.

Throughout this process, we keep track of how many `1`s are present in the deque, just as we did in the previous approach. By maintaining the maximum count of `1`s encountered, we can determine the minimum number of swaps needed, which is calculated as `ones - max_one`. This method provides a structured way to handle the sliding window while leveraging the efficiency of a deque for easy insertions and removals from both ends.

#### Algorithm

- Count the total number of ones in `data` to determine the target window size for grouping ones together.
- Initialize `cnt_one` to track the count of ones in the current sliding window and `max_one` to store the maximum number of ones found in any valid window.
- Use a deque to maintain a sliding window of size equal to `ones`, allowing efficient addition and removal of elements.
- Iterate over `data`, adding each element to the deque and updating `cnt_one` accordingly.
- If the deque size exceeds `ones`, remove the leftmost element to maintain the correct window size and update `cnt_one`.
- Update `max_one` with the maximum number of ones seen in any valid window.
- Compute the minimum swaps needed as `ones - max_one` since this gives the number of zeros that must be swapped to group all ones together.
- Return the computed minimum swaps.

#### Implementation

<iframe src="https://leetcode.com/playground/bNNufjxo/shared" frameBorder="0" width="100%" height="446" name="bNNufjxo"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input array `data`.

- Time complexity: $O(n)$

    The algorithm iterates through the array once using a `for` loop, which takes $O(n)$ time. Inside the loop, the operations (adding to the deque, updating `cnt_one`, checking the deque size, removing from the deque, and updating `max_one`) are all constant time operations, $O(1)$. The initial sum calculation also takes $O(n)$ time. Therefore, the overall time complexity is $O(n)$.

- Space complexity: $O(n)$

    The algorithm uses a `Deque` to maintain a sliding window of size `ones`. In the worst case, the deque can store up to `ones` elements, which is proportional to the input size $n$ (if all elements are 1s). Therefore, the space complexity is $O(n)$. The other variables (`ones`, `cnt_one`, `max_one`) use constant space, $O(1)$. Thus, the overall space complexity is $O(n)$.

---