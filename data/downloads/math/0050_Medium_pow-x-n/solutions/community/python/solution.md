# Shortest Python - Guaranteed

**Author:** StefanPochmann
**Votes:** 503
**Link:** [https://leetcode.com/problems/powx-n/solutions/19560/](https://leetcode.com/problems/powx-n/solutions/19560/)

---

[Surprisingly](http://stackoverflow.com/questions/30693639/why-does-class-x-mypow-pow-work-what-about-self), I can just use Python's existing `pow` like this:

    class Solution:
        myPow = pow

That's even shorter than the other more obvious "cheat":

    class Solution:
        def myPow(self, x, n):
            return x ** n

And to calm down the haters, here's me *"doing it myself"*:

Recursive:

    class Solution:
        def myPow(self, x, n):
            if not n:
                return 1
            if n < 0:
                return 1 / self.myPow(x, -n)
            if n % 2:
                return x * self.myPow(x, n-1)
            return self.myPow(x*x, n/2)

Iterative:

    class Solution:
        def myPow(self, x, n):
            if n < 0:
                x = 1 / x
                n = -n
            pow = 1
            while n:
                if n & 1:
                    pow *= x
                x *= x
                n >>= 1
            return pow