# Official Solution

**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solution/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a string `blocks`, where each character represents a block that is either black ('B') or white ('W') and the ability to apply an operation to change a white block black an unlimited number of times. Our goal is to find the **minimum number of recoloring operations** needed to create a segment of `k` consecutive black blocks. 

---

### Approach 1: Queue

#### Intuition

Since existing black blocks don’t require recolors, our required number of operations is determined by the number of white blocks within each segment of `k` consecutive blocks. The fewer white blocks in a segment, the fewer recolors we need. This immediately tells us that our task is to identify the segment of `k` consecutive blocks that contains the fewest white blocks.

With this foundation in mind, we can now look at example:

!?!../Documents/2379/slideshow.json:960,540!?!


Now that we know we must evaluate all segments of length `k`, the natural way to approach this is to start from the beginning of the string, count the number of white blocks in the first `k` characters, and then slide forward one position at a time. For each step, we discard the leftmost character from the previous segment and include the next character from the string, updating our count of white blocks accordingly. This allows us to efficiently track the number of white blocks in each segment without recalculating from scratch every time.

To manage this process efficiently, we need a data structure that allows us to maintain a fixed-size window of `k` elements while quickly removing the oldest element and adding a new one. A [queue](https://leetcode.com/explore/learn/card/queue-stack/228/first-in-first-out-data-structure/) is well-suited for this task because it follows the First-In-First-Out (FIFO) principle: the oldest element (leftmost in our segment) is removed first when shifting to the next segment, and the newest element is added at the end.

With this logic, we start by initializing a queue with the first `k` elements and counting the white blocks. As we slide through the string, we remove the first element in the queue and add the next character from the string, adjusting our white block count accordingly. By the end of this process, we will have checked all possible segments of `k` blocks, and we simply return the minimum number of white blocks found.

#### Algorithm
- Initialize `blockQueue` as a queue to hold `k` consecutive elements.
- Initialize `numWhites` to 0 to track the current number of white blocks.
- Iterate through the first `k` elements of `blocks`. 
    - If the current element is white, increase `numWhites` by 1.
    - Add the current element to `blockQueue`.
- Initialize `numRecolors` to `numWhites` to represent the minimum number of recolors needed to have `k` consecutive black blocks.
- Iterate through the remaining elements of `blocks`, starting at index `k`. For each element:
    - Remove the top element of the queue and decrease `numWhites` by 1 if the top element is white.
    - Add the current element to `blockQueue` and increase `numWhites` by 1 if the element is white.
    - Update `numRecolors` to the minimum of `numRecolors` and `numWhites`.
- Return `numRecolors`.

#### Implementation

<iframe src="https://leetcode.com/playground/VSzCwjgc/shared" frameBorder="0" width="100%" height="500" name="VSzCwjgc"></iframe>

#### Complexity Analysis

Let $N$ be the length of `blocks` and $M$ be the value of `k`.

* Time Complexity: $O(N)$

    The algorithm iterates through each element of `blocks` exactly once, performing constant-time operations on each element. Specifically in each iteration, it checks and updates `blockQueue` and performs arithmetic operations. Both of these operations are $O(1)$ on average due to the use of a queue and being independent of the input size. Therefore, the overall time complexity is linear to the number of elements in `blocks`, $O(n)$.

    Note: The operations on `blockQueue` (such as `front`, `push`, and `pop`) are considered $O(1)$ on average due to the nature of queues.

* Space Complexity: $O(M)$

    The space complexity is determined by `blockQueue`.

    The algorithm continues adding elements to `blockQueue` until it contains `k` elements. From there, we remove an element from `blockQueue` before adding a new one.

    As a result, the size of `blockQueue` is bound by `k`, leading to an overall space complexity of $O(M)$.
---

### Approach 2: Sliding Window

#### Intuition

In the previous approach, we used a queue to manage the elements in the `blocks` array, but this came at the cost of additional space allocation. For each segment of `k` blocks, we had to store up to `k` characters in the queue, resulting in linear space complexity relative to `k`. To avoid this overhead, we need a solution that doesn't require extra space for storing the segments.

We can achieve this by adopting a **Fixed Sliding Window Approach**. The idea here is to slide a window of size `k` across the array while maintaining two pointers, `left` and `right`, that represent the start and end of the window. By incrementing both pointers together, we can efficiently track and check each segment of size `k` without needing extra space.

To implement this approach, we start by initializing both `left` and `right` pointers at the beginning of the array. Then, we move the `right` pointer until we have exactly `k` elements in the window, which is the range we’re interested in. Once we’ve captured a window of size `k`, we check how many white blocks are in this segment. 

After that, we increment both `left` and `right` by one position at each step. This moves the window to the next segment, and we again check how many white blocks are present. We repeat this process until the window has slid across the entire array. 

By the end, we will have checked every possible segment of `k` consecutive blocks. At each step, we can track and update the minimum number of recolors needed. The beauty of this approach is that it allows us to explore all potential segments without the need for any extra space, other than a few variables to track the window and the number of recolors.

#### Algorithm

- Initialize `left` to 0 to act as the left pointer for the sliding window.
- Initialize `numWhites` to 0 to track the number of white blocks in the current iteration.
- Initialize `numRecolors` to the maximum integer value to represent the minimum number of recolors needed to have `k` consecutive black blocks.
- Iterate through the first `k` elements of `blocks`. For each element at index `right`:
    - If `blocks[right]` is white, increase `numWhites` by 1
    - If the current window is of size `k`, meaning `right - left + 1` is equal to `k`:
        - Update `numRecolors` to the minimum of `numRecolors` and `numWhites`.
        - If `blocks[left]` is white, decrease `numWhites` by 1.
        - Increase `left` by 1.
- Return `numRecolors`.

#### Implementation

<iframe src="https://leetcode.com/playground/4bU6m2Js/shared" frameBorder="0" width="100%" height="500" name="4bU6m2Js"></iframe>

#### Complexity Analysis

Let $N$ be the size of `blocks`.

* Time Complexity: $O(N)$

    The algorithm iterates through each element of `blocks` exactly once, performing constant-time operations on each element. Specificially, in each iteration, it performs arithmetic operations, whose time complexities are independent of the input size. Therefore, the overall time complexity is linear to the number of elements in `blocks`, $O(n)$.

* Space Complexity: $O(1)$

    The space required does not depend on the size of the input value or any data structures that require additional space, so only constant $O(1)$ space is used.

---