# Official Solution

**Link:** [https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solution/](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an array of integers and an integer `k`. We want to find the maximum sum amongst all subarrays that (1) have exactly `k` elements and (2) only contain distinct integers. In other words, we want to find the largest possible sum amongst all subarrays of length `k` that don't have duplicate values.

### Approach: Sliding Window

#### Intuition

A brute force approach would involve generating all possible subarrays of length `k`, checking if each subarray has distinct elements, and keeping track of the maximum sum. However, it is time-consuming to generate all possible subarrays of length `k`. Let's explore a more efficient way to find these subarrays.

Instead of examining all possible subarrays of size `k`, we can use a sliding window over `nums` to efficiently explore subarrays that meet our constraints. This technique uses two pointers, `begin` and `end`, to represent the indices of the current window or subarray. Let's go over the high-level idea of this approach.

In the sliding window approach, we typically start with an initial window containing just the first element. Then, we try to expand our sliding window by incrementing `end` to cover more elements of `nums`. For each new element `nums[end]` that we add to our window, there are two possible cases: 

1) The new window still satisfies the problem's constraints.
2) The new window no longer satisfies the problem's constraints.

If the first case applies, then we can continue expanding the window. If the second case applies, then we must adjust our window so that it satisfies the constraints again. This typically involves adjusting moving `begin` forward to shrink the window. Once adjusted, we can proceed with expanding the window to the next element in `nums`.

Now, we can apply the above technique to our current problem. Because we are interested in the maximum sum, we would also like to maintain the sum of our current window. Moreover, for each new element we add to our sliding window, we want to see if the following constraints are followed:

1) The window has all distinct elements.
2) The window size does not exceed size `k`. 

Note that our second constraint is slightly different from the constraint mentioned in the problem description. We only require the window to have a size less than or equal to `k`, not exactly of size `k`. This is because our first few windows will naturally have a size less than `k` as we expand from the start.

The key question now is how to efficiently check if these two constraints are followed and how to adjust the window whenever these constraints aren't followed.

To handle constraint 1, we can use a hash map to track each element's last occurrence index. This allows us to check if the newly added element `nums[end]` already exists in the current window. Specifically, if the index of the last occurrence of `nums[end]` is greater than or equal to `begin`, then it is already in the window. To fix this, we have to shrink our window and adjust `begin` so that it excludes the existing occurrence of `nums[end]`. This means `begin` has to be greater than the last occurrence index. As we shrink our window to meet this condition, we also have to update the current sum of the window by subtracting the values of the excluded elements. After these adjustments, the window can include `nums[end]` without violating constraint 1.

For constraint 2, if the window size exceeds `k` (`end - begin + 1 > k`), then we can simply increment `begin` until the size of our window returns to `k`. Similar to constraint 1, we also update the sum by subtracting the removed elements as we go.

As we process each valid window, we keep track of the maximum sum encountered. After checking all possible windows, we’ll have the maximum sum of all distinct subarrays with length `k`.

#### Algorithm

1. Initialize our `ans` variable to `0`
2. Initialize the `currentSum` of our initially empty window to `0`
3. Initialize the pointers of our sliding window: `begin = 0`, `end = 0`
4. Instantiate the hash map `numToIndex` that will store the index of the last occurrence of numbers seen so far in `nums`
5. Start the sliding window process. While `end < nums.length`:
    * Get the current number we are adding to our window: `currNum = nums[end]`
    * Get its last occurrence: `lastOccurrence = numToIndex.getOrDefault(currNum, -1)`
    * While the window still contains this current number `begin <= lastOccurrence` or our window size is too large `end - begin + 1 > k`:
        * Update the current sum: `currentSum -= nums[begin]`
        * Shrink our window by 1: `begin++`
    * Our window is good now. So add the newly added element to our map: `numToIndex.put(currNum, end)`
    * Update current sum `currentSum += nums[end]`
    * If our window is size `k`, then update `ans` if `currentSum` is larger: `ans = max(ans, currentSum)`
    * Increment `end` to add the next element for the next iteration: `end++`
6. Return `ans`

#### Implementation

<iframe src="https://leetcode.com/playground/U2Jr5kdE/shared" frameBorder="0" width="100%" height="500" name="U2Jr5kdE"></iframe>

#### Complexity Analysis

Let $N$ be the size of `nums`.

* Time Complexity: $O(N)$

    In the sliding window technique, in the worst case, our `begin` is adjusted for every increment of `end` . In total, adjusting `begin` takes $O(N)$ time, resulting in an overall total time complexity is $O(N)$

* Space Complexity: $O(N)$

    The space complexity is $O(N)$ due to the size of the `numToIndex` hash map.  

---