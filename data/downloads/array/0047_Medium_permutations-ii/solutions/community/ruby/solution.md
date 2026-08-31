# 6 lines Python / Ruby

**Author:** StefanPochmann
**Votes:** 37
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/18616/](https://leetcode.com/problems/permutations-ii/solutions/18616/)

---

Build the list of permutations one number at a time, insert the number into each already built permutation but only **before** other instances of the same number, never after. Inspired by [cbmbbz's already good solution](https://leetcode.com/discuss/77245/line-python-solution-with-line-handle-duplication-beat-others), though I then saw others had used the idea earlier.

---

Python solution
-

To find the last index for inserting new number `n` into old permutation `p`, I search for previous instances of `n` in `p`. But because `index` throws an exception if unsuccessful, I add a [sentinel](https://en.wikipedia.org/wiki/Sentinel_value) `n` at the end (which is the appropriate last insertion index then).

    def permuteUnique(self, nums):
        perms = [[]]
        for n in nums:
            perms = [p[:i] + [n] + p[i:]
                     for p in perms
                     for i in xrange((p + [n]).index(n) + 1)]
        return perms

Or as "one-liner" using `reduce`:

    def permuteUnique(self, nums):
        return reduce(lambda perms, n: [p[:i] + [n] + p[i:]
                                        for p in perms
                                        for i in xrange((p + [n]).index(n) + 1)],
                      nums, [[]])

---

Ruby solution
-

    def permute_unique(nums)
      nums.reduce([[]]) { |perms, n|
        perms.flat_map { |p|
          last = p.index(n) || p.size
          (0..last).map { |i| p[0,i] + [n] + p[i..-1] }
        }
      }
    end