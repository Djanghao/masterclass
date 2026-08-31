# Official Solution

**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solution/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solution/)

---

[TOC]

## Solution

---

### Overview

The problem is straightforward. For each `num` in `nums`, we need to obtain the number of smaller elements after `num`.

A straightforward approach is to use brute force with two for-loops. The first loop iterates over all `num` in `nums`, and the second loop iterates over all elements after `num`. However, this approach costs $$O(N^2)$$ and yields _Time Limit Exceed_, given that $$N$$ is the length of `nums`.

Luckily, there are two helpful data structures: [segment tree](https://en.wikipedia.org/wiki/Segment_tree) and [binary indexed tree](https://en.wikipedia.org/wiki/Fenwick_tree), which are able to do the range query in logarithmic time.

Also, a solution based on [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort) is available.

Below, we will discuss each of the three approaches: _Segment Tree_, _Binary Indexed Tree_, and _Merge Sort_.

> After you finish, you can practice by solving some similar questions:
>
> - [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/solution/)
> - [Create Sorted Array through Instructions](https://leetcode.com/problems/create-sorted-array-through-instructions/)

</br>

---

### Approach 1: Segment Tree

**Intuition**

> **Prerequisite: segment tree**
>
> If you are not familiar with segment trees, you should check out our [Recursive Approach to segment trees](https://leetcode.com/articles/a-recursive-approach-to-segment-trees-range-sum-queries-lazy-propagation/) tutorial before continuing.
>
> Also, here are some relevant applications for segment trees that you can practice on:
>
> - [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
> - [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
>
> For a full list, check out the [segment tree Tag](https://leetcode.com/tag/segment-tree/).

For a particular element in `nums`, located at index `i`, we want to count how many of the numbers on the right side of index `i` are smaller than `nums[i]`. Notice that the value of the smaller numbers must be in the range $$(-\infty, \text{nums[i]}-1]$$.

Hence, if we can find the count of **each number** in the range $$(-\infty, \text{nums[i]}-1]$$ on the right side of index `i`, then the answer will be the sum of those counts.

Therefore, for each index `i`, we need a query to find the sum of those counts. Recall that the segment tree and the binary indexed tree are two data structures that are generally helpful when solving range query problems.

Since we need counts of values, we can use an approach similar to [bucket sort](https://en.wikipedia.org/wiki/Bucket_sort), where we have buckets of values and `buckets[value]` stores the count of `value`. For each value, we increment `buckets[value]` by 1. With this approach, the number of elements smaller than `nums[i]` is the range sum of $$(-\infty, \text{num}-1]$$ in buckets.

With the help of a segment tree or binary indexed tree, we can perform the range sum query in logarithmic time.

![Figure 1](../Documents/315/315_bucket1.drawio.svg)

![Figure 2](../Documents/315/315_bucket2.drawio.svg)

With the given constraint `-10^4 <= nums[i] <= 10^4`, we can initialize buckets from `-10^4` to `10^4`.

Wait, there is a problem: Usually, we store buckets in an array, so the indices of buckets are non-negative. However, here we need to store some **negative** values. How can we resolve this problem?

There are two solutions:

1. Use a map rather than an array.
2. Shift all numbers to non-negative.

Both solutions work, and here we have chosen the second one since it is easier to implement. Interested readers are welcome to try the first one on their own.

To shift all numbers to non-negative, we simply add a constant. Here we chose the constant `offset = 10^4` and increase each number by `offset`:

```python
nums[i] = nums[i] + offset
```

The smallest number `-10^4` becomes `0` under this shift.

![Figure 3](../Documents/315/315_shift.drawio.svg)

Note that while querying a particular index, we only need to consider elements that are on the right side of the index. Therefore we need to make sure that when we query an index, say `i`, only elements from index `i+1` to the end of the array are present in the buckets.

To achieve this, we need to traverse `nums` from **right to left**, while performing range sum queries and updating the counts.

Similarly, with the help of a segment tree or binary indexed tree, we can perform the updates in logarithmic time.

![Figure 4](../Documents/315/315_right_to_left.drawio.svg)

(For convenience, the offset is not included in the above picture.)

**Algorithm**

- Implement the segment tree. Since the tree is initialized with all zeros, only `update` and `query` need to be implemented. Set `offset = 10^4`.

- Iterate over each `num` in `nums` in reverse. For each `num`:

  - Shift `num` to `num + offset`.
  - Query the number of elements in the segment tree smaller than `num`.
  - Update the count of `num` in the segment tree.

- Return the result.

**Implementation**

<iframe src="https://leetcode.com/playground/XLuKKjYp/shared" frameBorder="0" width="100%" height="500" name="XLuKKjYp"></iframe>

**Complexity Analysis**

Let $$N$$ be the length of `nums` and $$M$$ be the difference between the maximum and minimum values in `nums`.

Note that for convenience, we fix $$M=2*10^4$$ in the above implementations.

- Time Complexity: $$O(N\log(M))$$.  
  We need to iterate over `nums`. For each element, we spend $$O(\log(M))$$ to find the number of smaller elements after it, and spend $$O(\log(M))$$ time to update the counts. In total, we need $$O(N \cdot \log(M)) = O(N\log(M))$$ time.

- Space Complexity: $$O(M)$$, since we need, at most, an array of size $$2M+2$$ to store the segment tree.  
  We need at most $$M+1$$ buckets, where the extra $$1$$ is for the value $$0$$. For the segment tree, we need twice the number of buckets, which is $$(M+1)\times 2 = 2M+2$$.


</br>

---

### Approach 2: Binary Indexed Tree (Fenwick Tree)

**Intuition**

> **Prerequisite: binary indexed tree**
>
> If you are not familiar with binary indexed tree (BIT), you should check relevant tutorials, such as [Range Sum Query 2D - Mutable](https://leetcode.com/problems/range-sum-query-2d-mutable/solution/) before continuing.
>
> Also, here are some relevant applications for binary indexed trees that you can practice on:
>
> - [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
> - [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
>
> (Yes, many problems which can be solved by segment tree can also be solved by binary indexed tree.)
>
> For a full list, you can check the [binary indexed tree Tag](https://leetcode.com/tag/binary-indexed-tree/).

Binary indexed tree is similar to segment tree. It allows us to perform a prefix query, such as prefix sum, in $$\log$$ time. Can we transform this problem into a **prefix sum** problem?

Yes, using the same tricks that we used in approach 1, buckets and shift, we can transform the number of smaller elements into a prefix sum for the range $$[0, \text{num}+\text{offset}-1]$$, where $$\text{offset}=10^4$$.

![Figure 5](../Documents/315/315_bit.drawio.svg)

Similarly, when querying, we need to traverse `nums` from right to left in order to ensure that only the elements to the right are in the buckets.

**Algorithm**

- Implement the binary indexed tree. Since the tree is initialized with all zeros, only `update` and `query` need to be implemented. Set `offset = 10^4`.

- Iterate over each `num` in `nums` in reverse. For each `num`:

  - Shift `num` to `num + offset`.
  - Query the number of elements in the BIT that are smaller than `num`.
  - Update the count of `num` in the BIT.

- Return the result.

**Implementation**

<iframe src="https://leetcode.com/playground/PUH9tdLe/shared" frameBorder="0" width="100%" height="500" name="PUH9tdLe"></iframe>

**Complexity Analysis**

Let $$N$$ be the length of `nums` and $$M$$ be the difference between the maximum and minimum values in `nums`.

Note that for convenience, we fix $$M=2*10^4$$ in the above implementations.

- Time Complexity: $$O(N\log(M))$$.  
  We need to iterate over `nums`. For each element, we spend $$O(\log(M))$$ to find the number of smaller elements after it, and spend $$O(\log(M))$$ time to update the counts. In total, we need $$O(N \cdot \log(M)) = O(N\log(M))$$ time.

- Space Complexity: $$O(M)$$, since we need, at most, an array of size $$M+2$$ to store the BIT.  
We need at most $$M+1$$ buckets, where the extra $$1$$ is for the value $$0$$. The BIT requires an extra dummy node, so the size is $$(M+1)+1 = M+2$$.

</br>

---

### Approach 3: Merge Sort

**Intuition**

> **Prerequisite: Merge Sort**
>
> If you are not familiar with Merge Sort, you should check relevant tutorials before continuing.
>
> Also, here is a basic application of Merge Sort that you can practice on:
>
> - [Sort an Array](https://leetcode.com/problems/sort-an-array/)

To apply merge sort, one key observation is that:

> The smaller elements on the right of a number will **jump from its right to its left** during the sorting process.

![Figure 6](../Documents/315/315_jumping.drawio.svg)

If we can record the numbers of those elements during sorting, then the problem is solved.

Can we modify the merge sort a little to meet our needs?

Consider when merging two sorted list

![Figure 7](../Documents/315/315_merging.drawio.svg)

Yes! When we select an element `i` on the left array, we know that elements selected previously from the right array **jump** from `i`'s right to `i`'s left.

By adding the counts of those elements in every merge step, we get the total number of elements that jumped from `i`'s right to `i`'s left.

**Algorithm**

- Implement a merge sort function.

  - For each element `i`, the function records the number of elements jumping from `i`'s right to `i`'s left during the merge sort.

- Merge sort `nums`, store the number of elements jumping from right to left in `result`.

  - Alternatively, one can sort the _indices_ with corresponding values in `nums`. That is to say, we are going to sort list `[0, 1, ..., n-1]` according to the comparator `nums[i]`. This helps to track the indices and update `result`. You can find additional details in the implementations below.

- Return `result`.

**Implementation**

<iframe src="https://leetcode.com/playground/nnsvXAd9/shared" frameBorder="0" width="100%" height="500" name="nnsvXAd9"></iframe>

**Complexity Analysis**

Let $$N$$ be the length of `nums`.

- Time Complexity: $$O(N\log(N))$$. We need to perform a merge sort which takes $$O(N\log(N))$$ time. All other operations take at most $$O(N)$$ time.

- Space Complexity: $$O(N)$$, since we need a constant number of arrays of size $$O(N)$$.


<br/>