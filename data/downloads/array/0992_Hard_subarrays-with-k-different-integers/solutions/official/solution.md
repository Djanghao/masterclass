# Official Solution

**Link:** [https://leetcode.com/problems/subarrays-with-k-different-integers/solution/](https://leetcode.com/problems/subarrays-with-k-different-integers/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an array of integers `nums` and an integer `k`. The task is to count the number of contiguous subarrays that contain exactly `k` distinct integers.

**Key Observations:**
1. A "good subarray" is defined as a contiguous subarray that contains exactly `k` distinct elements.
2. There can be duplicate elements present in the `nums` array.

---

### Approach 1: Sliding Window

#### Intuition

The brute force method involves finding all the subarrays and then selecting those subarrays that have exactly `k` distinct integers. However, this approach becomes costly in terms of time complexity, reaching $O(n^2)$.

For a more efficient approach, let's use the sliding window pattern. This pattern can be applied when the problem entails achieving a goal using subarrays, and individual elements cannot be independently selected.

The concept behind the sliding window pattern is to maintain a window that continuously expands from the right by adding elements until the condition is met. Once the condition is satisfied, we adjust the window by shrinking it from the left until the condition is met again.

For each valid window, we can calculate the total number of subarrays it can form using the formula `right - left + 1`. This represents the number of subarrays ending at the current element (`right`) and starting anywhere from the current left boundary (`left`) to the right pointer (`right`) (inclusive).

Once the window contains more than `k` distinct elements, we start shrinking it from the left side. We remove the element at the leftmost position and update the set of distinct elements. This process continues until the window size becomes valid again for the condition.

Another crucial realization is that the subarrays exceeding the `k` distinct integers are irrelevant to our objective. We focus on subarrays whose distinct integers are either equal to `k` or less than `k`.

The calculation `right - left + 1`, counts the subarrays with at most `k` distinct integers.

After calculating the total count of subarrays with distinct integers less than or equal to `k` using `slidingWindowAtMost(nums, k)`, we need to isolate the subarrays that strictly meet the target `k`.

This can be achieved by subtracting the total count of subarrays with distinct integers less than `k` (`slidingWindowAtMost(nums, k - 1)`) from the total count obtained earlier. By subtracting the latter from the former, we essentially remove the subarrays that don't reach `k` and are left with only the subarrays that have exactly `k` distinct integers.

Consider `nums = [1, 2, 1, 2, 3]` and `k = 2`.

`slidingWindowAtMost(nums, 2)` will count all subarrays (12) with at most 2 distinct elements (including those with exactly 2 and 1).
`slidingWindowAtMost(nums, 1)` will count all subarrays (5) with at most 1 distinct element.

The difference, `slidingWindowAtMost(nums, 2) - slidingWindowAtMost(nums, 1)`, removes subarrays with 1 distinct element, leaving only those with exactly 2, which is our answer (7).

Refer to the visual slideshow demonstrating the sliding window on `slidingWindowAtMost(nums, k)`.

!?!../Documents/992_re/atmostk.json:1010,570!?!

Now, refer to the visual slideshow demonstrating the sliding window on `slidingWindowAtMost(nums, k - 1)`.

!?!../Documents/992_re/atmostk_1.json:1010,510!?!

Refer to the below Venn diagram for a better understanding of how subtracting `slidingWindowAtMost(nums, k - 1)` from `slidingWindowAtMost(nums, k)` gives exactly `k` distinct elements.

![img](../Figures/992_re/atmost_venn_diagram.png)

#### Algorithm

The `slidingWindowAtMost` function is responsible for counting the subarrays with at most `distinctK` distinct elements. 

- Initialize an empty `freqMap` to store the frequency of elements in the current window.
- Initialize `left` and `totalCount` to 0.
- Iterate through the `nums` array using the `right` pointer:
   - Increment the frequency of `nums[right]` in the `freqMap`.
   - While the size of `freqMap` (the number of distinct elements) is greater than `distinctK`:
      - Decrement the frequency of `nums[left]` in the `freqMap`.
      - If the frequency of `nums[left]` becomes 0, remove it from the `freqMap`.
      - Increment `left` to shrink the window.
   - Add `right - left + 1` to `totalCount`. This counts the number of subarrays ending at `right` with at most `distinctK` distinct elements.
- Return `totalCount`.

The `subarraysWithKDistinct` function calls the `slidingWindowAtMost` function twice, once with `k` and once with `k - 1`, and subtracts the result of the latter from the result of the former to get the exact `k` distinct elements.

#### Implementation

<iframe src="https://leetcode.com/playground/MkLvTfUd/shared" frameBorder="0" width="100%" height="500" name="MkLvTfUd"></iframe>

#### Complexity Analysis

Let `n` be the length of the `nums` array.

- Time complexity: $O(n)$

    The time complexity is $O(n)$ because the `slidingWindowAtMost` function iterates through the array once using the sliding window technique, and each element is processed at most twice (once when it enters the window and once when it exits the window). Inside the loop, the operations of updating the frequency map and shrinking the window take $O(1)$ time on average, assuming the underlying hash table implementation has constant-time operations. Therefore, the overall time complexity is linear with respect to the size of the input array. 

- Space complexity: $O(n)$

    The space complexity is $O(n)$ due to the use of the `freqMap` to store the frequency of elements in the current window. In the worst case, when all elements in the array are distinct, the `freqMap` will store all the elements, resulting in a space complexity of $O(n)$.

    It's important to note that the space complexity is also affected by the underlying implementation of the hash table used for the `freqMap`. Some implementations may have additional overhead, leading to a slightly higher space complexity. 

---

### Approach 2: Sliding Window in One Pass

#### Intuition

When we create a subarray with an element, we can add `k - 1` additional distinct elements to the subarray without invalidating it.

If we subtract `1` from `k` when we encounter a new element, when `k` becomes zero, it means we have exactly `k` distinct elements in the current window. At this point, we need to count the number of valid subarrays we can form with these `k` distinct elements within the window.

However, if `k` becomes negative, it indicates that there are more than `k` distinct elements in the current window. We need to adjust the window from the left side by moving the left pointer and reducing the frequency of `nums[left]` until the number of distinct elements is valid again (equal to `k`).

If there are duplicates of `nums[left]` within the current window, we need to keep shrinking the window from the left side until the frequency of `nums[left]` is zero. This is crucial because we need to maintain the correct count of distinct elements within the window.

Now if `k` has become 0 and if the frequency of `nums[left]` is greater than 1, it means there are duplicates of the current left. For each duplicate, we increment `currCount`, which represents the number of subarrays that can be formed by including these duplicates along with the distinct elements in the current window.

Once we find the smallest subarray with exactly `k` distinct elements, we can add `currCount + 1` to `totalCount`. The 1 is added to include the current subarray formed by the `k` distinct elements within the window.

By continuously adjusting the window and counting subarrays when we have exactly `k` distinct elements, we can find the total count of valid subarrays with at most `k` distinct elements in just a single pass.

Refer to the visual slideshow demonstrating the sliding window in one pass.

!?!../Documents/992_re/onepass_re.json:1015,700!?!

#### Algorithm

- Initialize an array `distinctCount` of size `nums.size() + 1` to store the count of distinct values encountered.
- Initialize `totalCount` to 0, which will store the total count of subarrays with `k` distinct elements.
- Initialize `left` and `right` pointers to 0, representing the sliding window.
- Initialize `currCount` to 0, which will store the count of subarrays with the current distinct elements.

- Start the sliding window approach by iterating through the `nums` array using the `right` pointer:
   - Increment the count of the element at `nums[right]` in the `distinctCount` array.
   - If the count changes from 0 to 1, it means a new distinct element is encountered, so decrement `k`.
   - If `k` becomes negative, it means there are more than `k` distinct elements in the current window:
      - Move the `left` pointer until the count of distinct elements becomes valid again by decrementing the count of `nums[left]` in the `distinctCount` array and incrementing `k`.
      - Reset `currCount` to 0.
   - If `k` becomes 0, it means there are exactly `k` distinct elements in the current window:
      - While there are duplicate elements (count > 1) in the window, move the `left` pointer, decrement the count of `nums[left]` in the `distinctCount` array, and increment `currCount`.
      - Add `currCount + 1` to `totalCount`.
   - Increment `right` to move the sliding window.

- After the loop, return `totalCount`, which holds the total count of subarrays with `k` distinct elements.

#### Implementation

<iframe src="https://leetcode.com/playground/nA6bcnFy/shared" frameBorder="0" width="100%" height="500" name="nA6bcnFy"></iframe>

#### Complexity Analysis

Let `n` be the length of the `nums` array.

* Time complexity: $O(n)$

    The time complexity is $O(n)$ because the algorithm iterates through the array once using the sliding window technique, and each element is processed at most twice (once when it enters the window and once when it exits the window), resulting in linear time complexity.

* Space complexity: $O(n)$

    The space complexity is also $O(n)$ because the algorithm uses a mapping array to store the count of distinct elements encountered in the current window. In the worst case, this array can grow to the size of the input array; hence, the space complexity is linear with respect to the size of the input.

---