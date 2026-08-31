# Official Solution

**Link:** [https://leetcode.com/problems/high-five/solution/](https://leetcode.com/problems/high-five/solution/)

---

[TOC]

### Approach 1: Using Sorting

**Intuition**

Since we have to take into account the top 5 values corresponding to each `id`, we can sort the `items` array, first based on the `id` and next based on the `score`, i.e. items will be sorted based on *increasing* order of their ids. In case we have a tie for the value of ids, the items are then sorted based on *decreasing* order of the scores.

**Algorithm**

We can implement the idea for Approach 1 simply by having a custom comparator, which sorts the array based on the increasing order of ids and in case of tie, with the decreasing order of scores.

Below is the implementation of this approach.

<iframe src="https://leetcode.com/playground/AkQrrVfL/shared" frameBorder="0" width="100%" height="500" name="AkQrrVfL"></iframe>

**Complexity Analysis**

* Time Complexity: Assuming $$N$$ is the total number of items, sorting the items takes $$O(N \log N)$$ time and traversing the sorted array takes $$O(N)$$ time. Hence the overall time complexity of this approach is $$O(N \log N)$$.

* Space Complexity: $$O(N)$$, the space used by `solution`.

### Approach 2: Using Map and Max Heap

**Intuition**

We can notice here that the only scores that contribute towards the calculation of the average are the top 5 scores. Therefore, if we only need the top 5 scores for each of the id we can ignore the rest of the scores. This can be done using a max heap.

**Algorithm**

We can maintain a max heap of all the scores for every id. This way, we can simply obtain the top 5 scores for each of the id by obtaining the first 5 elements from the max heap (which are indeed the top 5). Additionally, we would also need a map where the id of the student will be used as the key (as we want scores for the same id to be clubbed together in the same max heap).

Note that we'll be using an ordered map (or a tree map) in this case as we want the final output scores to be in sorted order (which we can obtain by directly iterating over the keys of the map).

Below is the implementation of this approach.

<iframe src="https://leetcode.com/playground/i9k3oDSk/shared" frameBorder="0" width="100%" height="500" name="i9k3oDSk"></iframe>

**Complexity Analysis**

* Time Complexity: Assuming $$N$$ is the total number of items, finding a key in the map takes $$O(\log N)$$ time. Similarly pushing an item in the max heap also takes $$O(\log N)$$ time. Hence to insert all the $$N$$ elements, the total time taken is $$O(N \log N)$$. Iterating over the map takes $$O(N)$$ time and extracting the top 5 elements is a constant time operation. Hence the overall time taken is $$O(N \log N)$$.

* Space Complexity: $$O(N)$$, the space used by `allScores`.

### Approach 3: Using Map and Min Heap

**Intuition**

Till now, we have used a max heap using which we can obtain the top 5 elements by simply popping them out of the max heap one by one. However, for this, we have to store all the scores for each id in the max heap. This is inefficient. Since we are only interested in obtaining the top 5 scores, we do not need to store all the scores.

This can be made efficient using a min heap. In this approach, we will keep a min heap of the top 5 scores for each of the id. Whenever we encounter a score for an id, which is greater than the minimum score present in the min heap of that particular id, we update our min heap by adding the current score and removing the minimum score. This way, the size of the min heap never exceeds 5 which is a much more efficient implementation than keeping all the scores in the heap.

**Algorithm**

For each of the id, we can keep inserting all the scores in the corresponding min heap. Whenever we reach a state where the size of the min heap exceeds 5, we'll simply remove the minimum element from the min heap, thereby making sure that the size of the min heap never exceeds 5.

Below is the implementation of this approach.

<iframe src="https://leetcode.com/playground/RHC2zb68/shared" frameBorder="0" width="100%" height="500" name="RHC2zb68"></iframe>

**Complexity Analysis**

* Time Complexity: Assuming $$N$$ is the total number of items, finding a key in the map takes $$O(\log N)$$ time. Here since we are using a min heap, the size of which is upper bounded (by k = 5 elements) hence pushing an item in the heap takes $$O(1)$$ time. Hence to insert all the $$N$$ elements, the total time taken is $$O(N)$$. Iterating over the map takes $$O(N)$$ time and extracting all the elements from the min heap is a constant time operation. Hence the overall time taken is $$O(N \log N)$$.

* Space Complexity: $$O(N)$$, the space used by `allScores`.