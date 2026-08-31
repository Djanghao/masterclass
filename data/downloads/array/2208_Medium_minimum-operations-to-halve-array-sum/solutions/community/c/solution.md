# [Python3, Java, C++] Priority Queue O(nlogn)

**Author:** tojuna
**Votes:** 34
**Link:** [https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/1863899/](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/1863899/)

---

* First find sum of array
* Put all the elements in a Max heap or a priority queue such that popping the queue gives you the max element
* `k` is current sum of halved elements
* While sum of array - `k` > sum of array / 2, pop an element out of the `pq`, half it, add it to `k` and `pq`
<iframe src="https://leetcode.com/playground/mKaXTnzp/shared" frameBorder="0" width="620" height="310"></iframe>