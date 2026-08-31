# Official Solution

**Link:** [https://leetcode.com/problems/sliding-window-maximum/solution/](https://leetcode.com/problems/sliding-window-maximum/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an array of integers `nums` and there is a sliding window of size `k` which is moving from the left of the array to the right.

Our task is to return a list of integers that contains the largest element from each window.

---

### Approach: Monotonic Deque

#### Intuition

An intuitive way to solve the problem is to iterate over all windows and then iterate over all the elements in a window to find the largest element. There are a total of `n - k + 1` (where `n` is the size of `nums`) windows and it would take $O(k)$ to find the largest element from each window. This strategy is too slow and would result in TLE.

Let's make some observations and reduce the time complexity.

We may observe that in a window, the elements that come before the largest element will never be selected as the largest element of any future windows. For example, consider a window `[1, 2, 3, 4, 1]`. Because the window is sliding left to right, any window with the first three elements `1`, `2`, and `3` would also have the `4`.

However, we cannot ignore the items that follow the largest element. If we use the above example, we cannot ignore the last element `1` since there may be a window from the fourth index (0-based indexing) until the eighth index where `1` is the largest element. The elements at indices `3` and `4` are those that will be **"useful"** in the following windows.

Therefore, we can discard the first three elements and only take into account the elements at indices `3` and `4`.

Now, let's consider the next element and call it `x`. We need to add `x` to the window to consider the next window. If `x > 1`, then we can now discard the `1` because `x` will be in any future windows that `1` is in. If `x > 4`, we can discard the `4` as well for the same reason.

> In general, whenever we encounter a new element `x`, we want to discard all elements that are less than `x` before adding `x`. Let's say we currently have `[63, 15, 8, 3]` and we encounter `12`. Any future window with `8` or `3` will also contain `12`, so we can discard them. After discarding them and adding `12`, we have `[63, 15, 12]`. As you can see, we keep elements in descending order.

To perform these operations, we can use a **monotonic queue** as it supports efficient insertion, deletion, and retrieval of elements from the ends of a window. We will implement it with the **deque** data structure.

A monotonic data structure is one where the elements are always sorted. In our case, we want a monotonic decreasing queue, which means that the elements in the queue are always sorted descending. When we want to add a new element `x`, we maintain the monotonic property by removing all elements less than `x` before adding `x`.

We initialize a deque of integers `dq`. It will contain the indices of the "useful" elements in the current window. The reason we need to store the indices instead of the elements themselves is that we need to detect when elements leave the window due to sliding too far to the right.

We also initialize an array of integers `res` to store the answer.

By maintaining the monotonic decreasing property, the largest element in the window must always be the first element in the deque, which is `nums[dq[0]]`.

We initialize the first window with the first `k` elements. Then we iterate over the indices `i` in the range `[k, n - 1]`, and for each element, we add its index to `dq` while maintaining the monotonic property. We also remove the first element in `dq` if it is too far to the left (`dq[0] = i - k`). After these operations, `dq` will correctly hold the indices of all useful elements in the current window in decreasing order. Thus, we can push `nums[dq[0]]` to the answer.

Here's an animation visually showing how the approach works:

!?!../Documents/239/239-slides.json:601,301!?!

You can see that the deque's size never goes above `k` at any time. This is because we are only ever taking into account the "useful" elements of the current window.

There can be `k` indices in the deque when all the elements of a window are sorted in descending order. If the elements are not sorted, there will be some useless elements and the size of the deque would be less than `k`.

Since we consistently add the largest index to the end of the deque and remove some other indices that correspond to useless elements, we are essentially storing indices in ascending order. When taking into account a window with the last element at index `i`, all of the deque's elements are greater than `i - k`. As a result, the size of deque can never exceed `k`.

#### Algorithm

1. Create a deque `dq` of integers.
2. Create a list of integers `res` to store the answer.
3. Iterate over the first `k` elements from `i = 0` to `k - 1` and perform the following:
    - While `dq` is not empty and the current element `nums[i]` is greater or equal to `nums[dq.peekLast()]`, continue to pop the last element.
    - Push `i` at the end of `dq`.
4. Push the largest element of the first window `nums[dq.peekFirst()]` to the answer.
5. We iterate over all the remaining elements from `i = k` to `n - 1` to move to the next windows. We perform the following in this loop:
    - Check if the element at the front of `dq` is equal to `i - k`. If it is equal to `i - k`, it cannot be included in the current window. We pop this element.
    - While `dq` is not empty and the current element `nums[i]` is greater or equal to `nums[dq.back()]`, continue to pop the last element.
    - Push `i` at the end of `dq`.
    - Push the largest element of the current window `nums[dq.peekFirst()]` to the answer.
6. Return `res`.

#### Implementation

<iframe src="https://leetcode.com/playground/du3z8z6p/shared" frameBorder="0" width="100%" height="500" name="du3z8z6p"></iframe>

#### Complexity Analysis

Here $n$ is the size of `nums`.

* Time complexity: $O(n)$.
    - At first glance, it may look like the time complexity of this algorithm should be $O(n^2)$, because there is a nested while loop inside the for loop. However, each element can only be added to the deque once, which means the deque is limited to $n$ pushes. Every iteration of the while loop uses `1` pop, which means the while loop will not iterate more than $n$ times in total, across all iterations of the for loop.
    - An easier way to think about this is that in the worst case, every element will be pushed and popped once. This gives a time complexity of $O(2 \cdot n) = O(n)$.

* Space complexity: $O(k)$.
    - The size of the deque can grow a maximum up to a size of $k$.