# Official Solution

**Link:** [https://leetcode.com/problems/design-a-leaderboard/solution/](https://leetcode.com/problems/design-a-leaderboard/solution/)

---

[TOC]

---

### Overview

There are a lot of implementations for this particular problem out there. The problem statement is pretty straightforward on the surface:

1. We need to maintain a list of `playerId` to `score` mappings.
2. Whenever required, obtain the top `K` scores, add them up, and return them.
3. Finally, reset the score for a particular player.

We will start with the most basic, brute-force implementations for this problem and then move on to slightly complex implementations. To understand, what these complicated implementations will be using, we need to see the basic requirement of this problem.

> We have a dynamically updating list of values and we need to be able to extract the top-k elements from that list.

Whenever we have such a problem statement which requires us to obtain the `top-K` values from a list which is dynamically updating, relying on a **priority-queue** seems like a good bet. A `heap` is one of the best data structures for handling such a requirement. So, we will be looking at a solution that makes use of the heap data structure.

Additionally, we will be looking at a `binary search tree` based solution. Although the heap is a great data structure for finding the `top-K` elements from a list without having to actually sort the list, it is not great at `find-and-update` kind of operations. General rule of thumb with the `heap` data structure is to use `lazy-updates` rather than having to traverse and update the entries themselves. We won't get a deterministic performance if we resort to lazy score updates here because we don't know the number of `update` operations and hence, the size of the heap can continue to grow if we have millions of score updates and no `top-K` function calls (or proportionally lower).

<br />
<br />


---
### Approach 1: Brute Force

The brute-force approach is pretty straightforward in the sense that we will maintain a dictionary of `playerId` as the key and the `score` as the dictionary. Then, for each `top` operation, we will simply obtain all the values from the dictionary, sort them, and the obtain the top `K` elements. 

**Algorithm**

1. Initialize a dictionary `scores` that will use the `playerId` as the key and `score` as the value.
2. *addScore* ~
    - Simply update the dictionary with the new score for the player.
    - If the player doesn't exist, initialize the score to `score`
3. *top* ~
    - Obtain a list of all the values from the dictionary.
    - Sort the list in `reverse` order.
    - Sum up the first `K` values from the sorted list.
4. *reset* ~
    - Delete the entry containing the `playerId`
    - Note that we can also set the value (score) to `0`. The only disadvantage of this is that we will be sorting even `reset` players in the `top` function. This doesn't matter much for smaller test cases though.

**Implementation**

<iframe src="https://leetcode.com/playground/emHBgB5e/shared" frameBorder="0" width="100%" height="500" name="emHBgB5e"></iframe>

**Complexity Analysis**

* Time Complexity:
    - $$O(1)$$ for `addScore`.
    - $$O(1)$$ for `reset`.
    - $$O(N  \text{log}N)$$ for `top` where $$N$$ represents the total number of players since we sort all of the player scores and then take the top `K` from the sorted list.

* Space Complexity:
    - $$O(N)$$ used by the `scores` dictionary and also by the new list formed using the dictionary values in the `top` function.
<br />
<br />


---
### Approach 2: Heap for top-K

This is a slight modification to the previous approach in that instead of sorting the list of the `values`, we will be making use of a `min-heap` to find the `top-K` values. This is a slightly modified version of the previous implementation. 

**Algorithm**

1. Initialize a dictionary `scores` that will use the `playerId` as the key and `score` as the value.
2. *addScore* ~
    - Simply update the dictionary with the new score for the player.
    - If the player doesn't exist, initialize the score to `score`
3. *top* ~
    - Initialize a new min-heap, `scoreHeap`.
    - Iterate over the first `K` values in the dictionary and add them to the heap.
    - Then, for the rest of the $$N-K$$ values, we will simply do the following. We will add the new value to the heap, and pop the smallest value from the heap. In doing this, we maintain the size of the heap to `K` and also remove the smaller of the two values.
    - We do this for all of the $$N-K$$ values and then, simply add up all the values remaining in the heap since those would be the largest `K` values left.
4. *reset* ~
    - Delete the entry containing the `playerId`
    - Note that we can also set the value (score) to `0`. The only disadvantage of this is that we will be sorting even `reset` players in the `top` function. This doesn't matter much for smaller test cases though.

**Implementation**

<iframe src="https://leetcode.com/playground/BvZ92eoC/shared" frameBorder="0" width="100%" height="500" name="BvZ92eoC"></iframe>

**Complexity Analysis**

* Time Complexity:
    - $$O(1)$$ for `addScore`.
    - $$O(1)$$ for `reset`.
    - $$O(K) + O(N \text{log}K)$$ = $$O(N \text{log}K)$$. It takes $$O(K)$$ to construct the initial heap and then for the rest of the $$N-K$$ elements, we perform the `extractMin` and `add` operations on the heap each of which take $$(\text{log}K)$$ time.

* Space Complexity:
    - $$O(N + K)$$ where $$O(N)$$ is used by the `scores` dictionary and $$O(K)$$ is used by the heap.
<br />
<br />


---
### Approach 3: Using a TreeMap / SortedMap 

This approach is inspired by this [discussion thread](https://leetcode.com/problems/design-a-leaderboard/discuss/418833/Java-TreeMap-%2B-Map-Solution). Here we will try to improve on the overall time complexity of the `top` function at the expense of the time complexity of the `addScore` function. As discussed before, a heap doesn't have any properties that aid in search. At the end of the day, it is simply list of elements with certain properties associating them. However, these properties do not enhance the searchability of the data structure as a whole. We can definitely do enhancements where we maintain references to nodes in the heap, in a dictionary and then use those references for making updates. However, we will be looking at the TreeMap data structure (java) which uses the balanced-binary-search tree instead. 

The great advantage we get with a balanced BST is that the search/add/remove operations are all bounded by a logarithmic complexity in terms of the number of elements in the tree. This is achievable due to the structure of the tree and the relationship between the subtrees and a root.

**Algorithm**

1. Initialize a dictionary `scores` that will use the `playerId` as the key and `score` as the value.
2. Initialize a TreeMap (java) or a SortedMap (python) called `sortedScoreMap`. The way this would be structured is that the key would be a score and the value would be the number of players that have this score. Imagine this being represented as a balanced BST with the keys being used for arranging the tree. We need the `top` function to use the *scores* and so, we use them as the key.
2. *addScore* ~
    - Note the old score for the player. Let it be called `oldScore`.
    - Update the value of `oldScore` in `sortedScoreMap` TreeMap. If the value has reached `0`, remove the score entry.
    - Simply update the dictionary with the new score for the player.
    - Add the updated value to the `sortedScoreMap` as well by incrementing the value by 1 i.e. one more player has this score.
    - If the player doesn't exist, initialize the score to `score`.
3. *top* ~
    - Iterate over all the keys in the `sortedScoreMap`. Note that since the data structure is a BST, an inorder traversal of the keys would return them in the sorted order. We don't need to sort them again. Hence, we will simply iterate over the keys and pick the first `K`. Also, we have arranged the tree with each score mapped to how many players have that score. So there are no duplicates in the tree.
    - Pick the first `K` entries i.e. first `K` values. 
        - For each key, multiply `(key * value)` and add it to the total sum.
        - Also, reduce the counter counting down to `K` by `value`.
4. *reset* ~
    - Note the old score for the player. Let it be called `oldScore`.
    - Update the value of `oldScore` in `sortedScoreMap` TreeMap. If the value has reached `0`, remove the score entry.
    - Delete the entry containing the `playerId`.

**Implementation**

Note that we are using `SortedDict` in Python. This is an external, apache licensed package that is supported by the Leetcode platform. You can read more about it [here](http://www.grantjenks.com/docs/sortedcontainers/implementation.html). We don't have a way to construct a reverse SortedDict in Python and hence, we negate the scores before adding them to the dict (TreeMap like data structure) so that the normal in-order traversal would give us the scores in the reverse order i.e. descending order.

<iframe src="https://leetcode.com/playground/f5Jxh4QQ/shared" frameBorder="0" width="100%" height="500" name="f5Jxh4QQ"></iframe>

**Complexity Analysis**

* Time Complexity:
    - $$O(\text{log}N)$$ for `addScore`. This is because each addition to the BST takes a logarithmic time for search. The addition itself once the location of the parent is known, takes constant time. 
    - $$O(\text{log}N)$$ for `reset` since we need to search for the score in the BST and then update/remove it. Note that this complexity is in the case when every player always maintains a unique score.
    - It takes $$O(K)$$ for our `top` function since we simply iterate over the keys of the TreeMap and stop once we're done considering `K` scores. Note that if the data structure doesn't provide a natural iterator, then we can simply get a list of all the key-value pairs and they will naturally be sorted due to the nature of this data structure. In that case, the complexity would be $$O(N)$$ since we would be forming a new list.

* Space Complexity:
    - $$O(N)$$ used by the `scores` dictionary. Also, if you obtain all the key-value pairs in a new list in the `top` function, then an additional $$O(N)$$ would be used.
<br />
<br />


---