# Official Solution

**Link:** [https://leetcode.com/problems/binary-subarrays-with-sum/solution/](https://leetcode.com/problems/binary-subarrays-with-sum/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a binary array `nums` and an integer `goal`. The task is to find the number of non-empty subarrays in the given binary array where the sum of elements in the subarray equals the specified `goal`.

**Key Observations:**
1. The array contains only binary values (0 or 1).
2. The goal is to find subarrays with a specific sum.
3. The subarrays should be non-empty and contiguous.

Consider the given example with `nums = [1,0,1,0,1]` and `goal = 2`:

Output: 4

Explanation: The 4 subarrays are bolded and underlined below:
[**1,0,1**,0,1]  
[**1,0,1,0**,1]  
[1,**0,1,0,1**]  
[1,0,**1,0,1**]  

Note that all these subarrays are contiguous parts of the given array, and the count of such subarrays is the output.

---

### Approach 1: Prefix Sum

#### Intuition

The task involves identifying contiguous sequences of elements within an array whose sum equals a specific target value. Problems that require sequences of elements to meet criteria often utilize [prefix sums](https://en.wikipedia.org/wiki/Prefix_sum).

We begin by iterating through the array. As we encounter each element, we maintain a running total (current sum). This current sum represents the cumulative addition of all elements encountered so far in the array.

Next, we check if the current sum precisely matches the target value. If it does, we have found a subarray whose elements add up to the goal.

Now consider a scenario where the current sum exceeds the target value. This doesn't necessarily eliminate the possibility of finding a subarray that meets the criteria. We need a method to determine the sum of subarrays that begin after the first index of the original array.

A prefix sum represents the cumulative sum of elements up to a specific point in the array. By subtracting the target value from the current sum, we obtain a new value, called as "prefix sum." If this value appears earlier in the array, it means a subarray starting later adds up to the target. In simpler terms, a subsequence of these elements adds up to the target sum value.

We can use a map to track the occurrences of prefix sums. If a prefix sum exists in the map, it indicates multiple groups that sum to the target. We update the map by adding the current sum. This ensures we can find any corresponding subarrays that leads to goal.

Refer to the visual slideshow demonstrating the algorithm with the example input [1, 0, 1, 0, 1] and goal = 2.

!?!../Documents/930_fix/prefix_sum_fix.json:1010,510!?!


#### Algorithm

- Initialize the `totalCount` variable to keep track of the number of subarrays with the desired sum and the `currentSum` variable to keep track of the cumulative sum of elements encountered so far.
- Initialize a hash table, `freq`, to store the frequency of encountered prefix sums.
- Iterate through the array `nums`.
  - Add the current element to the `currentSum` to get the updated running total. If the updated `currentSum` is equal to the `goal`, it means a subarray with a sum equal to the goal has been found. Increment `totalCount` by 1.
  - Check if the `freq` map contains a prefix sum `currentSum - goal`. This `currentSum - goal` represents the prefix sum of a subarray that, when added to the current element `num`, could potentially form a subarray with a sum equal to `goal`.
   - If `freq[currentSum - goal] ` is in the hash table, it means there exists a subarray with a prefix sum equal to `currentSum - goal`. In this case:
      - Add the frequency of `currentSum - goal` (the number of subarrays with that prefix sum) to `totalCount`. These subarrays, when combined with `num`, would also result in a subarray with a sum equal to `goal`.
  - Update the frequency map by incrementing the frequency count for the current sum.
- Return the `totalCount` variable.

#### Implementation

<iframe src="https://leetcode.com/playground/c6oShGh5/shared" frameBorder="0" width="100%" height="480" name="c6oShGh5"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input array `nums`.

* Time complexity: $O(n)$

    We iterate through the array once to calculate the prefix sums and update the frequency map.

* Space complexity: $O(n)$

    We use an unordered map (`freq`) to store the frequency of prefix sums. In the worst case, all prefix sums can be distinct, resulting in $n$ unique entries in the map. Therefore, the space required is proportional to the size of the input array.

---

### Approach 2: Sliding Window

#### Intuition

For a more efficient approach, let's consider aspects of the problem: We must achieve a `goal` using subarrays. We can't pick elements individually. Problems with these qualities are often solved using the sliding window pattern.

In a standard sliding window approach, once the `currentSum` reaches the target `goal`, the typical strategy involves simply moving the left pointer of the window forward to potentially find more subarrays. However, this approach has a critical limitation when applied to binary arrays.

Including a zero element in the subarray won't change the sum. As a result, even if the `currentSum` reaches the `goal` initially, we might miss further subarrays that also meet the `goal` by simply shrinking the window as long as the sum remains equal to the `goal`. This is because the presence of zeros creates the possibility of combining them with elements encountered later to reach the target sum.

Thus subarrays exceeding the target sum are irrelevant to our objective. We only care about subarrays whose sum is either equal to the `goal` or less than the `goal`.

Leveraging this insight, we can directly track the number of subarrays with a sum at most equal to the `goal`.

After calculating the total count of subarrays with sums less than or equal to the `goal` using the function`slidingWindowAtMost(nums, goal)`, we need to isolate the subarrays that strictly meet the target `goal`. 

This can be achieved by subtracting the total count of subarrays with sums less than the `goal` (`slidingWindowAtMost(nums, goal - 1)`) from the total count obtained earlier. By subtracting the latter from the former, we remove the subarrays that don't reach the `goal` and are left with only the subarrays that have a sum exactly equal to the `goal`.


Refer to the visual slideshow demonstrating the sliding window on `slidingWindowAtMost(nums, goal)`.

!?!../Documents/930_fix/sliding_window1_fix.json:1010,385!?!

Now, refer to the visual slideshow demonstrating the sliding window on `slidingWindowAtMost(nums, goal - 1)`.

!?!../Documents/930_fix/sliding_window2_fix.json:1010,380!?!


Now, if we subtract the count from the second slideshow (`slidingWindowAtMost(nums, goal - 1)`) from the count in the first slideshow (`slidingWindowAtMost(nums, goal)`), which is 14 - 10, we get 4. Here, 4 represents the number of subarrays with a sum equal to the `goal`.

The reason for this is that `atMost(2)` includes all sets of windows whose total sum is equal to 0, 1, and 2, while `atMost(1)` comprises sets with sums of 0 and 1.

Now, see that the set `atMost(2)` contains the whole set of `atMost(1)`. So, when we subtract them, we get the remainder—subarrays that have a sum exactly equal to 2.

Refer to the below Venn diagram for a better understanding.

![img](../Figures/930_fix/BinarySubarraySum-atMostConcept.png)


#### Algorithm

**Define the helper function: `slidingWindowAtMost(nums, goal)`:**
- Initializes variables `start` (representing the start index of the window), `currentSum` (representing the sum of elements in the current window), and `totalCount` (representing the total count of subarrays with a sum less than or equal to the goal) to 0.
- Iterate through the array using a sliding window where the `end` pointer iterates from 0 to the end of the `nums` array.
    - Within each iteration, add the current element (`nums[end]`) to `currentSum`.
    - Use a `while` loop to adjust the window from the left side (using the `start` pointer) as long as `currentSum` is greater than `goal`.
        - Subtract the element at the `start` index from `currentSum`.
        - Increment the `start` pointer to move the window one position to the right.
    - After adjusting the window, the subarray from `start` to `end` has a sum less than or equal to `goal`, so increment `totalCount` by the length of the current subarray (`end - start + 1`).
- After iterating through the entire `nums` array, return `totalCount`, which holds the total number of subarrays with a sum at most `goal.`

**In the main function `numSubarraysWithSum(nums, goal)`:**
- Find the difference by calling `slidingWindowAtMost` twice, once with the original `goal` and another time with `goal - 1`.
- Return the difference between these two counts, the exact number of subarrays with a sum equal to `goal`.

#### Implementation

<iframe src="https://leetcode.com/playground/BC3FyXRm/shared" frameBorder="0" width="100%" height="497" name="BC3FyXRm"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `nums` array.

* Time complexity: $O(n)$

    The function `slidingWindowAtMost` uses two pointers, `start` and `end` to process the elements in the array. Although there is a nested loop, each pointer starts at $0$ and gets incremented at most $n$ times, so each pointer makes just $1$ pass through the array. This means the time complexity of the function `slidingWindowAtMost` is $O(n)$.  We call `slidingWindowAtMost` twice,  resulting in an overall time complexity of $O(n)$.

* Space complexity: $O(1)$

    The space complexity is $O(1)$ because the algorithm uses a constant amount of space for variables such as `start`, `currentSum`, and `totalCount`. The space required does not depend on the size of the input array.

---

### Approach 3: Sliding Window in One Pass

#### Intuition

In the previous approach, we were finding the answer by calling the sliding window two times. However, we can optimize it to a single pass.

To do this, we track the number of zeros at the `start` of the current window. Each contiguous sequence of zeros at the `start` of the window can be considered separately when determining the total number of subarrays that sum up to the `goal`. That is, we need to increment the `totalCount` by `1 + prefix zeros`. This is crucial because each subarray within the window, along with each combination of prefix zeros, contributes to the total count of subarrays that sum up to the `goal`. 

Leading zeros in a window don't affect the sum, but they create opportunities for more subarrays to reach the target `goal`.

The remaining logic is the same as the previous sliding window approach. We iterate through the array nums using two pointers: `start` and `end`, representing the start and end indices of the current window.

If the sum of the current window exceeds the `goal`, we adjust the window by moving the `start` pointer forward until the sum is less than or equal to the `goal`. Along with adjusting the `start` pointer, we also need to update the prefix zeros count accordingly with the current window. If the `start` pointer is pointing to 0, we increment the prefix zero count; otherwise, if it's pointing to 1, we reset the prefix zero count to 0. 

For example, consider a window represented by the array [0, 0, 1, 1]. In this window, there are 2 leading zeros. This means that the window can sum up to 2 in 2 + 1 = 3 ways.

Refer to the visual slideshow demonstrating the sliding window in one pass:

!?!../Documents/930_fix/sliding_onepass_fix.json:1010,420!?!


#### Algorithm

- Initialize variables `start`, `prefixZeros`, `currentSum`, and `totalCount` to 0.
- Iterate through the array using the `end` variable as the end index of the sliding window.
  - Add the current element to the `currentSum`.
  - Enter a while loop to shrink the window from the left side if the sum exceeds the `goal` or if the element at the start of the window is 0.
    - Inside the while loop, check if the element at the start of the window is 1. If it is, reset the `prefixZeros` count to 0. Otherwise, increment the `prefixZeros` count.
    - Then subtract the element at the start of the window from the `currentSum` and increment the `start` pointer to move the window.
  - If the `currentSum` is equal to the `goal`, increment the `totalCount` by 1 plus the `prefixZeros` count.
- Finally, return the `totalCount`.

#### Implementation

<iframe src="https://leetcode.com/playground/SsiueCRb/shared" frameBorder="0" width="100%" height="500" name="SsiueCRb"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `nums` array.

* Time complexity: $O(n)$

    The function iterates through the nums array once using a single for loop (`end` loop).
    
    Inside the loop, the while loop might contract the window, but the total number of iterations within this loop is still bounded by the number of elements in the array (`n`).
    
    Therefore, the overall time complexity is dominated by the single iteration through the array, resulting in $O(n)$.

* Space complexity: $O(1)$

    The space complexity is $O(1)$ because the algorithm uses a constant amount of space for variables such as `start`, `currentSum`, and `totalCount`. The space required does not depend on the size of the input array.

---