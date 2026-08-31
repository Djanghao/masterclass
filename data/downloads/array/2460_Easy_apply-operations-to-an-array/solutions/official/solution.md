# Official Solution

**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solution/](https://leetcode.com/problems/apply-operations-to-an-array/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an integer array `nums` consisting of `n` non-negative integers. We must iterate through the array, one step at a time, checking each pair of adjacent numbers starting from the first element:

- If two neighboring numbers are the same, we double the first number and turn the second one into 0.
- If they are different, we leave them as they are.

We repeat this process from left to right, one pair at a time. Finally, we must move all `0`s to the end of the array while preserving the order of non-zero elements and return the resulting array.

Because of the smaller constraints on the size of `nums` (`n ≤ 2000`), we can start from a brute force approach that simulates the rules mentioned in the problem and then think of further optimizing the approach.

---

### Approach 1: Brute Force Simulation

#### Intuition

A simple way to approach this problem is to iterate through the array in pairs and apply the given set of rules. Once we finish processing the entire array, we must rearrange it so that all non-zero elements appear first, preserving their order, while pushing all zeros to the end.

Let's break this down with an example. Consider the array `nums = [1, 1, 2, 2, 2]`.  

- We start at index `0` and examine the pair `{nums[0], nums[1]}`. Since both values are equal (`1 == 1`), we replace `nums[0]` with `2 * nums[0] = 2` and set `nums[1]` to `0`. The array now looks like `[2, 0, 2, 2, 2]`.  
- Moving to index `1`, the pair `{nums[1], nums[2]}` is `{0, 2}`. Since the values are different, we skip this step.  
- At index `2`, the pair `{nums[2], nums[3]}` is `{2, 2}`. Both values are equal, so we double `nums[2]` to `4` and set `nums[3]` to `0`. The array updates to `[2, 0, 4, 0, 2]`.  
- Finally, at index `3`, the pair `{nums[3], nums[4]}` is `{0, 2}`. Since they are not equal, we make no changes.  

At this stage, the array is `[2, 0, 4, 0, 2]`. However, zeros are scattered throughout, and we need to move them to the end while maintaining the order of non-zero elements.  

To achieve this, we move all non-zero values to the beginning of the array. We can create a new array `modifiedNums` and append all non-zero values to it. The total number of zeros in the array is given by `number of zeros = n - number of non-zero values`. We then append zeros to `modifiedNums` until its size matches `nums`.  

#### Algorithm

1. Initialize `n` as the size of the `nums` array.
2. Create an array`modifiedNums` to store the processed values.
3. Apply operations on the array:
   - Iterate through the array from `index = 0` to `n - 2`:
     - If `nums[index]` is equal to `nums[index + 1]` and is non-zero:
       - Update `nums[index]` to `nums[index] * 2`.
       - Set `nums[index + 1]` to `0`.
4. Move non-zero elements to the front:
   - Iterate through `nums`, and for each non-zero element, push it into `modifiedNums`.
5. Append zeros to maintain the original size:
   - While `modifiedNums` has fewer elements than `n`, append `0` to it.
6. Return `modifiedNums` as the final modified array.

#### Implementation

<iframe src="https://leetcode.com/playground/jwvjGyyB/shared" frameBorder="0" width="100%" height="500" name="jwvjGyyB"></iframe>

#### Complexity Analysis

Let $n$ be the size of the given array `nums`.

- Time Complexity: $O(n)$

    The algorithm iterates through the array twice:  
    1. The first loop processes the array, performing at most `n-1` operations.  
    2. The second loop collects non-zero elements, which takes $O(n)$.  
    3. The third loop appends zeros to maintain the original size, which also takes $O(n)$.  

    Since each operation runs in $O(n)$, the overall time complexity is $O(n)$.  

- Space Complexity: $O(1)$

    The algorithm uses an additional `modifiedNums` array to store the processed values. However, since this is the expected output, it is not counted in auxiliary space. Apart from this, the algorithm does not use any extra data structures that scale with `n`, making the auxiliary space complexity $O(1)$.

---

### Approach 2: Memory Optimization

#### Intuition

In the previous approach, we created a separate array to rearrange the elements and push all zeros to the end. However, this extra space usage can be avoided if we directly modify the given array while iterating through it. The key observation here is that all non-zero elements should appear at the beginning of the array while maintaining their original order. We achieve this by shifting non-zero elements in-place instead of using a new array.

To accomplish this, we introduce two indices: `nonZeroIndex` and `iterateIndex`. The `iterateIndex` moves through the array, scanning each element one by one. Whenever it encounters a non-zero value, we place it at `nonZeroIndex`, ensuring that all non-zero values are stored in their correct positions as we iterate. After processing all elements, any leftover positions in the array are filled with zeros.

Now, let's go through an example to understand how this works. Consider the array `nums = [1, 0, 2]`.  

- We start with `nonZeroIndex = 0`, which keeps track of where the next non-zero value should be placed. `iterateIndex = 0` begins scanning the array.  
- At `iterateIndex = 0`, we find `nums[0] = 1`, which is non-zero. Since it is already at the correct position (`nonZeroIndex = 0`), we simply move `nonZeroIndex` to the next available position (`nonZeroIndex = 1`).  
- At `iterateIndex = 1`, `nums[1] = 0`, which we ignore, as zeros will be handled later.  
- At `iterateIndex = 2`, `nums[2] = 2`, which is non-zero. We place it at `nums[nonZeroIndex]`, which is `nums[1]`. The array updates to `[1, 2, 2]`, and we move `nonZeroIndex` forward (`nonZeroIndex = 2`).  

At this point, all non-zero elements are correctly positioned. Now, we overwrite the remaining elements with zeros. Since `nonZeroIndex = 2`, we set `nums[2] = 0`, resulting in the final array `[1, 2, 0]`.  

The crucial part of this approach is that we never overwrite a necessary value during the shifting process. Any value that might be replaced was either a duplicate or a zero, ensuring that the transformation happens in-place while preserving order.

#### Algorithm

1. Initialize Variables:  
   - `n` to store the size of the `nums` array.  

2. Apply Operations on the Array:  
   - Iterate through the array from index `0` to `n - 2`:  
     - If `nums[index]` is equal to `nums[index + 1]` and not `0`:  
       - Double `nums[index]` (`nums[index] *= 2`).  
       - Set `nums[index + 1]` to `0`.  

3. Shift Non-Zero Elements to the Beginning:  
   - Initialize `nonZeroIndex = 0` to track where the next non-zero element should be placed.  
   - Iterate through the array using `iterateIndex`:  
     - If `nums[iterateIndex]` is not `0`:  
       - Assign `nums[iterateIndex]` to `nums[nonZeroIndex]`.  
       - Increment `nonZeroIndex`.  

4. Fill Remaining Positions with Zeros:  
   - Iterate from `nonZeroIndex` to `n`:  
     - Set `nums[nonZeroIndex]` to `0` and increment `nonZeroIndex`.  

5. Return the modified `nums` array.  

#### Implementation

> **Interview Tip: In-Place Algorithms**  
> 
> In-place algorithms overwrite the input to save space, but sometimes this can cause problems. Here are a couple of situations where an in-place algorithm might not be suitable:  
> 1. The algorithm needs to run in a multi-threaded environment without exclusive access to the array. Other threads might need to read the array as well and may not expect it to be modified.  
> 2. Even if there is only a single thread or the algorithm has exclusive access to the array while running, the array might need to be reused later or by another thread once the lock has been released.  
> 
> In an interview, always check whether the interviewer is okay with you overwriting the input. Be prepared to explain the pros and cons of doing so if asked!  

<iframe src="https://leetcode.com/playground/gkv4shGw/shared" frameBorder="0" width="100%" height="500" name="gkv4shGw"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.  

- Time Complexity: $O(n)$  

    The first loop iterates through the array once to apply operations, which takes $O(n)$. The second loop iterates through the array to shift non-zero elements, which takes $O(n)$. The third loop fills the remaining positions with zeros, which also takes $O(n)$.  
    
    Since all operations are linear, the overall time complexity is $O(n)$.  

- Space Complexity: $O(1)$  

    The algorithm modifies the input array in place without using extra space. Only a few integer variables are used, which take constant space. 

    Therefore, the overall space complexity is $O(1)$. 

---

### Approach 3: One Pass

#### Intuition

In this approach, we process the array in a single pass. The key idea is to first merge adjacent equal elements and then shift all non-zero elements to the front while maintaining their relative order.  

We iterate through the array using `index`, checking whether consecutive elements are equal and non-zero. If they are, we double the current element and set the next element to zero.

As we continue iterating, we also keep track of `writeIndex`, which represents the position where the next non-zero element should be placed. Whenever we encounter a non-zero element, we swap it with the element at `writeIndex`, effectively shifting all non-zero values forward while preserving order. This ensures that zeros naturally accumulate at the end of the array without requiring an explicit second pass to move them.

For example, given `nums = [2, 2, 0, 4, 4]`, we start processing from the first element. The first two elements are equal (`2` and `2`), so we double the first (`nums[0] = 4`) and set the second to zero (`nums[1] = 0`). As we continue iterating, we encounter a zero, which is skipped, and then a `4`, which is moved forward. The same process happens with the second pair of `4`s, resulting in the final modified array `[4, 8, 0, 0, 0]`.  

#### Algorithm

- Get the length of `nums` as `n`.
- Initialize `writeIndex` to track the position for non-zero elements.

- Iterate through `nums`:
  - If `index` is within bounds and `nums[index]` is equal to `nums[index + 1]` (both non-zero), merge:
    - Double `nums[index]`.
    - Set `nums[index + 1]` to zero.
  - If `nums[index]` is non-zero, move it to `writeIndex`:
    - Swap `nums[index]` and `nums[writeIndex]` if needed.
    - Increment `writeIndex`.

- Return the modified `nums`.

#### Implementation

> **Interview Tip: In-Place Algorithms**  
> 
> In-place algorithms overwrite the input to save space, but sometimes this can cause problems. Here are a couple of situations where an in-place algorithm might not be suitable:  
> 1. The algorithm needs to run in a multi-threaded environment without exclusive access to the array. Other threads might need to read the array as well and may not expect it to be modified.  
> 2. Even if there is only a single thread or the algorithm has exclusive access to the array while running, the array might need to be reused later or by another thread once the lock has been released.  
> 
> In an interview, always check whether the interviewer is okay with you overwriting the input. Be prepared to explain the pros and cons of doing so if asked!  


<iframe src="https://leetcode.com/playground/STvY8w9w/shared" frameBorder="0" width="100%" height="500" name="STvY8w9w"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.  

- Time Complexity: $O(n)$  

    We iterate through the array only once, performing constant-time operations for each element. The merging operation modifies elements in-place, and the shifting of non-zero values is handled dynamically as we iterate, ensuring that no additional passes are required. Since every operation is handled in a single pass, the overall complexity remains linear.

- Space Complexity: $O(1)$  

    The algorithm modifies the input array in place without using extra space. Only a few integer variables are used, which take constant space. Therefore, the overall space complexity is $O(1)$. 

---