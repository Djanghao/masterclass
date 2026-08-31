# Official Solution

**Link:** [https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solution/](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solution/)

---

[TOC]

## Solution

---

### Overview

To solve this problem we need to find the longest subarray in the array `nums` such that the absolute difference between any two elements in the subarray is less than or equal to `limit`.  

It's possible to solve this problem by checking the difference between the smallest and biggest elements of the array. It's not necessary to check the difference between every single pair in the array, because any other pair will have an absolute difference smaller than the absolute difference between the smallest and largest elements of the subarray. 


Let's walk through how to efficiently find the longest consecutive segment of a list of numbers when constrained by the limit. We need a mechanism that allows us to dynamically adjust the segment we are examining as we move through the array. This is where the sliding window approach comes in.

Think of the sliding window as an adjustable window that we place on the numbers in the list. This window has a start point on the left and an end point on the right. Initially, the window only covers the first number. Moving along the array, we expand the window to the right to include additional elements. 

We continue expanding the window to the right as long as the numbers in the window satisfy the condition. The condition, in this case, is that the absolute difference between the smallest and largest elements in the window is smaller than the limit. 

If we were to reach a point where the next element causes the absolute difference to exceed the limit, we stop extending the window to the right. At this point, we know that the subarray inside the window no longer meets our condition, so we need to shrink the window from the left side to bring the difference back within the limits again. This means that we march the left boundary of the window to the right, which removes the leftmost number from our window. 

This process of expanding and contracting the window continues as you move through the array. The goal is to keep track of the maximum length of the window whenever it satisfies the condition. 

!?!../Documents/1438/slideshow1.json:960,540!?!

The sliding window approach is efficient because it only requires traversing the array once, and adjusting the window boundaries as needed, which ensures linear time complexity. When tasked with finding the maximum, minimum, or specific conditions within subarrays of an array having non-negative values, we can consider using the sliding window approach for an efficient solution.  

Here are some other problems that use this idea: 

* [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/description/)
* [992. Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/description/)

---

### Approach 1: Two Heaps

#### Intuition

Since we are only concerned with finding the absolute difference between the smallest and largest elements in the subarray, we need to keep track of the maximum and minimum values within the current window. Simply comparing boundary elements isn't enough, since removing the leftmost element might remove the current min or max and cause us to lose track of these values. We need a way to store and quickly retrieve potential max and min values.

![Fig1](../Figures/1438/1438_slides_13.png)

As you can see above, we don't know the minimum value of the window when we move the left pointer forward to shrink the window. We can solve this by using a max heap to store potential maximum values and a min heap to store potential minimum values.

Using two heaps, we can access the largest and smallest values in the current window in constant time. If the absolute difference between these values exceeds the limit, we move the left pointer to exclude the element with the lower index. This removes the violating element from the window.
 
Lastly, we need to keep the heaps updated by deleting elements outside the new window after moving the left pointer. This requires storing the indices of elements along with their values in the heap.

!?!../Documents/1438/slideshow2.json:960,540!?!

#### Algorithm

1. Initialization:
    - Initialize two heaps, `maxHeap` and `minHeap`.
    - Initialize `left` to `0` to represent the start of the sliding window.
    - Initialize `maxLength` to `0` to store the length of the longest valid subarray.
2. Iterate through the array `nums` from left to right using a variable `right`:
    - For each element `nums[right]`:
        - Add `nums[right]` and its index to both `maxHeap` and `minHeap`:
        - Check if the current window exceeds the limit:
        - While the absolute difference between the maximum value in `maxHeap` and the minimum value in `minHeap` is greater than `limit`:
            - Move the `left` pointer to the right to exclude the element with the smaller index between the smallest and largest values:
            - Set `left` to the index of the element with the smaller index between `maxHeap` and `minHeap`, plus 1.
            - Remove elements from the heaps that are outside the current window:
            - While the index of the top element in `maxHeap` is less than `left`:
                - Remove the top element from `maxHeap`.
            - While the index of the top element in `minHeap` is less than `left`:
                - Remove the top element from `minHeap`.
        - Update `maxLength`:
            - Set `maxLength` to the maximum of `maxLength` and the length of the current window, `(right - left + 1)`.
3. Return `maxLength` which stores the length of the longest valid subarray.

#### Implementation

<iframe src="https://leetcode.com/playground/Auxeh6e9/shared" frameBorder="0" width="100%" height="500" name="Auxeh6e9"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array `nums`.

- Time Complexity: $O(n \cdot \log n)$

    Initializing the two heaps takes $O(1)$ time.
  
    Iterating through the array `nums` from left to right involves a single loop that runs $n$ times.

    Adding each element to the heaps takes $O(\log n)$ time per operation due to the properties of heaps. Over the entire array, this results in $O(n \cdot \log n)$ time for both heaps combined.

    Checking the condition and potentially shrinking the window involves comparing the top elements of the heaps and moving the `left` pointer. Removing elements from the heaps that are outside the current window also takes $O(\log n)$ time per operation. Over the entire array, this results in $O(n \cdot \log n)$ time.

    Updating the `maxLength` variable involves a simple comparison and assignment, each taking $O(1)$ time per iteration. Over the entire array, this takes $O(n)$ time.

    Therefore, the total time complexity is $O(n \cdot \log n)$.

- Space Complexity: $O(n)$

    The two heaps, `maxHeap` and `minHeap`, store elements of the array along with their indices. In the worst case, each heap could store all $n$ elements of the array.

    The additional variables `left`, `right`, and `maxLength` use constant space.

    Therefore, the space complexity is $O(n)$ due to the heaps storing up to $n$ elements in the worst case.

--- 

### Approach 2: Multiset

#### Intuition

If we could use a single data structure that can retrieve the maximum and minimum values in constant time, we could reduce the space complexity of our solution. Fortunately, multisets are capable of maintaining elements in sorted order, allowing us to efficiently retrieve both the maximum and minimum values in constant time.  

Using a multiset, we can efficiently track elements within the current window. Inserting and removing elements take logarithmic time, while finding the maximum and minimum values is constant time, as they are at the ends of the sorted container. A multiset, unlike a set, allows multiple instances of the same element and can be thought of as a combination of a min heap and a max heap.

#### Algorithm

1. Initialization:
    - Initialize a multiset, `window`.
    - Initialize `left` to `0` to represent the start of the sliding window.
    - Initialize `maxLength` to `0` to store the length of the longest valid subarray.
2. Iterate through the array `nums` from left to right using a variable `right`:
    - For each element `nums[right]`:
        - Add `nums[right]` to the `window`.
        - Check if the current window exceeds the limit:
        - While the absolute difference between the maximum value in `window` and the minimum value in `window` is greater than `limit`:
            - Move the `left` pointer to the right to exclude the element causing the violation:
            - Remove `nums[left]` from the `window`.
            - Increment `left` by 1.
        - Update `maxLength`:
            - Set `maxLength` to the maximum of `maxLength` and the length of the current window, `(right - left + 1)`.
3. Return `maxLength` which stores the length of the longest valid subarray.

#### Implementation

<iframe src="https://leetcode.com/playground/K28cPpQ9/shared" frameBorder="0" width="100%" height="500" name="K28cPpQ9"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array `nums`.

- Time Complexity: $O(n \cdot \log n)$

    Initializing the multiset takes $O(1)$ time.
  
    Iterating through the array `nums` from left to right involves a single loop that runs $n$ times.

    Adding each element to the multiset takes $O(\log n)$ time per operation due to the properties of the balanced tree. Over the entire array, this results in $O(n \cdot \log n)$ time.

    Checking the condition and potentially shrinking the window involves comparing the maximum and minimum values in the multiset and moving the `left` pointer. Removing elements from the multiset that are outside the current window also takes $O(\log n)$ time per operation. Over the entire array, this results in $O(n \cdot \log n)$ time.

    Updating the `maxLength` variable involves a simple comparison and assignment, each taking $O(1)$ time per iteration. Over the entire array, this takes $O(n)$ time.

    Therefore, the total time complexity is $O(n \cdot \log n)$.

- Space Complexity: $O(n)$

    The multiset stores elements of the array. In the worst case, the multiset could store all $n$ elements of the array.

    The additional variables `left`, `right`, and `maxLength` use constant space.

    Therefore, the space complexity is $O(n)$ due to the multiset storing up to $n$ elements in the worst case.

---

### Approach 3: Two Deques

#### Intuition

While heaps are commonly used to track max and min values, their frequent insertion and removal operations are inefficient ($O(\log n)$ time). Deques, or double-ended queues, offer efficient $O(1)$ time complexity for adding and removing elements from both ends and are more suitable for this problem.  

We use two deques for this problem. One deque maintains numbers in decreasing order, ensuring the largest number in the window is always at the front. If a new number exceeds those at the deque's end, we remove those elements since they can no longer be the maximum in the current window.  

Similarly, the other deque will maintain the numbers in increasing order, ensuring the smallest number in the window is always at the front. If a new number is smaller than those at the deque's end, it replaces them, ensuring accuracy for the current window's minimum.  

These deques hold all the potential minimum and maximum values for the current and future windows.

When expanding the window to include a new element, we add it to both deques while preserving their order. If the absolute difference between the maximum and minimum values at the front of the deques exceeds the limit, we shrink the window by moving the left pointer. Removing elements from the front of either deque maintains the correct min and max values in constant time, enabling efficient checks to ensure the window stays within the limit.


#### Algorithm

1. Initialization:
    - Initialize two deques, `maxDeque` and `minDeque`.
    - Initialize `left` to `0` to represent the start of the sliding window.
    - Initialize `maxLength` to `0` to store the length of the longest valid subarray.
2. Iterate through the array `nums` from left to right using a variable `right`:
    - For each element `nums[right]`:
        - Maintain the `maxDeque` in decreasing order:
            - While `maxDeque` is not empty and the last element in `maxDeque` is less than `nums[right]`:
                - Remove the last element from `maxDeque`.
            - Add `nums[right]` to the back of `maxDeque`.
        - Maintain the `minDeque` in increasing order:
            - While `minDeque` is not empty and the last element in `minDeque` is greater than `nums[right]`:
                - Remove the last element from `minDeque`.
            - Add `nums[right]` to the back of `minDeque`.
        - Check if the current window exceeds the limit:
            - While the absolute difference between the first elements of `maxDeque` and `minDeque` is greater than `limit`:
                - If the first element of `maxDeque` is equal to `nums[left]`:
                    - Remove the first element from `maxDeque`.
                - If the first element of `minDeque` is equal to `nums[left]`:
                    - Remove the first element from `minDeque`.
                - Increment `left` by 1.
        - Update `maxLength`:
            - Set `maxLength` to the maximum of `maxLength` and `(right - left + 1)`.
3. Return `maxLength` which stores the length of the longest valid subarray.

#### Implementation

<iframe src="https://leetcode.com/playground/2VzepXSS/shared" frameBorder="0" width="100%" height="500" name="2VzepXSS"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array `nums`.

- Time Complexity: $O(n)$

    Initializing the two deques, `maxDeque` and `minDeque`, takes $O(1)$ time.

    Iterating through the array `nums` from left to right involves a single loop that runs $n$ times.
    
    Maintaining `maxDeque` and `minDeque` involves adding and removing elements. Each element can be added and removed from the deques at most once, resulting in $O(1)$ time per operation. Over the entire array, this results in $O(n)$ time for both deques combined.

    Checking the condition and potentially shrinking the window involves deque operations, which each take $O(1)$ time. Over the entire array, this takes $O(n)$ time.

    Updating the `maxLength` variable involves a simple comparison and assignment, each taking $O(1)$ time per iteration. Over the entire array, this takes $O(n)$ time.

    Therefore, the total time complexity is $O(n)$.

- Space Complexity: $O(n)$

    The two deques, `maxDeque` and `minDeque`, store elements of the array. In the worst case, each deque could store all $n$ elements of the array.

    The additional variables `left`, `right`, and `maxLength` use constant space.

    Therefore, the space complexity is $O(n)$ due to the deques storing up to $n$ elements in the worst case.

---