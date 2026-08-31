# Python simple 2 lines solution

**Author:** fan50
**Votes:** 91
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/71366/](https://leetcode.com/problems/first-bad-version/solutions/71366/)

---

    import bisect
    class Solution():
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        self.__getitem__ = isBadVersion
        return bisect.bisect_left(self, True, 1, n)