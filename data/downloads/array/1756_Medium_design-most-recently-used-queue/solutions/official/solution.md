# Official Solution

**Link:** [https://leetcode.com/problems/design-most-recently-used-queue/solution/](https://leetcode.com/problems/design-most-recently-used-queue/solution/)

---

[TOC]

## Solution

---

### Overview

We need to design a queue-like data structure with a special behavior: whenever we access an element, it should be moved to the end of the queue. This is different from a traditional queue, where elements are strictly processed in a first-in, first-out (FIFO) order. Instead, our structure behaves more like a Most Recently Used (MRU) list, where frequently accessed elements tend to move towards the back. This behavior is similar to how certain caching mechanisms work, where the most recently accessed items are prioritized.

We need to implement a class called `MRUQueue` with two primary functionalities:

1. **Initialization**: The constructor `MRUQueue(int n)` initializes the queue with `n` elements, starting from `1` to `n`. For example, if `n = 8`, the queue will be `[1, 2, 3, 4, 5, 6, 7, 8]`.

2. **Fetch Operation**: The method `fetch(int k)` performs two tasks:
   - It retrieves the `k`th element in the queue (1-indexed).
   - It moves this element to the end of the queue, making it the most recently used element.

For example, if we initialize `MRUQueue(8)`, the queue starts as `[1, 2, 3, 4, 5, 6, 7, 8]`.  
If we call `fetch(3)`, the 3rd element (`3`) moves to the end, transforming the queue into `[1, 2, 4, 5, 6, 7, 8, 3]`.  

This means our structure must support efficient **random access** to elements and **modifications** to the queue, ensuring that elements can be relocated and accessed quickly.

A naive approach using a standard queue or list would result in a time complexity of $O(n)$ for `fetch(k)`, since removing an element from the middle of an array requires shifting elements.

Instead, we need a data structure that allows:

- Fast element retrieval (to find the `k`th element quickly).
- Efficient element movement (to reposition an element at the end without costly shifting).

One possible solution involves using Linked Lists or Balanced Trees, but an optimized approach will use Segment Trees to efficiently track element positions.

The key concepts we need to understand are:
1. Deque (Double-ended Queue):  
A deque allows fast constant time insertions and deletions from both ends, making it a useful structure for maintaining order efficiently. However, a simple deque alone does not help us access the `k`th element quickly, which is where more advanced structures come in.

2. Segment Tree / Fenwick Tree (Binary Indexed Tree):  
A Segment Tree or a Fenwick Tree (BIT) is a data structure that allows efficient prefix sum queries and updates, often used in range-based problems.  
In our case, we can use a Segment Tree (or BIT) to efficiently locate the `k`th element. Here’s how:
   - **Representation**: Instead of storing elements directly in an array, we maintain a position tree that tracks indices dynamically.  
   - **Query (`fetch(k)`)**: To find the `k`th element, we query the tree, which helps us locate the position in $O(\log n)$ time instead of $O(n)$ time.

With a Segment Tree, we can find an element in $O(\log n)$ time, making the solution scalable for large `n`. The problem constraints are quite small and thus a brute-force solution will also work.

One common doubt is why a plain doubly linked list implementation doesn't achieve $O(1)$ time complexity on `fetch`. The issue with doubly linked list is that it's not indexed. We only have access to the head and the tail, and because of that, a plain doubly linked list becomes equivalent to a brute-force approach.

Thus, we will discuss four solution approaches listed below:
1. [Brute Force with Array Queue](#approach-1-brute-force-with-array-queue)
2. [Brute Force with Linked List](#approach-2-brute-force-with-linkedlist)
3. [Square Root Decomposition](#approach-3-square-root-decomposition)
4. [Segment Tree / Fenwick Tree (Binary Indexed Tree)](#approach-4-fenwick-tree)

---

### Approach 1: Brute Force with Array Queue

#### Intuition

We need to maintain a sequence of numbers from `1` to `n` and efficiently retrieve the `k`-th most recently used element, moving it to the end of the sequence.

The simplest way to achieve this is to use a dynamic array, as it provides direct access to elements using indexing. When a fetch operation is performed, we can locate the `k`-th element in constant time, remove it, and append it to the end.

While this logically seems straightforward, the issue arises with the removal operation. Removing an element from an arbitrary position in an array requires shifting all subsequent elements one position left, which takes $O(n)$ time in the worst case. Since appending an element to the end of the array is $O(1)$, the overall complexity per query is $O(n)$.

Thus, while this approach is simple to implement, it becomes inefficient when $n$ is large and multiple fetch operations are required.

#### Algorithm

##### MRUQueue Class Initialization:
  - The queue is initialized with numbers from `1` to `n`.
  - The `queue` array is populated by iterating over the numbers and adding each number to the queue using `push_back`.

- ##### `fetch` Function:
  - The function fetches the `k`th element from the queue:
    - Retrieve the k-th Element:
      - The value of the `k`th element is accessed using the expression `queue[k - 1]`, since the queue is 1-indexed.
    
    - Remove the Element:
      - After retrieving the element, it is removed from its current position in the queue using `erase`, which removes the element at index `k - 1`.

    - Re-insert the Element:
      - The element is then appended to the end of the queue using `push_back`.

  - Return the element that was fetched.

#### Implementation

<iframe src="https://leetcode.com/playground/kLvyctTr/shared" frameBorder="0" width="100%" height="429" name="kLvyctTr"></iframe>

#### Complexity Analysis

Let $n$ be the size of the queue.

- Time complexity: $O(n)$

    Initialization (`MRUQueue(int n)`): The constructor initializes the queue with numbers from 1 to $n$. This involves a loop that runs $n$ times, and each `push_back` operation is $O(1)$. Therefore, the time complexity of initialization is $O(n)$.

    `fetch` operation (`fetch(int k)`): The `fetch` operation involves three steps:
    1. Accessing the $k$-th element using `queue[k - 1]`, which is $O(1)$.
    2. Removing the $k$-th element using `queue.erase(queue.begin() + k - 1)`. In the worst case, this operation is $O(n)$ because all elements after the $k$-th element need to be shifted left.
    3. Appending the element to the end of the queue using `queue.push_back(value)`, which is $O(1)$.

    Since the most expensive operation in `fetch` is the `erase` operation, the overall time complexity of `fetch` is $O(n)$.

- Space complexity: $O(n)$

    The queue stores $n$ elements, so the space complexity is $O(n)$
    
    The `fetch` operation uses a constant amount of additional space (e.g., for the `value` variable), so the auxiliary space complexity is $O(1)$. However, the dominant space usage is from the queue itself, which is $O(n)$.

---

### Approach 2: Brute Force with Linked List

#### Intuition

A linked list is another natural choice for representing the sequence, as it allows efficient insertions and deletions compared to an array. The idea is to construct a singly linked list where each node holds a value from `1` to `n`, maintaining pointers to traverse through it.

To perform a fetch operation, we traverse the linked list to find the `k`-th node. Since linked lists do not provide direct access by index, this takes $O(n)$ time in the worst case. Once we locate the `k`-th node, we update pointers to remove it from its current position and append it to the end, making sure to maintain the list's integrity. More specifically, to fetch, we go to the `(k - 1)`-th (previous) node, link node $k$ to the tail, update the tail, and return the value.

This avoids shifting elements like in an array, but traversal itself remains an $O(n)$ operation. While better suited for frequent modifications, it still suffers from inefficiency in searching for elements.

#### Algorithm

##### `MRUQueue` Class Initialization:
  - Initialize the linked list with a dummy `head` node.
  - For each number from `1` to `n`, create a new node with the current number:
    - Attach each newly created node to the `next` pointer of the current node.
    - Move the `current` pointer to the newly created node.
  - After all nodes are created, the `tail` pointer is set to the last node in the list.

- ##### `fetch` Function:
  - Traverse the linked list to find the node just before the `k`th node:
    - Start from the `head` node and iterate `k-1` times.
    - The `current` node will now point to the node just before the `k`th node.
  
  - Extract the `k`th Element:
    - Retrieve the value of the `k`th node by accessing `current->next->value`.

  - Move the `k`th Element to the End:
    - Attach the `k`th node to the end of the list by adjusting pointers:
      - Set `tail->next` to point to the `k`th node.
      - Move the `tail` pointer to the `k`th node.
      - Remove the `k`th node from its original position by updating `current->next` to skip the `k`th node.

  - Return the value of the `k`th node.

#### Implementation

<iframe src="https://leetcode.com/playground/fGnQwk3G/shared" frameBorder="0" width="100%" height="500" name="fGnQwk3G"></iframe>

#### Complexity Analysis

Let $n$ be the size of the queue.

- Time complexity: $O(n)$

    Initialization (`MRUQueue(int n)`): The constructor initializes the linked list with values from 1 to $n$. This involves a loop that runs $n$ times, and each node creation and linking operation is $O(1)$. Therefore, the time complexity of initialization is $O(n)$.

    `fetch` operation (`fetch(int k)`):  
    The `fetch` operation involves the following steps:
    1. Traversing to the node before the $k$-th node. This requires $O(k)$ time, where $k$ can be at most $n$. In the worst case, this is $O(n)$.
    2. Moving the $k$-th node to the end of the list. This involves updating a few pointers, which is $O(1)$.

    Since the most expensive operation in `fetch` is traversing to the $k$-th node, the overall time complexity of `fetch` is $O(n)$.

- Space complexity: $O(n)$

    The linked list stores $n$ nodes, each containing an integer value and a pointer. Therefore, the space complexity is $O(n)$.

    The `fetch` operation uses a constant amount of additional space (e.g., for pointers like `current` and `tail`), so the auxiliary space complexity is $O(1)$. However, the dominant space usage is from the linked list itself, which is $O(n)$.

---

### Approach 3: Square Root Decomposition

#### Intuition

The inefficiency of the brute force approaches comes from their reliance on linear searches for every fetch operation. One way to optimize this is by grouping elements into buckets, as it helps us balance the time spent searching for elements with the time spent modifying them. The intuition behind using buckets is that, when we divide the sequence into smaller, more manageable chunks, the search time is reduced. Instead of scanning the entire array every time, we can jump directly to the relevant bucket and work within a smaller subset of the data.

Instead of storing all elements in a single structure, we maintain multiple small arrays, each containing approximately $\sqrt{n}$ elements.

##### Why $\sqrt{n}$ Buckets?

Choosing $\sqrt{n}$ as the bucket size comes from balancing two competing factors:
1. **Minimizing search time**: If the bucket size is too small, the number of buckets increases, and we'll end up spending more time locating the right bucket. If the bucket size is too large, the time spent searching within the bucket (to find the `k`-th element) becomes a bottleneck.
2. **Efficient updates**: Each time we modify a bucket, we want the update to be relatively fast. If buckets are too large, updates become expensive, but if they're too small, there are too many updates to handle.

The product of the total number of buckets and the size of each bucket is equal to `n`. To minimize both values, we want them to be as close as possible. The optimal value for both is `√n`, where the number of buckets and the size of each bucket are equal. Therefore, choice of **$\sqrt{n}$ buckets** results in a trade-off where :
- **Total number of buckets**: $\sqrt{n}$
- **Elements per bucket**: $\sqrt{n}$

This results in a search time of $O(\sqrt{n})$ to locate the bucket and then $O(\sqrt{n})$ for any operations inside the bucket. While it doesn't guarantee an optimal solution in cases where the value of $n$ is small, it provides extremely good efficiency when the value of $n$ is large.

Once the elements are divided into buckets, two tasks are left:
1. **Searching for an element**: Searching for an element involves locating the correct bucket ($O(\sqrt{n})$) and then searching within the bucket ($O(\sqrt{n})$), making it much faster than scanning the entire array.
2. **Updating the data**: Updating the data requires rebalancing buckets if necessary. If a bucket becomes empty, it is removed; if a bucket exceeds its size limit, a new bucket is created. This ensures that the structure remains balanced and operations continue to run efficiently.

To implement this idea, we will use a 2D array to represent the buckets that we divide the sequence into. Each bucket in the array stores a subset of elements. The outer array `data` holds these buckets, where each inner array represents a bucket, and the `index` array tracks the starting index of each bucket. The bucket size (`BUCKET_SIZE`) is determined by taking the square root of the total number of elements.

In the constructor of the class, we iterate over the range of elements from `1` to `n`. For each element, we calculate which bucket it should belong to based on the formula `(number - 1) / BUCKET_SIZE`. This ensures that elements are distributed across buckets appropriately. As we iterate, if the bucket doesn’t yet exist, we create it by adding a new inner vector to the `data` array. We continue to populate the buckets with elements until the entire sequence is organized into buckets.

For the `fetch` operation, we first determine the bucket index in which the desired element resides using binary search on the `index` array. Then, we retrieve the element from the corresponding bucket, remove it from its current position, and shift the indices of subsequent buckets. Afterward, the element is appended to the last bucket, ensuring the order is preserved, and we handle the case where the bucket becomes full (contains more than $\sqrt{n}$ elements) by creating a new bucket.

Finally, we check whether any bucket is empty after the operation, and if so, we remove it from both the `data` and `index` arrays. This helps maintain the structure's efficiency by keeping only the necessary buckets.

Overall, we reduced the complexity per operation to approximately $O(\sqrt{n})$, which is significantly better than $O(n)$ for large $n$.

The algorithm is visualized below:

!?!../Documents/1756/square_root_decomposition.json:810,900!?!

#### Algorithm

##### `MRUQueue` Class Initialization:
  - The queue is initialized with a total of `n` elements and a `BUCKET_SIZE` calculated as the square root of `n`.
  - For each number from `1` to `n`, the following steps are performed:
    - Calculate the `bucketIndex` for the current number based on its position.
    - If the `bucketIndex` exceeds the size of `data`, a new bucket is created.
    - Add the number to the appropriate bucket in `data`.
    - The `index` array stores the starting element of each bucket for efficient access.

- ##### `fetch` Function:
  - The function fetches the `k`th element from the queue:
    - Find the Bucket:
      - Use binary search (`upper_bound`) to find the bucket that contains the `k`th element by looking at the `index` array. The bucket index is determined by subtracting 1 from the result of the search.
    
    - Extract the Element:
      - Get the `k`th element from the identified bucket using the formula `data[bucketIndex][k - index[bucketIndex]]`.
      - Remove the element from its current bucket using `erase` to avoid duplicates.

    - Update Bucket Indices:
      - After removing the element, all subsequent buckets in the `index` array have their starting indices shifted by 1 to account for the removal.

    - Re-Insert the Element:
      - If the last bucket is full (i.e., it has reached or exceeded the `BUCKET_SIZE`), create a new bucket and add it to `data`.
      - The element is then appended to the last bucket.

    - Remove Empty Buckets:
      - After re-inserting the element, check if any buckets are empty and remove them from both `data` and `index`.

  - Return the element that was fetched.

#### Implementation

<iframe src="https://leetcode.com/playground/WZFxFzq5/shared" frameBorder="0" width="100%" height="500" name="WZFxFzq5"></iframe>

#### Complexity Analysis

Let $n$ be the size of the queue.

- Time complexity: $O(\sqrt{n})$

    The time complexity of the `MRUQueue` operations is determined by the bucket-based implementation. The bucket size is chosen as $\sqrt{n}$, which balances the cost of operations across buckets and within buckets.

    Initialization (`MRUQueue(int n)`): The initialization process distributes $n$ elements into approximately $\sqrt{n}$ buckets, each containing at most $\sqrt{n}$ elements. This takes $O(n)$ time.

    Fetch operation (`fetch(int k)`): The `fetch` operation involves finding the bucket containing the $k$-th element, removing the element from the bucket, updating the indices of subsequent buckets, and appending the element to the last bucket. The most expensive operations are removing the element from the bucket and updating the indices, both of which take $O(\sqrt{n})$ time. Thus, the overall time complexity of `fetch` is $O(\sqrt{n})$.

- Space complexity: $O(n)$

    The space complexity is dominated by the storage of the elements in the buckets and the auxiliary data structures used to manage them.

    The buckets store all $n$ elements, so the space complexity for the buckets is $O(n)$.

    The `index` array stores the starting indices of the buckets, and since there are approximately $\sqrt{n}$ buckets, the space used by the `index` array is $O(\sqrt{n})$.

    The `fetch` operation uses a constant amount of additional space, so the auxiliary space complexity is $O(1)$. However, the dominant space usage is from the buckets, making the overall space complexity $O(n)$. 
 
---

### Approach 4: Fenwick Tree

#### Intuition

Another optimal approach is to use a Segment Tree / Fenwick Tree (Binary Indexed Tree).

The [Fenwick Tree](https://en.wikipedia.org/wiki/Fenwick_tree) is a tree-like data structure that supports two main operations:
1. **Prefix sum**: It allows us to calculate the sum of elements up to a given index in logarithmic time.
2. **Update**: It allows us to update an element (insert or remove a value) at a specific index in logarithmic time.

To implement the Fenwick Tree, we will divide the explanation into three steps:
1. Initialization of the Fenwick Tree
2. Using the Fenwick Tree in `MRUQueue`
3. Implementing the `fetch` operation

##### 1: Using the Fenwick Tree in the MRUQueue

To implement the Fenwick Tree, we create a class `FenwickTree`, which has an array `tree` to store cumulative frequencies. The constructor initializes the tree with all zeros. Next, we create a `sum()` function that calculates the prefix sum up to a given index, and an `insert()` function that updates the tree by inserting a value at a specific index.

##### 2: Using the Fenwick Tree in the MRUQueue

Next, we integrate the Fenwick Tree into the `MRUQueue` class, where it will help us maintain and dynamically update the sequence of elements. The `MRUQueue` needs to support a `fetch(k)` operation, which retrieves the `k`-th element from the sequence, and after fetching, it moves the element to the back of the queue.

We initialize the `MRUQueue` with a certain number of elements. The Fenwick Tree is used to track the positions of these elements efficiently. We also keep an array `values` to store the actual values of the elements in the sequence.

##### 3: Implementing the Fetch Operation

To fetch the `k`-th element, we use a binary search combined with the Fenwick Tree. The binary search helps us find the smallest index `low` such that the cumulative sum up to that index is greater than or equal to `k`.

Once the k-th element is located at index `low`, we:
1. Remove it from the current position by updating the Fenwick Tree (subtracting 1 from its count).
2. Insert it to the end of the sequence by updating the Fenwick Tree again (adding 1 to the count at the end of the sequence).
3. Update the size of the sequence and store the element at the end.

Finally, we return the `k`-th element.

Since both locating and updating operations take $O(\log n)$, this is the most optimal solution among all the approaches.

#### Algorithm

##### `FenwickTree` Class Initialization:
  - A Fenwick Tree is initialized with a given size. The tree is represented by a vector of integers, initially set to zeros, with a size of `size + 1` to account for 1-based indexing.

- ##### `Sum` Function:
  - Given an index, calculate the cumulative sum of elements from the start up to the index:
    - Start with a `result` initialized to 0.
    - While the index is greater than 0, add the value at the current index to `result`, and move to the parent index using `index &= index - 1`.
    - Return the final `result`, which represents the sum up to the specified index.

- ##### `Insert` Function:
  - Updates the Fenwick Tree by adding a `value` at a given `index`:
    - Convert the `index` to 1-based by incrementing it.
    - While the `index` is within the bounds of the tree, add the `value` at the current index and move to the next relevant index using `index += index & -index`.

##### `MRUQueue` Class Initialization:
  - The queue is initialized with a size `n`, and an instance of `FenwickTree` is created with size `n + 2000`.
  - A `values` array is initialized with size `n + 2000` to store the values of the queue.
  - For the first `n` positions, set each index with the corresponding value and mark the positions in the Fenwick Tree by calling `insert(i, 1)` for each index.

- ##### `Fetch` Function:
  - Given `k`, the function finds the `k`th value in the queue using a binary search approach:
    - Set `low` to 0 and `high` to the current size of the queue.
    - Perform a binary search to find the position where the sum of values in the Fenwick Tree up to that position is greater than or equal to `k`.
    - After finding the position, move the found value to the end of the queue:
      - Update the Fenwick Tree by removing the value at the found position (`insert(low - 1, -1)`).
      - Insert the value at the end (`insert(size, 1)`), and update the `values` array to store the value at the last position.
    - Return the fetched value, which was initially at position `low - 1`.

#### Implementation

<iframe src="https://leetcode.com/playground/LFqhASPj/shared" frameBorder="0" width="100%" height="500" name="LFqhASPj"></iframe>

#### Complexity Analysis

Let $n$ be the size of the queue.

- Time complexity: $O(\log^2 n)$

    The time complexity of the `MRUQueue` operations is determined by the use of a Fenwick Tree (Binary Indexed Tree) and binary search. The Fenwick Tree enables efficient prefix sum calculations and updates, while binary search is used to locate the $k$-th element in the queue.

    Initialization (`MRUQueue(int n)`):  During initialization, the Fenwick Tree and the `values` array are set up. Each of the $n$ elements is inserted into the Fenwick Tree using the `insert` operation, which takes $O(\log n)$ time per insertion. Since there are $n$ elements, the total time complexity for initialization is $O(n \log n)$.

    Fetch operation (`fetch(int k)`): The `fetch` operation involves two main steps:  
    1. Binary search to find the $k$-th element:  
        The binary search uses the `sum` operation of the Fenwick Tree to determine the position of the $k$-th element. Each `sum` operation takes $O(\log n)$ time, and the binary search performs $O(\log n)$ such operations. Thus, this step takes $O(\log^2 n)$ time.  
    2. Updating the Fenwick Tree and `values` array:  
        After finding the $k$-th element, the Fenwick Tree is updated twice (once to remove the element from its current position and once to add it to the end). Each update operation takes $O(\log n)$ time. Updating the `values` array is $O(1)$.  

    The most expensive step is the binary search, which takes $O(\log^2 n)$ time. Therefore, the overall time complexity of `fetch` is $O(\log^2 n)$.

- Space complexity: $O(n + f)$  

    The space complexity is determined by the storage requirements of the Fenwick Tree, the `values` array, and the additional space used due to fetch operations.  

    The Fenwick Tree is initialized with a size of $n + 2000$, ensuring enough capacity for future insertions without frequent resizing. This contributes $O(n)$ space.  
    
    The `values` array, which stores the actual elements of the queue, is also initialized with a size of $n + 2000$, contributing $O(n)$ space.  
    
    The `fetch` operation moves elements to the end of the queue. If an auxiliary structure is used to track moved elements, it introduces an additional $O(f)$ space usage, where $f$ is the number of fetch operations performed.  

    Thus, the overall space complexity is $O(n + f)$, as both the initialization and dynamic updates contribute to space usage.

---

</br>

<details>
  <summary><h3>For Python 3 users</h3></summary>

  <p>For Python 3 users, the <code>SortedList</code> class from the <code>sortedcontainers</code> library provides an efficient way to implement an MRU (Most Recently Used) queue. Unlike a standard list, <code>SortedList</code> is based on a balanced binary search tree (such as a red-black tree or B-tree), allowing for $O(\log n)$ insertions, deletions, and indexing.</p>

  <h3>Implementation</h3>

  ```python3
  from sortedcontainers import SortedList

  class MRUQueue:
      def __init__(self, n: int):
          # Initialize the SortedList with (position, value) pairs
          self.queue = SortedList((position, value) for position, value in enumerate(range(1, n + 1)))

      def fetch(self, k: int) -> int:
          # Fetch the k-th element (1-based index)
          _, value = self.queue.pop(k - 1)
          
          # Determine the next available position for re-insertion
          next_position = self.queue[-1][0] + 1 if self.queue else 0
          
          # Reinsert the fetched element at the highest position
          self.queue.add((next_position, value))
          
          return value
  ```
</details>