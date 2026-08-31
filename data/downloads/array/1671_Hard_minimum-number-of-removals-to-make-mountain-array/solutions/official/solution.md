# Official Solution

**Link:** [https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solution/](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solution/)

---

## Solution

---

### Overview

In the problem, we are given an array `nums` of length `N`, and the task is to determine the minimum number of elements to remove in order to transform it into a mountain array. A mountain array is defined as one that first strictly increases to a peak element at an index say `i`, then strictly decreases after that. Visually, this forms a "mountain" shape when plotted as shown below:

![fig](../Figures/1671/1671A.png)

To solve this, we must choose a peak element at index `i` such that the left subarray `(nums[0...i])` forms a strictly increasing sequence, and the right subarray `(nums[i...N - 1])` forms a strictly decreasing sequence.

For each candidate index `i` (potential peak element):
- The subarray `nums[0...i]` should be strictly increasing.
- The subarray `nums[i...N - 1]` should be strictly decreasing.

Let `L1` be the length of the longest strictly increasing subsequence (LIS) that ends at index `i`, and `L2` be the length of the longest strictly decreasing subsequence (LDS) that starts at index `i`.

To calculate the number of elements to remove:

- On the left side of the peak, there are `i + 1` elements from `nums[0] to nums[i]`. Therefore, the number of elements to remove on the left side is `i + 1 - L1`.
- On the right side, there are `N - i` elements from `nums[i] to nums[N - 1]`. The number of elements to remove on the right side is `N - i - L2`.

Thus, the total number of elements to remove for a given peak at index `i` is:

> $\text{removals} = \text{(i + 1 − L1) + (N − i − L2) = N + 1 − L1 − L2}$

This formula calculates the total removals required if ` i` is chosen as the peak element.

Therefore, the solution boils down to evaluating each index in the array as a potential peak element and determining the lengths of the ordered subsequences on both sides of it to calculate the number of required removals. We will discuss two approaches to find the lengths of these ordered subsequences: one using dynamic programming and the other utilizing binary search.

---

### Approach 1: LIS Using Dynamic Programming

#### Intuition

The discussion above focuses on finding the lengths of ordered subsequences for each index in the given array. One approach is to compute these lengths on the fly while iterating over the indices to identify the optimal peak element. However, this method introduces redundant operations and is therefore inefficient. Instead, we can precompute the lengths of the ordered subsequences for each index in the array. This allows us to directly use these values to calculate the required removals for each index, ultimately yielding the minimum number of removals across all indices.

To find these lengths, we use dynamic programming, similar to the approach in [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/solution/). First, we pass through the array from left to right to compute the longest increasing subsequence for each index `i`. For each element `nums[i]`, we compare it with all previous elements `nums[j]` where `j < i`. If `nums[i] > nums[j]`, we update the subsequence length at `i` with:


> $\text{lisLength[i] = max(lisLength[i], lisLength[j] + 1)}$

Next, we perform a right-to-left pass to calculate the longest decreasing subsequence starting at each index `i`. For each element `nums[i]`, we compare it with all subsequent elements `nums[j]` where `j > i`. If `nums[i] > nums[j]`, we update with:
> $\text{ldsLength[i] = max(ldsLength[i], ldsLength[j] + 1)}$

After precomputing the lengths of the ordered subsequences for all indices, we iterate through the `nums` array, considering each index `i` as a potential peak element. We calculate the number of elements that need to be removed using the expression:

> $\text{removals = N + 1 − lisLength[i] − ldsLength[i]}$

Before calculating the removals, it is essential to verify that the current index can serve as a valid peak by ensuring that both $\text{lisLength}[i]$ and $\text{ldsLength}[i]$ are greater than `1`. This condition is necessary because if either value is `0`, the peak would be positioned at the start or end of the array, which does not satisfy the criteria for a valid mountain array.

In the end, we can return the minimum value among the calculated removals as the result, representing the minimum number of elements that must be removed to form a valid mountain array.

#### Algorithm

1. Initialize LIS and LDS arrays:
    - Create two arrays `lisLength` and `ldsLength` of size `N` initialized to `1`, representing the lengths of the longest increasing and decreasing subsequences, respectively.
2. Calculate LIS (Longest Increasing Subsequence):
    - For each index `i`, iterate through all indices `j` before `i`.
    - If `nums[i] > nums[j]`, update `lisLength[i]` as `max(lisLength[i], lisLength[j] + 1)`.
3. Calculate LDS (Longest Decreasing Subsequence):
    - For each index `i`, iterate through all indices `j` after `i`.
    - If `nums[i] > nums[j]`, update `ldsLength[i]` as `max(ldsLength[i], ldsLength[j] + 1)`.
4. Determine minimum removals:
    - For each index `i`, if both `lisLength[i] > 1` and `ldsLength[i] > 1` (i.e., it's a valid mountain peak), calculate the minimum removals required as `N - (lisLength[i] + ldsLength[i] - 1)`.
5. Return `minRemovals`

#### Implementation

<iframe src="https://leetcode.com/playground/2YdRPu7S/shared" frameBorder="0" width="100%" height="500" name="2YdRPu7S"></iframe>

#### Complexity Analysis

Here, $N$ is the number of elements in the array `nums`.

- Time complexity: $O(N^2)$

  The process of determining the lengths of the increasing and decreasing subsequences using dynamic programming requires $O(N^2)$ time. Afterward, we iterate over the nums array to calculate the number of removals needed, which takes  $O(N)$ time. Therefore, the overall time complexity is  $O(N^2)$.

- Space complexity: $O(N)$

  We utilize two arrays, `lisLen` and `ldsLen`, each of size $N$ to store the lengths of the ordered subsequences. Consequently, the total space complexity is $O(N)$.

---

### Approach 2: LIS Using Binary Search

#### Intuition

This approach shares the same high-level concept as the previous one: we will precompute the lengths of the longest increasing subsequence (LIS) and the longest decreasing subsequence (LDS) for each index. We then use these lengths to determine the number of elements that need to be removed for each index to serve as the peak of the mountain array.

The key difference lies in how we compute the lengths of the ordered subsequences. This method employs binary search, as discussed in the third approach of [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/solution/).

To find the length of the longest increasing subsequence using binary search, we maintain a separate array that holds the longest increasing subsequence encountered so far. The strategy is to ensure that the length of this subsequence remains the same or increases with the addition of new elements. As we iterate through each element in the array nums, we use binary search to find the index of the first element in our subsequence that is greater than or equal to the current element. If this index is equal to the size of the subsequence, it indicates that the current element is greater than the last element in the subsequence. Therefore, we add it to the subsequence, which increases its length. If the binary search yields an index within the existing subsequence, we replace the element at that index with the current element. This is done because the current element is either equal to or smaller than the existing element, and this allows for potentially more elements to be added to the subsequence in the future.

Similarly, we determine the length of the decreasing subsequence by iterating from the right end of the array. To reuse the same logic, we can reverse the nums array and apply the same method to find the increasing subsequence, which is equivalent to the decreasing subsequence of the original array. This approach allows us to define a single method that computes the length of the longest increasing subsequence for both the left and right sides of the peak element.

#### Algorithm

1. Define the function`getLongestIncreasingSubsequenceLength` that takes vector `v`
    - Initialize a list `lisLen` to store the current the length of the longest increasing sequence for each index.
    - Initialize a list `lis` to store the current LIS sequence.
    - For each element in the input array from index `1`, use a binary search (lowerBound) to find its position `index` in `lis`.
        - If the element `v[i]` is larger than all elements in `lis`, append it.
        - Otherwise, replace the element in `lis` at `index` with `v[i]`.
        - Update the `lisLen[i]` to the size of `lis`.
2. Calculate LIS for left to right using the above function and store it in the list `lisLength`
3. Calculate LDS (longest decreasing subsequence) for left to right using the above function and store it in the list `ldsLength`
    - Reverse the input array `nums` and and use the function `getLongestIncreasingSubsequenceLength`
    - Reverse the resulting `ldsLen` to map back to the original array indices.
4. Determine minimum removals:
    - For each index `i`, if both `lisLength[i] > 1` and `ldsLength[i] > 1` (i.e., it's a valid mountain peak), calculate the minimum removals required as `N - (lisLength[i] + ldsLength[i] - 1)`.
5. Return `minRemovals`

#### Implementation

<iframe src="https://leetcode.com/playground/GTcjY4o5/shared" frameBorder="0" width="100%" height="500" name="GTcjY4o5"></iframe>

#### Complexity Analysis

Here, $N$ represents the number of elements in the array nums.

- Time Complexity: $O(N \log N)$

  The computation of the lengths of the increasing and decreasing subsequences using binary search takes $O(N \log N)$, as we perform a binary search, which has a complexity of $O(\ log N)$, for each of the $N$ elements. After this, we iterate through the nums array to calculate the number of removals needed, which requires $O(N)$ time. Thus, the overall time complexity is $O(N \log N)$.

- Space Complexity: $O(N)$

  We need two arrays, `lisLen and ldsLen`, each of size $N$, to store the lengths of the ordered subsequences. Additionally, we require an array to store the actual subsequence, `lis`, which can be as long as the original array. Consequently, the total space complexity is $O(N)$

---