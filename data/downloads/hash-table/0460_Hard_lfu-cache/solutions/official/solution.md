# Official Solution

**Link:** [https://leetcode.com/problems/lfu-cache/solution/](https://leetcode.com/problems/lfu-cache/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Maintaining 2 HashMaps

#### Intuition

We need to maintain all the keys, values and frequencies. Without invalidation (removing from the data structure when it reaches capacity), they can be maintained by a HashMap<Integer, Pair<Integer, Integer>>, keyed by the original `key` and valued by the `frequency`-`value` pair.

With the invalidation, we need to maintain the current minimum frequency and delete particular keys. Hence, we can group the keys with the same frequency together and maintain another HashMap<Integer, Set<Integer>>, keyed by the frequency and valued by the set of `keys` that have the same frequency. This way, if we know the minimum frequency, we can access the potential keys to be deleted.

Also note that in the case of a tie, we're required to find the least recently used key and invalidate it, hence we need to keep the frequencies ordered in the Set. Instead of using a TreeSet which adds an extra $O(log(N))$ time complexity, we can maintain the keys using a LinkedList so that it supports finding both an arbitrary key and the least recently used key in constant time. Fortunately, LinkedHashSet can do the job. Once a `key` is inserted/updated, we put it to the end of the LinkedHashSet so that we can invalidate the first `key` in the LinkedHashSet corresponding to the minimum frequency.

The original operations can be transformed into operations on the 2 HashMaps, keeping them in sync and maintaining the minimum frequency.

Since C++ lacks LinkedHashSet, we have to use a workaround like maintaining a list of key and value pairs instead of the LinkedHashSet and keeping the iterator with the frequency in another unordered_map to keep this connection. The idea is similar but a little bit complicated. Another workaround would be to implement your own LRU cache with a doubly linked list.


#### Algorithm

To make things simpler, assume we have 4 member variables:
1. `HashMap<Integer, Pair<Integer, Integer>> cache`, keyed by the original `key` and valued by the `frequency`-`value` pair. 
2. `HashMap<Integer, LinkedListHashSet<Integer>> frequencies`, keyed by frequency and valued by the set of `keys` that have the same frequency.
3. `int minf`, which is the minimum frequency at any given time.
4. `int capacity`, which is the `capacity` given in the input.

It's also convenient to have a private utility function `insert` to insert a `key`-`value` pair with a given frequency.

##### void insert(int key, int frequency, int value)
1. Insert `frequency`-`value` pair into `cache` with the given `key`.
2. Get the LinkedHashSet corresponding to the given `frequency` (default to empty Set) and insert the given `key`.


##### int get(int key)
1. If the given `key` is not in the `cache`, return `-1`, otherwise go to step `2`.
2. Get the `frequency` and `value` from the `cache`.
3. Get the LinkedHashSet associated with `frequency` from `frequencies` and remove the given `key` from it, since the usage of the current key is increased by this function call.
4. If `minf` == `frequency` and the above LinkedHashSet is empty, that means there are no more elements used `minf` times, so increase `minf` by 1. To save some space, we can also delete the entry `frequency` from the `frequencies` hash map.
5. Call insert(`key`, `frequency` + 1, `value`), since the current key's usage has increased from this function call.
6. Return `value`

##### void put(int key, int value)
1. If `capacity` <= 0, exit.
2. If the given `key` exists in `cache`, update the `value` in the original `frequency`-`value` (don't call insert here), and then increment the frequency by using get(`key`). Exit the function.
3. If `cache.size()` == `capacity`, get the first (least recently used) value in the LinkedHashSet corresponding to `minf` in `frequencies`, and remove it from `cache` and the LinkedHashSet.
4. If we didn't exit the function in step 2, it means that this element is a new one, so the minimum frequency cannot possibly be greater than one. Set `minf` to 1.
5. Call insert(`key`, 1, `value`)

#### Implementation

<iframe src="https://leetcode.com/playground/njKVWiZK/shared" frameBorder="0" width="100%" height="500" name="njKVWiZK"></iframe>


#### Complexity Analysis

Here, $N$ is the total number of operations.

* Time complexity: $O(1)$, as required by the question.

    Since we only have basic HashMap/(Linked)HashSet operations. For details,

    Our utility function `insert` puts the `key`- `value` pair into the `cache`, queries and possibly puts an empty LinedHashSet in the `frequencies`, then queries `frequencies` again and adds a `key` into the associated `value` which is a LinkedHashSet. All the operations are based on the hash calculating for simple type (int or Integer) and the time complexity is constant.


    For each `get` operation, in the worst case, we query the `frequencies` and remove a `key` from the associated `value` which is a LinkedHashSet and call `insert` function once. All the operations have the constant time complexity based on the hash calculating for simple type.

    For each `put` operation, in the simple case we just insert the new `key`-`value` pair into the `cache` and call `get` function once. In the worst case, we query the `frequencies` to get the associated `value`, namely all the `keys` with the same frequencies which is a LinkedHashSet. And then we get the first key from the LinkedHashSet, remove it from both `cache` and `frequencies`. All the operations have the constant time complexity based on the hash calculating for simple type.

* Space complexity: $O(N)$.

    We save all the `key`-`value` pairs as well as all the keys with frequencies in the 2 HashMaps (plus a LinkedHashSet), so there are at most $min(N, capacity) `keys` and `values` at any given time.

---