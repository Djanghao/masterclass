# Official Solution

**Link:** [https://leetcode.com/problems/sort-the-jumbled-numbers/solution/](https://leetcode.com/problems/sort-the-jumbled-numbers/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an integer array `mapping` containing 10 unique values from `0` to `9` and an integer `nums` containing at most `30000` integers. 

The mapped value of an integer is given by replacing the index with the value of `mapping` at that index (zero-based indexing). For example, if `mapped` is `[0,9,8,7,6,5,4,3,2,1]` then the mapped value of `123` is `987`.

We need to return the array `nums` sorted in the non-decreasing order based on the mapped values of its elements. These values should not be the mapped values. 

> Note: Elements with the same mapped values should be arranged in the same relative order as `nums`.

---

### Approach 1: Conversion using strings and Sorting

#### Intuition

Observe that we need to replace every digit of all elements in `nums` with the digits of the `mapping` array. Since the data type for `nums` is an integer, we might find it difficult to make the updates directly on a particular digit of the integer. If we convert this integer to a string, we can directly convert any character of this integer to the desired character in constant time.

After making the changes, we can convert the mapped string to an integer and push it into an array. But, what if there are equal mapped values for two strings? Then, we need to sort them according to their indices. So, we create an array of pairs that stores the mapped integer value and its index.

Sort the array of pairs in non-decreasing order using any stable sorting algorithm. By default, C++, Java, and Python use stable sorting algorithms. Therefore, the first value of every pair is sorted in non-decreasing order. If these values are equal, the array is sorted in the non-decreasing order of the index values. Store the values of `nums` at these sorted indices and return them.

#### Algorithm

1. Initialize an array of pairs given by `storePairs`.
2. Iterate `i` through the `nums` array:
   - Store a string `number` as the string conversion of the integer `nums[i]`.
   - Initialize an empty string `formed`.
   - Iterate `j` through the string `number`:
      - Append the mapping of the current character of `number` to `formed`.
   - Convert the string `formed` to an integer `mappedValue`.
   - Push the pair `mappedValue` and the current index `i` in `storePairs`.
3. Sort the `storePairs` array.
4. Create an array `answer`.
5. Iterate through `storePairs` and append the `nums` value at the index to the `answer`.
6. Return the `answer` array.

!?!../Documents/2191/slideshow.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/Fw9PxQJk/shared" frameBorder="0" width="100%" height="500" name="Fw9PxQJk"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.

- Time complexity: $O(n\cdot \log n)$

   For every integer in `nums`, we convert it to a string and perform constant operations over its length. The time taken for converting an integer to a string, and vice versa, is $O(length of integer)$ time, which is proportional to the logarithmic value of `n`. Therefore, the time complexity for these operations is given by $O(n\cdot \log n)$.

   Sorting the array of pairs takes $O(n\cdot \log n)$ time. All other operations are linear or constant time.

   Therefore, the total time complexity is given by $O(n\cdot \log n)$.

- Space complexity: $O(n)$

   We create two new arrays of size `n`. Apart from this, some extra space is used when we sort arrays in place. The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(n)$ additional space.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n )$ for sorting two arrays.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n )$.

   Therefore, the total space complexity is given by $O(n)$.

---

### Approach 2: Conversion without using strings and Sorting

#### Intuition

In the previous approach, we converted every integer in `nums` to a string, mapped the changes, and converted it back to an integer. Can we directly convert the given integer to the mapped integer?

Observe that to make changes to a specific digit, we must avoid altering the digits before and after it. This can be achieved by constructing the mapped integer one digit at a time. Start from the unit place, change the digit to its mapped value, and then move to the tenth place. After changing the digit at the tenth place, multiply it by 10 and add it to the unit place. Repeat this process for each position.

#### Algorithm

1. Initialize an array of pairs given by `storePairs`.
2. Iterate `i` through the `nums` array:
    - Initialize `mappedValue` with 0, `temp` with `nums[i]` and `place` with 1.
    - If `temp` is 0, push the value of `mapping[0]` in `storePairs`.
    - While `temp` is not equal to 0:
        - Increment `place * mapping[temp%10]` to `mappedValue`.
        - Multiply `place` by 10.
        - Divide `temp` by 10.
    - Push the value of `mappedValue` and the index in `storePairs`.
3. Sort the `storePairs` array.
4. Create an array `answer`.
5. Iterate through `storePairs` and append the `nums` value at the index to the `answer`.
6. Return the `answer` array.

#### Implementation

<iframe src="https://leetcode.com/playground/2GttmAhx/shared" frameBorder="0" width="100%" height="500" name="2GttmAhx"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.

- Time complexity: $O(n\cdot \log n)$

   For every integer in `nums`, we convert it to the mapped integer. The time taken for this operation is $O(length of integer)$ time, which is proportional to the logarithmic value of `n`. Therefore, the time complexity for these operations on `nums` is given by $O(n\cdot \log n)$.

   Sorting the array of pairs takes $O(n\cdot \log n)$ time. All other operations are linear or constant time.

   Therefore, the total time complexity is given by $O(n\cdot \log n)$.

- Space complexity: $O(n)$

   We create two new arrays of size `n`. Apart from this, some extra space is used when we sort arrays in place. The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(n)$ additional space.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n )$ for sorting two arrays.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n )$.

   Therefore, the total space complexity is given by $O(n)$.

---