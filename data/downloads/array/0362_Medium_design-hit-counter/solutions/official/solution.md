# Official Solution

**Link:** [https://leetcode.com/problems/design-hit-counter/solution/](https://leetcode.com/problems/design-hit-counter/solution/)

---

[TOC]

### Approach #1: Using Queue

**Intuition**

A key observation here is that all the timestamps that we will encounter are going to be in increasing order. Also as the timestamps' value increases we have to ignore the timestamps that occurred previously (having a difference of 300 or more with the latest timestamp). This is the case of considering the elements in the FIFO manner (First in first out) which is best solved by using the "queue" data structure.

**Algorithm**

We will add each timestamp to the queue in the `hit` method and will remove all the timestamps with difference greater than or equal to 300 from the queue inside `getHits`. The answer returned from the `getHits` method is then simply the size of the queue.

Below is the implementation of this approach.

<iframe src="https://leetcode.com/playground/LXEmiZc7/shared" frameBorder="0" width="100%" height="500" name="LXEmiZc7"></iframe>

**Complexity Analysis**

* Time Complexity
    
    * `hit` - Since inserting a value in the queue takes place in $$O(1)$$ time, hence `hit` method works in $$O(1)$$.

    * `getHits` - Assuming a total of $$n$$ values present in the queue at a time and the total number of timestamps encountered throughout is $$N$$. In the worst case scenario, we might end up removing all the entries from the queue in `getHits` method if the difference in timestamp is greater than or equal to 300. Hence in the worst case, a "single" call to the `getHits` method can take $$O(n)$$ time. However, we must notice that each timestamp is processed only twice (first while adding the timestamp in the queue in `hit` method and second while removing the timestamp from the queue in the `getHits` method). Hence if the total number of timestamps encountered throughout is $$N$$, the overall time taken by `getHits` method is $$O(N)$$. This results in an amortized time complexity of $$O(1)$$ for a single call to `getHits` method.

* Space Complexity: Considering the total timestamps encountered throughout to be $$N$$, the queue can have upto $$N$$ elements, hence overall space complexity of this approach is $$O(N)$$. 

### Approach #2: Using Deque with Pairs

Consider the follow up, where we have multiple hits arriving at the "same" timestamps. We can optimize Approach 1 even further. In this approach, we'll not only keep the timestamps but will also keep the count of the timestamps as well. For example, if we call `hit` method 5 times for `timestamp = 1`, the queue in case of Approach 1 will look like `[1, 1, 1, 1, 1]`. This will lead to 5 removals in the `getHits` method when we remove the value `1` from the queue. To avoid this repetitive removals of the same value, in Approach 2, we'll store the value as `(1, 5)` where the first value 1 is the timestamp and the second value `5` is the count. For this, we'll use the "deque" data structure which allows us to insert and delete values from both the ends of the queue.

**Algorithm**

The updated algorithm in Approach 2 is as follows.

* If we encounter the hit for the same timestamp, instead of appending a new entry in the deque, we simply increment the count of the latest timestamp.

* In order to keep the track of total number of elements (for the last 300 seconds), we also use a variable `total` which we initialize to `0` and keep updating as we add or remove the elements from the queue. We increment the value of `total` by 1 when `hit` method is called and we decrement by the value of `total` by the count of the timestamp that we remove from the queue.

Below is the implementation of this approach.

<iframe src="https://leetcode.com/playground/ds8M9eUs/shared" frameBorder="0" width="100%" height="500" name="ds8M9eUs"></iframe>

**Complexity Analysis**

In the worst case, when there are not many repetitions, the time complexity and space complexity of Approach 2 is the same as Approach 1. However in case we have repetitions (say k repetitions of a particular i<sup>th</sup> timestamp), the time complexity and space complexities are as follows.

* Time Complexity:

    * `hit` - $$O(1)$$.

    * `getHits` - If there are a total of $$n$$ pairs present in the deque, worst case time complexity can be $$O(n)$$. However, by clubbing all the timestamps with same value together, for the i<sup>th</sup> timestamp with k repetitions, the time complexity is $$O(1)$$ as here, instead of removing all those k repetitions, we only remove a single entry from the deque.

* Space complexity: If there are a total of $$N$$ elements that we encountered throughout, the space complexity is $$O(N)$$ (similar to Approach 1). However, in the case of repetitions, the space required for storing those k values $$O(1)$$.