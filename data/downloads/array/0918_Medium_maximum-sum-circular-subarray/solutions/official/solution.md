# Official Solution

**Link:** [https://leetcode.com/problems/maximum-sum-circular-subarray/solution/](https://leetcode.com/problems/maximum-sum-circular-subarray/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Enumerate prefix and suffix sums

#### Intuition

As a circular array, the maximum subarray sum can be either the maximum "normal sum" which is the maximum sum of the ordinary array or a "special sum" which would involve elements that wrap around the array. The "special sum" would be the combination of a prefix sum and a suffix sum. A prefix is a subarray that starts at the first element of the array and a suffix is a subarray that ends at the final element of the array. The "special sum" would involve a prefix and suffix that do not overlap.

The normal sum is the [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) problem and can be solved with Kadane's algorithm. Please familiarize yourself with this solution if you haven't already. In this article, to save time, we will assume that users have already solved Maximum Subarray.

<iframe src="https://leetcode.com/playground/SamRfRyv/shared" frameBorder="0" width="100%" height="310" name="SamRfRyv"></iframe>

We can calculate both the normal sum and the special sum and return the larger one.

Assuming we already have the normal sum (it's just the solution to Maximum Subarray), let's focus on how to find the special sum.

Assume the input array is called `nums` whose length is `n`. To calculate the special sum, we need to find the maximum sum of a prefix sum and a non-overlapping suffix sum of `nums`. Our idea is to enumerate a prefix with its sum and add the maximum suffix sum that starts after the prefix so that the prefix and suffix don't overlap. 

Imagine an array `suffixSum` where `suffixSum[i]` represents the suffix sum starting from index `i`, namely `suffixSum[i]` = `nums[i]` + `nums[i + 1]` + ... + `nums[n - 1]` (it's like a prefix sum, but backward). We can construct an array `rightMax` where `rightMax[i] = max(suffixSum[i], suffixSum[i + 1], ...suffixSum[n - 1])`.

Namely, `rightMax[i]` is the largest suffix sum of `nums` that comes on or after `i`.

With `rightMax`, we can then calculate the special sum by looking at all prefixes. We can easily accumulate the prefix while iterating over the input, and at each index `i`, we can check `rightMax[i + 1]` to find the maximum suffix that won't overlap with the current prefix.

#### Algorithm

The algorithm works as follows:

* Create an integer array `rightMax` of length `n`. 
* Set `rightMax[n - 1]` to `nums[n - 1]`, set `suffixSum` to `nums[n - 1]`.
* Iterate over `i` from `n - 2` to `0`
    * Increase `suffixSum` by `nums[i]`
    * Update `rightMax[i]` to `max(rightMax[i + 1], suffixSum)`

* Set `maxSum` and `prefixSum` to `nums[0]`.
* Iterate over `i` from `0` to `n - 2`
    * Increase `prefixSum` by `nums[i]`
    * Update `specialSum` to `max(specialSum, prefixSum + rightMax[i + 1])`.

* Calculate the normal sum `maxSum` using Kadane's algorithm.
* Return `max(maxSum, specialSum)`

#### Implementation

<iframe src="https://leetcode.com/playground/ECy5k8Px/shared" frameBorder="0" width="100%" height="500" name="ECy5k8Px"></iframe>


#### Complexity Analysis

Here, $N$ is the length of the input array.

* Time complexity: $O(N)$.

The algorithm iterates over all elements in the array to calculate the `rightMax` array, and then to find the answer. These both take linear time.

* Space complexity: $O(N)$.

This is the space to save the `rightMax` array.

---

### Approach 2: Calculate the "Minimum Subarray"

#### Intuition

As mentioned before, we know that the maximum "normal sum" is the Maximum Subarray problem which can be found with Kadane's. As such, we can focus on finding the "special sum".

Instead of thinking about the "special sum" as the sum of a prefix and a suffix, we can think about it as the sum of all elements, minus a subarray in the middle. In this case, we want to minimize this middle subarray's sum, which we can calculate using Kadane's algorithm as well.

<center>
<img src="../Figures/918/918_Maximum_Sum_Circular_Subarray.png" width="500"/>
</center>
<br>

If we use Kadane's algorithm but use `min()` instead of `max()` to update the current subarray sum, it will give us the minimum subarray. Then, we can just subtract the minimum subarray from the total sum to find the "special sum".

There is one case we need to consider however; what if the minimum subarray contains all elements, such as in the case where every element is negative? In that case, our "special sum" would represent an empty array, which is invalid because the problem explicitly states that we need a non-empty subarray.

If we find that the minimum subarray is equal to the total sum, then we need to ignore the "special sum" and just return the "normal sum".

#### Algorithm

* Calculate the maximum subarray `maxSum` using Kadane's algorithm.
* Calculate the minimum subarray `minSum` using Kadane's algorithm, by using `min()` instead of `max()`.
* Calculate the sum of all the elements in `nums`, `totalSum`
* If `minSum` == `totalSum` return `maxSum`, otherwise return `max(maxSum, totalSum - minSum)`.

#### Implementation

<iframe src="https://leetcode.com/playground/NPfR9VTT/shared" frameBorder="0" width="100%" height="500" name="NPfR9VTT"></iframe>


#### Complexity Analysis

Here, $N$ is the length of the input array.

* Time complexity: $O(N)$.

The algorithm iterates over all elements to calculate the `maxSum`, `minSum`, and `sum` which takes $O(N)$ time.

* Space complexity: $O(1)$.

The algorithm doesn't use extra space other than several integer variables.

---