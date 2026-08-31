# 6 lines in Python

**Author:** StefanPochmann
**Votes:** 177
**Link:** [https://leetcode.com/problems/summary-ranges/solutions/63193/](https://leetcode.com/problems/summary-ranges/solutions/63193/)

---

Three versions of the same algorithm, all take O(n) time.

---

**Solution 1**

Just collect the ranges, then format and return them.

    def summaryRanges(self, nums):
        ranges = []
        for n in nums:
            if not ranges or n > ranges[-1][-1] + 1:
                ranges += [],
            ranges[-1][1:] = n,
        return ['->'.join(map(str, r)) for r in ranges]

---

**Solution 2**

A variation of solution 1, holding the current range in an extra variable `r` to make things easier. Note that `r` contains at most two elements, so the `in`-check takes constant time.

    def summaryRanges(self, nums):
        ranges, r = [], []
        for n in nums:
            if n-1 not in r:
                r = []
                ranges += r,
            r[1:] = n,
        return ['->'.join(map(str, r)) for r in ranges]

---

**Solution 3**

A tricky short version.

    def summaryRanges(self, nums):
        ranges = r = []
        for n in nums:
            if `n-1` not in r:
                r = []
                ranges += r,
            r[1:] = `n`,
        return map('->'.join, ranges)

---

**About the commas :-)**

Three people asked about them in the comments, so I'll also explain it here as well. I have these two basic cases:

    ranges += [],
    r[1:] = n,

Why the trailing commas? Because it turns the right hand side into a tuple and I get the same effects as these more common alternatives:

    ranges += [[]]
    or
    ranges.append([])

    r[1:] = [n]

Without the comma, ...

 - `ranges += []` wouldn't add `[]` itself but only its elements, i.e., nothing.
 - `r[1:] = n` wouldn't work, because my `n` is not an iterable.

Why do it this way instead of the more common alternatives I showed above? Because it's shorter and faster (according to tests I did a while back).