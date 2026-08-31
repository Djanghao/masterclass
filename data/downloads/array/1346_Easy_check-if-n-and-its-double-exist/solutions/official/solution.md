# Official Solution

**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solution/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solution/)

---

[TOC]

## Solution

--- 

### Overview

This problem is designed to help beginners get comfortable with basic array operations and the implementation of basic data structures. We are given an array and our goal is to find out if there are two different indices, represented by $i$ and $j$, where the value of one is twice the value of the other. 

How to interpret the three conditions:
- `i` and `j` must be different indices. This might seem like an obvious point unless you consider that $0 = 2 \times 0$. Without this condition, we'd be able to count just one `0` in the array as satisfying the goal. With this condition, an array would need two `0`s to satisfy the conditions. 
- `0 <= i, j < arr.length` just means that the indices are within the bounds of the array. This condition doesn't mean much, it's essentially a requirement for any array-based algorithm. 
- `arr[i] == 2 * arr[j]` is how we know `i` needs to be double `j`. 

---

### Approach 1: Brute Force

#### Intuition

One simple approach is to calculate the double of each number and then check if that value is in the array. This brute force method directly explores all possible pairs for each element until the result is found. This approach works but is not the most efficient. 

#### Algorithm

- Iterate through all pairs of indices `i` and `j` in the array `arr`.
  - For each pair, check if:
    - `i != j` (to ensure we aren't comparing the same element).
    - `arr[i] == 2 * arr[j]` (one element is double the other).
  - If both conditions are met, return `true` to indicate a valid pair is found.

- If no valid pair is found after checking all pairs, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/4wc64szF/shared" frameBorder="0" width="100%" height="327" name="4wc64szF"></iframe>

#### Complexity Analysis

Let `n` be the size of the input array `arr`.

- Time complexity: $O(n^2)$

    The algorithm consists of two nested loops. The outer loop iterates over each element in the array `arr`, and the inner loop also iterates over all elements of `arr`. For each pair of indices $i$ and $j$, the algorithm checks the condition $arr[i] == 2 \times arr[j]$ and ensures $i \neq j$.

    Since both loops iterate `n` times, the time complexity of the nested loops is $O(n \times n) = O(n^2)$.

- Space complexity: $O(1)$

    The algorithm does not use any additional data structures that grow with the size of the input. The space used by the algorithm is constant, as it only requires a few variables for the loop indices and condition checking. Therefore, the space complexity is $O(1)$.

---

### Approach 2: Set Lookup

#### Intuition

The brute force method doesn’t keep track of what it’s seen, so it wastes effort by revisiting the same values each time it loops through the array. Let's break down a solution where we can "store what we’ve seen" to speed up lookups.

A hash set works well here because it allows constant-time insertion and lookup. Instead of scanning the array multiple times, we use the set to check if $2 \times arr[i]$ or $arr[i] / 2$ (when divisible) already exists. If neither condition is met, we add $arr[i]$ to the set and continue. 

This way, we only iterate through the array once and eliminate the unnecessary comparisons we made in the brute force approach.
 
#### Algorithm

- Initialize an empty set named `seen` to store numbers encountered so far.

- For each `num` in the array `arr`:
  - Check if `2 * num` or `num / 2` exists in the `seen` set:
    - If `2 * num` is found in the set, or if `num` is divisible by 2 and `num / 2` is found in the set, return `true` (a valid pair is found).
  - Add the current number `num` to the `seen` set for future checks.

- If no valid pair is found after checking all elements, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/XXqGNvZy/shared" frameBorder="0" width="100%" height="395" name="XXqGNvZy"></iframe>

#### Complexity Analysis

Let `n` be the size of the input array `arr`.

- Time complexity: $O(n)$

    The algorithm iterates through the array `arr` once, processing each element individually. For each element, it performs two operations:
    1. Checking if $2 \times \text{num}$ or $\text{num} / 2$ is in the set, which takes $O(1)$ on average due to the constant-time lookup in the set.
    2. Adding the current element to the set, which also takes $O(1)$ on average for each insertion.

    Since both operations inside the loop take constant time, and the loop runs `n` times, the overall time complexity of the algorithm is $O(n)$.

- Space complexity: $O(n)$

    The primary space usage comes from the set, which stores up to `n` unique elements from the array `arr`. In the worst case, when all elements are unique, the set will contain `n` elements, resulting in a space complexity of $O(n)$.

    No additional significant data structures are used, so the auxiliary space complexity is $O(1)$. Therefore, the total space complexity is $O(n)$.
 
---

### Approach 3: Sorting + Binary Search

#### Intuition

Let's make a simple observation: except when the values of $i$ and $j$ are both 0, $j$ will always be greater than $i$. Since the relationship between the two is directional, we can sort the array in ascending order and apply one of the most fundamental search algorithms: binary search. 

Binary search is a two-pointer technique for efficiently locating a value in an ordered collection. Unlike Approach One, which checks each element individually, binary search repeatedly divides the search range in half which significantly reduces the number of comparisons we need to make.

> For a more comprehensive understanding of binary search, check out the [Binary Search Explore Card 🔗](https://leetcode.com/explore/learn/card/binary-search/). This resource offers an in-depth look at binary search, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

We start by setting one pointer to the first possible element and the second pointer to the last. At each step, we compare the target value to the middle element of the current range. If the target is greater than the midpoint, we eliminate all elements before the midpoint by moving the first pointer to the position just right of it. If the target is smaller, we eliminate all elements after the midpoint by moving the second pointer to the position just left of it. This process continues until the target is found or the range is empty.

!?!../Documents/1346/1346_approach3.json:805,545!?!

</br>

#### Algorithm

- Sort the array `arr` in ascending order to enable efficient searching.
  
- For each element `arr[i]` in the array:
  - Calculate the target value as `2 * arr[i]` (double the current number).
  - Perform a custom binary search for the target in the array:
    - In the `customBinarySearch` function:
      - Set `left` to 0 and `right` to `arr.length - 1` to define the search range.
      - While `left <= right`, calculate the midpoint `mid`.
        - If `arr[mid] == target`, return the index `mid` (target found).
        - If `arr[mid] < target`, move the `left` pointer to `mid + 1` to search the right half.
        - If `arr[mid] > target`, move the `right` pointer to `mid - 1` to search the left half.
      - If the target is not found, return `-1`.
  
  - If the target exists and its index is not the same as the current index `i`, return `true` (found a pair where one element is double the other).

- If no valid pair is found after iterating through the array, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/nk58Tg9Z/shared" frameBorder="0" width="100%" height="500" name="nk58Tg9Z"></iframe>

#### Complexity Analysis

Let `n` be the size of the input array `arr`.

- Time complexity: $O(n \log n)$

   The sort function sorts the array in $O(n \log n)$ time. Sorting is the most time-consuming operation here.

   The for loop iterates through each element in the array, and for each element, it calls the `customBinarySearch` function. The binary search operation itself takes $O(\log n)$ time, as it divides the search space in half at each step.  
   
   Therefore, the time complexity of the loop is $O(n)$ for iterating through the array, and for each iteration, the binary search takes $O(\log n)$. Thus, the total time complexity for the loop is $O(n \log n)$.

   Combining both parts, the overall time complexity is $O(n \log n)$.

- Space complexity: $O(n)$ or $O(\log n)$

    The space taken by the sorting algorithm depends on the language of implementation:

    In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$.
    
    In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log n)$.
    
    In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$.
 
   The binary search uses constant space for variables like `left`, `right`, and `mid`. The loop also does not use any additional space other than a few variables. Therefore, the space used by the loop is $O(1)$.

---

### Approach 4: Frequency Hash Map	

#### Intuition

Instead of using a hash set to find the pair like we did in Approach 2, we can use a frequency map. Some may understandably wonder why we don't use a frequency array instead of a map, which could be more memory-efficient and an excellent choice if the constraint were `>= 0`. However, since this problem allows negative numbers, a frequency map is the better choice. 

First, we will count the number of occurrences of each number and store their counts in their respective indices. Then, we will iterate again and check each element:

1. If `num` is in the array, we check if `2 * num` also exists using the map.
2. If `num = 0`, we ensure its count is at least 2 to satisfy `i ≠ j`.

#### Algorithm

- Initialize an empty hash map called `map` to store the count of occurrences of each number in the array.

- For each number `num` in `arr`:
  - Update the map with the count of `num` by incrementing the value associated with `num` in `map`.

- After populating the map, check for the condition where a number has a double in the array:
  - For each `num` in `arr`, if `num` is not zero and `map` contains `2 * num`, return `true` (found a number with its double).
  - If `num` is zero and there are more than one zero in the array (i.e., `map.get(num) > 1`), return `true` (special case where 0 is double of 0).

- If no such pair is found, return `false` (no number has its double in the array).

#### Implementation

<iframe src="https://leetcode.com/playground/9e6gbmPT/shared" frameBorder="0" width="100%" height="446" name="9e6gbmPT"></iframe>

#### Complexity Analysis

Let `n` be the size of the input array `arr`.

- Time complexity: $O(n)$

    The algorithm consists of two main loops. The first loop iterates through the array `arr` and inserts or updates each element in the hash map. The insertion operation in the hash map takes $O(1)$ on average, so the time complexity of this loop is $O(n)$.

    The second loop also iterates through the array `arr` and performs constant-time operations for each element, including lookups in the hash map (which are $O(1)$ on average). Therefore, the time complexity of this loop is also $O(n)$.

    As a result, the overall time complexity is $O(n) + O(n) = O(n)$.

- Space complexity: $O(n)$

    The space complexity is dominated by the hash map, which stores up to `n` unique elements from the array `arr`. Each key-value pair in the hash map consumes space, so in the worst case, the space required is proportional to the number of unique elements in `arr`, which is $O(n)$.

    No additional data structures that depend on the size of the input are used, so the auxiliary space is $O(1)$. Therefore, the total space complexity is $O(n)$.

---

</br>

#### Note on Hash Maps and Sets
 
Hash maps and hash sets are widely used data structures that provide efficient storage and retrieval of data. Their average-case time complexity for most operations, such as insertion, deletion, and lookup, is often $O(1)$. However, this efficiency depends on several factors, and there are edge cases where performance can degrade.

##### Average-Case Complexity: $O(1)$
Hashing Process: The operation relies on a hash function, which maps keys to specific "buckets" in memory.
- A well-designed hash function ensures uniform distribution of keys across buckets. The hash computation itself is expected to be a constant-time operation in most cases.
- Once the hash is computed, the bucket corresponding to the hash is accessed directly, making the lookup process efficient.

##### Worst-Case Complexity: $O(n)$
Hash Collisions: When multiple keys map to the same bucket due to the hash function returning the same hash code, a collision occurs. 
- In such cases, the hash map stores all colliding entries in a bucket, typically as a linked list.
- To resolve collisions, the hash map iterates through the bucket, checking each entry with an equality comparison, leading to $O(n)$ time complexity if all keys hash to the same bucket.
- This worst-case scenario is extremelly rare with a good hash function, but it is still a theoretical limitation to consider when designing or selecting algorithms.

##### Improvements in Modern Implementations (e.g., Java HashMap in JDK 8)
Tree-Backed Buckets: In modern hash map implementations, buckets that become densely populated are converted into balanced binary trees.
- This reduces the lookup time complexity in such cases from $O(n)$ to $O(\log n)$. The tree structure leverages key ordering for efficient traversal.
- If the key type's equality (`equals`) and ordering (`compareTo`) logic are inconsistent, this optimization sometimes leads to unpredictable behavior.

##### Takeaway:
In most real-world scenarios, hash maps and sets offer excellent performance and are the default choice for many applications requiring fast lookups.

However, be cautious of:
  - Poor hash functions.
  - Memory limitations.
  - Keys with inconsistent equality and ordering logic in modern implementations.

In general, when analyzing time complexity and space complexity in editorials, videos or discussions on the internet, most assume that hash functions are well-designed. This assumption allows us to consider the complexity of hash table operations as $O(1)$, rather than $O(n)$ or $O(\log n)$. This consistent behavior is reflected in almost all articles or videos you may encounter, where lookups are always described as constant time, never as $O(n)$ due to the underlying principles of hash functions.

To deepen your understanding of hash maps, sets, and their underlying principles, the following resources are highly recommended:
1. [Hash Table Explore Card 🔗](https://leetcode.com/explore/learn/card/hash-table/): This card has some great explanations on how it is applied to different DSA problems and how to recognize this pattern.
2. [Universal Hashing](https://en.wikipedia.org/wiki/Universal_hashing): This explains the principles behind creating hash functions that achieve the ideal $O(1)$ performance.
3. [Hash Table](https://en.wikipedia.org/wiki/Hash_table): This covers collision handling techniques (like chaining and open addressing) and practical trade-offs in hash table design.

---