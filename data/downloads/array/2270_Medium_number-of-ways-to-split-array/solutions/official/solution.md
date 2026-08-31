# Official Solution

**Link:** [https://leetcode.com/problems/number-of-ways-to-split-array/solution/](https://leetcode.com/problems/number-of-ways-to-split-array/solution/)

---

[TOC]

## Solution

---

### Approach 1: Prefix Sum Array

#### Intuition

Our task is to count all splits in the array `nums` where the sum of values before the split is greater than or equal to the sum of values after the split.

The main challenge in this problem lies in efficiently calculating the sums at each split. The brute force approach would involve looping over each value in each section of the split and adding them up to compare. This means determining whether a split is valid would take linear time, making the overall process take quadratic time. Such an approach would be too slow for our requirements. 

One way to determine the sum of any section of the array in constant time is by using a prefix sum array.

Each index in the prefix sum array stores the sum of all elements in the array from the start up to that index. For example:

If `nums = [2, 3, 5]`, the prefix sum array would be `[2, 5, 10]`.
- `prefix[0]` = 2 (sum of the first element).
- `prefix[1]` = 2 + 3 = 5 (sum of the first two elements).
- `prefix[2]` = 2 + 3 + 5 = 10 (sum of all three elements).

Using the prefix sum array, we can calculate the sum of any section of the array in constant time. For example, the sum of elements between index `start` (exclusive) and `end` (inclusive) is simply `prefix[end] - prefix[start]`. This avoids recalculating sums repeatedly for different splits.

Now that we understand prefix sums, let's create a prefix sum array `prefSum`. The first element will be `nums[0]` since no prefix exists for the `0`th element. For each subsequent index, we'll add the current value in `nums` to the prefix sum of the previous element.

With our prefix sum array ready, we can count the valid splits. We'll iterate through each possible split position. At each position, if the sum to the left of the split is greater than or equal to the sum to the right, we'll increment a counter. The final value of this counter will be our answer.

A common question that arises is how to recognize when to use the prefix sum technique. Suppose you're walking along a path, and someone asks how far you are from a point you passed earlier. Instead of counting the steps back, you just subtract the distance from where you are now to the point in question. This is what the prefix sum does. By using it, we can answer multiple queries in constant time, which reduces the computation time from a multiplication factor of $q$ to just addition for each query.

To generalize, when a problem requires answering multiple queries, and each query involves some form of range aggregation where each aggregate builds on the previous one, the prefix sum is often a good fit, such as the sum of a subarray, the product of a range, counting from a range or finding averages.

#### Algorithm

- Initialize:
  - a variable `n` to store the length of the input array `nums`.
  - an array `prefSum` of size `n` to store prefix sums, using `long` data type to handle large numbers.
- Set the first element of `prefSum` to the first element of `nums`, as the prefix sum of one element is the element itself.
- Iterate from index `1` to `n - 1` to build the prefix sum array:
  - Add the current element to the previous prefix sum to get the current prefix sum.
  - Store this value in `prefSum[i]`.
- Initialize a variable `count` to `0` to track the number of valid splits.
- Iterate `i` from `0` to `n - 2` to check each possible split position:
  - Calculate `leftSum` as the prefix sum up to index `i`.
  - Calculate `rightSum` by subtracting the prefix sum up to index `i` from the total sum (which is stored in `prefSum[n-1]`).
  - If `leftSum` is greater than or equal to `rightSum`, increment `count`.
- Return the final value of `count` as the result.

> Note: Given the problem constraints where the array elements can be up to `10^5` and the array length up to `10^5`, the sum could reach `10^10` which exceeds integer limits. Therefore, we use `long` to safely handle these large sums.

#### Implementation

<iframe src="https://leetcode.com/playground/X9DvHPTJ/shared" frameBorder="0" width="100%" height="500" name="X9DvHPTJ"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input array `nums`.

- Time complexity: $O(n)$

    The algorithm has two main loops. The first loop builds the prefix sum array in $O(n)$ time. The second loop iterates through all possible split positions, also taking $O(n)$ time. Since these operations are sequential, the total time complexity is $O(n)$.

- Space complexity: $O(n)$

    The algorithm uses an additional array `prefSum` of size $n$ to store the prefix sums. No other data structures that scale with input size are used. Therefore, the space complexity is $O(n)$.

---

### Approach 2: Optimized Prefix and Suffix Sums

#### Intuition

In the previous approach, we calculated the prefix sum array and then iterated through the array again to check each split. This involves some repetitive work since the sums can be updated dynamically as we process each element. Instead of calculating the prefix sum separately, we can directly track the sums on the left and right sides of the split as we iterate through the array.

To do this, we maintain two variables:

- `leftSum`: This keeps track of the sum of elements to the left of the current split position. At the beginning, since no elements are to the left, this is initialized to `0`.

- `rightSum`: This keeps track of the sum of elements to the right of the current split position. At the start, this is the total sum of the array, as all elements are initially on the right.

Now, each time we consider a new split position, the current element moves from the right side to the left side. So we update `leftSum` and add the current element to it. And to update `rightSum`, we subtract the current element from it.

After updating these variables, we compare `leftSum` and `rightSum`. If `leftSum` is greater than or equal to `rightSum`, the split is valid, and we increment a counter. And we repeat this until we exhaust the entire array.

The slideshow below demonstrates this algorithm in action:

!?!../Documents/2270/slideshow.json:774,582!?!

#### Algorithm

- Initialize two variables `leftSum` and `rightSum` to `0` to track the sum of elements on the left and right sides of each split.
- Calculate the initial `rightSum` by iterating through the input array and adding all elements to it, as initially, all elements are on the right side.
- Initialize a variable `count` to `0` to track the number of valid splits.
- Iterate from index `0` to the length of `nums` minus 2:
  - Add the current element to `leftSum` as it moves to the left side.
  - Subtract the current element from `rightSum` as it leaves the right side.
  - If `leftSum` is greater than or equal to `rightSum`, increment `count`.
- Return the final value of `count` as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/DQnGTDT9/shared" frameBorder="0" width="100%" height="500" name="DQnGTDT9"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input array `nums`.

- Time complexity: $O(n)$

    The algorithm has two main loops. The first loop calculates the initial `rightSum` by iterating through all elements once in $O(n)$ time. The second loop checks each possible split position, also taking $O(n)$ time. Since these operations are sequential, the total time complexity is $O(n)$.

- Space complexity: $O(1)$

    The algorithm only uses two variables (`leftSum` and `rightSum`) regardless of the input size. No additional data structures that scale with input are used. Therefore, the space complexity is constant, $O(1)$.

---