# Official Solution

**Link:** [https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solution/](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given an integer array `heights` and an array of pairs `queries`, where each pair is of the form $[a_i, b_i]$, representing the positions of Alice and Bob at indices `i` and `j`, respectively. For each query, the task is to find the closest value to the right in the `heights` array that is greater than the `heights` at both the given positions.

In other words, given indices `i` and `j`, we need to find the first value in the `heights` array that is greater than the values at `heights[i]` and `heights[j]`. If no such value exists, return -1. 

---

### Approach 1: Monotonic Stack

#### Intuition   

Let’s start by breaking down the problem into simpler terms. Suppose `queries` only contained single integer indices. The goal would then be to find, for each index, the first building to the right in the `heights` array that is taller than the building at that index. Instead of scanning the array repeatedly for each query, we can preprocess the `heights` array to store this "next taller building" information in advance.

The key insight here is that for each building, the next taller building to its right depends only on the heights of the buildings that come after it. Using a monotonic stack, we can compute this efficiently. By traversing the `heights` array from right to left, we maintain a stack of indices in decreasing order of heights. For the current building, any shorter or equal buildings already in the stack cannot be the answer, so we remove them. If the stack is not empty, the top element gives the position of the next taller building. If the stack is empty, it means no taller building exists to the right, so we store `-1`. This preprocessing step allows us to handle single queries in constant time. For a better understanding of this idea, you can refer to [Next Greater Element - II](https://leetcode.com/problems/next-greater-element-ii/), which applies a similar technique.

Now, let’s extend this idea to handle queries that are pairs of values. In this scenario, the task is to find the first height to the right in the `heights` array that is greater than both values in each pair. Here the key realization is that the answer for a pair depends on the larger of the two values since a building must be taller than both. This simplifies the problem by reducing it to a comparison with a single threshold for each query.

While traversing the `heights` array, we use a monotonic stack to maintain all elements greater than the current height, with the nearest greater height at the top of the stack. When processing a query, the stack already contains all elements greater than the current height. 

For each query pair, we use binary search on the stack to quickly find the first element greater than the larger value in the pair. This ensures that each query is processed in $O(\log n)$ time.

#### Algorithm

Main function - `leftmostBuildingQueries(heights, queries)`

1. Create a list `newQueries` where each index stores the list of queries that require this index as the maximum index of the query pair. Each query is stored as a pair containing the required height (`heights[a]`) and the query index.  
2. Initialize a monotonic stack `monoStack` to keep track of building heights and their indices in decreasing order of height while iterating from right to left in the `heights` array.  
3. Initialize an array `result` to store the answers for each query, with all elements initially set to `-1`.  
4. Iterate over the `queries`:  
   - For each query, extract the two indices `a` and `b`.  
   - If `a > b`, swap the indices to ensure `a <= b`.  
   - If `heights[b] > heights[a]` or `a == b`, set `result[currQuery] = b`.  
   - Otherwise, add the query to `newQueries[b]` with its required height (`heights[a]`) and the query index.  
5. Iterate over the indices of the `heights` array from right to left:  
   - For each query stored at the current index in `newQueries`, use binary search on the `monoStack` to find the first building with a height greater than the query's required height. If such a building exists, set the result for the query to the index of this building.  
   - Remove all elements from the top of the `monoStack` where the height is less than or equal to the current height, as they are no longer relevant.  
   - Push the current height and index onto the `monoStack`.  
6. Return the `result` array.

Helper Binary Search function - `search(height, monoStack)`

1. Initialize two pointers `left = 0` and `right = size of monoStack - 1`. Set a variable `ans = -1` to store the search result.  
2. Perform a binary search:
   - Calculate `mid = (left + right) / 2`.  
   - If the height at `monoStack[mid]` is greater than the required height:  
     - Update `ans = max(ans, mid)` and set `left = mid + 1`. 
   - Otherwise, set `right = mid - 1`. 
3. Return `ans`, which will be the index of the first building with a height greater than the required height. If no such building exists, `ans` remains `-1`.  

#### Implementation

<iframe src="https://leetcode.com/playground/AFfMGimL/shared" frameBorder="0" width="100%" height="500" name="AFfMGimL"></iframe>

#### Complexity Analysis

Let $n$ be the size of the array `heights` and $q$ be the number of queries in the `queries` array.

- Time Complexity: $O(q \cdot \log n + n)$

    The algorithm  processes each query using binary search on the monotonic stack, which takes $O(\log n)$ per query. With $q$ queries, the total query processing time is $O(q \cdot \log n)$. Apart from this, we also iterate through the `heights` and `queries` arrays, that takes $O(n)$ and $O(q)$ time, respectively.

    Therefore, the overall time complexity is $O(q \cdot \log n + n)$.

- Space Complexity: $O(n + q)$

    The algorithm uses a monotonic stack to store building indices, requiring $O(n)$ space. It also stores queries in the `newQueries` array and results in the `result` array, each taking $O(q)$ space.

    Therefore, the total space complexity is $O(n + q)$.

---

### Approach 2: Priority Queue

#### Intuition   

In the previous approach, we calculated the answer using a monotonic stack. Each query asks for the closest index to the right with a value greater than both elements in the query pair. Instead of processing each query one at a time, we can optimize by checking, for each index in the `heights` array, if it can serve as the answer for any query.

To do this efficiently, we can iterate through the `heights` array from left to right. For each index, we look for query pairs where both indices are smaller than the current index, and both values in the pair are smaller than the value at the current index. To make this process faster, we prioritize assigning answers to the smallest query pairs first.

By maintaining the query pairs sorted based on their maximum value and index up to the current position, we can process them more efficiently.

To implement this idea, we process the `heights` array while managing the queries by storing them in a 2D array of arrays, where each subarray holds the queries for the corresponding building.

We begin by sorting and mapping the queries to track the index and values that we need. Using a priority queue, we store queries based on their maximum value and index. This helps us quickly retrieve the smallest index for processing.

As we move through the `heights` array, we pop the queries from the queue. For each query, if the current index is greater than both indices of the query, we assign the current index as the answer and store it. We also check if new queries, whose maximum index matches the current one, should be added to the queue for future processing.

This allows us to handle queries without reprocessing them repeatedly.

#### Algorithm

- Initialize `storeQueries` as a 2D array of arrays to store queries for each building.
- Initialize `maxIndex` as a priority queue to track the queries that need to be answered based on building heights.
- Initialize `result` as an array of `-1` to store the answers for each query.

- Loop through each query:
  - For each query `(a, b)`:
    - If the height of building `a` is less than building `b` and `a` is smaller than `b`, set `result[currQuery]` to `b` (building `b` is the answer).
    - If the height of building `a` is greater than building `b` and `a` is greater than `b`, set `result[currQuery]` to `a` (building `a` is the answer).
    - If `a` is equal to `b`, set `result[currQuery]` to `a` (both are the same building).
    - Otherwise, store the query in `storeQueries[max(a, b)]` for future processing.

- Loop through each building index `index`:
  - While the priority queue `maxIndex` has elements and the minimum value in `maxIndex` is smaller than the current building height:
    - Set the corresponding query's result in `result` and pop the element from `maxIndex` (this query is answered).
  - Push new queries from `storeQueries[index]` into `maxIndex`, sorting them by height.

- Return the `result` array containing the answers to all queries.

#### Implementation

<iframe src="https://leetcode.com/playground/gobEvzsi/shared" frameBorder="0" width="100%" height="500" name="gobEvzsi"></iframe>

#### Complexity Analysis

Let $n$ be the size of the array `heights` and $q$ be the number of queries in the `queries` array.

- Time Complexity: $O(q \cdot \log q + n)$

    The algorithm first iterates over the `queries` array to map the maximum indices and heights in `storeQueries`, taking $O(q)$ time. It then processes each index in the `heights` array, updating results via a priority queue. Insertion and deletion operations in the priority queue take $O(\log q)$ each, with at most $q$ queries processed. For each index, the algorithm checks and pushes relevant queries from `storeQueries`, resulting in an overall $O(n)$ time for all iterations.

    Thus, the overall time complexity is $O(q \cdot \log q + n)$.

- Space Complexity: $O(n + q)$

    The algorithm uses a array `storeQueries` to store query mappings, which requires $O(n)$ space, as each element corresponds to an index in `heights`. Additionally, a priority queue `maxIndex` is used to handle queries, which at most can store $O(q)$ elements. The `result` array also requires $O(q)$ space to store the answers.

    Therefore, the total space complexity is $O(n + q)$.
---