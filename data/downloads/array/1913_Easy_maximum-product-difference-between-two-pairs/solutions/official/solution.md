# Official Solution

**Link:** [https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solution/](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solution/)

---

[TOC]

## Solution

---

### Approach 1: Sort

**Intuition**

In this problem, we need to determine the maximum value of:

`a * b - c * d`

Where `a, b, c, d` are all elements in `nums`. Note that while it is possible for the same value to be used multiple times, we are not allowed to use the same index of `nums` multiple times.

For example, let's say `a = b = 4`. This is only possible if `4` shows up at least twice in `nums`. If `4` only appears once in `nums`, we can't use it twice.

Let's separate the equation into two parts:

1. `a * b`
2. `c * d`

As we are subtracting the 2nd part from the 1st part, we want to maximize the 1st part while minimizing the 2nd part.

Because the values of `nums` are non-negative, we can maximize a product by choosing the two largest elements in `nums`. Similarly, we can minimize a product by choosing the two smallest elements in `nums`. Thus, we will choose the following elements:

- `a` as the largest value in `nums`.
- `b` as the second-largest value in `nums`.
- `c` as the smallest value in `nums`.
- `d` as the second smallest value in `nums`.

To find `a, b, c, d`, we will sort `nums`. Then, we can simply return `a * b - c * d`. Note that we do not need to actually allocate variables for `a, b, c, d`, rather we can just access the array elements directly.

**Algorithm**

1. Sort `nums` in ascending order.
2. Return `nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1]`.

**Implementation**

<iframe src="https://leetcode.com/playground/WCKWZb7c/shared" frameBorder="0" width="100%" height="174" name="WCKWZb7c"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `nums`,

* Time complexity: $$O(n \cdot \log{}n)$$

    We sort `nums`, which costs $$O(n \cdot \log{}n)$$.

* Space Complexity: $$O(\log n)$$ or $$O(n)$$

    The space complexity of the sorting algorithm depends on the implementation of each programming language:
    * In Java, Arrays.sort() for primitives is implemented using a variant of the Quick Sort algorithm, which has a space complexity of $$O(\log n)$$
    * In C++, the sort() function provided by STL uses a hybrid of Quick Sort, Heap Sort and Insertion Sort, with a worst case space complexity of $$O(\log n)$$
    * In Python, the sort() function is implemented using the Timsort algorithm, which has a worst-case space complexity of $$O(n)$$

---

### Approach 2: Track the Two Biggest and the Two Smallest Elements

**Intuition**

Without sorting, we can easily find the maximum element in `nums` by iterating over `nums` and continuously updating a variable with the largest value we see. However, we need the second-largest value as well. Can we accomplish this without sorting?

Imagine having two variables: `biggest` to represent the biggest element we have seen so far, and `secondBiggest` to represent the second biggest element we have seen so far.

We then iterate over each `num` in `nums`. For each `num`, there are two possibilities:

1. `num > biggest`. We have found a new biggest element and should update `biggest = num`. However, before we do this, we update `secondBiggest = biggest` since the old biggest element we saw will become the new second biggest element.
2. `num <= biggest`. We should not update `biggest`. However, `num` may be larger than `secondBiggest`, in which case it would be the new second biggest element. We update `secondBiggest` with `num` if it is larger.

This process allows us to find the two maximum elements without needing to sort the array. We can use the exact same process to also find the two minimum elements, we just need to swap the directions of the inequality operators as follows:

1. `num < smallest`. We have found a new smallest element and should update `smallest = num`. However, before we do this, we update `secondSmallest = smallest` since the old smallest element we saw will become the new second smallest element.
2. `num >= smallest`. We should not update `smallest`. However, `num` may be smaller than `secondSmallest`, in which case it would be the new second smallest element. We update `secondSmallest` with `num` if it is smaller.


Once we have the two biggest and the two smallest elements, we can simply return the product of the two biggest elements minus the product of the two smallest elements.

**Algorithm**

1. Initialize the following variables:
    - `biggest` and `secondBiggest` to `0`.
    - `smallest` and `secondSmallest` to large values like infinity.
2. Iterate over each `num` in `nums`:
    - If `num > biggest`:
        - Update `secondBiggest = biggest`.
        - Update `biggest = num`.
    - Else:
        - Update `secondBiggest` with `num` if it is larger.
    - If `num < smallest`:
        - Update `secondSmallest = smallest`.
        - Update `smallest = num`.
    - Else:
        - Update `secondSmallest` with `num` if it is smaller.
3. Return `biggest * secondBiggest - smallest * secondSmallest`.
You may notice that during the iteration, there might be a case where a number becomes one of the two smallest elements AND one of the two largest elements at the same time. Does this invalid case affect our answer? The answer is NO! This is because the problem limits the array length to be greater than or equal to 4. Therefore, the final selection of the two biggest elements and the two smallest elements are guaranteed not to be the same elements. The special situation we mentioned during the iteration is not the optimal solution, so its product difference won't be larger than our final answer.

**Implementation**

<iframe src="https://leetcode.com/playground/Z4P4QFcE/shared" frameBorder="0" width="100%" height="500" name="Z4P4QFcE"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `nums`,

* Time complexity: $$O(n)$$

    We iterate over `nums` once, performing $$O(1)$$ work at each iteration.

* Space complexity: $$O(1)$$

    We aren't using any extra space other than a few integers.
    
<br/>

---