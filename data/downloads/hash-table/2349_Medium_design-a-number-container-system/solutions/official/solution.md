# Official Solution

**Link:** [https://leetcode.com/problems/design-a-number-container-system/solution/](https://leetcode.com/problems/design-a-number-container-system/solution/)

---

[TOC]

## Solution

--- 

### Overview

We need to design a number container system to efficiently manage and query numbers based on their indices. This system should support two primary operations:

1. **Inserting or Replacing a Number:** We can insert a number at a specific index, or replace the number already present at that index.
2. **Finding the Smallest Index of a Number:** We need to retrieve the smallest index where a given number is present. If the number doesn't exist in the system, we should return `-1`.

To achieve this, we need to implement a class `NumberContainers` with the following methods:

- **`NumberContainers()`**: Initializes the container system. This involves setting up the internal data structures to store the mappings between numbers and indices.
- **`void change(int index, int number)`**: Updates the system by associating the given `number` with the provided `index`. If the index already contains a number, it should be replaced. If this operation introduces new data or modifies existing mappings, the system must ensure consistency for subsequent queries.
- **`int find(int number)`**: Returns the smallest index where the specified `number` exists. If the number is not present, it returns `-1`.

---

### Approach 1: Two Maps

#### Intuition   

We need to focus on two main operations: `change`, which allows us to insert or replace a number at a specific index, and `find`, which retrieves the smallest index associated with a given number.

The key to implementing these operations efficiently lies in using map data structures:
1. **`indexToNumber`**: This map holds the relationship between an index and the number currently stored at that index. It allows us to quickly check if an index already contains a number and enables efficient replacement during the `change` operation.
2. **`numberToIndices`**: This map keeps track of the indices where each number is present. By using a set to store these indices, we ensure that they remain automatically sorted, enabling efficient insertion and retrieval of the smallest index for a number.

With these structures in mind, let’s break the solution into two parts: first, the `change` operation, and second, the `find` operation.

##### 1. Change Operation (Insertion and Replacement)

The `change` operation begins by checking if the given index already holds a number. If the index does contain a number, we first remove this index from the set of indices associated with the old number in the `numberToIndices` map. This step ensures that the old number no longer references the index after the replacement. Once the index is removed, we check whether the set for the old number has become empty. If it has, we remove the old number entirely from the map to maintain a clean and efficient data structure.

After handling the removal, we proceed to insert the new number at the given index. This involves adding the index to the set of indices for the new number in `numberToIndices`. Because we are using a set, the indices remain sorted automatically, allowing us to avoid any additional effort to manage their order. This also prepares us for the `find` operation, where the smallest index will always be readily accessible.

##### 2. Find Operation (Retrieve Smallest Index)

For the `find` operation, we need to return the smallest index that contains the given number. To achieve this, we check the `numberToIndices` map. If the number isn't found, we return `-1`, indicating that the number is not present. If the number exists, the smallest index will always be the first element in the set of indices (since sets store elements in ascending order). This allows us to quickly return the result with minimal effort.

> For a more comprehensive understanding of hash tables, check out the [Hash Table Explore Card 🔗](https://leetcode.com/explore/learn/card/hash-table/). This resource provides an in-depth look at hash tables, explaining their key concepts and applications with a variety of problems to solidify understanding of the pattern.

The algorithm is visualized below:

!?!../Documents/2349/number_container.json:878,908!?!

#### Algorithm

- Initialize two unordered maps:
  - `numberToIndices`: A map from a number to a set of indices where the number is located.
  - `indexToNumbers`: A map from an index to the number stored at that index.

- `change(index, number)`:
  - If the index is already mapped to a number (i.e., if the index exists in the map or collection of numbers):
    - Retrieve the previous number stored at the index (`previousNumber`).
    - Remove the current index from the set of indices associated with the previous number in `numberToIndices`.
    - If there are no more indices associated with the previous number, remove the entry for `previousNumber` in `numberToIndices`.
  - Update the `indexToNumbers` map to associate the given index with the new number.
  - Add the index to the set of indices associated with the new number in `numberToIndices`.

- `find(number)`:
  - If the number exists in `numberToIndices`:
    - Return the smallest index where this number is located (i.e., the first element in the set of indices).
  - If the number does not exist, return `-1`.

#### Implementation

> **Note:** A constructor is used to initialize the object's state when it is created. It sets up the necessary data structures, default values, or any other required initial configuration for the object. In the case of the `NumberContainers` class, the constructor is used to initialize the maps (`indexToNumbers` and `numberToIndices`) that store the necessary data. Without a constructor, these data structures would remain uninitialized, leading to errors or unexpected behavior when the object is used. Essentially, the constructor ensures that the object is in a valid, usable state right from the moment it is instantiated.

<iframe src="https://leetcode.com/playground/bsvhFLJ4/shared" frameBorder="0" width="100%" height="500" name="bsvhFLJ4"></iframe>

#### Complexity Analysis

Let $n$ be the number of indices and unique numbers.

- Time complexity: $O(\log n)$ per `change` operation and $O(1)$ per `find` operation.

    The `change` operation involves updating two maps (`indexToNumbers` and `numberToIndices`) and performing operations on a set. Checking and updating the maps takes $O(1)$ time on average, but the set operations (adding or removing an index) take $O(\log k)$ time, where $k$ is the number of indices associated with a number. In the worst case, $k$ can be $n$, so the `change` operation is $O(\log n)$.

    The `find` operation is efficient because it only requires checking if a number exists in the set map (which is $O(1)$) and retrieving the smallest index from the set (which is also $O(1)$ due to the sorted nature of set). Thus, the `find` operation is $O(1)$.

- Space complexity: $O(n)$.

    The space complexity is dominated by the `numberToIndices` map, which stores a set for each unique number. In the worst case, each set can store up to $n$ indices, leading to a total space usage of $O(n)$.

    The `indexToNumbers` map contributes $O(n)$ space since it stores a mapping from each index to its corresponding number. 
    
    Therefore, the overall space complexity is $O(n)$.

--- 

### Approach 2: Using Min Heap with Lazy Update

#### Intuition   

An alternate solution could be to use min heaps (priority queues) for managing the indices associated with each number. Similar to Approach 1, we use maps to manage the relationships between indices and numbers, but instead of keeping the indices in a sorted set, we store them in a priority queue (min heap) to handle the ordering for us in this approach.

We follow a similar structure as Approach 1, with two main maps:

1. **`indexToNumbers`**: This map links each index to the number it holds. It helps verify whether an index is still valid during the `find` operation.
2. **`numberToIndices`**: Instead of using a sorted set to store indices, we use a **min heap (priority queue)**. The priority queue allows us to efficiently retrieve the smallest index associated with a number, as it automatically keeps the indices sorted.

What makes this approach different is the **Lazy Update** technique. The term "lazy" refers to the deferred handling of index validity during the `find` operation, rather than cleaning up indices immediately after a change.

##### Change Operation (Insertion and Replacement)

Similar to Approach 1, we first update the `indexToNumbers` map to reflect the new number at the given index. Then, instead of immediately removing any outdated indices, we lazily add the new index to the min heap associated with the new number in `numberToIndices`.

The key difference here is that we don't bother cleaning up the heap during the `change` operation. Instead, we defer removing the stale indices until the `find` operation requires it.

##### Find Operation (Retrieve Smallest Index)

The Lazy Update technique becomes crucial in the `find` operation. Here, when we need to retrieve the smallest index for a given number, we check the `numberToIndices` map. If the number doesn’t exist, we return `-1`.

If the number does exist, we retrieve the min heap for that number. At this point, we don’t assume that the top element of the heap is necessarily valid. The heap may contain stale indices that are no longer associated with the target number. Instead of removing them immediately, we lazily pop the top element of the heap and check if it still maps to the target number using the `indexToNumbers` map.

If it does, we return the index. If not, we continue popping the heap until we find a valid index or exhaust the heap. This "lazy" way ensures that the heap is only cleaned up when it's absolutely necessary, avoiding unnecessary operations during the `change` phase.

> For a more comprehensive understanding of heaps and priority queues, check out the [Heap Explore Card 🔗](https://leetcode.com/explore/learn/card/heap/). This resource provides an in-depth look at heap-based algorithms, explaining their key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- Initialize `numberToIndices` as an hash map where the key is a number and the value is a min-heap (priority queue) of indices for that number.
- Initialize `indexToNumbers` as a hash map where the key is an index and the value is the corresponding number at that index.

- `change(index, number)`:
  - Update the mapping of `indexToNumbers` to associate the given `index` with the new `number`.
  - Add the `index` to the min-heap corresponding to the `number` in `numberToIndices`.
 
- `find(number)`:
  - If the `number` is not present in `numberToIndices`, return `-1` (indicating the number does not exist).
  - Retrieve the min-heap (priority queue) associated with the `number`.
  - While the min-heap is not empty:
    - Get the top element (`index`) of the heap.
    - If the `index` corresponds to the target `number` in `indexToNumbers`, return that `index`.
    - If the `index` maps to a different number, remove the stale index by popping it from the heap.
  - If no valid index is found, return `-1`.

#### Implementation

<iframe src="https://leetcode.com/playground/QE4J2iuC/shared" frameBorder="0" width="100%" height="500" name="QE4J2iuC"></iframe>

#### Complexity Analysis

Let $n$ be the number of indices and unique numbers.

- Time complexity: $O(\log n)$ per `change` operation and $O(k \log n)$ per `find` operation in the worst case.

    The `change` operation involves updating the `indexToNumbers` map, which is $O(1)$, and adding an index to a heap (min-heap) in the `numberToIndices` map. The heap insertion operation takes $O(\log n)$ time in the worst case. Thus, the `change` operation is $O(\log n)$.

    The `find` operation involves checking if the number exists in the `numberToIndices` map, which is $O(1)$. However, in the worst case, it may need to remove stale indices from the heap (min-heap) until a valid index is found. Each removal from the heap takes $O(\log n)$ time, and in the worst case, this could happen $k$ times, where $k$ is the number of stale indices. Thus, the `find` operation is $O(k \log n)$ in the worst case.

- Space complexity: $O(n)$

    The space complexity is dominated by the `numberToIndices` map, which stores a heap (min-heap) for each unique number. In the worst case, all $n$ calls could be `change` operations, leading to $n$ indices being stored across all heaps. Thus, the total space used by the heaps is $O(n)$.

    The `indexToNumbers` map also contributes $O(n)$ space since it stores a mapping from each index to its corresponding number. Therefore, the overall space complexity is $O(n)$.
 
---