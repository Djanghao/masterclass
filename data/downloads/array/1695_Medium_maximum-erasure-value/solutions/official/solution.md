# Official Solution

**Link:** [https://leetcode.com/problems/maximum-erasure-value/solution/](https://leetcode.com/problems/maximum-erasure-value/solution/)

---

[TOC]

## Solution

---

#### Overview

This is an interesting problem. We have to find all the subarrays having unique elements. Among all the resultant subarrays, we must erase exactly one subarray having the maximum sum.

> It must be noted that subarray is a contiguous subsequence. In array `[1, 2, 3, 4]`, `[1, 2, 3]` is a subarray whereas `[1, 2, 4]` is not.

In practice, there is no need to actually erase the array. We could just move the pointers to find the subarray satisfying our condition and return its sum.

Let's look at different approaches to solve the problem. This article is comprehensive with various ways of implementing the problem using varied data structures.

---

#### Approach 1: Brute Force

**Intuition**

The naive solution to solve the problem would be to look for all possible subarrays that have unique elements and find their sum. We can maintain the maximum sum found so far, if we find another subarray having unique elements and a sum greater than the maximum sum, we can update the maximum sum.

**Algorithm**

- To look for all possible subarrays we must iterate over array `nums` starting at every position from $$0^{th}$$ index to $$n^{th}$$ index. Let's use the variable `start` to fix the starting position of every subarray.

  For example, for array = `[4, 2, 4, 5, 6]`, subarrays beginning at `start` index $$0$$ are `[4]`, `[4, 2]`, `[4, 2, 4]` and so on.

- For every `start` index, the `end` index would iterate from `start` index to $$n^{th}$$ index and generate all subarrays till the end of the array. Thus, we must use a nested _for_ loop. The outer loop would fix the starting position of the subarray, and the inner loop would increment the `end` position of the subarray.

- Now, we want only those subarrays having unique elements. What should be the best way to implement that? The first thing that comes to our mind is - _Why don't we maintain a Set that tracks all the unique elements in the current subarray?_

  And that's apparently the right choice. For every subarray, we could maintain a `set` and add every element to the `set` that we traverse for that subarray. If we come across an element that is already present in the `set`, the subarray no longer satisfies the condition and we must terminate. In other words, we would only increment the `end` index, until there are _unique_ elements in the subarray.

- Instead of finding the sum of the subarray after it is generated, we could keep incrementing the sum as the new element is added to the subarray. Let `currentSum` be the sum of subarray generated so far. Every time we find that the next element pointed by the `end` index is unique, we add it's value to the `currentSum`.

- We maintain a variable `result` that tracks the maximum sum seen so far and the sum is updated every time we find another subarray with a greater sum. In the end, we return the value of `result`.

**Implementation**

<iframe src="https://leetcode.com/playground/fiTYX2eG/shared" frameBorder="0" width="100%" height="395" name="fiTYX2eG"></iframe>

**Complexity Analysis**

Let $$n$$ be the length of array `nums`.

- Time Complexity: $$\mathcal{O}(n^{2})$$, as we use a nested for loop to generate all possible subarray. In the worst case, when all the array elements are unique, we would end up iterating $$n^{2}$$ times.

  _This approach is exhaustive and results in Time Limit Exceeded (TLE)_

- Space Complexity: $$\mathcal{O}(m)$$, where $$m$$ is the number of unique elements.

---

#### Approach 2: Two Pointer Approach Using Set

**Intuition**

We could optimize _Approach 1_. Instead of blindly looking for all the subarrays and calculating their sum, we could make use of previous calculations.

For example, for nums = `[4, 2, 3, 5, 4, 1]`, we found a subarray having unique elements `[4, 2, 3, 5]` with sum `14` starting at index `0` and ending at `3`.

Now, the `end` pointer is incremented by $$1$$ and we find that the element at index `4` is $$4$$ which is already present in our current subarray. The subarray is now `[4, 2, 3, 5, 4]`. Here, instead of breaking the loop and re-initiating our search again from `start` index 1, we could simply reposition the `start` index such that there are unique elements in the array. How can we do that?

The simple way is to increment the `start` pointer until we find element `4` and fix the `start` pointer at the index after that. As `start` is incremented, we are removing each element from our current subarray, hence we must also update the `currentSum` and `set`.

The following figure illustrates the idea.

![img](../Documents/5630/twoPointerApproach.svg)

**Algorithm**

- We would maintain $$2$$ pointers, `start` would point to the beginning and `end` would point to the end of the current subarray. Both pointers are initialized to $$0$$.

- The `end` pointer would increment and expand the current subarray until all the array elements are unique. Now, we must use a `set` as in _Approach 1_ to check after every increment if the newly added element is unique or not.

- We must also keep track of the sum of elements in the current subarray. Let's use the variable `currentSum` for that.

- Now, we have to simply iterate over the array `nums`.

  - If the newly added element pointed by index `end` is not present in `set`, then it is unique, we must add that element in `set` and also add it's value to the `currentSum`.

  - Otherwise, we must remove elements from the subarray until the duplicate of the newly added element is removed from the subarray. One way to achieve that is to increment pointer `start` until the element pointed by pointer `end` is removed from the map.

- After every increment of the `end` pointer, if the `currentSum` is greater than the previous one, update the `result`.The process would continue until the `end` pointer has reached the end of array `nums`.

**Implementation**

<iframe src="https://leetcode.com/playground/9BwtYEeW/shared" frameBorder="0" width="100%" height="412" name="9BwtYEeW"></iframe>

**Complexity Analysis**

Let $$n$$ be the length of array `nums`.

- Time Complexity: $$\mathcal{O}(n)$$ We would iterate over each array element at most twice. First, to add it to the current subarray using the `end` pointer. Second, to remove it from the subarray using the `start` pointer. Also, adding/remove elements from the set would take constant time. This gives us time complexity as $$\mathcal{O}(2n)$$ which is roughly $$\mathcal{O}(n)$$.

- Space Complexity: $$\mathcal{O}(m)$$, where $$m$$ is the number of unique elements.

---

#### Approach 3: Two Pointer Approach Using Boolean Array

**Intuition**

In the previous approach, we were using a `set` data structure to keep track of all the elements in the current subarray. There is little overhead to add and then remove elements from the set. Can we use some data structure where we could just mark or unmark the occurrence of an element instead of actually adding and removing the elements?

We can use an array of type boolean instead of a set. We know that the maximum value of an array element can be $$10^{4}$$. So we can use a boolean array of size $$10^{4}$$ and each index would represent the corresponding value in array `nums`.

The following figure illustrates how we can store array `[4, 6, 8, 1]` in array `nums`.

![img](../Documents/5630/booleanArrayExample.svg)

**Algorithm**

- Build a boolean array `isPresent` to track the elements present in current subarray. If an element $$i$$ is added to the current subarray, mark `isPresent[i] = true`. Similarly, if an element $$i$$, is removed from current subarray, mark `isPresent[i] = false`.

- Initialize the `start` and `end` pointer at $$0^{th}$$ index and set `currentSum` to $$0$$.

- Now, increment the `end` pointer by $$1$$ and check if the newly added element is already present in the current subarray or not.

  - If the newly added element pointed by index `end` is marked `true` in array `isPresent`, it is unique, add that element in `set` and also add its value to the `currentSum`.

  - Otherwise, we must remove elements from the subarray until the duplicate of the newly added element is removed from the subarray. One way to achieve that is to increment pointer `start` until the element pointed by pointer `end` is removed from the map.

- After every increment of the `end` pointer, if the `currentSum` is greater than the previous one, update the `result`.The process would continue until the `end` pointer has reached the end of array `nums`.

**Implementation**

<iframe src="https://leetcode.com/playground/QNA5jTbd/shared" frameBorder="0" width="100%" height="429" name="QNA5jTbd"></iframe>

**Complexity Analysis**

Let $$n$$ be the length of array `nums` and $$k$$ be the range of non-negative values.

- Time Complexity: We spend $\mathcal{O}(k)$ time to initialize the `isPresent` array. After that, the sliding window moves each element at most twice (once when added, once when removed), which takes $O(n)$ So overall time complexity is $O(n + k)$

- Space Complexity: $$\mathcal{O}(k)$$, as we use a boolean array, `isPresent`, of size k.

---

#### Approach 4: Two Pointer Approach Using Count Map

**Intuition**

This is just another way of implementing the solution. We can also use a count array of type integer to store the frequency of elements in the current subarray. An element is unique if it's frequency is $$1$$.

We can use a fixed size count array of size $$10^{4}$$ to store the occurrence of an element in the current subarray. If a new element is added to the current subarray, it's count would be incremented. Similarly, if an element is removed from the current subarray, it's count would be decremented.

As a new element is added to the subarray, we want to check if it's unique or not. We would know this information by checking if it's frequency in count array is $$1$$. If the frequency is greater than $$1$$, we would remove element from the beginning of current subarray until the frequency of the newly added element is exactly $$1$$.

**Algorithm**

- Build an integer array `countMap` to store the frequency of elements in current subarray. Initialize the `start` and `end` pointer at $$0^{th}$$ index and set `currentSum` to $$0$$.

- Increment the `end` pointer by $$1$$ and update the element's frequency in `countMap`. Let the newly added element be `currentElement`, increment `countMap[currentElement]` by $$1$$.

- If the value of `countMap[currentElement]` is greater than $$1$$, it is not unique in the current subarray. Remove elements from current subarray by incrementing `start` pointer until the frequency of `currentElement` is $$1$$.

- After every increment of the `end` pointer, if the `currentSum` is greater than the previous one, update the `result`.The process would continue until the `end` pointer has reached the end of array `nums`.

**Implementation**

<iframe src="https://leetcode.com/playground/iaxFpaqY/shared" frameBorder="0" width="100%" height="429" name="iaxFpaqY"></iframe>

**Complexity Analysis**

Let $$n$$ be the length of array `nums` and $$k$$ be the range of non-negative values.

- Time Complexity: We first initialize a frequency vector of size $k$, which takes $O(k)$. After that, the two-pointer traversal ensures each element is added and removed at most once, which is $O(n)$. Combining both gives us a total of $O(n + k)$

- Space Complexity: $$\mathcal{O}(k)$$, as we use $$k$$ space for `countMap`.

---

#### Approach 5: Using Prefix Sum with HashMap

**Intuition**

In all the previous approaches, when we find that the newly added element is not unique in the current subarray, we remove the elements from the beginning of the subarray one by one by incrementing the `start` pointer by $$1$$ and shrink the subarray until the it contains all the unique elements.

However, we already know the element that we want to remove from the current subarray.

For example, if our current subarray is `[2, 4, 3, 5]` and has all unique elements, when a new element `4` is added to the subarray, we find that the resultant subarray `[2, 4, 3, 5, 4]` doesn't contain all unique elements. At this point, we are sure that the property of having all unique elements for the current subarray got violated because of the element `4` that was just added.

Our goal is to somehow remove the old occurrence of `4` from the subarray to restore its property of having all unique elements. How can we do that?

One way could be that, if we already know that the last index of element `4` in subarray was $$1$$, we could remove that element, by moving the `start` pointer at index $$2$$. After repositioning the `start` index, the current subarray would be `[3, 5, 4]` and contains all unique elements.

> Wait a minute !! Are we missing something?
>
> _How would we now know the sum of all elements in subarray `[3, 5, 4]`? If we again iterate over each element of the subarray to get the current sum, our optimization would be a waste !!_

There is another idea for that. We can calculate the prefix sum of the array. The prefix sum stores sum of all elements till the current index starting from the $$0^{th}$$ index. Example, the value at position `prefixSum[i]` would be the sum of all the values in array` nums` from $$0^{th}$$ index to $$i^{th}$$ index.

So, in the above example, to get the sum of subarray `[3, 5, 4]` starting at index `2` and ending at index `4` we could simply calculate `prefixSum[4] - prefixSum[1]`.

The following figure illustrates the idea for `nums = [2, 4, 3, 5, 4, 1]`.

![img](../Documents/5630/lastIndexApproach.svg)

**Algorithm**

- To implement the above idea, we need some data structure that could give us the last index of any element in constant time. We can use a map where the element would be the key and its value would be index when it last appeared in the array `nums`. Let the map be `lastIndexMap`.

- Initialize the `start` and `end` pointer at $$0^{th}$$ index.

- Now, we must build the `prefixSum` which would give the sum of any subarray in the array `nums`. Instead of building it beforehand, we can calculate the prefix sum for every index as we iterate elements at each index.

- Initially, there is no element in the current subarray. We start adding an element to the subarray by incrementing the `end` pointer by $$1$$ and iterating over `nums`. `currentElement` is the element pointed by pointer `end`.

- Calculate the prefix sum till `end` index and update in the array `prefixSum`.

- We have to check if the current subarray starting at index `start` and ending at index `end` has all unique elements. We already have a map that maintains the last indexes of all elements in the subarray. Can we reuse the same map?

  We could use this map to know the last index of `currentElement`. If the last occurrence of `currentElement` is between the `start` and `end` pointer, its last index would be greater than the `start` index. We can use this trick to determine if the `currentElement` is unique in the current subarray or not.

  If the last index of current element is greater than `start`, then update `start` to the position after last index of `currentElement`. This could be written as ,

```
start = max(start, lastIndexMap.get(currentElement) + 1)
```

- At every iteration, update the `result` to track the maximum sum seen so far and return at the end.

**Implementation**

<iframe src="https://leetcode.com/playground/JDM3cJnM/shared" frameBorder="0" width="100%" height="395" name="JDM3cJnM"></iframe>

**Complexity Analysis**

Let $$n$$ be the length of array `nums`.

- Time Complexity: $$\mathcal{O}(n)$$ We iterate over every element only once.

- Space Complexity: $$\mathcal{O}(n)$$, as `lastIndexMap` would grow to a maximum size of `n`. Also, we use an integer array `prefixSum` of size `n`.

---

#### Approach 6: Using Prefix Sum with Count Array

**Intuition**

We could further improve _Approach 5_ by using a fixed size integer array to store the last indexes. With this, we can implement the problem in constant space.

From the problem description, we know that the maximum value of any element in the array `nums` would be $$10^{4}$$, hence we could build the array of that size and store the last index of any element in the array.

**Algorithm**

- Build an integer array `lastIndexes` of size $$10^{4}$$ to store the last index of any element in the array. If `currentElement` is the last added element to the subarray having index `end`, we would update `lastIndexes[currentElement]` to `i`.

  Initially, all the values in the `lastIndexes` array would be initialized to `-1`.

- Iterate over each element as in `Approach 6` and determine the maximum sum after every iteration. Update `result` with the maximum sum and return at the end.

**Implementation**

<iframe src="https://leetcode.com/playground/PVPhzgkv/shared" frameBorder="0" width="100%" height="429" name="PVPhzgkv"></iframe>

**Complexity Analysis**

Let $$n$$ be the length of array `nums` and $$k$$ be the range of non-negative values.

- Time Complexity: $O(n + k)$. We need $O(k)$ time to initialize `lastIndexes` of size $k$ and then iterate through all $n$ elements once.

- Space Complexity: $O(n + k)$, since we store `prefixSum` of size $n$ and `lastIndexes` of size $k$.

---