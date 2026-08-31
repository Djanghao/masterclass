# Official Solution

**Link:** [https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solution/](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force

**Intuition**

To start, we will simply check every pair of indices `(i, j)` and calculate `(nums[i] - 1) * (nums[j] - 1)`. We will take the maximum value as the answer.

Note that a pair of indices `(i, j)` will have the same result as `(j, i)`. Thus, to be more efficient, we will start iterating `j` from `i + 1`. This way, we don't check any duplicate pairs.

**Algorithm**

1. Initialize the answer `ans = 0`.
2. Iterate `i` over the indices of `nums`:
    - Iterate `j` over the indices of `nums`, starting from `i + 1`:
        - Calculate `(nums[i] - 1) * (nums[j] - 1)` and update `ans` if it is larger.
3. Return `ans`.

**Implementation**

<iframe src="https://leetcode.com/playground/QxMYTdUW/shared" frameBorder="0" width="100%" height="276" name="QxMYTdUW"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `nums`,

* Time complexity: $$O(n^2)$$

    We have a nested for loop over the indices of `nums`. For `i = 0`, we will iterate `j` over $$n$$ indices. For `i = 1`, we will iterate `j` over $$n - 1$$ indices. For `i = 2`, we will iterate `j` over $$n - 2$$ indices, and so on.

    In total, we iterate `j` over $$1 + 2 + 3 + ... + n$$ indices. This is the partial sum of [this series](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF#Partial_sums), which is equal to $$\frac{n \cdot (n + 1)}{2} = O(n^2)$$.

* Space complexity: $$O(1)$$

    We aren't using any extra space.
    
<br/>

---

### Approach 2: Sort

**Intuition**

Intuitively, given all the candidates are non-negative, if you wanted to maximize the product of `x * y`, you would choose the largest values for `x` and `y`.

In this problem, we need to subtract one from our numbers before multiplying them. However, this doesn't change the logic of choosing the largest numbers, since **every** element will be reduced by the same amount and will still be non-negative. Thus, it is optimal for us to choose the two largest elements.

We can sort the array to easily find the two largest elements.

**Algorithm**

1. Sort `nums` in ascending order.
2. Set `x` as the last element in `nums` and `y` as the second last element in `nums`.
3. Return `(x - 1) * (y - 1)`.

**Implementation**

<iframe src="https://leetcode.com/playground/hYNAThxo/shared" frameBorder="0" width="100%" height="208" name="hYNAThxo"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `nums`,

* Time complexity: $$O(n \cdot \log{}n)$$

    We sort `nums`, which costs $$O(n \cdot \log{}n)$$.

* Space Complexity: $$O(\log n)$$ or $$O(n)$$

    The space complexity of the sorting algorithm depends on the implementation of each programming language:
    * In Java, Arrays.sort() for primitives is implemented using a variant of the Quick Sort algorithm, which has a space complexity of $$O(\log n)$$
    * In C++, the sort() function provided by STL uses a hybrid of Quick Sort, Heap Sort and Insertion Sort, with a worst case space complexity of $$O(\log n)$$
    * In Python, the sort() function is implemented using the Timsort algorithm, which has a worst-case space complexity of $$O(n)$$
    
<br/>

---

### Approach 3: Track Second Biggest

**Intuition**

Without sorting, we can easily find the maximum element in `nums` by iterating over `nums` and continuously updating a variable with the largest value we see. However, we need the second largest value as well. Can we accomplish this without sorting?

We will use two variables: `biggest` to represent the biggest element we have seen so far, and `secondBiggest` to represent the second biggest element we have seen so far.

We then iterate over each `num` in `nums`. For each `num`, there are two possibilities:

1. `num > biggest`. We have found a new biggest element and should update `biggest = num`. However, before we do this, we update `secondBiggest = biggest` since the old biggest element we saw will become the new second biggest element.
2. `num <= biggest`. We should not update `biggest`. However, `num` may be larger than `secondBiggest`, in which case it would be the new second biggest element. We update `secondBiggest` with `num` if it is larger.

After iterating over all elements, we simply return `(biggest - 1) * (secondBiggest - 1)`.

**Algorithm**

1. Initialize `biggest = 0` and `secondBiggest = 0`.
2. Iterate over each `num` in `nums`:
    - If `num > biggest`:
        - Update `secondBiggest = biggest`.
        - Update `biggest = num`.
    - Else:
        - Update `secondBiggest` with `num` if it is larger.
3. Return `(biggest - 1) * (secondBiggest - 1)`.

**Implementation**

<iframe src="https://leetcode.com/playground/bvmAWP3R/shared" frameBorder="0" width="100%" height="344" name="bvmAWP3R"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `nums`,

* Time complexity: $$O(n)$$

    We iterate over `nums` once, performing $$O(1)$$ work at each iteration.

* Space complexity: $$O(1)$$

    We aren't using any extra space other than a few integers.
    
<br/>

---