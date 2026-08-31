# Official Solution

**Link:** [https://leetcode.com/problems/relative-sort-array/solution/](https://leetcode.com/problems/relative-sort-array/solution/)

---

[TOC]

## Solution

---

### Approach 1: Using Two Loops and Sorting

#### Intuition

One way to solve this problem is to use nested loops to find the elements in `arr1` that are present in `arr2`, and then sort the remaining elements. 

To start, we will create a new array `result` to store the sorted elements. The first step is to identify the elements present in both `arr1` and `arr2`. We iterate through `arr2` using a loop, and for each element in `arr2`, we check if the same element exists in `arr1`. If it does, we add that element to the result array and mark its position in `arr1` as -1 to avoid duplicates.

After this step, the result array will contain all the elements from `arr1` that were present in `arr2`, in the order they appeared in `arr2`. Now, we need to add the remaining elements from `arr1` that were not present in `arr2`. We sort the `arr1` array which brings all the unmarked elements (-1) to the left end of the array. Then, we iterate through `arr1` again and add all the non-negative elements to the result array.

After both steps, we return the result array, which now contains all the elements from `arr1` sorted according to the relative order specified by `arr2`, followed by the remaining elements in ascending order.

#### Algorithm

- Initialize an empty `result` array.
- Iterate through the relative order array (`arr2`).
   - For each element in `arr2`, iterate through the target array (`arr1`).
       - If the element in `arr1` matches the current element in `arr2`.
           - Add the element to the `result` array.
           - Mark the element in `arr1` as visited (-1).
- Sort the remaining elements in `arr1` (elements not marked as visited).
- Iterate through `arr1` again.
   - If the element is not marked as visited, add it to the `result` array.
- Return the `result` array.

#### Implementation

<iframe src="https://leetcode.com/playground/MhcSKxtd/shared" frameBorder="0" width="100%" height="500" name="MhcSKxtd"></iframe>

#### Complexity Analysis

Let $n$ be the size of `arr1` and $m$ be the size of `arr2`.

- Time complexity: $O(m \cdot n + n \log n)$

    We iterate through each element of `arr2` and for each element, we iterate through `arr1`. This results in $O(m \cdot n)$ time complexity.
   
    Sorting `arr1` has a time complexity of $O(n \log n)$.

    Iterating through `arr1` to add non-marked elements to the result has a time complexity of $O(n)$.

    Combining these steps, the overall time complexity is $O(m \cdot n + n \log n + n)$, which we can simplify to $O(m \cdot n + n \log n)$.

- Space complexity: $O(n)$ or $O( \log n )$

    Apart from the `result` array and a few variables, the algorithm doesn't use any additional data structures that scale with input size. We do not count `result` array in the space complexity as it's only used to store the output.

    Note that some extra space is used when we sort arrays in place. The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(n)$ additional space.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n )$ for sorting two arrays.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n )$.

---

### Approach 2: Using Hash Map for Counting and Sorting

#### Intuition

We can improve upon the first approach by using a map to store the elements from `arr2` and their frequencies in `arr1`. This eliminates the need for nested loops and reduces the time complexity to $O(m + n \log n)$. Also, we can use a temporary array `remaining` to store the remaining elements, avoiding the need for sorting the entire `arr1`, further improving efficiency. 

We will use a map to store the elements from `arr2` as keys and their frequencies in `arr1` as values. We will also create a temporary array `remaining` to store elements from `arr1` that are not present in `arr2`.

Then, we will iterate through `arr1` and update the frequencies in the map for elements present in `arr2`. If an element is not present in `arr2`, we will add it to the `remaining` array. After processing all elements from `arr1`, we sort the `remaining` array in ascending order.

Next, we create the final `result` array. We iterate through `arr2` and add each element to the result based on its frequency stored in the map. After processing all elements from `arr2`, we will add the elements from the `remaining` array to the `result`.

#### Algorithm
 
- Initialize an empty `result` array and an empty `remaining` array.
- Initialize an unordered map (`countMap`) with elements from `arr2` as keys and initial count as 0.
- Iterate through `arr1`.
   - If the element is present in `countMap` (i.e., present in `arr2`).
       - Increment the count in `countMap` for that element.
   - Else (element not present in `arr2`).
       - Add the element to the `remaining` array.
- Sort the `remaining` array.
- Iterate through `arr2`.
   - For each element in `arr2`.
       - Add the element to the `result` array, `countMap[element]` times.
- Iterate through the `remaining` array.
   - Add all elements from the `remaining` array to the `result` array.
- Return the `result` array.

#### Implementation

<iframe src="https://leetcode.com/playground/byQXHNt3/shared" frameBorder="0" width="100%" height="500" name="byQXHNt3"></iframe>

#### Complexity Analysis

Let $n$ be the size of `arr1` and $m$ be the size of `arr2`.

* Time complexity: $O(m + n \log n)$ 

    Initializing the map with elements from `arr2` takes $O(m)$ time.

    Counting occurrences of elements in `arr1` and updating the map or adding to the `remaining` array takes $O(n)$ time.

    Sorting the `remaining` array takes $O(n \log n)$ time.

    Adding elements to the `result` array based on the map and the relative order of `arr2` takes $O(n)$ time.

    Adding the sorted remaining elements to the result list takes $O(n)$ time. 

    Combining these steps, the overall time complexity is $O(m + n + n \log n + n)$, which we can simplify to $O(m + n \log n)$.
    
* Space complexity: $O(n + m)$

    We use an unordered map to store the frequencies of elements in `arr2`. Since `arr2` has `m` unique elements, the space required is $O(m)$.

    We store elements from `arr1` that are not present in `arr2`. In the worst case, all `n` elements of `arr1` are unique and not in `arr2`, requiring $O(n)$ space.

    Additionally some extra space is used when we sort arrays in place. The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(n)$ additional space.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n )$ for sorting two arrays.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n )$.

    Therefore, the overall space complexity depends on the language used for sorting: 
    Python: $O(n + m)$
    Java/C++: $O(n + m + \log n)$, which simplifies to $O(n + m)$
 
---

### Approach 3: Using Counting Sort

#### Intuition

In Approach 2, we used an unordered map to store the elements from `arr2` as keys and their frequencies in `arr1` as values. In this approach, we can use an array `count` to store the frequencies of elements in `arr1`. This is more memory-efficient than using an unordered map, as the elements in `arr1` are guaranteed to be in the range of 0 to 1000.

We will find the maximum element in `arr1` and use an array `count` of size `maxElement + 1` to store the frequencies of elements in `arr1`. We iterate through `arr1` and update the frequencies in the `count` array.

Next, we create the final result array. Then, we iterate through `arr2`, and for each element in `arr2`, we add it to the result as many times as its frequency in `count[element]`. We decrement `count[element]` after each addition to keep accurate track of the elements we still need to add.

After processing all elements from `arr2`, we iterate through the remaining elements in the `count` array. For each index `num` where `count[num]` is non-zero, we add the element `num` to the result as many times as its frequency (`count[num]`).

Finally, we return the result array, which now contains all the elements from the original `arr1`, sorted according to the relative order specified by `arr2`, followed by the remaining elements in ascending order.

The approach is visualized below:

!?!../Documents/1122/approach3.json:976,627!?!

#### Algorithm
 
- Find the `maxElement` in `arr1`.
- Initialize a `count` array of size `maxElement + 1` to store the count of occurrences of each element.
- Iterate through `arr1`.
   - Increment the count in the `count` array for each element.
- Initialize an empty `result` array.
- Iterate through `arr2`.
   - For each element in `arr2`.
       - Add the element to the `result` array, `count[element]` times.
       - Decrement the count in the `count` array for that element.
- Iterate from 0 to `maxElement`.
   - For each index `i`.
       - Add the element i to the `result` array, `count[i]` times.
- Return the `result` array.

#### Implementation

<iframe src="https://leetcode.com/playground/8zYFp6ww/shared" frameBorder="0" width="100%" height="500" name="8zYFp6ww"></iframe>

#### Complexity Analysis

Let $n$ be the size of `arr1` and $m$ be the size of `arr2`. Let $k$ be the maximum element in `arr1`.

* Time complexity: $O(n + m + k)$

    Finding the maximum element in `arr1` takes $O(n)$ time.

    Counting occurrences of each element in `arr1` using the count array takes $O(n)$ time.

    Adding elements to the `result` array based on the relative order of arr2 takes $O(m + n)$ time.

    Iterating through the count array to add remaining elements to the `result` array takes $O(n + k)$ time.

    Combining these steps, the overall time complexity is $O(n + n + m + n + k) = O(n + m + k)$.

* Space complexity: $O(k)$

    The count array has a size of `maxElement + 1`, resulting in $O(k)$ space, where $k$ is the maximum element in `arr1`.

---