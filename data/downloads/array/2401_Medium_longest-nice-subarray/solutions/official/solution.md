# Official Solution

**Link:** [https://leetcode.com/problems/longest-nice-subarray/solution/](https://leetcode.com/problems/longest-nice-subarray/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force

#### Intuition

Our task is to find the longest contiguous sequence in the array where the bitwise AND of any two elements is 0. First, let's understand what makes a subarray "nice" according to the given definition. A nice subarray is one where the bitwise AND of any two distinct elements equals zero. This means that for any pair of numbers in our subarray, their binary representations must not have any overlapping set bits (`1`s in the same positions).

When two numbers have no overlapping set bits, we can say they are "bit-disjoint." For example, 5 (`101` in binary) and 7 (`111` in binary) are not bit-disjoint since they both have a `1` in the first and third positions from the right. However, 5 (`101`) and 8 (`1000`) are bit-disjoint since they have no `1`s in the same bit positions.

A brute force approach would be to try each possible starting position and extend the subarray as far as possible. We can keep a running counter `maxLength` which can store the longest subarray we encounter in the traversals. But how do we efficiently check whether a subarray is "nice"?

One approach would be to examine each subarray using nested loops to check if they are "nice." However, this would have a quadratic complexity just to identify each subarray, making it too slow for the given constraints.

The key insight is that we need to track which bit positions are already "used" within our current subarray. If a new number wants to join our nice subarray, it must not have any bits set in positions that are already used by other numbers in the subarray.

A **bitmask** is the perfect tool for this job. As we traverse a potential subarray, we maintain a single integer (the bitmask) where each bit represents whether that position has been "used" by any number so far.

For example, consider numbers 4 (`100` in binary), 2 (`010` in binary), and 1 (`001` in binary). When considering a new element, we test if any of its bits overlap with our existing bitmask. If there is an overlap, the subarray is no longer "nice" since two numbers now share a set bit.

Otherwise, we add the current number's bits into our bitmask using the OR operation. This operation updates our tracking of occupied bit positions. 

After updating our bitmask, we increment our current subarray length and continue this process until we encounter a number that conflicts with our existing bits. Once we find such a number, we update our `maxLength` if the current subarray is longer than any we've seen before, and then we start a new potential nice subarray from the next position.

> For a more comprehensive understanding of bit manipulation, check out the [Bit Manipulation Explore Card](https://leetcode.com/explore/learn/card/bit-manipulation/). This resource provides an in-depth look at bit-level operations, explaining their key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- Initialize a variable `maxLength` to `1`, which will track the maximum nice subarray length found.
- Iterate through each possible starting position `start` in the array, up to the length minus the current `maxLength`:
  - Initialize variables:
    - `currentLength` to `1`, which represents the length of the current nice subarray.
    - `usedBits` to the value at the current starting position, which tracks which bits are used in our subarray.
  - Iterate through subsequent positions `end` in the array, starting from the position after `start`. For each position:
    - If the bitwise AND of the `usedBits` and the value at the current position is `0`:
      - Update `usedBits` by performing a bitwise OR with the value at the current position.
      - Increment `currentLength` by `1`.
    - If it is not `0`, break the inner loop since we can't extend the nice subarray further.
  - Update `maxLength` to be the maximum of the current `maxLength` and `currentLength`.
- Return `maxLength` as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/8UmzTyYv/shared" frameBorder="0" width="100%" height="500" name="8UmzTyYv"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input array `nums`.

- Time complexity: $O(n^2)$

    The algorithm uses two nested loops. The outer loop iterates through all possible starting positions, which is $O(n)$. For each starting position, the inner loop can potentially iterate through all remaining elements in the worst case, which is also $O(n)$. Therefore, the overall time complexity is $O(n^2)$.

- Space complexity: $O(1)$

    The algorithm only uses a constant amount of extra space regardless of the input size. It maintains a few variables (`maxLength`, `currentLength`, `usedBits`) that do not scale with the input size, so the space complexity is $O(1)$.

---

### Approach 2: Sliding Window

#### Intuition

Our previous approach examined all possible starting positions and extended each subarray as far as possible. Now, let's try a more efficient technique. We'll build our solution by taking larger and larger subarrays until adding a new element breaks the "nice" property. When this happens, we need to remove elements from the beginning until we restore that property.

This idea naturally translates to a variable-size sliding window approach. To check the validity of each window, we can use a similar concept as the previous approach, by using a bitmask to store all the bits already used in the window (let's call it `usedBits`). 

We start with an empty window and expand it by adding elements one by one. Each time we add a new element, we check whether it conflicts with our existing window by seeing if any of its bits overlap with `usedBits`. If there is an overlap, the subarray is no longer "nice" because two elements now share a set bit.  

When a conflict occurs, we shrink the window from the left by removing elements until the conflict is resolved. Each time we remove an element, we clear its bits from the `usedBits` tracker by XOR'ing it with the element being removed. 

Throughout this process, we maintain a variable `maxLength` to track the longest "nice" subarray we have found. Whenever we expand the window without conflicts, we update `maxLength`. By the end of the iteration, `maxLength` will contain the length of the longest valid subarray.

Here's a slideshow to demonstrate this algorithm in action:

!?!../Documents/2401/slideshow.json:682,602!?!

> For a more comprehensive understanding of the sliding window technique, check out the [Sliding Window Explore Card](https://leetcode.com/explore/learn/card/array-and-string/204/sliding-window/). This resource provides an in-depth look at the sliding window approach, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- Initialize variables:
  - `usedBits` to `0`, which tracks the bits currently used in the sliding window.
  - `windowStart` to `0`, representing the starting position of the current window.
  - `maxLength` to `0`, which will store the length of the longest nice subarray found.
- Iterate through the array with a variable `windowEnd` from `0` to the length of `nums`:
  - While the current number at `windowEnd` shares any bits with the `usedBits` (their bitwise AND is not 0):
    - Remove the bits of the leftmost element in the window from `usedBits` using bitwise XOR.
    - Increment `windowStart` to shrink the window from the left.
  - Add the bits of the current number to `usedBits` using bitwise OR.
  - Update `maxLength` to the maximum of the current `maxLength` and the current window size (calculated as `windowEnd - windowStart + 1`).
- Return the final `maxLength`.

#### Implementation

<iframe src="https://leetcode.com/playground/kL2ZCw94/shared" frameBorder="0" width="100%" height="497" name="kL2ZCw94"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input array `nums`.  

- Time complexity: $O(n)$  

    The algorithm maintains a sliding window that dynamically adjusts its size to ensure the subarray remains nice. Each element is added to the window at most once and removed at most once, resulting in a total of $O(n)$ operations. The bitwise operations inside the loop run in constant time per element, keeping the overall complexity linear.  

- Space complexity: $O(1)$  

    The algorithm uses only a few integer variables (`usedBits`, `windowStart`, and `maxLength`), all of which require constant space. Since no additional data structures are used that grow with $n$, the space complexity remains constant.

---