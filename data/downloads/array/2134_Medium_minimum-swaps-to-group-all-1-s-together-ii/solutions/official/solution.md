# Official Solution

**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solution/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solution/)

---

[TOC]

## Solution

---

### Overview

In this problem, we're given a binary circular array where each element is either 0 or 1. The circular nature of the array means that the last element is considered adjacent to the first. Our task is to find the minimum number of swaps needed to group the 1s. A swap involves exchanging values between two distinct positions.

The circular property of the array opens up more possible groupings to consider compared to a linear array.

> Input: `nums = [0,1,1,1,0,0,1,1,0]`
> Output: `2`

Two swaps are required to group all 1s together, either forming `[1,1,1,0,0,0,0,1,1]` or `[1,1,1,1,1,0,0,0,0]`.

---

### Approach 1: Using Suffix Sum

#### Intuition

Imagine doing this manually. First, count the total number of 1s that we need to group together. Then, count how many 0s we need to swap out if we grouped that number of 1s at the beginning of the array. Continue doing this for each possible start point in the array. When we are done, we'll have considered every possibility to confidently determine the smallest possible number of swaps needed to form the group.

One approach to achieve this is by using suffix sums. If you are **not familiar with suffix sums**, consider reviewing the problem **[2574. Left and Right Sum Differences](https://leetcode.com/problems/left-and-right-sum-differences/description/)** to get a better understanding.

Using a suffix sum will let us find the number of 0s within a given range as we check for the best possible grouping of 1s. We'll use an array `rightSuffixSum` to iterate from the end of the array to the beginning, populating the array with cumulative counts of zeros. When we are finished, `rightSuffixSum[0]` will be the total number of 0s in the array.

Let's say we need to group four 1s. We can use our array `rightSuffixSum` to calculate how many 0s are in the first four positions of the given array. Then, we can check how many zeros are in the four positions starting with the second index of the given array, and so on. When we are finished iterating through the given array, we will know the smallest possible number of swaps.

#### Algorithm

- Define `minSwaps` function that calculates minimum swaps needed by calling `minSwapsHelper` with two different values (0 and 1), returning the minimum result.
- Define `minSwapsHelper` function:
  - Initialize `length` as the length of the input array `data`.
  - Create an array `rightSuffixSum` to store the count of elements equal to `val ^ 1` from the right.
  - Iterate through the array from right to left, updating `rightSuffixSum`:
    - If the current element equals `val ^ 1`, increment the corresponding entry in `rightSuffixSum`.
  - Initialize `totalSwapsNeeded` as `rightSuffixSum[0]` and `currentSwapCount` to 0.
  - Initialize `minimumSwaps` with the difference between `totalSwapsNeeded` and `rightSuffixSum[length - totalSwapsNeeded]`.
  - Iterate through the first `totalSwapsNeeded` elements to calculate the required swaps:
    - If the current element equals `val ^ 1`, increment `currentSwapCount`.
    - Calculate `remaining` as `totalSwapsNeeded - i - 1`.
    - Calculate `requiredSwaps` using the current and remaining counts, updating `minimumSwaps` with the minimum value.
  - Return `minimumSwaps` as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/LrhknHsH/shared" frameBorder="0" width="100%" height="500" name="LrhknHsH"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array.

- Time complexity: $O(n)$

    The main operations (constructing the `rightSuffixSum` and calculating minimum swaps) involve single passes through the array.

- Space complexity: $O(n)$

    $O(n)$, due to the `rightSuffixSum` array, which stores the count for each position in the input array.

---

### Approach 2: Using Sliding Window

#### Intuition

We can simplify our approach by creating a sliding window equal to the number of 1s in the array and using it to identify the grouping with the highest concentration of 1s. Then, we'll use this to determine how many values need to be swapped to group all 1s in the array together.

We'll determine the size of our sliding window by counting the number of 1s in the given array. Next, we'll initialize the window to be this size and count the number of 1s within it. This gives us a baseline count, representing how many 1s are already in place within the first possible grouping. This step is important because it sets the stage for comparison as we slide the window across the array.

As we slide the window, we'll dynamically update our count of 1s by subtracting the value at the window's starting edge and adding the value at the window's new trailing edge. This step is crucial because it allows us to track the number of 1s in each potential group without re-scanning the entire window. The circular nature of the array is naturally handled because the sliding window can wrap around from the end to the beginning of the array.

Finally, we'll find the difference between the total number of 1s in the array and the grouping with the highest concentration of 1s to find the minimum number of swaps required to group the 1s.

#### Algorithm

- Calculate the minimum swaps needed to group all 1s or all 0s together.
- Use `minSwapsHelper` to determine the number of swaps for grouping all 0s and all 1s.
- Return the minimum value between the two results from `minSwapsHelper`.

- Define `minSwapsHelper` to calculate the minimum swaps required to group all `val` together:
  - Initialize `length` as the length of the array and `totalValCount` to count the occurrences of `val`.
  - Iterate through the array in reverse to count the total number of `val`.
  - If there is no `val` or the array is full of `val`, return 0.
  - Initialize `start` and `end` pointers for the sliding window and set `maxValInWindow` and `currentValInWindow` to 0.
  - Set up the initial window by counting the number of `val` in the first window of size `totalValCount`.
  - Update `maxValInWindow` with the maximum value found in the initial window.
  - Slide the window across the array:
    - Decrease `currentValInWindow` if the value at the `start` pointer equals `val` and increment `start`.
    - Increase `currentValInWindow` if the value at the `end` pointer equals `val` and increment `end`.
    - Update `maxValInWindow` with the maximum value found in the sliding window.
  - Calculate the minimum swaps as `totalValCount` minus `maxValInWindow`.
  - Return the calculated number of swaps.

The algorithm is visualized below:

!?!../Documents/2134/approach2.json:885,465!?!

#### Implementation

<iframe src="https://leetcode.com/playground/Q3t46M2x/shared" frameBorder="0" width="100%" height="500" name="Q3t46M2x"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array.

* Time complexity: $O(n)$

    We perform a single pass to count `val` and then a single pass with the sliding window.

* Space complexity: $O(1)$

    $O(1)$, since we are using a constant amount of extra space, regardless of the input size.

---

### Approach 3: Cleaner and More Intuitive Sliding Window

#### Intuition

Compared to Approach 2, Approach 3 refines the sliding window technique by explicitly addressing the circular nature of the array. Instead of having two different windows work together to find the group of 1s and 0s, we allow the window's `end` index to exceed the array bounds and use the modulus operation to wrap around. This makes our solution more straightforward and cleaner.

First, we determine the total number of 1s in the array (`totalOnes`), which sets the size of our sliding window. We start with an initial window that covers the first `totalOnes` elements and count the 1s within this window to establish a baseline.

As we slide the window across the array, we dynamically adjust the count of 1s by subtracting the value that slides out of the window and adding the value that enters it. This step-by-step adjustment is efficient because it avoids rescanning the entire window each time.

To handle the circular aspect, we use the modulus operation (`end % len(nums)`). This operation wraps the window's `end` index back to the beginning of the array when it goes out of bounds. This ensures our sliding window considers all possible groupings of 1s, including those spanning the array's `end` and `start`.

Throughout this process, we track the window position with the highest number of 1s. The difference between `totalOnes` and this maximum number gives us the minimum swaps needed to group all 1s together. By continually updating our count and leveraging the circular nature of the array, we achieve an optimal and efficient solution.

#### Algorithm

- Initialize `minimumSwaps` to a large value (`INT_MAX`).
- Calculate the total number of `1`s in the array using `accumulate`:
  - `totalOnes` stores the total count of `1`s in `nums`.
- Initialize `onesCount` to the number of `1`s in the initial window (first element of `nums`).
- Set `end` to `0`.
- Slide the window across the array:
  - For each `start` index from `0` to the size of the array:
    - Adjust `onesCount` by removing the element that is sliding out of the window (`nums[start - 1]`).
    - Expand the window to the right until it reaches the size equal to `totalOnes`:
      - Add elements to `onesCount` from the right end of the window using modular indexing (`nums[end % nums.size()]`).
    - Update `minimumSwaps` by calculating the difference between `totalOnes` and `onesCount`.
- Return `minimumSwaps` as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/fpb28J3V/shared" frameBorder="0" width="100%" height="500" name="fpb28J3V"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array.

* Time complexity: $O(n)$

    The algorithm processes each element of the array once while expanding and sliding the window. Therefore, the time complexity is linear with respect to the number of elements in the array.

* Space complexity: $O(1)$

    The algorithm uses a constant amount of extra space for variables regardless of the size of the input array. Therefore, the space complexity is constant.

---