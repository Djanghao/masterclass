# Official Solution

**Link:** [https://leetcode.com/problems/find-k-th-smallest-pair-distance/solution/](https://leetcode.com/problems/find-k-th-smallest-pair-distance/solution/)

---

[TOC]

## Solution

---

### Overview

The goal is to find the `k`-th smallest distance between any two different elements in an array `nums`. The distance between two elements `nums[i]` and `nums[j]` is defined as the absolute difference between their values, `|nums[i] - nums[j]|`. We only consider pairs where `i` is less than `j` to avoid counting the same pair twice.

For example:
> **Input:** `nums = [1, 3, 1]`, `k = 1`
> **Output:** `0`

Let's look at all possible pairs of elements and their distances:

1. Pair (1, 3):
   - Distance: |1 - 3| = 2

2. Pair (1, 1):
   - Distance: |1 - 1| = 0

3. Pair (3, 1):
   - Distance: |3 - 1| = 2

So, the distances are `[2, 0, 2]`.

To find the `k`-th smallest distance, we sort these distances: `[0, 2, 2]`.

Since `k = 1`, we need the 1st smallest distance, which is `0`.

Thus, the result is `0`.

The brute-force approach involves checking the distance for every possible pair of elements in the array and maintaining the `k` smallest distances using a heap. Specifically, we iterate over all pairs, calculate their absolute distances, and use a max-heap to keep track of the `k` smallest distances. If the heap size exceeds `k`, we remove the largest element. After processing all pairs, the root of the heap will represent the `k-th` smallest distance.

However, this method is computationally heavy and will lead to a Time Limit Exceeded (TLE) error. The time complexity is dominated by the need to examine all pairs, which is $O(n^2)$, combined with the overhead of maintaining a heap of size `k`, resulting in an overall time complexity of $O(n^2 \log k)$, where `n` is the number of elements. This makes the approach impractical for large values of `n`.

---

### Approach 1: Bucket Sort

#### Intuition

Given that array elements can be as large as `1,000,000`, a direct comparison approach would be computationally expensive. However, since the distances are bounded by the maximum element in the array, we can leverage this property to use a bucket sort approach, which is efficient for problems with a known range of values. This transforms the problem of finding the `k`-th smallest distance into a counting problem within a fixed range.

We first observe that the range of possible distances is finite and bounded:
- The minimum distance is 0, occurring when two numbers in the array are identical.
- The maximum distance is the difference between the largest and smallest numbers in the array.

This bounded range forms the foundation of our approach. With this range established, we conceptualize a series of "buckets," each representing a specific distance within our range. These buckets serve as counters, allowing us to tally the frequency of each distance without needing to store the actual pairs that produce them. This abstraction significantly reduces memory requirements and computational complexity.

Now for each pair of numbers in the array, calculate the absolute difference and increment the corresponding bucket count.

After processing all pairs, our bucket array contains a comprehensive frequency distribution of all distances present in the original array. Now traverse the bucket array from the smallest distance upwards, maintaining a running sum of counts. The distance where this running sum first equals or exceeds is the  k-th smallest distance.

#### Algorithm

- Determine the size of the input array `nums` and store it in `arraySize`.

- Find the maximum element in the array `nums` and store it in `maxElement`.

- Create a bucket array `distanceBucket` with size `maxElement + 1`, initialized to 0, to store the counts of each distance.

- Populate the `distanceBucket` array:
  - Iterate over all pairs of indices `(i, j)` where `i < j` in the array `nums`.
    - Calculate the distance between `nums[i]` and `nums[j]` as `abs(nums[i] - nums[j])`.
    - Increment the count for this distance in the `distanceBucket` array.

- Find the k-th smallest distance:
  - Iterate over all possible distances from 0 to `maxElement`.
    - Subtract the count of pairs with the current distance from `k`.
    - If `k` becomes less than or equal to 0, return the current distance as it is the k-th smallest distance.

- If the function does not return within the loop, return `-1` indicating no distance was found, although this case should not occur with valid inputs.

#### Implementation

> Note: The Python implementation for this approach will encounter a Time Limit Exceeded (TLE) error because Python's inherent slower execution speed.

<iframe src="https://leetcode.com/playground/H5scviJc/shared" frameBorder="0" width="100%" height="500" name="H5scviJc"></iframe>

#### Complexity Analysis

Let $n$ be the number of elements and $M$ be the maximum possible distance.

- Time complexity: $O(n^2 + M)$

    The $O(n^2)$ term arises from the nested loops used to calculate all pairwise distances between elements. Since we are examining every possible pair of elements in the array, this results in $n(n-1)/2$ comparisons, which simplifies to $O(n^2)$.

    After calculating all distances, we traverse the `distanceBucket` array to find the k-th smallest distance. This traversal is $O(M)$, where $M$ is the maximum possible distance, which is proportional to the largest element in the array. Thus, the total time complexity is $O(n^2 + M)$, accounting for both the pair distance calculations and the bucket traversal.

- Space complexity: $O(M)$

    The space complexity is dominated by the `distanceBucket` array, which is used to count occurrences of each possible distance. The size of this array is proportional to the maximum possible distance $M$. Aside from this array, the space usage is minimal and does not depend on the number of elements, leading to a space complexity of $O(M)$.

---

### Approach 2: Binary Search + Dynamic Programming (DP)

#### Intuition

We now explore a sophisticated approach that combines binary search with dynamic programming, especially effective for arrays with a broad range of values where bucket sort might be impractical due to memory constraints.

First, recognize that our solution space—the range of possible distances—is bounded. The minimum distance is 0, and the maximum is the difference between the largest and smallest elements in the array. This bounded range allows us to use binary search to efficiently find the `k`-th smallest distance.

Our key insight is that for any given distance `d`, we can count the number of pairs in the array with a distance less than or equal to `d`. If this count is less than `k`, the `k`-th smallest distance must be greater than `d`. Conversely, if the count is at least `k`, the `k`-th smallest distance must be less than or equal to `d`. This forms the basis of our binary search approach.

To implement this, we first sort the input array. Sorting is crucial because it enables us to efficiently count pairs with distances less than or equal to a given value.

We then set up our binary search:

- The lower bound of our search range is `0`, and the upper bound is the difference between the maximum and minimum elements in the sorted array.
- In each iteration, we calculate the midpoint of the current range and count the number of pairs with distances less than or equal to this midpoint.

The counting process is where dynamic programming comes into play. We use two auxiliary arrays to optimize our pair counting:

1. **prefixCount**: This array maintains the cumulative count of elements up to each value in the sorted array. For any index `i`, `prefixCount[i]` represents the number of elements less than or equal to `i`.
2. **valueCount**: Implemented as a hash map, `valueCount[i]` stores the count of occurrences of the value `i` in the array.

To count pairs for a given distance `d`, we iterate through the sorted array. For each element `x`, we calculate:

- The number of elements within distance `d` of `x` using `prefixCount`.
- The number of pairs formed by duplicate occurrences of `x` using `valueCount`.

Based on the count of pairs at the current midpoint distance, we adjust our binary search range:

- If the count is less than `k`, we need to look at larger distances by adjusting the lower bound.
- If the count is greater than or equal to `k`, we need to look at smaller distances by adjusting the upper bound.

We repeat this process, halving the search range each time, until the lower and upper bounds converge, giving us the `k`-th smallest pair distance.

#### Algorithm
 
- Sort the array `nums` to simplify distance calculations.

- Determine the size of the sorted array `nums` and store it in `arraySize`.

- Find the largest element in the sorted array `nums` and store it in `maxElement`.

- Calculate the maximum possible distance as `maxElement * 2`.

- Initialize arrays and maps:
  - Create an array `prefixCount` with size `maxPossibleDistance` to store prefix counts of distances.
  - Create a map `valueCount` to count occurrences of each value in the array.

- Populate the `prefixCount` array:
  - Iterate through possible distance values from 0 to `maxPossibleDistance - 1`.
    - For each distance value, determine the number of elements in the array `nums` that are less than or equal to this distance.
    - Store this count in `prefixCount` for the current distance.

- Populate the `valueCount` map:
  - Iterate through the array `nums`.
    - Count occurrences of each value and store in `valueCount`.

- Perform binary search for the k-th smallest distance:
  - Set `low` to 0 and `high` to `maxElement`.
  - While `low` is less than `high`:
    - Calculate the middle point `mid` as `(low + high) / 2`.
    - Count the number of pairs with distance ≤ `mid` using the helper function `countPairs`.
    - Adjust the binary search bounds based on whether the count is less than or greater than or equal to `k`.

- Return the smallest distance found by the binary search.

- Helper function `countPairs`:
  - Count the number of pairs with distance ≤ `maxDistance`:
    - Iterate through the array `nums`.
    - Calculate the number of pairs involving the current value that are within the allowed distance.
    - Accumulate the total count of such pairs.
  - Return the count of pairs with distance ≤ `maxDistance`.

#### Implementation

<iframe src="https://leetcode.com/playground/SU4MpYrm/shared" frameBorder="0" width="100%" height="500" name="SU4MpYrm"></iframe>

#### Complexity Analysis

Let $n$ be the number of elements and $M$ be the maximum possible distance.

- Time complexity: $O(n \log n + n \log M + M)$

    The $O(n \log n)$ term arises from sorting the array, which is necessary for efficiently calculating distances and performing binary search. Sorting takes $O(n \log n)$ time.
    
    The $O(n \log M)$ term comes from the binary search over the range of possible distances and counting pairs for each mid-value. Counting pairs involves traversing the array, and the binary search operations are logarithmic with respect to the maximum possible distance $M$. And we populate the `prefixCount` array by iterating through the possible values from 0 to `maxPossibleDistance` - 1 taking $O(M)$. Hence, the combined time complexity is $O(n \log n + n \log M + M)$.

- Space complexity: $O(n + M + S)$

    The space complexity includes $O(n)$ for storing the `prefixCount` array and the value counts in the `valueCount` map. The `prefixCount` array tracks the number of elements up to each possible distance, while `valueCount` stores counts of each unique element. Additionally, $O(M)$ is required for the `prefixCount` array. 
    
    Some extra space is used when we sort an array of size $n$ in place. The space complexity of the sorting algorithm ($S$) depends on the programming language. The value of $S$ depends on the programming language and the sorting algorithm being used:
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O( \log n )$
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$
    
    Thus, the total space complexity of the algorithm is $O(n + M + S)$.

---

### Approach 3: Binary Search + Sliding Window

#### Intuition

The core idea remains similar to our previous approach: for any given distance `d`, we aim to count the number of pairs in the array with a distance less than or equal to `d`. If this count is less than `k`, we know the `k`-th smallest distance must be greater than `d`. If the count is greater than or equal to `k`, the `k`-th smallest distance must be less than or equal to `d`.

Where this approach diverges is in how we perform this counting operation. Instead of using pre-computed dynamic programming arrays, we employ a sliding window technique that takes advantage of the sorted nature of our array.

We begin by sorting the input array and then we set up binary search as before, with the lower bound at 0 and the upper bound at the difference between the maximum and minimum elements in the sorted array. In each iteration of the binary search, we calculate the midpoint of our current range.

The key innovation in this approach is the sliding window method used to count pairs with distances less than or equal to our current midpoint distance. Here's how it works:

- Start with two pointers, `left` and `right`, both at the start of the array. Move the `right` pointer to check distances.
- As long as the distance between `right` and `left` is within the allowed range, keep moving `right` forward. Once we find a distance greater than our midpoint, we know that all elements between `left` and `right` (exclusive) form valid pairs with the element at `left`. We add this count to our total and then move the `left` pointer forward. Repeat until all pairs are checked.

This sliding window technique counts valid pairs in linear time for each binary search iteration. The efficiency arises because the `right` pointer doesn't need to reset for each new `left` position; it continues from where it left off, leveraging the sorted array.

Based on the count of pairs for the current midpoint distance, we adjust our binary search range as follows:

- If the count is less than `k`, we increase the distance by adjusting our lower bound.
- If the count is greater than or equal to `k`, we decrease the distance by adjusting our upper bound.

We continue this process, halving our search range each time, until the lower and upper bounds converge. At this point, we identify the `k`-th smallest pair distance.

The efficiency of this approach is due to the combination of binary search, which reduces the search space logarithmically, and the sliding window technique, which allows us to count pairs in linear time for each binary search iteration, given that the array is sorted.

#### Algorithm

- Sort the array `nums` to simplify distance calculations.

- Determine the size of the sorted array `nums` and store it in `arraySize`.

- Initialize the binary search range:
  - Set `low` to 0.
  - Set `high` to the difference between the maximum and minimum elements in `nums` (i.e., `nums[arraySize - 1] - nums[0]`).

- Perform binary search to find the smallest distance:
  - While `low` is less than `high`:
    - Calculate the middle point `mid` as `(low + high) / 2`.
    - Count the number of pairs with distance ≤ `mid` using the helper function `countPairsWithMaxDistance`.
    - Adjust the binary search bounds:
      - If the count of pairs is less than `k`, set `low` to `mid + 1`.
      - Otherwise, set `high` to `mid`.

- Return the smallest distance found by the binary search.

- Helper function `countPairsWithMaxDistance`:
  - Count the number of pairs with distance ≤ `maxDistance` using a sliding window:
    - Initialize `count` to 0.
    - Set `left` pointer to 0.
    - Iterate with `right` pointer from 0 to the end of the array:
      - Adjust the `left` pointer to maintain the window where the distance between `nums[right]` and `nums[left]` is ≤ `maxDistance`.
      - Add the number of valid pairs ending at the current `right` index to `count` (i.e., `right - left`).
  - Return the total count of pairs with distance ≤ `maxDistance`.

The algorithm is visualized below:

!?!../Documents/719/approach4.json:980,760!?!

#### Implementation

<iframe src="https://leetcode.com/playground/VeCnLoRm/shared" frameBorder="0" width="100%" height="500" name="VeCnLoRm"></iframe>

#### Complexity Analysis

Let $n$ be the number of elements and $M$ be the maximum possible distance.

- Time complexity: $O(n \log M + n \log n)$

    The $O(n \log M)$ term arises from the binary search over possible distances, where the search space is up to the maximum possible distance $M$. For each mid-value in the binary search, the `countPairsWithMaxDistance` function is called, which operates in linear time $O(n)$.

    The binary search itself runs in $O(\log M)$ time. Hence, the combined time complexity is $O(n \log M + n \log n)$, where the binary search and pair counting operations are combined.

- Space complexity: $O(S)$

    The space complexity is constant because the algorithm only uses a fixed amount of extra space for the left and right pointers, the mid-value, and counters. It does not require additional data structures that scale with the input size, so the space complexity is $O(1)$, excluding the space used to store the input array.  

    Some extra space is used when we sort an array of size $n$ in place. The space complexity of the sorting algorithm ($S$) depends on the programming language. The value of $S$ depends on the programming language and the sorting algorithm being used:
    - In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O( \log n )$
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$
    
    Thus, the total space complexity of the algorithm is $O(S)$.

---