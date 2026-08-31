# Official Solution

**Link:** [https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solution/](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solution/)

---

## Solution

---

### Overview

We need to find the maximum absolute sum of any subarray within the given integer array `nums`. A **subarray** is a contiguous segment of the array, and the **absolute sum** of a subarray is simply the absolute value of the sum of its elements.  

Formally, for a subarray `[nums[l], nums[l + 1], ..., nums[r]]`, its absolute sum is:  
$\left| \sum_{i=l}^{r} \text{nums}[i] \right| $ 

We need to find the subarray whose sum, when taken in absolute value, is the highest among all possible subarrays (including the possibility of choosing an empty subarray, which has a sum of `0`).  

Mathematically, we are looking for:  
$\max \left( \max_{l \leq r} | \sum_{i=l}^{r} \text{nums}[i] | \right)$
where `l` and `r` define the boundaries of a valid subarray.  

A common pitfall in this problem is overlooking that both a subarray with a large positive sum and a subarray with a large negative sum contribute to the answer, as we take the absolute value.

---

### Approach 1: Greedy - Prefix Sum

#### Intuition

A brute-force approach to solving this problem involves considering all possible subarrays of the given array and comparing their sums to find the one with the maximum absolute value. While this brute-force approach works, it requires repeatedly summing subarrays, making it computationally expensive. Instead of recalculating sums every time, we can optimize the process using prefix sums, a common technique for handling subarray problems efficiently.

The idea behind prefix sums is that if we precompute cumulative sums up to each index, we can quickly determine the sum of any subarray. The prefix sum at index `i` represents the total sum of elements from the beginning of the array up to `i`. This allows us to determine the sum of any subarray between indices `l` and `r` by taking the difference `prefixSum[r] - prefixSum[l-1]`, eliminating the need for repeated summation.

We can apply this idea in the current problem by considering each index in the array nums as the endpoint of a potential subarray. One way to approach this is by checking the prefix sum at each index before it and determining the maximum sum. However, we can optimize this further using a greedy approach.

- If the prefix sum at index `i`, denoted as `prefixSum[i]`, is positive, we need to find the minimum prefix sum encountered so far. This is because we will maximize the sum of our subarray with a right endpoint at `i` by finding the minimum prefix sum.

- Conversely, if `prefixSum[i]` is negative, we need to find the maximum prefix sum encountered so far. This is because when the prefix sum is negative, subtracting a positive value (the maximum prefix sum) will result in a larger negative difference, which will maximize our absolute sum.

With this in mind, we iterate through the array while maintaining a running prefix sum. As we process each element, we update the prefix sum by adding the current number. To find the maximum possible positive subarray sum, we compute the difference between the current prefix sum and the smallest prefix sum seen so far. To find the maximum possible negative subarray sum, we compute the absolute difference between the current prefix sum and the largest prefix sum seen so far. Additionally, since a subarray can start at the very beginning of the array, we also compare the absolute value of the prefix sum itself against our current maximum absolute sum.

At each step, we update the smallest and largest prefix sums encountered so far to ensure that they always store the minimum and maximum values up to the current index. By doing this, we guarantee that each index is processed only once.

#### Algorithm

1. Initialize variables:
    - `minPrefixSum` to the maximum possible integer (`INT_MAX`) — tracks the smallest prefix sum encountered so far.
    - `maxPrefixSum` to the minimum possible integer (`INT_MIN`) — tracks the largest prefix sum encountered so far.
    - `prefixSum` to `0` — stores the cumulative sum of the elements as we iterate through the array.
    - `maxAbsSum` to `0` — stores the maximum absolute difference of prefix sums found so far.

2. Iterate through the array and for each element `nums[i]` in the array:
    - Add `nums[i]` to the `prefixSum` to calculate the cumulative sum up to the current index.
    - Update `minPrefixSum` to the smaller of its current value and `prefixSum`.
    - Update `maxPrefixSum` to the larger of its current value and `prefixSum`.

3. Calculate maximum absolute sum:
    - If the `prefixSum` is positive, update `maxAbsSum` with the larger of its current value or  `prefixSum - minPrefixSum` or `prefixSum`.
    - If the `prefixSum` is negative, update `maxAbsSum` with the larger of its current value or the `abs(prefixSum - maxPrefixSum)` or `prefixSum`.

4. Return `maxAbsSum`.

#### Implementation

<iframe src="https://leetcode.com/playground/PVPEcMAq/shared" frameBorder="0" width="100%" height="500" name="PVPEcMAq"></iframe>

#### Complexity Analysis

Here, $N$ is the number of elements in the array `nums`.

- Time complexity: $O(N)$

  We iterate over the array `nums` to find the running `prefixSum` and find the `minPrefixSum` and `maxPrefixSum`. All these operations in the for loop are constant time and hence the total time complexity is equal to $O(N)$.

- Space complexity: $O(1)$

  No extra space is required other than the few variables to store the prefix sum and the minimum/maximum sums and hence the space complexity is constant.
  
---

### Approach 2: Greedy - Prefix Sum - Shorter

#### Intuition

This approach is similar to the previous one where we utilized a prefix sum array to calculate the sum of any subarray between two indices. In the earlier method, we considered each index as the endpoint of a subarray and computed the maximum possible sum by tracking the minimum and maximum prefix sums encountered up to that point.

To maximize the absolute subarray sum, we need to find two prefix sums — one that is as large as possible and another that is as small as possible. This is because the sum of any subarray between indices `i` and `j` can be expressed as `prefixSum[j] - prefixSum[i]`. The greater the difference between `prefixSum[j]` and `prefixSum[i]`, the larger the absolute sum of the subarray. Thus, to maximize this difference, `prefixSum[j]` should be as large as possible, while `prefixSum[i]` should be as small as possible.

With this observation, we iterate through the array while keeping track of two values: `minPrefixSum`, which stores the smallest prefix sum encountered so far, and `maxPrefixSum`, which stores the largest prefix sum. As we process each element, we update these values accordingly. Once we have finished iterating, the absolute difference between `maxPrefixSum` and `minPrefixSum` gives us the maximum absolute subarray sum.

One important note is that, instead of initializing `maxPrefixSum` to `INT_MIN` as is commonly done, we initialize it to `0`. This is because the empty subarray, which has a sum of `0`, is a valid subarray. In cases where all elements in the array are negative, initializing `maxPrefixSum` to `0` ensures that it correctly reflects the scenario where no positive subarray sum exists.

![alt text](../Figures/1749_fix/1749A_fix.png)

#### Algorithm

1. Initialize variables:

    - `minPrefixSum` and `maxPrefixSum` are initialized to `0`. These will track the minimum and maximum prefix sums encountered during the iteration.
    - `prefixSum` is initialized to `0`. This will store the cumulative sum as we iterate through the array.

2. Loop through each element of the array nums:

    -  Add the current element `nums[i]` to `prefixSum`
    - Update `minPrefixSum` to be the smaller of its current value and the current `prefixSum`
    - Update `maxPrefixSum` to be the larger of its current value and the current `prefixSum`

3. Return the value of `maxPrefixSum - minPrefixSum`

#### Implementation

<iframe src="https://leetcode.com/playground/nt22iLLj/shared" frameBorder="0" width="100%" height="327" name="nt22iLLj"></iframe>

#### Complexity Analysis

Here, $N$ is the number of elements in the array `nums`.

- Time complexity: $O(N)$

  We iterate over the array `nums` to find the running `prefixSum` and find the `minPrefixSum` and `maxPrefixSum`. All these operations in the for loop are constant time and hence the total time complexity is equal to $O(N)$

- Space complexity: $O(1)$

  No extra space is required other than the few variables to store the prefix sum and the minimum/maximum sums and hence the space complexity is constant.

---

### Approach 3: Bidirectional Kadane's Algorithm

#### Intuition

From our previous observations, we know that a subarray can contribute to the answer in two ways: either by having a large positive sum or by having a large negative sum. This suggests that instead of tracking just one sum, we should track both the maximum positive subarray sum and the minimum (most negative) subarray sum.  

We start with an initial sum of zero and iterate through the array, maintaining two running sums: one that accumulates positive contributions and one that accumulates negative contributions. If adding an element increases our positive sum, we keep it; otherwise, we reset it to zero to start fresh. Similarly, if adding an element makes our negative sum more negative, we keep it; otherwise, we reset it to zero. By continuously updating our answer with the maximum absolute value of these sums, we ensure that we capture the most extreme subarray sum, whether positive or negative. Since a subarray sum can be either positive or negative, taking the absolute value ensures that we capture the largest magnitude.

#### Algorithm

- Initialize `positiveSum`, `negativeSum`, and `ans` to `0`.
- Iterate over `nums`:
  - Update `positiveSum` by adding `num`, ensuring it remains non-negative.
  - Update `negativeSum` by adding `num`, ensuring it remains non-positive.
  - Update `ans` with the maximum of `ans`, `positiveSum`, and the absolute value of `negativeSum`.
- Return `ans`, representing the maximum absolute sum of any subarray.

#### Implementation

<iframe src="https://leetcode.com/playground/JjeUaufD/shared" frameBorder="0" width="100%" height="259" name="JjeUaufD"></iframe>

#### Complexity Analysis

Here, $N$ is the number of elements in the array `nums`.

- Time complexity: $O(N)$

    The algorithm iterates through the array `nums` once, performing $O(1)$ operations (like `max`, `min`, and arithmetic) for each element. Thus, the time complexity is linear, $O(N)$.
 
- Space complexity: $O(1)$

    No extra space is required other than the few variables to store the positive sum and negative sum and hence the space complexity is constant.

---