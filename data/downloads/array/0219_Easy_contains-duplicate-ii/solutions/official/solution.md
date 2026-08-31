# Official Solution

**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solution/](https://leetcode.com/problems/contains-duplicate-ii/solution/)

---

[TOC]

## Summary

This article is for beginners. It introduces the following ideas:
Linear Search, Binary Search Tree and Hash Table.

## Solution
---
### Approach #1: Naive Linear Search

**Intuition**

Look for duplicate element in the previous $$k$$ elements.

**Algorithm**

This algorithm is the same as [Approach #1 in Contains Duplicate solution](https://leetcode.com/articles/contains-duplicate/#approach-1-naive-linear-search-time-limit-exceeded), except that it looks at previous $$k$$ elements instead of all its previous elements.

Another perspective of this algorithm is to keep a virtual sliding window of the previous $$k$$ elements. We scan for the duplicate in this window.

<iframe src="https://leetcode.com/playground/Frbg3g3i/shared" frameBorder="0" name="Frbg3g3i" width="100%" height="207"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n \min(k,n))$$.
It costs $$O(\min(k, n))$$ time for each linear search. Apparently we do at most $$n$$ comparisons in one search even if $$k$$ can be larger than $$n$$.

* Space complexity : $$O(1)$$.

---
### Approach #2: Binary Search Tree

**Intuition**

Keep a sliding window of $$k$$ elements using self-balancing Binary Search Tree (BST).

**Algorithm**

The key to improve upon [Approach #1](#approach-1-naive-linear-search-time-limit-exceeded) above is to reduce the search time of the previous $$k$$ elements. Can we use an auxiliary data structure to maintain a sliding window of $$k$$ elements with more efficient `search`, `delete`, and `insert` operations? Since elements in the sliding window are strictly First-In-First-Out (FIFO), queue is a natural data structure. A queue using a linked list implementation supports constant time `delete` and `insert` operations, however the `search` costs linear time, which is *no better* than [Approach #1](#approach-1-naive-linear-search-time-limit-exceeded).

A better option is to use a self-balancing BST. A BST supports `search`, `delete` and `insert` operations all in $$O(\log k)$$ time, where $$k$$ is the number of elements in the BST. In most interviews you are not required to implement a self-balancing BST, so you may think of it as a black box. Most programming languages provide implementations of this useful data structure in its standard library. In Java, you may use a `TreeSet` or a `TreeMap`. In C++ STL, you may use a `std::set` or a `std::map`.

If you already have such a data structure available, the pseudocode is:

* Loop through the array, for each element do
    * Search current element in the BST, return `true` if found
    * Put current element in the BST
    * If the size of the BST is larger than $$k$$, remove the oldest item.
* Return `false`

<iframe src="https://leetcode.com/playground/Z35msNHU/shared" frameBorder="0" name="Z35msNHU" width="100%" height="258"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n \log (\min(k,n)))$$. We do $$n$$ operations of `search`, `delete` and `insert`. Each operation costs logarithmic time complexity in the sliding window which size is $$\min(k, n)$$. Note that even if $$k$$ can be greater than $$n$$, the window size can never exceed $$n$$.

* Space complexity : $$O(\min(n,k))$$.
Space is the size of the sliding window which should not exceed $$n$$ or $$k$$.

**Note**

The algorithm still gets Time Limit Exceeded for large $$n$$ and $$k$$.

---
### Approach #3: Hash Table

**Intuition**

Keep a sliding window of $$k$$ elements using Hash Table.

**Algorithm**

From the previous approaches, we know that even logarithmic performance in `search` is not enough.
In this case, we need a data structure supporting constant time `search`, `delete` and `insert` operations.
Hash Table is the answer. The algorithm and implementation are almost identical to [Approach #2](#approach-2-binary-search-tree-time-limit-exceeded).

* Loop through the array, for each element do
    * Search current element in the HashTable, return `true` if found
    * Put current element in the HashTable
    * If the size of the HashTable is larger than $$k$$, remove the oldest item.
* Return `false`



<iframe src="https://leetcode.com/playground/vZLsswaU/shared" frameBorder="0" name="vZLsswaU" width="100%" height="241"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n)$$.
We do $$n$$ operations of `search`, `delete` and `insert`, each with constant time complexity.

* Space complexity : $$O(\min(n,k))$$.
The extra space required depends on the number of items stored in the hash table, which is the size of the sliding window, $$\min(n,k)$$.

## See Also

* [Problem 217 Contains Duplicate](https://leetcode.com/articles/contains-duplicate/)
* [Problem 220 Contains Duplicate III](https://leetcode.com/articles/contains-duplicate-iii/)