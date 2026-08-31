# Official Solution

**Link:** [https://leetcode.com/problems/car-pooling/solution/](https://leetcode.com/problems/car-pooling/solution/)

---

[TOC]

## Solution

---

### Overview

It is one of the classical problems related to intervals, and we have some similar problems such as [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) at LeetCode. Below, two approaches are introduced: the simple *Time Stamp* approach, and the *Bucket Sort* approach.

---

### Approach 1: Time Stamp

**Intuition**

A simple idea is to go through from the start to end, and check if the actual capacity exceeds `capacity`.

To know the actual capacity, we just need the number of passengers changed at each timestamp.

We can save the number of passengers changed at each time, sort it by timestamp, and finally iterate it to check the actual capacity.

**Algorithm**

We will initialize a list to store the number of passengers changed and the corresponding timestamp and then sort it.

Note that in Java, we do not have a nice API to do this. However, we can use a `TreeMap`, which can help us to sort during insertion. You can use a `PriorityQueue` instead.

Finally, we just need to iterate from the start timestamp to the end timestamp and check if the actual capacity meets the condition.

<iframe src="https://leetcode.com/playground/K8fmqVtL/shared" frameBorder="0" width="100%" height="395" name="K8fmqVtL"></iframe>

**Complexity Analysis**

Assume $$N$$ is the length of `trips`.

* Time complexity: $$\mathcal{O}(N\log(N))$$ since we need to iterate over `trips` and sort our `timestamp`. Iterating costs $$\mathcal{O}(N)$$, and sorting costs $$\mathcal{O}(N\log(N))$$, and adding together we have $$\mathcal{O}(N) + \mathcal{O}(N\log(N)) = \mathcal{O}(N\log(N))$$.
 
* Space complexity: $$\mathcal{O}(N)$$ since in the worst case we need $$\mathcal{O}(N)$$ to store `timestamp`.

---

### Approach 2: Bucket Sort

**Intuition**

Note that in the problem there is a interesting constraint:

> 4. `0 <= trips[i][1] < trips[i][2] <= 1000`

What pops into the mind is [Bucket Sort](https://en.wikipedia.org/wiki/Bucket_sort), which is a sorting algorithm in $$\mathcal{O}(N)$$ time but requires some prior knowledge for the range of the data.

We can use it instead of the normal sorting in this method.

What we do is initial 1001 buckets, and put the number of passengers changed in corresponding buckets, and collect the buckets one by one.

**Algorithm**

We will initial 1001 buckets, iterate `trip`, and save the number of passengers changed at `i` mile in the `i`-th bucket.

<iframe src="https://leetcode.com/playground/NtoWq4z4/shared" frameBorder="0" width="100%" height="344" name="NtoWq4z4"></iframe>

**Complexity Analysis**

Assume $$N$$ is the length of `trip`.

* Time complexity: $$\mathcal{O}(max(N, 1001))$$ since we need to iterate over `trips` and then iterate over our 1001 buckets.
 
* Space complexity : $$\mathcal{O}(1001)=\mathcal{O}(1)$$ since we have 1001 buckets.