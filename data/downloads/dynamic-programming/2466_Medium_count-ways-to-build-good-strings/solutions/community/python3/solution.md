# ✅[Python3//C++//Java]✅ Easy and understand (DP)

**Author:** abdullayev_akbar
**Votes:** 161
**Link:** [https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3518124/](https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3518124/)

---

The algorithm uses an array ``dp`` to keep track of the number of good strings that can be formed for each length up to the ``high`` value. The base case is when ``dp[0] = 1``, indicating that there is one good string of length zero.

The algorithm then iteratively fills in the rest of the ``dp`` array for all lengths between ``min(zero, one)`` and ``high``, inclusive. For each length i, the algorithm considers two cases:

- The number of ``0`` digits is at least zero: In this case, the algorithm adds the number of good strings of length ``i - zero`` to ``dp[i]``.
- The number of ``1`` digits is at least one: In this case, the algorithm adds the number of good strings of length ``i - one`` to ``dp[i]``.

Finally, the algorithm computes the sum of the ``dp`` array elements for lengths between ``low`` and ``high``, inclusive, and returns this sum as the result.
# Please Upvote \uD83D\uDE07
# Code
<iframe src="https://leetcode.com/playground/KgGvj3nn/shared" frameBorder="0" width="600" height="400"></iframe>

![image.png](./images/0.png)