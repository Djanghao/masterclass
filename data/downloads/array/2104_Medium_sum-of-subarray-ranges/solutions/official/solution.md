# Official Solution

**Link:** [https://leetcode.com/problems/sum-of-subarray-ranges/solution/](https://leetcode.com/problems/sum-of-subarray-ranges/solution/)

---

[TOC]

## Solution

--- 

### Overview

Define the **range** of a subarray as the difference between the largest and smallest element in the subarray:

![img](../Figures/2104/2104-ex.png)

The task is to find the sum of all subarray ranges of the given array `nums`.


---

### Approach 1: Two Loops

#### Intuition   

Let's start with a brute force solution, that is, to find and iterate over all subarrays of `nums`, and get the sum of their ranges. 

1) Set `answer = 0`.
2) Iterate over every left index of subarrays `left`.
3) With every fixed `left`, iterate over every right index `right` of subarrays.
4) For each subarray `[left, right]`, iterate over it to find its minimum value `minVal` and maximum value `maxVal`.
5) Increment `answer` by `maxVal - minVal`.

This approach contains three nested loops which make the time complexity quite high, so it may not pass all test cases. But we can consider this as a prompt for better approaches!


Note that for a fixed `left` index, two adjacent arrays only differ by one element. Suppose the previous array is `[left, right]` and the new array is `[left, right + 1]`, we can get the `minVal, maxVal` for the new subarray, by updating `minVal, maxVal` of the previous array using `nums[right + 1]`.

- `minVal = min(minVal, nums[right + 1])`
- `maxVal = max(maxVal, nums[right + 1])`

Therefore, the average time for finding the range of one subarray is reduced to $$O(1)$$. Please refer to the following picture.

![img](../Figures/2104/2104-s2.png)

<br>

#### Algorithm

1) Set `answer = 0`.
2) Iterate over every left index of subarrays `left`.
3) With every fixed `left`, initialize `minVal = maxVal = nums[left]`, iterate over every right index `right` of subarrays.
4) For each right index `right`, update `minVal` and `maxVal` by `nums[right]`. Then update `answer += maxVal - minVal`.

#### Implementation

<iframe src="https://leetcode.com/playground/fcRRFV5u/shared" frameBorder="0" width="100%" height="361" name="fcRRFV5u"></iframe>


#### Complexity Analysis

Let $$n$$ be the size of the input array `nums`.

* Time complexity: $$O(n^2)$$

    - We have two nested iterations over `nums`.
    - In each step, we update `minVal, maxVal` and `answer`, it takes constant time.
    - To sum up, the overall time complexity is $$O(n^2)$$.
    

* Space complexity: $$O(1)$$

    - We only need to update three variables `minVal`, `maxVal` and `answer`.

<br/>



---

### Approach 2: Monotonic Stack

#### Intuition   

From the definition of the sum of all subarray ranges:

$$\sum\limits_{k} range_{k} = \sum\limits_{k} (maxVal_{k} - minVal_{k}) = \sum\limits_{k} maxVal_{k} - \sum\limits_{k} minVal_{k}$$

> It implies that we can calculate these two partial sums separately.

Let's think of this problem differently, instead of finding each subarray and getting its `minVal` and `maxVal`, we focus on each number. If we can find that, for each number `nums[i]`, the number of subarrays having `nums[i]` as its **minimum value** is `minTime[i]`. Then the sum of `minVal` can be rewritten as:

$$\sum\limits_{k} minVal_{k} = \sum\limits_{i = 1}^{n} minTime[i]\ \cdot\ nums[i]$$

For example, we have found `minTime = [1, 4, 1]` for the array `[X, Y, Z]` by some means (which will be explained in detail soon), then the sum of `minVal` is `1 * X + 4 * Y + 1 * Z`. We don't need to know exactly which array holds which value as the minimum, but only the number of times each number is taken as the minimum!


> Now the task becomes finding `minTime[i]` for each index `i`.

Notice that `minTime[i]` depends on:

- The number of consecutive elements **larger than or equal to** `nums[i]` on its left side. In other words, to find the index `left` where the value is **less than** `nums[i]`.

- The number of consecutive elements **larger than or equal to** `nums[i]` on its right side. In other words, to find the index `right` where the value is **strictly less than** `nums[i]`.

Now we have (i - left) positions to put the starting position of the subarray, and (right - i) positions to put the ending position of the subarray. Therefore, we have (i - left) * (right - i) valid subarrays in total, so we can calculate `minTime[i]` as follows:

$$minTime[i] = (right - i) \cdot (i - left)$$
$$range_i = minTime[i] \cdot nums[i]$$

In the array shown below, `nums[3] = 4` has `left = 0` and `right = 6`, thus the number of subarrays having `nums[3]` as the minimum is `minTime[3] = (6 - 3) *  (3 - 0) = 9`, meaning that there are 9 subarays having `nums[3]` as the minimum.


![img](../Figures/2104/2104-stack1.png)



To calculate `minTime[i]` for every index, we can use a stack to maintain a monotonically increasing sequence during the iteration over `nums`:

- What is the left index `left`? The element on `nums[i]`'s left in the stack.

- What is the right index `right`? The element we are using to pop `nums[i]` from the stack. 

In other words, `minTime[i]` is not calculated when we add `nums[i]` to the stack, but when we **pop** `nums[i]` from the stack, because only then are the left and right indexes clear to us. Then we can calculate `minTime[i]` using: $$minTime[i] = (right - i) \cdot (i - left)$$. As shown in the picture below, when we encounter `nums[6] = 1`, we should pop `nums[3] = 4` from the stack, which is the time to calculate `minTime[3]`.

![img](../Figures/2104/2104-stack2.png)

> How to handle the edge cases?

- If the stack is empty after we pop `nums[i]` from it, we can't find the any index as the left boundary, so we set the left index as `-1`, which means that all the numbers on `nums[i]`'s left are within the range `[left, i]`.

- In order to pop the remaining elements from the stack after the iteration over `nums` stops, we set the right boundaries of all the remaining elements as `n`, which means that all the numbers on `nums[i]`'s right are within the range `[i, right]`. That's why we iterate from `i = 0` to `i = n`: to use `i = n` as the right boundary index to pop all the remaining elements from the stack.



> Will there by any duplicated calculation? 

One might think, what if there are identical values that are close or adjacent, do we double count any subarray? The answer is NO! Although several identical values `A` may be adjacent to each other, the subarrays of the previous `A` will never take the following `A` as their minimum. As shown in the picture below, subarrays using the first `4` as the minimum don't cross the second `4`, thus we won't double count any subarray!

![img](../Figures/2104/2104-edge.png)


> With each subproblem solved, we can move on to the results!

Please take the following slides as an example of getting the total sum of `minVal`. 

!?!../Documents/2104/s1.json:601,301!?!

Note that this iteration is to get the sum of `minVal`. We also need to find the sum of `maxVal` in a similar way, by reversing the comparison condition, then get the sum of ranges using the first equation in this chapter. The job is done!

> If you are not much familiar with stack, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/learn/card/queue-stack/230/usage-stack/1369/) and have some knowledge of it beforehand.

<br>

#### Algorithm

1) Initialize an empty stack `stack`, get the size of `nums` as `n`.
2) Iterate over every index from `0` to `n` (inclusive). For each index `right`, if either of the following two condition is met: 
    - `index = n`
    - `stack` is not empty and `nums[mid] >= nums[right]`, where `mid` is its top value: 

    go to step 3.
    Otherwise, repeat step 2.
3) Calculate the number of subarrays with `nums[mid]` as its minimum value:
    - Pop `mid` from stack.
    - If `stack` is empty, set `left = -1`, otherwise, `left` equals the top element from `stack`.
    - Increment `answer` by `(right - mid) * (mid - left)`.
    - Repeat step 2.


#### Implementation

<iframe src="https://leetcode.com/playground/2ENJNW6U/shared" frameBorder="0" width="100%" height="500" name="2ENJNW6U"></iframe>


#### Complexity Analysis

Let $$n$$ be the size of the input array `nums`.

* Time complexity: $$O(n)$$

    - To find the total sum of `minVal`, we only need one iteration over `nums`, and each number will be added to and popped from `stack` once, these also apply for finding `maxVal`.
    - Therefore the overall time complexity is $$O(n)$$.
    

* Space complexity: $$O(n)$$

    - We use a (monotonic) stack to keep the increasing (decreasing) sequence, in the worst-case scenario, there may be $$O(n)$$ numbers in the stack, which takes $$O(n)$$ space. 


<br/>