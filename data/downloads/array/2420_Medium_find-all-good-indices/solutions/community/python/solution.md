# ✅  DP  [C++/Java/Python] + Intuition

**Author:** Rowque
**Votes:** 235
**Link:** [https://leetcode.com/problems/find-all-good-indices/solutions/2620565/](https://leetcode.com/problems/find-all-good-indices/solutions/2620565/)

---

+ **Intuition**:
  - Computing increasing and decreasing length for every index might give TLE.

+ **Thought Process & Algorithm**:
   + If we precompute the length of decreasing till every from **left**.
   + If we precompute the length of increasing till every from **right**.
   + Then we can easily collect indexes in range **[k , n-k-1]** which have atleast **k elements** `before` and `after` both with the help of the length precomputed in above steps.

+ **By precomputation what technique comes in our mind??**
  - Its `Dynamic Programming` also known as `prefix` or `suffix`.

+ **Conclusion:**
  -  Whenever precomputation i.e some parameter calculation is required till every index, then we should think of **Dynamic Programming(Prefix / Suffix)**

+ **Similar Question** :
  - [2100. Find Good Days to Rob the Bank](https://leetcode.com/problems/find-good-days-to-rob-the-bank/#:~:text=The%20ith%20day%20is,after%20i%20are%20non%2Ddecreasing.)
  -  [1800. Maximum Ascending Subarray Sum](https://leetcode.com/problems/maximum-ascending-subarray-sum/)

<iframe src="https://leetcode.com/playground/42CgRuaw/shared" frameBorder="0" width="700" height="500"></iframe>


**Time** - O(n)
**Space** - O(n)