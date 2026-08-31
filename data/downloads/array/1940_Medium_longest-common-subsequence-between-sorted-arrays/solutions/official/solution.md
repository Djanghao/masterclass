# Official Solution

**Link:** [https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/solution/](https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/solution/)

---

[TOC]

## Solution

---

### Overview

Given the list of arrays, we aim to find the longest subsequence common to all of the arrays.

The brute force approach to solving this problem would be to generate the set of all of the possible subsequences for each array, and then find the longest common subsequence among the sets of subsequences. For a given array of length $n$, there are $2^n$ possible subsequences, so this approach would be computationally expensive.

Each array is sorted in **strictly increasing order**. This allows us to find the longest common subsequence without generating every subsequence of every array.

Invalid test case (violates strictly increasing):
> Input: arrays = [[4,4,4], [4,4,7,9]]
> Output: [4,4]

- For a given array, each value is unique; i.e., the array contains no duplicates. Each value in the longest common subsequence will also be unique.

Invalid test case (not sorted):
> Input: arrays = [[4,3,1], [1,4,7,9]]
> Output: [1]

- If an element is in both arrays, it will be in the longest common subsequence.

Valid test case (sorted in strictly increasing order):
> Input: arrays = [[1,3,4], [1,4,7,9]]
> Output: [1,4]

- Elements appear in the same order relative to other elements in the arrays, which means they will appear in the same order relative to each other in the subsequences. The longest common subsequence will be sorted in strictly increasing order.

We can conclude that if an element is in every array in `arrays`, it will be in the longest common subsequence exactly once. 

---

### Approach 1: Hash Map

#### Intuition

For each element that is in any of the arrays, we can check if it is in all of the arrays. If so, it is in the longest common subsequence.

Instead of performing a linear search for each element in each array, we can count the number of times each element occurs in all of the arrays combined. If the frequency of an element equals the number of arrays, the element is in all of the arrays, so we add it to the result. 

Hashmaps are a versatile data structure that can be used for counting frequencies, so we store the frequency of each element in the hashmap.

> Input: arrays = [[2,3,6,8], [1,2,3,5,6,7,10], [2,3,4,6,9]]

`frequencies` hashmap:

| num |  2  | 3   | 6   | 8   |  1  | 5   | 7   |  10 | 4   | 9   |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|freq |  3  |  3  |  3  |  1  |  1  |  1  |  1  |  1  |  1  |  1  |

There are `3` arrays in `arrays`. We add all the numbers with a frequency of `3` to the result.

> Output: [2,3,6]

#### Algorithm

1. Initialize a hashmap called `frequencies`.
2. Initialize an array `longestCommonSubseq` for storing the result.
3. For each `array` in `arrays`:
    - For each `num` in the `array`:
        - Increment `frequencies[num]` by `1`.
        - If the frequency of `num` equals the number of arrays, append `num` to the `longestCommonSubseq`.
4. Return `longestCommonSubseq`.

#### Implementation

<iframe src="https://leetcode.com/playground/LdxuSD4f/shared" frameBorder="0" width="100%" height="395" name="LdxuSD4f"></iframe>

#### Complexity Analysis

Let $n$ be the length of `arrays` and $m$ be the average length of `arrays[i]`.

* Time complexity: $O(n \cdot m)$

    We use a nested loop to traverse each element in each array in `arrays`. Hashmap lookup and insertion operations are $O(1)$ in the average case. Therefore, the time complexity is $O(n \cdot m)$.

* Space complexity: $O(n \cdot m)$

    The hashmap is size $O(e)$ where $e$ is the number of distinct elements across all of the arrays. At worst, there can be $n \cdot m$ distinct elements, so the space complexity is $O(n \cdot m)$.

    > Note: When the length of each array is the same as the range of elements (as with the given constraints), $e = m$, so the space complexity could be represented as $O(m)$. 

**Set Intersection**

Note that given a group of sets, their intersection is all of their common elements. Another approach to solving this problem would be to create hash sets out of the first and second arrays and find their intersection. Then, find the set intersection between the result and each of the following arrays. Finally, sort and return the result. Below is the Python3 code for this approach. 

This approach is less straightforward for languages that do not have built-in set functions and requires an additional sorting step, which leads to a worse time complexity, so it is not discussed in depth.

<iframe src="https://leetcode.com/playground/NXiFtrCd/shared" frameBorder="0" width="100%" height="191" name="NXiFtrCd"></iframe>

---

### Approach 2: Two Pointer

#### Intuition

First, let's develop a way to find the longest common subsequence between two arrays.

If an element is in both arrays, it is in their longest common subsequence. We can leverage the fact that both arrays are sorted, and traverse them simultaneously, in ascending order.

A common algorithm that traverses two arrays in order is merge sort. We can use a similar two-pointer method to traverse both arrays simultaneously without a nested loop.

`first` will indicate the position in `nums1`, and `second` will indicate the position in `nums2`.
 
During each iteration, we compare the values of `nums1[first]` and `nums2[second]`. There are three possibilities.
 
1. The elements are equal. We have found a common value, and we add the longest common subsequence. We increment `first` and `second`.

2. `nums1[first] < nums2[second]`. Because `nums2` is sorted, every element after `second` will also be greater than `nums1[first]`. However, there is a chance that an element in `nums1` after `first` will be equal to `nums2[second]`. Thus, we should increment `first`.

3. `nums1[first] > nums2[second]`. The logic works the other way visa versa. We should increment `second`.

Once we reach the end of one of the arrays, we return their longest common subsequence.

Below is a visualization of the two-pointer approach for finding the longest common subsequence between two arrays:

!?!../Documents/1940/1940_slideshow.json:960,570!?!

After finding the longest common subsequence between the first two arrays, we can use the same function to find the longest common subsequence between the current longest common subsequence and the next array in the list. We update the longest common subsequence and repeat this process until we have processed all of the arrays.

#### Algorithm

1. Initialize an array `longestCommonSubseq` to `arrays[0]`.
2. Define a function `longestSeq()` that finds the longest common subsequence between two arrays.
    - Initialize an array `longestCommonSeq` that stores the longest common subsequence between the two input arrays.
    - Initialize two variables: `first`, which will store the position in `nums1`, and `second`, which will store the position in `nums2` to `0`, the starting index.
    - Iterate through `nums1` and `nums2` while `first` is less than the size of `nums1` and `second` is less than the size of `nums2`:
        - If `nums1[first]` is less than `nums2[second]`, increment `first` by `1` because we need a larger value from `nums1` to match the value at `nums2[second]`.
        - If `nums1[first]` is greater than `nums2[second]`, increment `second` by `1` because we need a larger value from `nums2` to match the value at `nums1[first]`.
        - Otherwise, `nums1[first]` must equal `nums2[second]`, so append `nums1[first]` to the `longestCommonSeq`, and increment both `first` and `second`.
    - Return `longestCommonSeq`
3. For each `array` in `arrays`:
    - If the length of the `longestCommonSubseq` is `0`, there are no elements that are common to all of the arrays. Return the empty array `longestCommonSubseq`.
    - Call `longestSeq()` with `longestCommonSubseq` and the current array. Update `longestCommonSubseq` to the returned value.
4. Return `longestCommonSubseq`.

#### Implementation

<iframe src="https://leetcode.com/playground/dQsTZifz/shared" frameBorder="0" width="100%" height="500" name="dQsTZifz"></iframe>

#### Complexity Analysis

Let $n$ be the length of `arrays` and $m$ be the average length of `arrays[i]`.

* Time complexity: $O(n \cdot m)$

    We use a nested loop to traverse each element in each array in `arrays`. The `longestSeq()` function will visit each element in each of the two arrays at most once, so it takes $O(m)$ time. Therefore, the time complexity is $O(n \cdot m)$.

* Space complexity: $O(m)$

    The array we use to store the current longest common subsequence uses $O(m)$ space.

### Approach 3: Binary Search

#### Intuition

As discussed in the overview, if an element is in every array in `arrays`, it is in the longest common subsequence. Conversely, if an element is missing from any of the `arrays`, it is not in the longest common subsequence.

To solve this problem, we need to search for common values between arrays. The arrays are sorted, which means we can utilize binary search. 

> Binary search is a search algorithm that finds the position of a target value within a sorted array.

If you are unfamiliar with binary search, check out the [Binary Search Explore Card](https://leetcode.com/explore/learn/card/binary-search/). 

Binary search uses three pointers, which we can call `left`, `mid`, and `right`.

Initially, `left` points to the first index of the array, and `right` points to the last. At each step, we calculate `mid` as the middle element between `left` and `right`.

Binary search compares the target value with the middle element at each iteration.

 - If the target value is equal to the middle element, the target has been found.

- If the target value is less than the middle element, continue to search in the left half.

- If the target value is greater than the middle element, continue to search in the right half.

With every iteration, the search window is divided in half, and the search is continued on either the right or the left side until either the target is found or `left` becomes greater than `right`.

Every array must contain every element of the longest common subsequence, so the longest common subsequence cannot be shorter than the shortest array. To make the search process more efficient, we initially set the longest common subsequence to the shortest array.

Then, we iterate through all of the arrays and search for each element of the longest common subsequence in each array. If an element is missing from an array, we remove it from the longest common subsequence. If the longest common subsequence becomes empty, we return an empty list.

#### Algorithm

**Implementation Note:** 
`mid`, the middle of the subarray, is set to the index in the middle of the array. The basic midpoint formula is `(left + right) / 2`.
You'll notice that the below implementations instead use `left + (right - left) / 2`. This is because if `left + right` is greater than the maximum integer value, $2^{31} - 1$, it overflows and causes errors. 

`left + (right - left) / 2` is an equivalent formula, and never stores a value larger than `left` or `right`. Thus, if `left` and `right` are within the integer limits, we will never overflow.

1. Iterate through each array in `arrays`, updating the variable `shortestArray` to the shortest array found so far.
2. Initialize an array `longestCommonSubseq` to `shortestArray`.
3. Define a function `binarySearch()` that takes an array `nums` and a target value as parameters and returns `true` if the target is in the array.
    - Initialize the `left` pointer to `0` and the `right` pointer to `nums.length -1`. These represent the first and last indices of the array.
    - While `left` is less than or equal to `right`, iteratively perform a binary search:
        - Set `mid` to `left + (right - left) / 2`, which is the middle of this section of `nums`. We will compare `nums[mid]` to `target`.
        - If `nums[mid]` is greater than `target`, set `right` to `mid - 1`; we will continue to search in the left half `nums`.
        - If `nums[mid]` is less than `target`, set `left` to `mid + 1`; we will continue to search in the right half `nums`.
        - Otherwise, `nums[mid]` equals `target`, return `true`.
    - If the loop completes without finding the `target`, return `false`.
4. For each remaining array in `arrays`:
    - If the length of the `longestCommonSubseq` is `0`, there are no elements that are common to all of the arrays. Return the empty array `longestCommonSubseq`.
    - Initialize an array `uncommon` that stores the elements that are in the `longestCommonSubseq` but not the current array.
    - For each element `num` in the `longestCommonSubseq`, use `binarySearch()` to determine whether `num` is in the current array. If it is not, add `num` to `uncommon`.
    - Remove each element in `uncommon` from the `longestCommonSubseq`.
5. Return `longestCommonSubseq`.

#### Implementation

<iframe src="https://leetcode.com/playground/8r9XYeNG/shared" frameBorder="0" width="100%" height="500" name="8r9XYeNG"></iframe>

#### Complexity Analysis

Let $n$ be the length of `arrays` and $m$ be the average length of `arrays[i]`. Let $s$ be the length of the shortest array in `arrays`.

* Time complexity: $O(n \cdot (s \log m) + s^2)$

    Finding the shortest array takes $O(n)$.

    We iterate through the arrays, using binary search to look for each element in the current longest common subsequence. Binary search takes $O( \log m)$ time to search through $m$ elements, so the inner loop takes $O(s \log m)$ time. This means the time complexity of this step is $O(n \cdot (s \log m))$.

    Removing an element from an array of length $n$ takes $O(n)$. This means it takes $O(s^2)$ time total to remove all the elements of the shortest array from the longest common subsequence if there is no longest common subsequence.

    The overall time complexity is $O(n \cdot (s \log m) + n + s^2)$, which we can simplify to $O(n \cdot (s \log m) + s^2)$
    
    > If the shortest array is significantly shorter than many of the other arrays, this approach will be more efficient than the previous two.

* Space complexity: $O(s)$

    `shortestArray`, `longestCommonSubseq`, and `uncommon` can each use up to $O(s)$ space.