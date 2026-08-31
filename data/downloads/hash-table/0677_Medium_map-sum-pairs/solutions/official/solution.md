# Official Solution

**Link:** [https://leetcode.com/problems/map-sum-pairs/solution/](https://leetcode.com/problems/map-sum-pairs/solution/)

---

[TOC]

### Approach #1: Brute Force [Accepted]

**Intuition and Algorithm**

For each key in the map, if that key starts with the given prefix, then add it to the answer.

<iframe src="https://leetcode.com/playground/jNhyy639/shared" frameBorder="0" name="jNhyy639" width="100%" height="360"></iframe>
**Complexity Analysis**

* Time Complexity: Every insert operation is $$O(1)$$. Every sum operation is $$O(N * P)$$ where $$N$$ is the number of items in the map, and $$P$$ is the length of the input prefix.

* Space Complexity: The space used by `map` is linear in the size of all input `key` and `val` values combined.

---

### Approach #2: Prefix Hashmap [Accepted]

**Intuition and Algorithm**

We can remember the answer for all possible prefixes in a HashMap `score`. When we get a new `(key, val)` pair, we update every prefix of `key` appropriately: each prefix will be changed by `delta = val - map[key]`, where `map` is the previously associated value of `key` (zero if undefined.)


<iframe src="https://leetcode.com/playground/QYzALHGM/shared" frameBorder="0" name="QYzALHGM" width="100%" height="394"></iframe>

**Complexity Analysis**

* Time Complexity: Every insert operation is $$O(K^2)$$, where $$K$$ is the length of the key, as $$K$$ strings are made of an average length of $$K$$.  Every sum operation is $$O(1)$$.

* Space Complexity: The space used by `map` and `score` is linear in the size of all input `key` and `val` values combined.

---

### Approach #3: Trie [Accepted]

**Intuition and Algorithm**

Since we are dealing with prefixes, a Trie (prefix tree) is a natural data structure to approach this problem. For every node of the trie corresponding to some prefix, we will remember the desired answer (score) and store it at this node.  As in *Approach #2*, this involves modifying each node by `delta = val - map[key]`.

<iframe src="https://leetcode.com/playground/FbmbbgFJ/shared" frameBorder="0" name="FbmbbgFJ" width="100%" height="513"></iframe>



**Complexity Analysis**

* Time Complexity: Every insert operation is $$O(K)$$, where $$K$$ is the length of the key. Every sum operation is $$O(K)$$.

* Space Complexity: The space used is linear in the size of the total input.