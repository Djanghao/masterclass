# O(n) explanation with picture

**Author:** neal99
**Votes:** 549
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/987607/](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/987607/)

---

Experiment for explaining with picture, with a few words.

Use **sliding window** to calculate the **cost** of every **consecutive k 1s**.

Hope that helps!

![1703.png](./images/0.png)

Provide the code for clarification.

You can combine odd and even cases together with some tricks, we separate them here for readability.

**(Follow up: Can you combine odd and even cases together?)**
**(Follow up2: If the input puts some 1s in the same positions, does this method still apply? What modification we need?)**
**(Follow up3: another similar one https://atcoder.jp/contests/abc229/tasks/abc229_g)**

```python
class Solution:
    def minMoves(self, nums: List[int], k: int) -> int:
        p = [i for i, v in enumerate(nums) if v == 1]
        # p[i]: the position of i-th 1
        n = len(p)
        presum = [0]*(n+1)
        # presum[i]: sum(p[0]...p[i-1])
        for i in range(n):
            presum[i+1] = presum[i]+p[i]

        res = inf

        # sliding window
        if k % 2 == 1:
            # if odd
            radius = (k-1)//2
            for i in range(radius, n-radius):
                # i-radius ... i ... i+radius
                # move radius to i
                # i+1, ..., i+radius
                right = presum[i+radius+1]-presum[i+1]
                # i-radius, ..., i-1
                left = presum[i]-presum[i-radius]
                res = min(res, right-left)
            return res-radius*(radius+1)
        else:
            # even
            radius = (k-2)//2
            for i in range(radius, n-radius-1):
                # i-radius ... i i+1 ... i+radius+1
                # move radius to i (moving to i+1 is also OK)
                # i+1, ..., i+radius+1
                right = presum[i+radius+2]-presum[i+1]
                # i-radius, ..., i-1
                left = presum[i]-presum[i-radius]
                res = min(res, right-left-p[i])
            return res-radius*(radius+1)-(radius+1)
```

