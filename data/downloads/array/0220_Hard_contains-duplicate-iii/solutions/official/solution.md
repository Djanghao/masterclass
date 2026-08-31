# Official Solution

**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solution/](https://leetcode.com/problems/contains-duplicate-iii/solution/)

---

[TOC]

## Summary
This article is for intermediate readers. It introduces the following ideas:
Binary Search Tree, HashMap, and Buckets.

## Solutions
---
### Approach #1 (Naive Linear Search) [Time Limit Exceeded]

**Intuition**

Compare each element with the previous $$k$$ elements and see if their difference is at most $$t$$.

**Algorithm**

This problem requires us to find $$i$$ and $$j$$ such that the following conditions are satisfied:

1. <a name="condition-1"></a>$$\bigl| i-j \bigr| \le k$$
2. <a name="condition-2"></a>$$\bigl| \mathrm{nums}[i] - \mathrm{nums}[j] \bigr| \le t$$

The naive approach is the same as [Approach #1 in Contains Duplicate II solution](https://leetcode.com/articles/contains-duplicate-ii/#approach-1-naive-linear-search-time-limit-exceeded), which keeps a virtual sliding window that holds the newest $$k$$ elements. In this way, [Condition 1](#condition-1) above is always satisfied. We then check if [Condition 2](#condition-2) is also satisfied by applying linear search.

<iframe src="https://leetcode.com/playground/QfuCkHiP/shared" frameBorder="0" width="100%" height="242" name="QfuCkHiP"></iframe>



**Complexity Analysis**

* Time complexity: $$O(n \min(k,n))$$.
It costs $$O(\min(k, n))$$ time for each linear search. Note that we do at most $$n$$ comparisons in one search even if $$k$$ can be larger than $$n$$.

* Space complexity: $$O(1)$$.
We only used constant auxiliary space.


---
### Approach #2 (Binary Search Tree) [Accepted]

**Intuition**

* If elements in the window are maintained in sorted order, we can apply binary search twice to check if [Condition 2](#condition-2) is satisfied.

* By utilizing self-balancing Binary Search Tree, one can keep the window ordered at all times with logarithmic time `insert` and `delete`.

**Algorithm**

The real bottleneck of [Approach #1](#approach-1-naive-linear-search-time-limit-exceeded) is due to all elements in the sliding window are being scanned to check if [Condition 2](#condition-2) is satisfied. Could we do better?

If elements in the window are in sorted order, we can apply Binary Search twice to search for the two boundaries $$x+t$$ and $$x-t$$ for each element $$x$$.

Unfortunately, the window is unsorted. A common mistake here is attempting to maintain a sorted array. Although searching in a sorted array costs only logarithmic time, keeping the order of the elements after `insert` and `delete` operation is not as efficient. Imagine you have a sorted array with $$k$$ elements and you are adding a new item $$x$$. Even if you can find the correct position in $$O(\log k)$$ time, you still need $$O(k)$$ time to insert $$x$$ into the sorted array. The reason is that you need to shift all elements after the insert position one step backward. The same reasoning applies to removal as well. After removing an item from position $$i$$, you need to shift all elements after $$i$$ one step forward. Thus, we gain nothing in speed compared to the [naive linear search approach](#approach-1-naive-linear-search-time-limit-exceeded) above.

To gain an actual speedup, we need a *dynamic* data structure that supports faster `insert`, `search` and `delete`. Self-balancing Binary Search Tree (BST) is the right data structure. The term *Self-balancing* means the tree automatically keeps its height small after arbitrary `insert` and `delete` operations. Why does self-balancing matter? That is because most operations on a BST take time directly proportional to the height of the tree. Take a look at the following non-balanced BST which is skewed to the left:

```
            6
           /
          5
         /
        4
       /
      3
     /
    2
   /
  1
```
*Figure 1. A non-balanced BST that is skewed to the left.*

Searching in the above BST degrades to *linear* time, which is like searching in a linked list. Now compare to the BST below which is balanced:

```
          4
        /   \
       2     6
      / \   /
     1   3  5
```

*Figure 2. A balanced BST.*

Assume that $$n$$ is the total number of nodes in the tree, a balanced binary tree maintains its height in the order of $$h = \log n$$. Thus it supports $$O(h) = O(\log n)$$ time for each of `insert`, `search` and `delete` operations.

Here is the entire algorithm in pseudocode:

* Initialize an empty BST `set`
* Loop through the array, for each element $$x$$
    * Find the *smallest* element $$s$$ in `set` that is *greater* than or equal to $$x$$, return true if $$s - x \leq t$$
    * Find the *greatest* element $$g$$ in `set` that is *smaller* than or equal to $$x$$, return true if $$x - g \leq t$$
    * Put $$x$$ in `set`
    * If the size of the set is larger than $$k$$, remove the oldest item.
* Return false

One may consider the smallest element $$s$$ that is greater or equal to $$x$$ as the *successor* of $$x$$ in the BST, as in: "What is the next greater value of $$x$$?". Similarly, we consider the greatest element $$g$$ that is smaller or equal to $$x$$ as the *predecessor* of $$x$$ in the BST, as in: "What is the previous smaller value of $$x$$?". These two values $$s$$ and $$g$$ are the two closest neighbors from $$x$$. Thus by checking the distance from them to $$x$$, we can conclude if [Condition 2](#condition-2) is satisfied.

<iframe src="https://leetcode.com/playground/kra4kpEq/shared" frameBorder="0" width="100%" height="446" name="kra4kpEq"></iframe>

**Complexity Analysis**

* Time complexity: $$O(n \log (\min(n,k)))$$.
We iterate through the array of size $$n$$. For each iteration, it costs $$O(\log \min(k, n))$$ time (`search`, `insert` or `delete`) in the BST, since the size of the BST is upper bounded by both $$k$$ and $$n$$.

* Space complexity: $$O(\min(n,k))$$.
Space is dominated by the size of the BST, which is upper bounded by both $$k$$ and $$n$$.

**Note**

* When the array's elements and $$t$$'s value are large, they can cause overflow in arithmetic operation. Consider using a larger size data type instead, such as *long*.

* C++'s `std::set`, `std::set::upper_bound` and `std::set::lower_bound` are equivalent to Java's `TreeSet`, `TreeSet::ceiling` and `TreeSet::floor`, respectively. Python does not provide a Self-balancing BST through its library.

---
### Approach #3 (Buckets) [Accepted]

**Intuition**

Inspired by `bucket sort`, we can achieve linear time complexity in our problem using *buckets* as window.

**Algorithm**

Bucket sort is a sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted individually, using a different sorting algorithm. Here is an illustration of buckets.

![Illustration of buckets](../Figures/220/220_Buckets.png "Illustration of buckets"){:width="539px"}


*Figure 3. Illustration of buckets.*


From the above example, we have 8 unsorted integers. We create 5 buckets covering the inclusive ranges of $$[0,9], [10,19], [20, 29], [30, 39], [40, 49]$$ individually. Each of the eight elements is in a particular bucket. For element with value $$x$$, its bucket label is $$x / w$$ and here we have $$w = 10$$. Sort each bucket using some other sorting algorithm and then collect all of them bucket by bucket.

Back to our problem, the critical issue we are trying to solve is:

> 1. For a given element $$x$$ is there an item in the window that is within the range of $$[x-t, x+t]$$?
> 2. Could we do this in constant time?

Let us consider an example where each element is a person's birthday. Your birthday, say some day in *March*, is the new element $$x$$. Suppose that each month has $$30$$ days and you want to know if anyone has a birthday within $$t = 30$$ days of yours. Immediately, we can rule out all other months except *February, March, April*.

The reason we know this is because each birthday belongs to a *bucket* we called *month*! And the range covered by the buckets are the same as distance $$t$$ which simplifies things a lot. Any two elements that are not in the same or adjacent buckets must have a distance greater than $$t$$.

We apply the above bucketing principle and design buckets covering the ranges of $$..., [0,t], [t+1, 2t+1], ...$$. We keep the window using this buckets. Then, each time, all we need to check is the bucket that $$x$$ belongs to and its two adjacent buckets. Thus, we have a constant time algorithm for searching almost duplicate in the window.

One thing worth mentioning is the difference from bucket sort – Each of our buckets contains at most one element at any time, because two elements in a bucket means "almost duplicate" and we can return early from the function. Therefore, a HashMap with an element associated with a bucket label is enough for our purpose.

<iframe src="https://leetcode.com/playground/3b5UKBvm/shared" frameBorder="0" width="100%" height="500" name="3b5UKBvm"></iframe>

**Complexity Analysis**

* Time complexity: $$O(n)$$.
For each of the $$n$$ elements, we do at most three searches, one insert, and one delete on the HashMap, which costs constant time on average. Thus, the entire algorithm costs $$O(n)$$ time.

* Space complexity: $$O(\min(n,k))$$.
Space is dominated by the HashMap, which is linear to the size of its elements. The size of the HashMap is upper bounded by both $$n$$ and $$k$$. Thus the space complexity is $$O(\min(n, k))$$.

## See Also

* [Problem 217 Contains Duplicate](https://leetcode.com/articles/contains-duplicate/)
* [Problem 219 Contains Duplicate II](https://leetcode.com/articles/contains-duplicate-ii/)