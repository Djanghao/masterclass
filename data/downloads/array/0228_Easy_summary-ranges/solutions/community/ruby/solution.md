# Idea + 1-Liner: Group by number-index

**Author:** StefanPochmann
**Votes:** 66
**Link:** [https://leetcode.com/problems/summary-ranges/solutions/63474/](https://leetcode.com/problems/summary-ranges/solutions/63474/)

---

**The Idea**

The difference between a number and its index identifies the range. Consider the given example input:

    numbers:  [0, 1, 2, 4, 5, 7]
    indexes:  [0, 1, 2, 3, 4, 5]
    subtract: [0, 0, 0, 1, 1, 2]

You can see I have three differences (0, 1 and 2), corresponding to the three ranges. That can then be used to group the elements.

---

**Solution 1**

Ruby and Python can exploit it particularly well, thanks to their groupby functions:

Ruby:

    def summary_ranges(nums)
      nums.each_with_index.group_by{|n,i| n-i}.map{|d,r| [r[0][0], r[-1][0]].uniq.join('->')}
    end

Python:

    def summaryRanges(self, nums):
        return [re.sub('->.*>', '->', '->'.join(`n` for i, n in g))
                for _, g in itertools.groupby(enumerate(nums), lambda (i, n): n-i)]

---

**Solution 2**

Here I build two dicts, telling me the first and last number of each range. For the given example I get:

    first = {0: 0, 1: 4, 2: 7}
    last  = {0: 2, 1: 5, 2: 7}

The code:

    def summaryRanges(self, nums):
        diff = [(n-i, n) for i, n in enumerate(nums)]
        first, last = dict(diff[::-1]), dict(diff)
        return [`n` + ('->'+`last[d]`)*(n<last[d]) for d, n in sorted(first.items())]

---

**Solution 3**

Storing `[first, last]` for each range in a dict (`last` being optional).

    def summaryRanges(self, nums):
        ranges = collections.defaultdict(list)
        for i, n in enumerate(nums):
            ranges[n-i][1:] = n,
        return ['->'.join(map(str, r)) for r in sorted(ranges.values())]