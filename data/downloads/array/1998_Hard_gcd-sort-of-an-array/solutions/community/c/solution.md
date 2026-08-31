# Union-Find + Prime Factorization

**Author:** automate_this
**Votes:** 37
**Link:** [https://leetcode.com/problems/gcd-sort-of-an-array/solutions/1445161/](https://leetcode.com/problems/gcd-sort-of-an-array/solutions/1445161/)

---

Brief explanation: The sequence of numbers can be sorted iff for all indices i, sorted(nums)[i] can be connected to nums[i] through a series of swaps. But to use union-find to connect all nums[i] and nums[j] that are not coprime will take quadratic time. To simplify the task, we connect nums[i] to all of its prime factors.

The Union-Find was implemented by dictionary in Python3 for simplicity, and by array in C++ (~150ms) and Java(~60ms)  for efficiency. 

<iframe src="https://leetcode.com/playground/6BgQYpnG/shared" frameBorder="0" width="1000" height="500"></iframe>