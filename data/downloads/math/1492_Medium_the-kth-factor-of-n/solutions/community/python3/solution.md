# Python | T-O(N)  and S- O(1) | 92% faster

**Author:** vsahoo
**Votes:** 37
**Link:** [https://leetcode.com/problems/the-kth-factor-of-n/solutions/1008364/](https://leetcode.com/problems/the-kth-factor-of-n/solutions/1008364/)

---

```
class Solution(object):
    def kthFactor(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: int
        """
        for i in range(1, n+1):
            if n % i == 0:
                k -= 1
                if k == 0:  #  No need to find more than kth  factor, we can simply return it  once we reached.
                    return i
        return -1
	```
	
		
	Please upvote if you get it.