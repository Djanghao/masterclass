# My Python Solution

**Author:** zyt6217315a
**Votes:** 256
**Link:** [https://leetcode.com/problems/happy-number/solutions/56915/](https://leetcode.com/problems/happy-number/solutions/56915/)

---

    def isHappy(self, n):
        mem = set()
        while n != 1:
            n = sum([int(i) ** 2 for i in str(n)])
            if n in mem:
                return False
            else:
                mem.add(n)
        else:
            return True