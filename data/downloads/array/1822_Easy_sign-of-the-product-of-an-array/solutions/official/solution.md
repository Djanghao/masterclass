# Official Solution

**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solution/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an integer array `nums`. Our task is to return the sign of the product of all values in the array `nums`.

---

### Approach 1: Counting Negative Numbers

#### Intuition

A brute force approach is to multiply all the numbers in `nums` and check the sign of the product. However, this would fail due to integer overflow because the product can reach up to $100^{1000}$, exceeding the integer limit for major languages like `C++` and `Java`.

> Note that since there is no integer limit in `Python`, this could work, but it is still inefficient to store and operate on such large numbers.

We can concentrate on computing the number of negative numbers in `nums` because we only need the sign of the product of the values.

If the number of negative numbers is even, the final product will be a positive number because two negative numbers cancel each other out to produce a positive number.

If the number of negative numbers is odd, the result will be a negative number.

If there is a `0` in `nums`, we return `0` directly because the product will always be `0`.

#### Algorithm

1. Create an integer `countNegativeNumbers` to count the number of negative numbers in `nums`. Initialize it to `0`.
2. Iterate over `nums` and for each `num` in `nums`:
    - If `num == 0`, the final product will be `0`. We return `0`.
    - If `num < 0`, we increment `countNegativeNumbers` by `1`.
3. If the number of negative numbers is even, we return `1`. Otherwise, we return `-1`.

#### Implementation

<iframe src="https://leetcode.com/playground/SvguncEm/shared" frameBorder="0" width="100%" height="327" name="SvguncEm"></iframe>

#### Complexity Analysis

Here, $n$ is the length of `nums`.

* Time complexity: $O(n)$

    - We iterate over `nums` to get the count of negative numbers.

* Space complexity: $O(1)$

    - Except for a few integers `countNegativeNumbers` and `num` which take constant space, we do not use any other space.

---

### Approach 2: Tracking the Sign of the Product

#### Intuition

Another method is to keep track of the sign of the product while multiplying the numbers in `nums`.

We initialize an integer variable `sign = 1` to keep track of the product's sign.

We flip `sign` to `-1 * sign` whenever we get a negative number while iterating `nums`. After iterating through all of the numbers, we return `sign` unless there is a `0` in `nums`, in which case the answer is `0`.

#### Algorithm

1. Create an integer `sign` that tracks the sign of the current product. Initialize it to `1`.
2. Iterate over `nums` and for each `num` in `nums`:
    - If `num == 0`, the final product will be `0`. We return `0`.
    - If `num < 0`, flip the sign by performing `sign = -1 * sign`.
3. Return `sign`.

#### Implementation

<iframe src="https://leetcode.com/playground/kMAqCMJq/shared" frameBorder="0" width="100%" height="327" name="kMAqCMJq"></iframe>

#### Complexity Analysis

Here, $n$ is the length of `nums`.

* Time complexity: $O(n)$

    - We iterate over `nums` to get the sign of the product of numbers.

* Space complexity: $O(1)$

    - Except for a few integers `sign` and `num` which take constant space, we do not use any other space.