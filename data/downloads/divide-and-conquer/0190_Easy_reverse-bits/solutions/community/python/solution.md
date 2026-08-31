# Python AC with 63ms, 3lines

**Author:** jaly50
**Votes:** 53
**Link:** [https://leetcode.com/problems/reverse-bits/solutions/54740/](https://leetcode.com/problems/reverse-bits/solutions/54740/)

---

    class Solution:
        # @param n, an integer
        # @return an integer
        def reverseBits(self, n):
            oribin='{0:032b}'.format(n)
            reversebin=oribin[::-1]
            return int(reversebin,2)