# Golfing in Python

**Author:** StefanPochmann
**Votes:** 165
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/4055/](https://leetcode.com/problems/reverse-integer/solutions/4055/)

---

Get the `s`ign, get the `r`eversed absolute integer, and return their product if `r` didn't "overflow".

    def reverse(self, x):
        s = cmp(x, 0)
        r = int(`s*x`[::-1])
        return s*r * (r < 2**31)

As compressed one-liner, for potential comparison:

    def reverse(self, x):
        s=cmp(x,0);r=int(`s*x`[::-1]);return(r<2**31)*s*r

Anybody got something shorter?