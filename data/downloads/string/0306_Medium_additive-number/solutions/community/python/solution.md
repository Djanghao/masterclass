# Python solution

**Author:** StefanPochmann
**Votes:** 97
**Link:** [https://leetcode.com/problems/additive-number/solutions/75578/](https://leetcode.com/problems/additive-number/solutions/75578/)

---

Just trying all possibilities for the first two numbers and checking whether the rest fits.

    def isAdditiveNumber(self, num):
        n = len(num)
        for i, j in itertools.combinations(range(1, n), 2):
            a, b = num[:i], num[i:j]
            if b != str(int(b)):
                continue
            while j < n:
                c = str(int(a) + int(b))
                if not num.startswith(c, j):
                    break
                j += len(c)
                a, b = b, c
            if j == n:
                return True
        return False