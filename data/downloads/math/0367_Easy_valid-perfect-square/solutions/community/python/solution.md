# Python solution

**Author:** hliu94
**Votes:** 29
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/83964/](https://leetcode.com/problems/valid-perfect-square/solutions/83964/)

---

    class Solution(object):
        def isPerfectSquare(self, num):
            """
            :type num: int
            :rtype: bool
            """
            if num<0:
                return False
            x,i=0,1
            while x<num:
                x+=i
                i+=2
            return x==num