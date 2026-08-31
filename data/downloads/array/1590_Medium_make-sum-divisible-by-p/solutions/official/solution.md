# Official Solution

**Link:** [https://leetcode.com/problems/make-sum-divisible-by-p/solution/](https://leetcode.com/problems/make-sum-divisible-by-p/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force (Time Limit Exceeded)

#### Intuition

Our goal is to remove the smallest subarray so that the sum of the remaining elements is divisible by `p`.

If the total sum of the array is already divisible by `p`, there's no need to remove any subarray. However, if the total sum isn't divisible by `p`, we need to find a subarray to remove. The remainder of the total sum divided by `p` is the part we want to "eliminate" by removing a subarray whose sum's remainder matches this remainder.

To do this, we can check every possible subarray by starting at each index and calculating the sum of all subarrays that begin at this index. For each subarray, we compute the remaining sum of the elements after removing it. If the remaining sum becomes divisible by `p`, we record the length of the subarray. We keep track of the smallest such subarray length as we proceed through all possibilities.

This is inefficient because we compute the sum for every subarray, leading to quadratic time complexity. So, this will work for small arrays but will struggle with larger inputs, leading to TLE.

#### Algorithm

- Calculate the size of the input array `nums` and the total sum of its elements, using `long long` to avoid overflow.
- If the `totalSum` is already divisible by `p`, return 0 (no subarray needs to be removed).
- Calculate the `target` remainder that needs to be removed (i.e., `totalSum % p`).
- Initialize `minLen` to the size of the array `n` to keep track of the minimum subarray length.

- Iterate over all possible starting indices of subarrays:
  - For each `start` index, initialize `subSum` to 0.
  - Iterate through all possible ending indices from the `start` index:
    - Accumulate the sum of the subarray from `start` to `end`.
    - Calculate the `remainingSum` after removing the current subarray, using `(totalSum - subSum) % p`.
    - If `remainingSum` is 0:
      - Update `minLen` to the smaller value between `minLen` and the length of the current subarray (`end - start + 1`).

- After checking all possible subarrays, return:
  - `-1` if no valid subarray was found (i.e., `minLen` remains equal to `n`).
  - Otherwise, return `minLen` as the length of the smallest subarray that can be removed.

#### Implementation

<iframe src="https://leetcode.com/playground/iNWeeVwK/shared" frameBorder="0" width="100%" height="500" name="iNWeeVwK"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.

- Time complexity: $O(n^2)$

    The outer loop runs $n$ times, iterating over the starting index of the subarray. The inner loop also runs up to $n$ times for each iteration of the outer loop, as it sums the elements from the starting index to the end. Therefore, the overall time complexity of this nested loop structure results in $O(n^2)$.

- Space complexity: $O(1)$

    The algorithm uses a constant amount of extra space, as it only stores a few variables (like `totalSum`, `target`, `subSum`, and `minLen`). The space used does not depend on the size of the input array, making the space complexity constant.

---

### Approach 2: Prefix Sum Modulo

#### Intuition

We want to reduce the number of subarray checks while still solving the problem correctly. Usually, when we have a problem that involves the summation of a subarray, we resort to prefix sums. This lowers the time complexity of computing subarray summations to $O(1)$, as `sum(i, j) = sum(0, j) - sum(0, i-1)`.

We need to remove a subarray such that the sum of the remaining elements is divisible by `p`. This indicates that the remainder of the sum of the elements, after removing the subarray, must be zero when divided by `p`. We aim to use this information to find subarrays quickly.

Instead of trying all subarrays, we keep track of the prefix sum as we iterate through the array. For each index, we compute the current prefix sum modulo `p`. The remainder of the total sum modulo `p` gives us a "target" remainder we want to eliminate. This is where modular arithmetic becomes useful: if, at some point in our prefix sum, we find that removing a certain portion of the array will leave a sum divisible by `p`, we have our solution.

To speed this up, we use a hash map to store the latest occurrence of each remainder (prefix sum modulo `p`). By doing so, when we encounter the same remainder later on, we know that the subarray between these two occurrences can be removed to make the sum divisible by `p`. This allows us to find the smallest subarray length in linear time, drastically improving the efficiency of the algorithm.

This is how we construct the formula for the smallest subarray removal:

![Prefix Sum Modulo](../Figures/1590/equation.png)

#### Algorithm

- Initialize `n` as the size of `nums` and `totalSum` to 0.

- Calculate the total sum and target remainder:
  - Iterate over each element in `nums` to compute `totalSum` as the sum of all elements modulo `p`.
  - Set `target` as `totalSum % p`.
  - If `target` is 0, return 0 (the array is already divisible by `p`).

- Use a hash map to track prefix sums modulo `p`:
  - Initialize `modMap` with `0` mapped to `-1` to handle cases where the entire prefix is the answer.
  - Initialize `currentSum` to 0 and `minLen` to `n`.

- Iterate over the array:
  - Update `currentSum` with the current element, taking modulo `p`.
  - Calculate `needed` as the difference between `currentSum` and `target`, adjusted to be positive by adding `p` and taking modulo `p`.
  - Check if `needed` exists in `modMap`:
    - If it does, calculate the length of the subarray and update `minLen` if it's smaller.
  - Store the current remainder and its index in `modMap`.

- Return the result:
  - If `minLen` is still `n`, return `-1` (no valid subarray found).
  - Otherwise, return `minLen`.


The algorithm is visualized below:

!?!../Documents/1590/prefixsum.json:940,605!?!

#### Implementation

<iframe src="https://leetcode.com/playground/XASDc7Wd/shared" frameBorder="0" width="100%" height="500" name="XASDc7Wd"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.

- Time complexity: $O(n)$

    The algorithm iterates through the `nums` array twice: once to calculate the total sum and again to find the minimum length of the subarray that needs to be removed. Both of these operations take linear time, resulting in an overall time complexity of $O(n)$.

- Space complexity: $O(n)$

    The algorithm uses a hash map (`modMap`) to store the remainders and their corresponding indices. In the worst case, this hash map could store up to $n$ different remainders (one for each element in the array), leading to a space complexity of $O(n)$.

---