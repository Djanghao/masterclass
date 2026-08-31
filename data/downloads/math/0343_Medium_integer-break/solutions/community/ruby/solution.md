# 1-liner in Ruby / Python

**Author:** StefanPochmann
**Votes:** 12
**Link:** [https://leetcode.com/problems/integer-break/solutions/80903/](https://leetcode.com/problems/integer-break/solutions/80903/)

---

Ruby:

    def integer_break(n)
      n < 4 ? n - 1 : 3**((n-2)/3) * ((n-2)%3+2)
    end

Python:

    def integerBreak(self, n):
        return n - 1 if n < 4 else 3**((n-2)/3) * ((n-2)%3+2)