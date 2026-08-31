# 1-liner in Ruby / Python

**Author:** StefanPochmann
**Votes:** 48
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/71333/](https://leetcode.com/problems/first-bad-version/solutions/71333/)

---

**Python 3.10+**

Woohoo, `bisect` has a `key` parameter now. So:

    def firstBadVersion(self, n: int) -> int:
        return bisect_left(range(n), True, 1, key=isBadVersion)

---

**Ruby**

    def first_bad_version(n)
      (1..n).bsearch { |i| is_bad_version(i) }
    end

Or:

    def first_bad_version(n)
      (1..n).bsearch(&method(:is_bad_version))
    end

---

**Python**

In Python I was only able to do it with a rather ugly wrapper:

    def firstBadVersion(self, n):
        return bisect.bisect(type('', (), {'__getitem__': lambda self, i: isBadVersion(i)})(), False, 0, n)

Nicer, more readable version:

    def firstBadVersion(self, n):
        class Wrap:
            def __getitem__(self, i):
                return isBadVersion(i)
        return bisect.bisect(Wrap(), False, 0, n)