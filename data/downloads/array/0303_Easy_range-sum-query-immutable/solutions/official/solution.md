# Official Solution

**Link:** [https://leetcode.com/problems/range-sum-query-immutable/solution/](https://leetcode.com/problems/range-sum-query-immutable/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/712940117" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Brute Force [Time Limit Exceeded]

Each time *sumRange* is called, we use a for loop to sum each individual element from index $$i$$ to $$j$$.

**Implementation**

<iframe src="https://leetcode.com/playground/EeNY9kFd/shared" frameBorder="0" name="EeNY9kFd" width="100%" height="275"></iframe>

**Complexity Analysis**

* Time complexity: $$O(n)$$ time per query.
Each *sumRange* query takes $$O(n)$$ time.

* Space complexity: $$O(1)$$. Note that `data` is a *reference* to `nums` and is not a copy of it.

---
### Approach 2: Caching [Accepted]

Imagine that *sumRange* is called one thousand times with the exact same arguments. How could we speed that up?

We could trade in extra space for speed. By pre-computing all range sum possibilities and store its results in a hash table, we can speed up the query to constant time.

**Implementation**

<iframe src="https://leetcode.com/playground/MqSp9iSD/shared" frameBorder="0" name="MqSp9iSD" width="100%" height="309"></iframe>

**Complexity Analysis**

* Time complexity: $$O(1)$$ time per query, $$O(n^2)$$ time pre-computation.
The pre-computation done in the constructor takes $$O(n^2)$$ time. Each *sumRange* query's time complexity is $$O(1)$$ as the hash table's look up operation is constant time.

* Space complexity: $$O(n^2)$$.
The extra space required is $$O(n^2)$$ as there are $$n$$ candidates for both $$i$$ and $$j$$.

---
### Approach 3: PrefixSum, Caching [Accepted]

The above approach takes a lot of space, could we optimize it?

Imagine that we pre-compute the cummulative sum from index $$0$$ to $$k$$. Could we use this information to derive $$Sum(i, j)$$?

Let us define $$sum[k]$$ as the cumulative sum for $$nums[0 \cdots k-1]$$ (inclusive):

$$
sum[k] = \left\{ \begin{array}{rl} \sum_{i=0}^{k-1}nums[i] & , k > 0 \\ 0 &, k = 0 \end{array} \right.
$$

Now, we can calculate *sumRange* as following:

$$
sumRange(i, j) = sum[j + 1] - sum[i]
$$

**Implementation**

<iframe src="https://leetcode.com/playground/FioSdM4G/shared" frameBorder="0" name="FioSdM4G" width="100%" height="258"></iframe>

Notice in the code above we inserted a dummy 0 as the first element in the *sum* array. This trick saves us from an extra conditional check in *sumRange* function.

**Complexity Analysis**

* Time complexity: $$O(1)$$ time per query, $$O(n)$$ time pre-computation.
Since the cumulative sum is cached, each *sumRange* query can be calculated in $$O(1)$$ time.

* Space complexity: $$O(n)$$.