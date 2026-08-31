# Official Solution

**Link:** [https://leetcode.com/problems/summary-ranges/solution/](https://leetcode.com/problems/summary-ranges/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a sorted unique integer array `nums`.

Our task is to return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

---

### Approach: Fix Left Bound

#### Intuition

We know that a range `[a, b]` is made up of successive numbers from `a` to `b` (both inclusive). Because the `nums` array is sorted, two consecutive elements in `nums` with a difference greater than `1` cannot belong to the same range. Also, if the difference between two consecutive elements in `nums` is `1`, they should be put in the same range.

To solve this problem we create a pointer `i = 0` to iterate over all the elements of `nums`. We store the beginning of the current range in `start = nums[i]`, which will be used to put this range into the list that will be returned as the answer.

We check the next element in `nums` at index `i + 1`. If the next element differs by `1`, we include the $(i + 1)^{th}$ element in this range and increment `i` by `1` to check the next element. We keep adding elements in this range by incrementing `i` until we find an element that differs by more than `1`.

If the next element differs by more than `1` or we've covered all the elements in `nums`, we check whether `start` is equal to `nums[i]` or not. If `start == nums[i]`, it signifies that this range has only one element. As instructed by the problem description, in that case, we only add `start` as a string to `ranges`. Otherwise, if `start != nums[i]`, we have more than one element in this range. As a result, we add the string `start->nums[i]` to `ranges`.

After finishing a range, we increment `i` by `1` to start a new range and repeat the same process until we cover all the elements.

Here is a visual representation of how the approach works:

!?!../Documents/228/228-slides.json:601,301!?!

#### Algorithm

1. Create a list of strings `ranges` that contain the solution to the problem.
2. Iterate over all the elements in `nums` with the pointer `i = 0`:
    - Each iteration of the outermost loop represents finding one range. To start, save the current range's beginning in `start = nums[i]`.
    - Check whether the next element in `nums` at index `i + 1` differs from `nums[i]` by `1` or more. If the next element differs by `1`, we increase `i` by `1` to include the $(i + 1)^{th}$ element in this range and move ahead to check the next element. We keep adding elements in this range until the successive elements differ by `1`. We can use a while loop to accomplish this logic.
    - Otherwise, if the next element differs by more than `1` or we have covered all the elements in `nums`, we check whether `start` is equal to `nums[i]` or not. If `start == nums[i]`, we only add `start` as a string to `ranges` as we just have a single element in this range. Otherwise, if `start != nums[i]`, we add the string `start->nums[i]` to `ranges`.
    - We increment `i` by `1` to start a new range.

#### Implementation

<iframe src="https://leetcode.com/playground/AwbJkGpL/shared" frameBorder="0" width="100%" height="429" name="AwbJkGpL"></iframe>

#### Complexity Analysis

Here $n$ is the number of elements in `nums`.

* Time complexity: $O(n)$.
    - We iterate over each `nums` element once, either including it in the current range or creating a new range from it, which takes $O(n)$ time for $n$ elements.
    - We also add all of the ranges to the `ranges` list. In the worst-case situation, $n$ elements could be added to the list if each consecutive element in `nums` differs by more than `1`, requiring $O(n)$ time to insert all the required ranges.

* Space complexity: $O(1)$.
    - Except for a few integer variables like `i` and `start` that use constant space, we do not consume any space (if we ignore the space consumed by the input and output).