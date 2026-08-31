# Official Solution

**Link:** [https://leetcode.com/problems/rank-transform-of-an-array/solution/](https://leetcode.com/problems/rank-transform-of-an-array/solution/)

---

[TOC]

## Solution

---

### Overview

We have an array `arr` of integers. Our task is to create a new array that replaces each number in `arr` with its rank. The rank represents the position of each number when `arr` is sorted in ascending order. Smaller numbers receive lower ranks (the smallest number gets a rank of 1), while larger numbers get higher ranks. If two numbers are the same, they share the same rank.

### Approach 1: Sorting + Hash Map 

### Intuition

The rank of an element is based on its position in a sorted array. To determine the ranks, we first sort the array `arr`.

In the sorted array, the first element gets rank 1 because it is the smallest. The second element gets rank 2 if it is larger than the first. If it is equal to the first element, it also gets rank 1. In general, if an element's value is different from the previous element's value, its rank is one more than the previous element's rank. If the values are the same, they share the same rank.

We can store the ranks in a hash map, where each key is a number from `arr` and each value is its rank. We will use a variable `rank`, starting at 1, to track the rank as we go through the sorted array. For each element, we check if its value is greater than the previous element's value. If it is, we increment `rank` and store the new rank in the map. If it isn't, we store the same rank as the previous element.

After calculating the ranks for all elements, we can replace each element in the original array `arr` with its rank by looking it up in the hash map.

### Algorithm

1. Initialize a hash map `numToRank` to store the mapping from each number in `arr` to its corresponding rank
2. Create a copy of `arr` called `sortedArr`. Sort it so that it is in ascending order.
3. Initialize current `rank` to 1.
4. Iterate through each element `sortedArr[i]` in `sortedArr`:
    * If `i > 0` and `sortedArr[i] > sortedArr[i-1]`, then `rank` can be incremented.
    * Add the mapping `(sortedArr[i], rank)` to our `numToRank`
5. Iterate through each element `arr[i]` in input `arr`:
    * Replace it with its rank: `arr[i] = numToRank.get(arr[i])`
6. Return `arr`

### Implementation

<iframe src="https://leetcode.com/playground/FQYywjMt/shared" frameBorder="0" width="100%" height="395" name="FQYywjMt"></iframe>

### Complexity Analysis 

Let $N$ be the size of `arr`.

* Time Complexity: $O(N \cdot \log N)$

    Sorting `sortedArr` takes $O(N \cdot \log N)$ time. Iterating through `arr` and `sortedArr` and inserting/looking up the rank for each number in our hash map takes in total $O(N \cdot \log N)$ time. Thus, the total time complexity is $O(N \cdot \log N)$

* Space complexity: $O(N + S)$

    Creating a copy of `arr` to be sorted will take $O(N)$ time. 

    The space taken by the sorting algorithm ($S$) depends on the language of implementation:

    In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log N)$.
    In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log N)$.
    In Python, the sort() method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(N)$.

### Approach 2: Deduplicating with Set

### Intuition

In Approach 1, we compared the current element to the previous one to decide if we should update our rank variable. This ensures that duplicate elements have the same rank. Instead of checking for duplicates directly, we can first remove them by adding the elements to a set. A set only keeps unique elements, so it automatically handles duplicates for us. After this step, we can sort the elements in the set and iterate through them to calculate their ranks. Some programming languages have sets that keep elements in order, while others have unordered sets, which means we need to sort them manually after adding elements.

### Algorithm

1. Initialize a hash map `numToRank` to store the mapping from each number in `arr` to its corresponding rank
2. Initialize a set `nums` to contain unique values of `arr`
3. Add each number in `arr` to set `nums`.
4. Initialize current rank to 1.
5. If `nums` isn't sorted by default, sort it
6. Iterate through each element `num` in `nums`:
    * Add the mapping `(num, rank)` to our `numToRank`
    * Increment `rank`
7. Iterate through each element `arr[i]` in input `arr`:
    * Replace it with its rank: `arr[i] = numToRank.get(arr[i])`
8. Return `arr`

### Implementation

<iframe src="https://leetcode.com/playground/PyDfuJKd/shared" frameBorder="0" width="100%" height="378" name="PyDfuJKd"></iframe>


### Complexity Analysis

Let $N$ be the size of `arr`.

* Time Complexity: $O(N \cdot \log N)$

    Adding one element to our set and making sure it is sorted will take a total of $O(N \cdot \log N)$ time. Iterating through `arr` and `nums` and inserting `num` to `nums` set, inserting/looking up the rank for each number in our hash map takes in total $O(N)$ time. Thus, the total time complexity is $O(N \cdot \log N)$.

* Space Complexity: $O(N)$ 

    Initializing a new set of size $N$ for `nums` will take $O(N)$ space. The `numToRank` hash map will consume $O(N)$ space. Thus, the total space complexity is $O(N)$.


### Approach 3: Ordered Map

### Intuition 

In Approach 2, we eliminated the need for deduplication and manual sorting by using a set. In Approach 3, we consolidate our operations using a data structure called an ordered map. An ordered map is like a regular map, but its unique keys are sorted. 

> Note that in Java and C++, this is offered through the `TreeMap` class and `std::map` class, respectively. Unfortunately, Python does not offer an equivalent.

With the ordered map, we can store unique elements from `arr` as sorted keys. Since the input is not sorted, we cannot directly calculate the ranks. Instead, we will iterate through the unsorted input `arr` and populate the ordered map so that each element maps to a list of indices where it occurs.

After building the map, we calculate the ranks. We start with `rank = 1`. Next, we iterate through the sorted keys of the ordered map and go through each key's list of indices. For each index `i`, we replace `arr[i]` with `rank`. After processing each key, we increment `rank` for the next greater key.

### Algorithm

1. Initialize an ordered map `numToIndices` to map each number `num` in `arr` to all indices for all occurrences of `num`
2. For each `i` in the range `[0, arr.length)`:
    * Access the list of indices for element `arr[i]` and append the index `i`
3. Initialize `rank = 1`
4. For each `num` in the ordered key set of `numToIndices`
    * Go through each index `index` in `numToIndices[num]`:
        * Reassign `arr[index]` to rank `rank`
    * Increment `rank`
5. Return `arr`

### Implementation

<iframe src="https://leetcode.com/playground/kq2Yhn5e/shared" frameBorder="0" width="100%" height="429" name="kq2Yhn5e"></iframe>

### Complexity Analysis

Let $N$ be the size of `arr`.

* Time Complexity: $O(N \cdot \log N)$

    Each insert to our ordered map `numToIndices` takes $O(\log N)$ time. Thus, populating our ordered map takes a total of $O(N \cdot \log N)$ time.

* Space Complexity: $O(N)$: 

    In the worst case, our ordered map will have size $O(N)$.