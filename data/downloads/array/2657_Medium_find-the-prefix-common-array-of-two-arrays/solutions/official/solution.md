# Official Solution

**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solution/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given two arrays, `A` and `B`, each containing a shuffled list of numbers from `1` to `n`. Our task is to construct a new array `C`, where each element `C[i]` represents the count of numbers from `1` to `i + 1` that are present in both `A` and `B` up to that index.

For example, consider `A = [1, 3, 2, 4]` and `B = [3, 1, 2, 4]`:

- At `i = 0` (first element): No numbers are common between `A` and `B` yet, so `C[0] = 0`.
- At `i = 1`: The numbers `1` and `3` are common in both arrays, so `C[1] = 2`.
- At `i = 2`: The numbers `1`, `2`, and `3` are common, so `C[2] = 3`.
- At `i = 3`: All four numbers, `1`, `2`, `3`, and `4`, are common in both arrays, so `C[3] = 4`.

Thus, the resulting array is `C = [0, 2, 3, 4]`.

---

### Approach 1: Brute Force

#### Intuition   

A straightforward and logical approach to finding the prefix common array is to use a brute-force method. The core idea is iterating through each index `currentIndex` of the input arrays `A` and `B` and calculating the number of common elements up to that index.

For each element in the subarray of `A`, we compare it with each element in the subarray of `B`. If we find a match, we count it as a common element. Since the elements in both arrays are unique, we don't need to worry about counting duplicates. Once we find a match for an element, we can stop further checks for that element, knowing it has already been accounted for.

This process is repeated for every index in the arrays, and the results are stored in an array, which we will refer to as `prefixCommonArray` (replacing `C` for clarity) to better reflect its purpose as the final output array.

#### Algorithm

- Initialize `n` to the size of array `A` and create an array `prefixCommonArray` of size `n` to store the common count for each prefix.

- Iterate through each index `currentIndex` from `0` to `n-1`:
  - Initialize `commonCount` to `0`, which will store the number of common elements in the current prefix.
  
  - For each `aIndex` from `0` to `currentIndex`:
    - For each `bIndex` from `0` to `currentIndex`:
      - If `A[aIndex]` equals `B[bIndex]`, increment `commonCount` and break the inner loop.

  - Store `commonCount` in `prefixCommonArray[currentIndex]` to record the number of common elements for the current prefix.

- Return `prefixCommonArray`, which contains the common count for each prefix of `A` and `B`.

#### Implementation

<iframe src="https://leetcode.com/playground/nDduAzzp/shared" frameBorder="0" width="100%" height="500" name="nDduAzzp"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input arrays `A` and `B`.

- Time complexity: $O(n^3)$

    The outer loop runs $n$ times (from `currentIndex = 0` to `currentIndex = n-1`). For each iteration of the outer loop, the first inner loop runs `currentIndex + 1` times, and the second inner loop also runs `currentIndex + 1` times. 
    
    Therefore, the total number of iterations is: $\sum_{currentIndex=0}^{n-1} (currentIndex + 1) \times (currentIndex + 1) = \sum_{currentIndex=0}^{n-1} (currentIndex + 1)^2$

    This simplifies to: $\sum_{k=1}^{n} k^2 = \frac{n(n + 1)(2n + 1)}{6}$

    Asymptotically, this is $O(n^3)$.

- Space complexity: $O(1)$

    The space complexity is constant because no additional data structures are used apart from the output container (`prefixCommonArray`), which is excluded from the analysis as it’s a requirement from the problem statement. Only a few variables like `currentIndex`, `commonCount`, `aIndex`, and `bIndex` are used, which take $O(1)$ space.

---

### Approach 2: Hash Set

#### Intuition   

We can improve the brute-force method by using an unordered set to track the elements encountered so far in both arrays `A` and `B`. This is significantly more efficient than the brute-force method, where we had to check every element in both arrays for each index. The key idea is to reduce the time complexity by leveraging efficient element checking, which is done in constant time for an unordered set.

To implement this, we use two sets: `elementsInA` and `elementsInB`. These sets store the elements encountered up to the current index. For each index `currentIndex`, we insert the current elements of both `A[currentIndex]` and `B[currentIndex]` into their respective sets. Then, we iterate over the elements in `elementsInA` and check if each element exists in `elementsInB`. If it does, it is counted as a common element.

#### Algorithm

- Initialize `n` as the size of array `A`.
- Create a `prefixCommonArray` array of size `n` to store the result.
- Initialize two unordered sets `elementsInA` and `elementsInB` to track the elements encountered in arrays `A` and `B` respectively.

- Iterate through each `currentIndex` from `0` to `n-1`:
  - Add the element `A[currentIndex]` to `elementsInA`.
  - Add the element `B[currentIndex]` to `elementsInB`.
  - Initialize `commonCount` to `0`, which will track the number of common elements in `elementsInA` and `elementsInB`.

  - Iterate through each `element` in `elementsInA`:
    - If the `element` exists in `elementsInB`, increment `commonCount`.

  - Set `prefixCommonArray[currentIndex]` to `commonCount`.

- Return `prefixCommonArray`, which contains the common count for each prefix of `A` and `B`.

#### Implementation

<iframe src="https://leetcode.com/playground/XEbRaLQS/shared" frameBorder="0" width="100%" height="500" name="XEbRaLQS"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input arrays `A` and `B`.

- Time complexity: $O(n^2)$

    The outer loop runs $n$ times (from `currentIndex = 0` to `currentIndex = n-1`). Inside the loop, the `insert` operation for the set takes $O(1)$ on average. The inner loop iterates over the elements in `elementsInA`, which can have up to `currentIndex + 1` elements (at most $n$ elements). For each element, the `count` operation in `elementsInB` also takes $O(1)$ on average. Therefore, the inner loop contributes $O(n)$ per iteration of the outer loop.
    
    Overall, the time complexity is $O(n) \times O(n) = O(n^2)$.

- Space complexity: $O(n)$

    The space complexity is dominated by the two set objects, `elementsInA` and `elementsInB`, which can each store up to $n$ elements. This results in $O(n)$ space. The output container (`prefixCommonArray`) is excluded from the analysis as it is part of the problem statement, and the remaining variables use $O(1)$ space.

---

### Approach 3: Single Pass with Frequency Array

#### Intuition   

We can further optimize the approach by using a frequency array to count how many times each number appears in the two arrays, `A` and `B`. The key idea is to avoid unnecessary nested loops or set-based checks by directly counting the occurrences of each number in both arrays up to the current index.

We maintain a `frequency` array of size `n + 1`. This array is used to store the count of each element's occurrence across both `A` and `B`. Since the elements in `A` and `B` are permutations of numbers from `1` to `n`, the `frequency` array has `n + 1` elements to cover the range from `1` to `n` (ignoring index `0` for simplicity).

As we process each index `currentIndex` of both arrays, we increment the count of `A[currentIndex]` and `B[currentIndex]` in the `frequency` array. Whenever the count for an element in the `frequency` array reaches `2` (meaning that this number has appeared once in both `A` and `B`), we know that this element is a common element at the current prefix, and we increment the `commonCount`.

Finally, we store the `commonCount` at each index in the `prefixCommonArray`, which will give us the cumulative count of common elements at each position in the arrays. This way we only visit each element a constant number of times, making it more efficient than the two previous approaches.

The algorithm is visualized below:

!?!../Documents/2657/singlepass.json:765,655!?!

#### Algorithm

- Initialize an integer `n` to store the size of array `A`.
- Create a `prefixCommonArray` array of size `n` to store the result.
- Create a `frequency` array of size `n + 1` to keep track of the occurrences of each number.
- Initialize `commonCount` to `0`, which will store the count of common elements in prefixes of `A` and `B`.

- Iterate through each index `currentIndex` from `0` to `n - 1`:
  - Increment the frequency of `A[currentIndex]` and check if its count becomes 2, indicating a common element between `A` and `B`. If true, increment `commonCount`.
  - Similarly, increment the frequency of `B[currentIndex]` and check if its count becomes 2. If true, increment `commonCount`.
  - Assign the value of `commonCount` to `prefixCommonArray[currentIndex]`.

- Return `prefixCommonArray`, which contains the common count for each prefix of `A` and `B`.

#### Implementation

<iframe src="https://leetcode.com/playground/3gapWjHm/shared" frameBorder="0" width="100%" height="500" name="3gapWjHm"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input arrays `A` and `B`.

- Time complexity: $O(n)$

    The loop runs $n$ times (from `currentIndex = 0` to `currentIndex = n - 1`). Inside the loop, the operations involve incrementing the frequency of elements in `A` and `B` and checking if the frequency equals 2. These operations are $O(1)$ because they involve simple array accesses and comparisons.

    Therefore, the total time complexity is $O(n)$.

- Space complexity: $O(n)$

    The space complexity is dominated by the `frequency` array, which requires $O(n + 1) = O(n)$ space. The output container (`prefixCommonArray`) is excluded from the analysis as it is part of the problem statement, and the remaining variables use $O(1)$ space.

---