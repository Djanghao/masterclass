# Official Solution

**Link:** [https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solution/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solution/)

---

[TOC]

## Solution

---

### Approach 1: Sorting

#### Intuition

We are given an array `nums` of positive integers. Our goal is to find the largest possible sum of two distinct elements, `nums[i]` and `nums[j]`, where both numbers have the same digit sum. If no such pair exists, we return `-1`.

Observe that we can divide the numbers into groups, where all numbers with the same digit sum belong to the same group. The two largest numbers in each group will always form the pair with the greatest sum for that group.

So, what is the first technique that comes to mind when we need to select the largest values from a set? Most likely, it's sorting the values and picking the largest ones. However, in this case, we can't directly sort the elements. Instead, we need to map each number to its digit sum and then sort the numbers within each group that shares the same digit sum.

For example, given the array `nums = [36, 60, 45, 18, 33, 24]`, the digit sums of the elements are: `[9, 6, 9, 9, 6, 6]`.

Now, the elements with digit sum of 9 are `[36, 45, 18]` and those with digit sum of 6 are `[24, 33, 60]`. When we sort the elements in these groups, we get `[18, 36, 45]` and `[24, 33, 60]`. The two largest values in each group would create the largest sum for that digit sum. Therefore, for digit sum 9, the largest sum is `45 + 36 = 81`, and for digit sum 6, it is `33 + 60 = 93`.

We can implement this using an array of pairs where each element is of the form `{digitSum, value}`. Then, we sort the array based on the `digitSum` values. If two elements have the same digit sum, we sort them based on their values. This way, all elements with the same digit sum will be grouped together in non-decreasing order. Finally, we'll update our result with the largest sum of two consecutive elements within each group, which is the sum of the two last elements of the group.

#### Algorithm

Helper Function - `calculateDigitSum(int num)`:

- Initialize `digitSum` to 0.
- While `num` is greater than 0:
    - Add `num % 10` to `digitSum`.
    - Divide `num` by 10.
- Return `digitSum`.

Main Function:

- Iterate through the elements of `nums`:
    - Compute the digit sum for each element using `calculateDigitSum(number)`.
    - Store each number and its digit sum as a pair in the array `digitSumPairs`.
- Sort the vector `digitSumPairs` based on digit sums. If two elements have the same digit sum, sort by their values.
- Initialize `maxPairSum` as `-1`.
- Iterate through the sorted array starting from index 1:
   - Compare the current element's digit sum with the previous element's digit sum.
   - If they are the same, calculate the sum of their values.
   - Update `maxPairSum` with the larger value between `maxPairSum` and the calculated sum.
- Return `maxPairSum`.

#### Implementation

<iframe src="https://leetcode.com/playground/ABr3rk7y/shared" frameBorder="0" width="100%" height="500" name="ABr3rk7y"></iframe>

#### Complexity Analysis

Let $n$ be the size of `nums`.

- Time Complexity: $O(n \cdot \log n)$

    The algorithm iterates through the `nums` array to compute the digit sum of each element. Each call to the `calculateDigitSum` function takes $O(m)$ time, where $m$ is the number of digits of the input integer. Therefore, constructing the `digitSumPairs` array requires $O(n \cdot m)$ time, which is approximately $O(n)$ since $m <= 10$ for all elements of the array. 
    
    Sorting the digit-sum pairs requires $O(n \log{n})$ time. The final traversal to find the maximum pair sum takes $O(n)$, as it involves only constant-time operations for each element, such as array accesses and comparisons. 
    
    Therefore, the overall time complexity is $O(n \log{n})$.

- Space Complexity: $O(n)$

    The algorithm uses extra space to store `digitSumPairs`, which consists of $n$ elements. Additional space is required for a few variables, but this usage is constant. Therefore, the overall space complexity is $O(n)$.

---

### Approach 2: Priority Queue

#### Intuition

In the previous approach, we stored all the elements with a particular digit sum. However, we only need the two largest elements for each case. Therefore, instead of using an array for each digit sum, we can use a priority queue (based on a heap) of size 2 to track the two greatest elements we have seen so far with the given digit sum. Refer to [Leetcode Explore card on Heaps](https://leetcode.com/explore/featured/card/heap/) to learn more about the topic.

The first two elements with a specific digit sum are pushed directly into the heap for that digit sum. Now, what should we do when we come across a new element with the same digit sum? We can add it to the heap and then remove the smallest element to ensure that we keep only the two largest elements seen so far. Since we want to remove the smallest element whenever the heap size exceeds two, we use a min-heap for this purpose.

For example, for the array `nums = [36, 60, 45, 18, 33, 24]`, the digit sums of all elements are: `[9, 6, 9, 9, 6, 6]`.

For the priority queue for digit sum 9, we'd push the first element, 36. Therefore, the priority queue would be `[36]`.

For the priority queue for digit sum 6, we'd push the second element, 60. Therefore, the priority queue would be `[60]`.

For the priority queue for digit sum 9, we'd push the third element, 45. Therefore, the priority queue would be `[36, 45]`.

For the priority queue for digit sum 9, we'd push the fourth element, 18. Therefore, the priority queue would be `[18, 36, 45]`. Since the priority queue size has exceeded 2, we'll pop the smallest element from the queue. The final priority queue would be `[36, 45]`.

Similarly, for digit sum 6, the final priority queue would be `[33, 60]`. We'll calculate the larger pair sum for both the priority queues and return the greater sum.

Also, observe that we need to create a priority queue for each possible digit sum. The greatest digit sum for the given constraints (`nums[i] <= 10^9`) occurs for the integer `999999999`, which gives a sum of `81`. Therefore, we must initialize 81 priority queues, with each queue holding at most 2 elements in the worst case.

#### Algorithm

Helper Function - `calculateDigitSum(int num)`:

- Initialize `digitSum` to `0`.
- While `num` is greater than `0`:
    - Add `num % 10` to `digitSum`.
    - Divide `num` by `10`.
- Return `digitSum`.

Main Function:

- Initialize an array `digitSumGroups` with `82` priority queues (one for each possible digit sum from 0 to 81). Each priority queue will be a min-heap that stores at most `2` elements.
- Initialize `maxPairSum` as `-1`.
- Iterate through the elements of `nums`:
    - Compute the digit sum for each element using `calculateDigitSum(number)`.
    - Add the number to the corresponding min-heap in `digitSumGroups`.
    - If the size of the heap exceeds `2`, pop the smallest element to keep only the two largest numbers.
- Traverse through `digitSumGroups` to find the maximum pair sum for each group:
   - If a heap contains exactly two numbers, calculate their sum.
   - Update `maxPairSum` with the larger value between `maxPairSum` and the calculated sum.
- Return `maxPairSum`.

#### Implementation

<iframe src="https://leetcode.com/playground/nuFvNmMU/shared" frameBorder="0" width="100%" height="500" name="nuFvNmMU"></iframe>

#### Complexity Analysis

Let $n$ be the size of `nums`, and let `m` be the maximum number in `nums`.

- Time Complexity: $O(n \log m)$

    The time complexity of this approach is primarily determined by the operations performed on the input array `nums` and the computation of digit sums. The `calculateDigitSum` function computes the sum of digits for a given number, which takes $O(\log m)$ time. This is because the number of digits in a number is proportional to $\log_{10} m$. 

    Also, the push and pop operations on a priority queue (min heap) take $O(1)$ time because the heap size is limited to $2$, resulting in an overall time complexity of $O(n \log m)$.

    Finally, the second loop iterates over the `digitSumGroups` array, which has a size proportional to the maximum digit sum, $O(\log m)$. For each heap of size 2, it performs two pop operations and a sum computation, each taking $O(1)$ time. This loop adds $O(\log m)$ to the time complexity. Combining all these, the overall time complexity is $O(n \log m)$.

- Space Complexity: $O(\log m)$

    The `digitSumGroups` array stores priority queues (min-heaps) for each possible digit sum. Since the maximum digit sum is proportional to $\log m$, the size of this array is $O(\log m)$. Each heap in this array can store at most 2 elements, so the total space used is $O(\log m)$.

---

### Approach 3: Store Maximum Value

#### Intuition

In the previous approach, we optimized our initial approach further by storing the two greatest elements in the priority queue for each digit sum. Can we optimize this further? Instead of storing two elements for each digit sum, we can store only the greatest element we've encountered so far for each digit sum in an array `digitMapping` of size 82, corresponding to the 82 possible digit sums. Then, for each new element, we create a pair with the current element and the greatest element found so far for the same digit sum.

Using this approach, it is guaranteed that we will always encounter a pair with two greatest integers for a digit-sum. The proof is given below:

Let's say the array `nums` is given by: `{nums[0], nums[1], ...., largest value with digit-sum n, ...., second largest value with digit-sum n, ..., nums[nums.size - 1]}`. In other words, the largest value occurs before the second-largest value with the same digit-sum. In this case, as soon as we reach the largest value, it would replace the value in `digitMapping[n]`. Now, when we reach the second largest value, the pair sum would be given as `second largest value + digitMapping[n]`, which would give us the largest pair-sum for the given digit-sum.

Similarly, let's say the array `nums` is given by: `{nums[0], nums[1], ...., second largest value with digit-sum n, ...., largest value with digit-sum n..., nums[nums.size - 1]}`. In this case, as soon as we reach the second largest value, it would replace the value in `digitMapping[n]`. Now, when we reach the largest value, the pair sum would be given as `largest value + digitMapping[n]`, which would give us the largest pair-sum for the given digit-sum. After this, the largest value would replace the value in `digitMapping[n]`.

#### Algorithm

- Initialize an array `digitMapping` of size 82 to store the maximum number for each digit sum (0 to 81). Initialize `result` as `-1`.
- Iterate through the elements of `nums`:
    - Compute the digit sum for each element:
        - Initialize `digitSum` as 0.
        - For each element, repeatedly extract the last digit (using `element % 10`) and add it to `digitSum`.
        - Update `element` by dividing it by 10.
    - If `digitMapping[digitSum]` is greater than 0 (indicating that a number with the same digit sum has been seen before), calculate the sum of the current number and the stored number with the same digit sum. 
    - Update `result` with the maximum of `result` and the calculated sum.
    - Update `digitMapping[digitSum]` with the maximum value between `digitMapping[digitSum]` and the current element.
- Return `result`.

#### Implementation

<iframe src="https://leetcode.com/playground/h6VLgQs4/shared" frameBorder="0" width="100%" height="500" name="h6VLgQs4"></iframe>

#### Complexity Analysis

Let $n$ be the size of `nums`, and let `m` be the maximum number in `nums`.

- Time Complexity: $O(n \log m)$

    The time complexity of this approach is primarily determined by the operations performed on the input array `nums` and the computation of digit sums. The `calculateDigitSum` function computes the sum of digits for a given number, which takes $O(\log m)$ time. This is because the number of digits in a number is proportional to $\log_{10} m$. The loop iterates over all $n$ elements in `nums` and computes their digit sums, resulting in a total time of $O(n \log m)$.

    Then, for each element in `nums`, we update the `digitMapping` for it's `digitSum`. This operation takes $O(1)$ time.
  
    Combining all these, the overall time complexity is $O(n \log m)$.

- Space Complexity: $O(\log m)$

    The `digitMapping` array stores the greatest value for each `digitSum`. Since the maximum digit sum is proportional to $\log m$, the size of this array is $O(\log m)$.

---