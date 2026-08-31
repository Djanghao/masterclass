# Official Solution

**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solution/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solution/)

---

[TOC]

## Solution
---
### Overview ####

The problem is to build the most _competitive subsequence_ of size $$k$$ for a given array $$\text{nums}$$.
> A subsequence is different from a subarray. Unlike subarray, which contains only contiguous array
elements, in subsequence of an array, we can skip any number of elements given that the ordering of elements is maintained.
>
> For array = `[2,3,5,6,7,8]`,`[5,6,7]` is subarray as well as subsequence. Whereas, `[5,6,8]` is a subsequence but not a subarray.

For the given array, we have to generate all its subsequences with size $$k$$ and then find the one which satisfies the criteria of being most competitive.
Now, what are the criteria for being the most competitive subsequence?

The most competitive subsequence is the one in which the value of the element at every position/index is smallest among values of all the subsequences at that position.
Let's understand with an example.

Let `nums = [2, 3, 4]` and `k = 2`.

We could generate three subsequences of size $$2$$ from the given `nums` array,
`seq1`:`[2, 3]`,  `seq2`:`[2, 4]`, `seq3`:`[3, 4]`.
- Let's compare all the subsequences at index $$0$$. `seq1` and `seq2` has element $$2$$ at $$0^{th}$$ position. Whereas, `seq3` has an element $$3$$ which is greater than $$2$$. Considering index $$0$$, `seq1` and `seq2` can be the most competitive sequence as the value at $$0^{th}$$ index is smallest among other subsequences.

- Now, let's compare the remaining subsequences at index $$1$$. `seq1` has value $$3$$ at $$1^{st}$$ index which is smaller than value $$4$$ at $$1^{st}$$ index in `seq2`.

This gives us subsequence `seq1`:`[2, 3]` as the most competitive sequence among all.

Based on these insights, let's implement the solution.

---

### Approach 1: Using Double-Ended Queue

**Intuition**

We have to choose elements for our subsequence such that every element is the smallest possible value for that array position.

The naive solution would be to generate all the possible subsequences of an array and compare the element at every position to find the most competitive subsequence. This approach is too exhaustive. What could be a better way to implement the solution?

Instead of building all the subsequences and then finding the one matching the criteria, we could scan the array and build the required subsequence. We would choose the elements for every position/index for the resultant subsequence that would be the most competitive element for that position.

For $$1^{st}$$ position in the resultant subsequence, we would try to choose the smallest possible value in the array, the next smaller element for the $$2^{nd}$$ position, and so on. In other words, we could say that we would try to build the subsequence in _Increasing Order_. Any element that does not follow the order would be ignored or dropped. Let's understand all possible cases with an example.

Example, if `nums = [3, 2, 5, 4]` and `k = 3`.

We have to build the most competitive subsequence of size $$3$$. Let's scan the array from left to right and build the result.
 - index = `0` , element = `3`.

    We start by choosing element $$3$$ for the $$1^{st}$$ position in result, `result = [3, _ , _ ]`.

 - index = `1` , element = `2`.

   We find that the next element is $$2$$, which is smaller than last chosen element $$3$$, hence we can drop or remove $$3$$ and replace it by $$2$$ at $$1^{st}$$ position in result, `result = [2, _ , _ ]`.

 - index = `2` , element = `5`.

     Now, the current element $$5$$ is greater than than last chosen element $$2$$ in result, thus we could choose $$5$$ for $$2^{nd}$$ position in result, `result = [2, 5, _ ]`.

 - index = `3` , element = `4`.

     Again, the current element $$4$$ is smaller than the last chosen element $$5$$, but this time we cannot replace $$5$$ with $$4$$. Because we have to build a result of size $$3$$ and this is the last element we have. If we remove $$5$$ at $$2^{nd}$$ position in result and replace it with $$4$$, we won't be able to find another element for $$3^{rd}$$ position. Hence, we must keep $$5$$ at the $$2^{nd}$$ position and add $$4$$ at the $$3^{rd}$$ position in the result. `result = [2, 5, 4]`.

With the above example, we can state that to build the most competitive subsequence,
- We must try to choose the smallest possible element for every position.
- We have to choose at least $$k$$ elements.

Let's understand how we can implement the intuition in detail.

**Algorithm**

To implement the solution discussed above, we need 2 things,
- First, we need a data structure that could hold the chosen elements for the resultant subsequence. We should be able to add or remove any number of elements from the end of the subsequence, as well as read elements at the beginning of the subsequence. The data structure that comes in our mind is [Double-Ended Queue](https://en.wikipedia.org/wiki/Double-ended_queue).

- Second, we need a way to know the number of elements we could drop from the array `nums` to build the resultant subsequence.

    For example, if `nums = [3, 4, 1]` and `k = 3`, we know that we cannot drop any element from the array, and the result would be `[3, 4, 1]`. Hence, there are $$0$$ elements that can be dropped.

    If `nums = [3, 4, 1, 5]` and `k = 3`, we know that we can drop $$1$$ element from the array as we need only $$3$$ elements in the resultant subsequence.

   Let $$\text{additionalCount}$$ be the number of elements that we can drop from the array `nums` to build the `result`. Initially, $$\text{additionalCount}$$ would be initialized to `( length of nums array - k )`

   _Steps:_

- Build a double-ended queue, named `queue` that holds the chosen subsequence at any given point.
- Iterate over array `nums`, choose the most competitive elements and add it to the queue.

 - Compare the last element of the queue (last chosen element for the resultant subsequence) with the current element.
     * Until the last element of the queue is greater than the current element and $$\text{additionalCount}$$ is greater than $$0$$, we know that we can remove the last chosen element from the queue and replace it with the current element which is smaller and hence a better candidate.
Every time an element is removed from queue, decrement the $$\text{additionalCount}$$ by $$1$$.

    * Otherwise, simply add the current element at the end of the queue.

- In the end, we have the most suitable candidates in the queue. Get the first $$k$$ elements from the queue and build the resultant array.

The following figure illustrates the idea for `nums = [3, 6, 4, 2, 1]` and `k = 3`.

![img](../Documents/5614/competitive_subsequence.svg)


**Implementation**
<iframe src="https://leetcode.com/playground/hDd8fvdV/shared" frameBorder="0" width="100%" height="412" name="hDd8fvdV"></iframe>

**Complexity Analysis**

-  Time Complexity: $$\mathcal{O}(n)$$, where $$n$$ is the size of array `nums`. We iterate over the array `nums`. In the worst case, we would iterate over every element at most twice. First, to add it to the queue, and second to remove it from the queue. This gives us time complexity as $$\mathcal{O}(n)$$.

- Space Complexity: $$\mathcal{O}(n)$$, where $$n$$ is the size of array `nums`. In the worst case, all the elements of array `nums` may be added to the queue. Hence, the maximum size of the queue can grow up to $$n$$.