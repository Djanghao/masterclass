# Official Solution

**Link:** [https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solution/](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solution/)

---

[TOC]

## Solution

---

### Overview

The given problem involves working with an integer array `nums` and an integer `k`. The task is to find the length of the longest subarray, referred to as a "good" subarray, where the frequency of each element in the subarray is less than or equal to `k`. In other words, we are looking for a contiguous sequence of elements in the array where the count of each distinct element does not exceed the given threshold `k`.

Applications of this problem are scenarios where you need to analyze data with certain constraints on the frequency of elements. For example, in network traffic analysis, one might be interested in finding the longest sequence of time intervals where the frequency of certain events does not exceed a specified threshold. This problem can be relevant in various domains where analyzing and controlling the frequency of occurrences is crucial for meaningful insights or operations.

---

### Approach 1: Counting and Sliding Window

#### Intuition

In approaching the given problem, the key objective is to find the length of the longest contiguous subarray, termed as "good," based on the constraint that the frequency of each element within this subarray should be less than or equal to a given value, denoted as `k`. The solution lies in understanding the nature of the array and devising a strategy to efficiently identify and track the eligible subarrays.

A crucial insight is recognizing that the goodness of a subarray is intricately tied to the frequency distribution of its elements. To efficiently capture this information, a mechanism is needed to monitor the frequency of each encountered element during the traversal of the array.

Given the need to find the longest good subarray, an intuitive approach is to utilize a sliding window technique. This involves defining two pointers, which dynamically adjust their positions based on the evolving conditions of the array. The sliding window allows us to efficiently maintain the goodness of the subarray by adjusting its size dynamically as we iterate over `nums`.

Now, let's delve into the loop structure. The loop will iterate through each element of the array, updating the frequency of each encountered element. This counter is pivotal, as it stores the essential information about the array's composition.

Within this loop, there is a conditional check to ensure that the frequency of the current element does not violate the given constraint `k`. If, at any point, the frequency surpasses `k`, it indicates a breach of the goodness condition. To rectify this, a second pointer is used to shrink the window from the left, effectively reducing the frequency of elements until the goodness condition is restored.

The decision to check `frequency[nums[end]] > k` in the while loop is grounded in the fact that `frequency[nums[end]]` has already been updated within the `for` loop. This means that only the frequency of the current element (`nums[end]`) **could** be greater than `k` and thus is being assessed for compliance with the goodness condition. This sequence in the code ensures that the check is precise, targeting the specific element causing the potential violation.

Throughout this process, the length of the current subarray meeting the goodness criteria is continuously updated. The maximum length encountered so far is stored as the final answer.

!?!../Documents/2958/2958_Length_of_Longest_Subarray_With_at_Most_K_Frequency.json:3000,1687!?!

#### Algorithm

1. Initialize variables `ans` and `start`. Variable `ans` will store the length of the longest good subarray, and `start` will be used to track the start of the current subarray.
2. Create an unordered map named `frequency` to keep track of the frequency of elements in the array.
3. Iterate through the elements of the input array `nums` using a for loop with index `end`.
4. Increment the frequency count of the current element `nums[end]` in the `frequency` dictionary.
5. Enter a while loop to handle the condition where the frequency of the current element `nums[end]` exceeds the given threshold `k`. In this loop:
   - Move the start of the subarray (`start`) one position forward.
   - Decrement the frequency count of the element at index `start` (start of the current subarray) in the `frequency` dictionary.
   - Repeat this process until the frequency of `nums[end]` in the current subarray becomes less than or equal to `k`.
6. Update the length of the longest good subarray (`ans`) by taking the maximum of its current value and the difference between the current index `end` and the start index `start`.
7. Continue the loop until all elements in the array are processed.
8. Return the final value of `ans` as the length of the longest good subarray.


#### Implementation

<iframe src="https://leetcode.com/playground/b5P64fnm/shared" frameBorder="0" width="100%" height="361" name="b5P64fnm"></iframe>

#### Complexity Analysis

Let $N$ be the length of `nums`.

* Time complexity: $O(N)$. 
  - The outer loop iterates through each element in the array exactly once, as indicated by the range from 0 to the length of `nums` in the `for` loop.
  - Inside this loop, the `while` loop with the `start` pointer performs a sliding window operation. However, note that the `start` pointer is increased and `frequency[nums[start]]` is decreased within this loop. The `start` pointer is never decreased after it is increased in the while loop. Hence, once an element is processed in the `while` loop, it will not be revisited. Therefore, each element is processed at most twice: once during the outer loop and at most once during the `while` loop.
  - In the worst case, the `while` loop could iterate through the entire length of the array during its lifetime. However, since each element is processed at most twice, the total number of iterations across all elements is linear, making the time complexity of the algorithm $O(N)$.

* Space complexity: $O(N)$. The data structure used to store `frequency` incurs a space complexity of $O(N)$, since in the worst case the array `nums` can have all unique elements.

---

### Approach 2: Counting and Sliding Window without Nested Loops

#### Intuition

We have already discussed using sliding window and counting to solve this problem. Now let's develop an approach without nested loops.

Firstly, we initialize two pointers, one marking the `start` and the other marking the `end` of the window. As we iterate through the array, we gradually expand the window by moving the `end` pointer forward. At each step, we update a data structure to keep track of the frequency of elements within the current window. We also maintain an integer that signifies the count of characters with a frequency greater than `k`

Now, here's the crucial insight for this approach: we never shrink the size of the window. Instead, we only expand or move it. Why? Because we aim to find the longest good subarray, meaning once we've encountered a good subarray, we want to keep exploring larger subarrays to maximize the length.

As we process the array, we expand the window by adding the next element; we update the frequency of this element, then we check if its frequency would become `k + 1`. Why do we do this? If the frequency of the current element were to exceed `k`, it means we're introducing a "bad" element into the window because the frequency of all elements must be less than or equal to `k`. If the frequency of the current element is equal to `k + 1`, we must increment the count of characters with a frequency greater than `k`.

If we detect a breach in the "goodness" condition (count of characters with a frequency greater than `k` > 0), we move the window from the `start`. As we process new elements, the same size window is slid, instead of expanded, with each iteration, until the window meets the "goodness" condition again. If the frequency of the element at `start` is equal to `k` after decrementing its frequency, we decrement the count of characters with a frequency greater than `k`.  When this count is zero, we can continue as we did before we found a "bad" element, expanding the window with each new element. This process ensures that the size of our current window is equal to the largest "good" subarray encountered so far. 

It's worth noting that since we don't decrease the size of the window, this doesn't guarantee that all explored subarrays of the current size are good. However, it does indicate that we've encountered at least one good subarray of that size in the past. And since our goal is to find the length of the longest good subarray, this information suffices.

#### Algorithm

**Algorithm: Longest Good Subarray**

1. Initialize variables `n` to store the length of the input array `nums`, `frequency` as a Counter to keep track of the frequency of elements, `start` to mark the start index of the subarray, and `chars_with_freq_over_k` to count the number of elements with frequency exceeding `k`.
2. Iterate through the array `nums` using a sliding window approach, with `start` and `end` pointers to define the current subarray.
3. Increment the frequency of the element at index `end` in the `frequency` Counter.
4. If the frequency of the element at index `end` becomes equal to `k + 1`, increment `chars_with_freq_over_k` to track the count of elements exceeding frequency `k`.
5. If there are elements with frequency exceeding `k`:
    - Decrement the frequency of the element at index `start` in the `frequency` counter as it moves out of the current window.
    - If the frequency of the element at index `start` becomes equal to `k`, decrement `chars_with_freq_over_k` as it no longer exceeds frequency `k`.
    - Increment the `start` pointer to move the window forward.
6. Continue the process until the entire array is traversed.
7. Return the length of the longest good subarray, which is calculated by subtracting the `start` index from the total length of the array.


#### Implementation

<iframe src="https://leetcode.com/playground/FcLVQMMa/shared" frameBorder="0" width="100%" height="463" name="FcLVQMMa"></iframe>

#### Complexity Analysis

Let $N$ be the length of `nums`.

* Time complexity: $O(N)$. We perform one pass over the given array `nums`. This incurs a time complexity of $O(N)$.

* Space complexity: $O(N)$. The data structure used to store `frequency` incurs a space complexity of $O(N)$ since, in the worst case, the array `nums` can have all unique elements.

---