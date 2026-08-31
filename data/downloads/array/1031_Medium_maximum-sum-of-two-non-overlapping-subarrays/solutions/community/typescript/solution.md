# In depth explanation and step by step walk through

**Author:** JamesCommits
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/4708551/](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/4708551/)

---

### Problem Explanation

The core task is to find the maximum sum of elements in two non-overlapping subarrays within a given integer array, where the lengths of the two subarrays are predefined as `firstLen` and `secondLen`. The challenge lies in ensuring the subarrays do not overlap and maximizing their combined sum.

### Solution Overview

The  solution employs a dynamic programming approach encapsulated within a helper method, `slideSum`, to calculate the sum of elements in sliding windows of specific lengths (`L` and `M`) across the array. This method generates two arrays for each length:

- The first array (`slideSum[0][i]`) stores the sum of elements in the sliding window ending at position `i`.
- The second array (`slideSum[1][i]`) stores the maximum sum of a sliding window of the specified length starting from position `i` to the end of the array.

With these arrays, the solution iterates through the array to find the combination of `L`-length and `M`-length subarrays that produces the maximum sum, considering both possible orders (L before M and M before L).

### Walkthrough

---

We'll use the second example from the problem statement for this walkthrough:

- **Input Array (`nums`)**: `[3,8,1,3,2,1,8,9,0]`
- **First Length (`firstLen`)**: `3`
- **Second Length (`secondLen`)**: `2`

### Step 1: Initialize the Solution Class

We start by creating an instance of the `Solution` class and calling the `maxSumTwoNoOverlap` method with the inputs mentioned above.

### Step 2: Calculate Sliding Window Sums

The method first calculates sliding window sums for lengths `firstLen` (3) and `secondLen` (2) by calling `slideSum` with `nums` and each length respectively.

### For `firstLen` = 3

- We calculate the sum of every contiguous subarray of length 3 and the maximum sum starting from each index `i` to the end.
- For the input `[3,8,1,3,2,1,8,9,0]`, let's illustrate the calculation for the first array (`slideSum[0][i]`):
    - Ending at index 0 (not applicable for length 3).
    - Ending at index 1 (not applicable for length 3).
    - Ending at index 2: Sum of `[3,8,1]` = 12.
    - And so on, shifting the window by one until we reach the end.
- The second array (`slideSum[1][i]`) computes the max starting from each index for a window of length 3, considering the sums calculated above.

### For `secondLen` = 2

- Similar calculations are done for subarrays of length 2.

### Step 3: Find Maximum Sum of Two Non-Overlapping Subarrays

- The method iterates through the array, considering all possible positions for the first subarray of length `firstLen` and the second subarray of length `secondLen`, ensuring they do not overlap.
- For each position `i`, it checks two configurations:
    - Subarray of length `firstLen` starting at `i` and subarray of length `secondLen` following it.
    - Subarray of length `secondLen` starting at `i` and subarray of length `firstLen` following it.
- It uses the precomputed sums from `slideSum` for quick calculations.

### Step 4: Calculating the Result

- For each position, the method calculates the sum of the two non-overlapping subarrays and updates the result if it finds a new maximum.
- For our example, one optimal choice could be the subarrays `[3,8,1]` (sum = 12) and `[8,9]` (sum = 17), leading to a total maximum sum of 29.

### Conclusion

Through dynamic programming and efficient precomputation of sliding window sums, the solution finds the maximum sum of two non-overlapping subarrays of specified lengths. This approach significantly reduces the complexity of checking every possible pair of subarrays directly, which would be less efficient.

# Code
```
  function maxSumTwoNoOverlap(nums: number[], firstLen: number, secondLen: number): number {
    const len = nums.length;
    const lss = slideSum(nums, firstLen);
    const mss = slideSum(nums, secondLen);
    
    let result = 0;
    for (let i = 0; i < nums.length - firstLen - secondLen + 1; i++) {
      result = Math.max(
        result,
        Math.max(lss[0][i] + mss[1][i + firstLen], mss[0][i] + lss[1][i + secondLen])
      );
    }
    
    return result;
  }

  function slideSum(arr: number[], num: number): number[][] {
    const len = arr.length;
    const result: number[][] = Array(2).fill(0).map(() => Array(len).fill(0));
    
    for (let i = len - 1; i >= len - num; i--) {
      result[0][len - num] += arr[i];
      result[1][len - num] += arr[i];
    }
    
    for (let i = len - num - 1; i >= 0; i--) {
      result[0][i] = result[0][i + 1] + arr[i] - arr[i + num];
      result[1][i] = Math.max(result[0][i], result[1][i + 1]);
    }
    
    return result;
  }
```