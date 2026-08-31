# Official Solution

**Link:** [https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solution/](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solution/)

---

## Solution

---

### Approach 1: Sorting

#### Intuition

We are given a non-negative integer array `nums`. We need to return an integer `x` such that there are exactly `x` integers in the array `nums` that are greater than or equal to `x`. The value of `x` will be unique for a given array `nums` if `nums` is unique. If no such value `x` exists, return `-1`. Note that the integer `x` doesn't have to be in the array `nums`.

The first observation is that the value of `x` cannot be more than the length of the array `nums`. This is because for an integer to be the answer, there must be at least that number of integers in `nums`. If we assume `x` to be `nums.length + 1`, there must be precisely `nums.length + 1` integers in the array that are greater than or equal to `x`, but there are only `nums.length` integers in `nums`. Also, the minimum possible value for `x` is `1`. This is because if `x` equals `0`, the array `nums` must be empty, but the constraints guarantee that `nums` has at least `1` element.

The naive way to solve the problem is to iterate over the integers from `1` to `nums.length` and check if each is special. To check this, we can again iterate over the array `nums` to find the count of integers that are greater or equal to the value. If this count is equal to the value, then return this value; otherwise, move on to the next value. This approach, however, is not efficient as it uses nested loops, so the time complexity will be quadratic.

We can efficiently find the number of integers that are greater than or equal to an element if the array is sorted. We can then use binary search to find the first index where the value is greater than or equal to the element. All elements after that index would also be greater or equal to the element. In each step of the binary search, we will check the mid index in the current range of `nums`. If this mid element is greater than `val`, it implies this can be our answer. Thus, we will store the index and move on to the left half of the current range of `nums` to check if there's a better answer. If the mid element is smaller than `val` we will move on to the right half.

> Binary search is an algorithm for finding the position of a target value within a sorted array. It searches efficiently by dividing the search space in half with every iteration. If you are unfamiliar with binary search, check out the [binary search explore card](https://leetcode.com/explore/learn/card/binary-search/).


#### Algorithm

1. Sort the array `nums`.
2. Iterate over integers from `1` to `nums.length` (N) for each value `i`:

    - Find the index of the first integer in the array `nums` that is greater than or equal to `i` as `k` using the binary search method `getFirstGreaterOrEqual`.

        - The search space for the binary search is `0` to `N - 1`; hence, initialize `start` to `0` and `end` to `N - 1`.
        - Initialize `index` to `N`, this is because if all elements are less than `i` (`val`), we will return `N` as the answer.
        - Repeat the following until the range `[start, end]` is empty:

            - Find the `mid` as `(start + end) / 2`.
            - If `nums[mid]` is greater than or equal to `val`, then update `index` to `mid` and move to the left half of the current search space.
            - Else, move to the right half of the current search space.
        - Return `index`.

    - If the number of integers after index `k` in the array `nums`, i.e. `N - k`, is equal to `i` then return `i`.

3. If we have iterated over all possible values and still didn't return any value, it implies no special value exists. Return `-1`.

#### Implementation

<iframe src="https://leetcode.com/playground/TGtvDpQn/shared" frameBorder="0" width="100%" height="500" name="TGtvDpQn"></iframe>

#### Complexity Analysis

Here, $N$ is the number of integers in the array `nums`.

* Time complexity: $O(N \log N)$

  Sorting the array `nums` takes $O(N \log N)$ time. Then we iterate over all values from `1` to `N` and, for each value, perform the binary search on `nums`, which takes $O(\log N)$ time. Thus, this step takes $O(N \log N)$ time. Therefore, the total time complexity equals $O(N \log N)$.

* Space complexity: $O(\log N)$ or $O(N)$

  No extra space is needed apart from a few variables. However, some space is required for sorting. The space complexity of the sorting algorithm depends on the implementation of each programming language. For instance, in Java, the `Arrays.sort()` for primitives is implemented as a variant of the quicksort algorithm whose space complexity is $O(\log⁡⁡ N)$. In C++ `sort()` function provided by STL is a hybrid of Quick Sort, Heap Sort, and Insertion Sort and has a worst-case space complexity of $O(\log⁡⁡ N)$. In Python, the `sort` method sorts a list using the Tim Sort algorithm which is a combination of Merge Sort and Insertion Sort and uses $O(N)$ additional space. Thus, the inbuilt `sort()` function might add up to $O(\log⁡⁡ N)$ or $O(N)$ to the space complexity.

---

### Approach 2: Counting Sort + Prefix Sum

#### Intuition

An efficient strategy to find the number of integers in the array `nums` that are greater than or equal to all possible values from `1` to `N` could reduce the overall time complexity.

If we store the frequency of each `nums` integer in the array `freq`, then we can efficiently find the number of integers that are greater than or equal to each integer. We can take the prefix sum from the end of the range of possible values for `x`, i.e., `N` to `1`. We will keep adding the frequencies of integers from the right end of `freq` to calculate the number of array values larger than the current element.

The prefix sum (or rather suffix, to be precise, as we calculate it from the right end) doesn't have to be a separate array. Instead, we can calculate the running sum and check if the current sum is equal to the current value. If the current sum from the right end is equal to the current value then we can return the current value. Otherwise, we keep iterating. After the loop completes, we return `-1` if we don't find a valid `x`.

The below implementation stores the count of all values in `nums` that are greater than the length of array `nums` at `freq[N]` where `N` is the length of `nums`. This is because, as we discussed, `x` cannot be greater than `N`. This will reduce the space used for the frequency array as instead of having an array with the size of the maximum element in the array `nums` we can use an array of size `N + 1`.

![fig](../Figures/1608/1608A.png)

#### Algorithm

1. Initialize an array `freq` with size `N + 1` with all values as `0`.
2. Iterate over the array `nums` and store the frequency of each integer in the array `freq`. If the value `nums[i]` is greater than `N` store the frequency at index `N`.
3. Initialize the variable `numGreaterThanOrEqual` to `0`. This is the number of elements that are greater than or equal to the current element.
4. Iterate over the values from `N` to `1` and for each value `i`:

    - Add the value `freq[i]` to `numGreaterThanOrEqual`;
    - If the value `i` is equal to the `numGreaterThanOrEqual` then return `i`

5. Return `-1`.

#### Implementation

<iframe src="https://leetcode.com/playground/G9zwaMR6/shared" frameBorder="0" width="100%" height="412" name="G9zwaMR6"></iframe>

#### Complexity Analysis

Here, $N$ is the number of integers in the array `nums`.

* Time complexity: $O(N)$

  We first iterate over the integers in the array `nums` to store the frequencies in the array `freq`, which takes $O(N)$. We then iterate over the values from `N` to `1` to find the possible answers; this is again a $O(N)$ process. Thus, the total time complexity is equal to $O(N)$.

* Space complexity: $O(N)$

  The main space required is the array `freq` of size `N + 1`. Therefore, the total space complexity is equal to $O(N)$.
---