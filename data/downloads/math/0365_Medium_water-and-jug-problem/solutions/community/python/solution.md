# Python solution gcd

**Author:** hliu94
**Votes:** 16
**Link:** [https://leetcode.com/problems/water-and-jug-problem/solutions/83711/](https://leetcode.com/problems/water-and-jug-problem/solutions/83711/)

---

    class Solution(object):
        def canMeasureWater(self, x, y, z):
            """
            :type x: int
            :type y: int
            :type z: int
            :rtype: bool
            """
            a,b=x,y
            while y:
                r=x%y
                x=y
                y=r
            return bool(not z or (x and z<=a+b and not z%x))