# Official Solution

**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solution/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solution/)

---

[TOC]

## Solution

---

### Overview 

We are given an array `nums` and a value `pivot`. Our goal is to rearrange `nums` such that all elements **less than** `pivot` appear first, followed by all elements **equal to** `pivot`, and finally, all elements **greater than** `pivot`. Additionally, the **relative order** of elements within each group must be preserved.  

> Note: The relative order of elements means that if one element appears before another in the original array, it must still appear before that element in the rearranged array as long as they belong to the same group (less than, equal to, or greater than `pivot`).  

For example, consider `nums = [9,12,5,10,14,3,10]` with `pivot = 10`. The correct rearrangement is `[9,5,3,10,10,12,14]`:
- The numbers `9, 5, 3` (which are less than `pivot`) appear first, maintaining their original order.  
- The numbers `10, 10` (which are equal to `pivot`) appear next.  
- The numbers `12, 14` (which are greater than `pivot`) appear last, also maintaining their original order.  

A common mistake in solving this problem is not preserving the relative order of elements. It’s tempting to use quicksort style partitioning, but that approach disrupts the relative order. Instead, for the initial phase, we should try to build the output array step by step, placing elements into separate lists based on their comparison with `pivot`, and then combining these lists at the end.

### Approach 1: Dynamic Lists

#### Intuition

When we rearrange `nums`, we know that it is composed of three sections, from left to right:

1. The elements less than `pivot`.
2. The elements equal to `pivot`.
3. The elements greater than `pivot`.

Thus, one approach is to use dynamic lists to build each of the three sections. To do this, we can iterate through `nums`, left to right, and append each element into its corresponding dynamic list based on its comparison with `pivot`. This way, as we process each element, their relative position is maintained within their list. After iterating, we can stitch together the three lists to obtain the final rearranged result. 

#### Algorithm

- Declare three dynamic lists `less`, `equal`, and `greater` for all elements less than, equal to, and greater than `pivot`, respectively.
- Iterate through each element `num` in `nums`:
    - If `num < pivot`: append `num` to `less`.
    - If `num > pivot`: append `num` to `greater`.
    - Else: append `num` to `equal`.
- Stitch together the dynamic lists:
    - Append all elements of `equal` to `less`. 
    - Append all elements of `greater`.
- Return the resulting list.

#### Implementation

<iframe src="https://leetcode.com/playground/CDSppTfJ/shared" frameBorder="0" width="100%" height="500" name="CDSppTfJ"></iframe>


#### Complexity Analysis

Let $N$ be the size of `nums`.

* Time Complexity: $O(N)$

    Appending to a dynamic list is an $O(1)$ operation for each element, so building the three lists (`less`, `equal`, and `greater`) takes a total of $O(N)$ time, where $N$ is the number of elements in `nums`. The `extend()` operations also take $O(N)$ time since you're adding all elements from `equal` and `greater` into `less`. Thus, the total time complexity is $O(N)$.

* Space Complexity: $O(N)$

    Although the answer container (`less`) is returned and doesn't contribute to space complexity (as it is considered part of the output), the two temporary lists (`equal` and `greater`) can require additional $O(N)$ space to hold elements temporarily. Thus, the auxiliary space complexity is $O(N)$. If only one list were used for temporary storage and returned as the result, it would be considered $O(1)$ space since no additional space would be required for other containers.  

---

### Approach 2: Two Passes With Fixed Array

#### Intuition

In Approach 1, we used dynamic lists to build the three sections of the array because we did not know initially how many elements belong in each section. The flexibility of dynamic lists allowed us to append elements and grow our list as needed, but there is extra space/time overhead with dynamically sized lists.

For this approach, we will rearrange `nums` using only a single fixed-size array instead. The challenge is knowing how to place each element of `nums` in the correct index of our array without overwriting/overlapping elements from other sections. To solve this, we first need to determine the specific indices our second and third sections start at (we know that our first section will always start at index `0`). 

To do this, we can perform an initial pass through `nums` to keep count of the number of elements that are in the first and second sections. We can call these counts `numLess` (number of elements less than `pivot`) and `numEqual` (number of elements equal to `pivot`). Using these 2 counters, we can initialize 3 pointers for each section to help us properly find the correct indices to insert our elements:

- The first section will always start at index `0`, so its pointer will be initialized to `0`. 
- The second section follows right after, so its index starts at `numLess`. 
- The third section comes next, so its index would be initialized to the total number of elements from the earlier 2 sections -  `numLess + numEqual`. 

With these pointers set, we can do a second pass through `nums` and correctly place its elements in our fixed-sized array `ans` using these pointers. For each element we process, we determine which section it belongs in and use its corresponding pointer to place it in the correct index in `ans`. After placing it, we can increment the corresponding pointer. 

#### Algorithm

- Initialize `numLess` and `numEqual` to 0.
- Iterate through `nums`. For each `num` in `nums`:
    - If `num < pivot`, increment `numLess`.
    - If `num == pivot`, increment `numEqual`.
- Initialize a fixed-sized array `ans` to contain our rearranged array.
- Calculate our 3 pointers:
    - `lessI = 0` since the first section starts at index `0`
    - `equalI = numLess` since the second section starts at index `numLess`.
    - `greaterI = numLess + numEqual` since the third section starts at index `numLess + numEqual`
- For each `num` in `nums`:
    - If `num < pivot`: `ans[lessI] = num` and increment `lessI`.
    - If `num == pivot`: `ans[equalI] = num` and increment `equalI`.
    - If `num > pivot`: `ans[greaterI] = num` and increment `greaterI`.
- Return `ans`.

#### Implementation

<iframe src="https://leetcode.com/playground/S9kEhGzX/shared" frameBorder="0" width="100%" height="500" name="S9kEhGzX"></iframe>

#### Complexity Analysis

Let $N$ be the size of `nums`.

* Time Complexity: $O(N)$

    We perform two passes of `nums`, each with constant time operations. so the total time complexity is $O(N)$. 

* Space Complexity: $O(N)$
 
    The algorithm uses an additional array `ans` of the same size as `nums`, which requires $O(N)$ extra space. Other auxiliary variables, such as `lessI` and `greaterI`, require only $O(1)$ space. Therefore, the overall space complexity is $O(N)$ due to the extra array used to store the result. However, if we consider only the auxiliary space complexity, it would be $O(1)$.

---

### Approach 3: Two Pointer

#### Intuition

The idea of this approach is to maintain two pointers, `lessI` and `greaterI`, which track the positions where the next smaller and larger elements should be placed, respectively. As we iterate through the array from both ends (using `i` for the left-to-right pass and `j` for the right-to-left pass), we compare each element to the pivot. If an element is smaller than the pivot, it is placed at the `lessI` position, and `lessI` is incremented. Similarly, if an element is greater than the pivot, it is placed at the `greaterI` position, and `greaterI` is decremented. This ensures that smaller elements are placed at the beginning of the array and larger elements at the end.

After the initial pass, all elements smaller than the pivot are at the beginning of the array, and all elements larger than the pivot are at the end. The remaining positions between `lessI` and `greaterI` are filled with the pivot value, ensuring that elements equal to the pivot are placed in the middle.

#### Algorithm

- Initialize a fixed-sized array `ans` to contain our rearranged array.
- Initialize pointer for first section `lessI = 0` going left to right.
- Initialize pointer for third section `greaterI = nums.length - 1` going right to left.
- Start a forward and backward iteration of `nums`. For forward, we initialize `i = 0`. For backward, we initialize `j = nums.length - 1`. For each iteration: 
    - If `nums[i] < pivot`, then write in first section: `ans[lessI] = nums[i]` and increment `lessI`.
    - If `nums[j] > pivot`, then write in third section: `ans[greaterI] = nums[j]` and decrement `greaterI`.
    - Increment `i` and decrement `j`.
- Fill in the remaining spots of `ans` with pivot:
    - While `lessI <= greaterI`:
        - `ans[lessI] = pivot`
        - `lessI++`
- Return `ans`.

#### Implementation

<iframe src="https://leetcode.com/playground/FPYQhHNF/shared" frameBorder="0" width="100%" height="446" name="FPYQhHNF"></iframe>

#### Complexity Analysis

Let $N$ be the size of `nums`.

* Time Complexity: $O(N)$

    We perform a simultaneous forward and backwards iteration of `nums`, taking a total of $O(N)$ time.

* Space Complexity: $O(N)$
 
    The algorithm uses an additional array `ans` of the same size as `nums`, which requires $O(N)$ extra space. Other auxiliary variables, such as `lessI` and `greaterI`, require only $O(1)$ space. Therefore, the overall space complexity is $O(N)$ due to the extra array used to store the result. However, if we consider only the auxiliary space complexity, it would be $O(1)$.

---