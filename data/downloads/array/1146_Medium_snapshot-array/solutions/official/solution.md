# Official Solution

**Link:** [https://leetcode.com/problems/snapshot-array/solution/](https://leetcode.com/problems/snapshot-array/solution/)

---

[TOC]

## Solution

--- 

### Overview

The most straightforward approach to this problem is to keep track of every snapshot taken by saving the values of all the elements in the array at that moment. We can then retrieve the values at any given snapshot by indexing into the snapshot list and fetching the element's value. 

As shown in the picture below, we save a copy of the entire array `nums` every time we take a snapshot as `snap_0`, `snap_1`, and so on. Then `get(index=0, snap_id=2)` returns the first element of `snap_2`.

![img](../Figures/1146/1.png)

While this approach is conceptually simple, it would be inefficient for large arrays or if snapshots are taken frequently. Suppose the maximum number of calls to each function is $$O(n)$$, it saves $$O(n)$$ arrays of size $$\text{length}$$, resulting in high memory usage and time complexity.

---

### Approach: Binary Search

#### Intuition   

One alternative is to focus on the historical record of each element, and record the value of the modified element when `set` is called. This approach will reduce the memory required to store the history of the array's elements and improve query times for specific snapshots since we save an element `nums[i]` only when it is modified by `set`.


![img](../Figures/1146/2.png)

To implement this approach, we can create a list of records for each index `i`. A record contains the snapshot id and the value of the element in that snapshot, in the format of `(snap_id, nums[i])`. We can then store the list of records of each element in a dictionary `history_records`, where the key is `i`. Take a look at how we update the historical record of `nums[0]` in `history_records[0]`.


![img](../Figures/1146/5.png)

<br>

We have collected every record of `nums[0]` in `history_records[0]`.


![img](../Figures/1146/3.png)

To retrieve the value of `nums[0]` with the given snapshot id `snap_id = 2`, we need to find the insertion position of `snap_id` in the list of records for `nums[0]`. It should be noted that `snap_id` may not be present in the record list. Therefore, we can use binary search to find the record with the highest snapshot ID that is less than or equal to the given `snap_id`.


> Note that `snap_id = 2` is not included in the historical record of `nums[0]`, as `set` was not called on this element when the snapshot ID was 2. Therefore, the value of `nums[0]` remains the same as it was when the snapshot ID was 1.


![img](../Figures/1146/4.png)

Once we have the index of the target ID `snap_index`, we can retrieve the corresponding value from the record at the position `snap_index`, which is `history_records[0][snap_index][1]`.


<br>

#### Algorithm

1) For each element `nums[i]` in the array, create an empty list to store its historical values, in the format of `[snap_id, value]`. Initialize each list by adding the first record `[0, 0]`.

2) Implement the `set(index, val)` method: add the historical record `[snap_id, value]` to the record list `history_records[index]`.


3) Implement the `snap` method: return `snap_id` and increment it by 1.

4) Implement the `get(index, snap_id)` method to retrieve the value of `nums[index]` in the array with snapshot id as `snap_id`:
    - Use binary search to find the rightmost insertion index of snapshot ID in the given version `snap_index` (so the target index is `snap_index - 1`).
    - Return `history_records[index][snap_index - 1][1]`.


#### Implementation

<iframe src="https://leetcode.com/playground/dcNokMR2/shared" frameBorder="0" width="100%" height="480" name="dcNokMR2"></iframe>


#### Complexity Analysis

Let $$n$$ be the maximum number of calls and `k = length`.

* Time complexity: $$O(n \log n + k)$$

    - We initialize `historyRecords` with size `k`.
    - In the worst-case scenario, the number of calls to `get`, `set`, and `snap` are all $$O(n)$$. 
    - For each call to `get(index, snap_id)`, we will perform a binary search over the list of records of `nums[index]`. Since a list contains at most $$O(n)$$ records, a binary search takes $$O(\log n)$$ time on average. Thus it requires $$O(n \log n)$$ time.
    - Each call to `snap` takes $$O(1)$$ time.
    - Each call to `set(index, snap_id)` appends a pair to the historical record of `nums[index]`, which takes $$O(1)$$ time, or $$O(\log n)$$ in Java as we are using TreeMap. 

* Space complexity: $$O(n + k)$$
    - We initialize `historyRecords` with size `k`.
    - We add one pair `(snap_id, val)` for each call to `set`, thus there are at most $$n$$ pairs saved in `history_record`.

<br/>