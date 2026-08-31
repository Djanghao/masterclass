# 1-4 lines, Ruby and Python

**Author:** StefanPochmann
**Votes:** 49
**Link:** [https://leetcode.com/problems/group-shifted-strings/solutions/67466/](https://leetcode.com/problems/group-shifted-strings/solutions/67466/)

---

To identify each group, compute the modulo 26 difference between each letter in a word with the first letter in it.

`Note:` Originally the problem required each group to be sorted. Not anymore. I now added adapted solutions but kept the old ones.

**Solution 1: Ruby with `group_by`**

    def group_strings(strings)
      strings.group_by { |s| s.bytes.map { |b| (b - s[0].ord) % 26 } }.values
    end

Old solutions:

    def group_strings(strings)
      strings.sort.group_by { |s| s.bytes.map { |b| (b - s[0].ord) % 26 } }.values
    end

Can be a bit faster to group first and sort (each group) afterwards:

    def group_strings(strings)
      strings.group_by { |s| s.bytes.map { |b| (b - s[0].ord) % 26 } }.values.map &:sort
    end

**Solution 2: Python with `groupby`**

    def groupStrings(self, strings):
        key = lambda s: [(ord(c) - ord(s[0])) % 26 for c in s]
        return [list(g) for _, g in itertools.groupby(sorted(strings, key=key), key)]

Old solution:

    def groupStrings(self, strings):
        key = lambda s: [(ord(c) - ord(s[0])) % 26 for c in s]
        return [sorted(g) for _, g in itertools.groupby(sorted(strings, key=key), key)]

**Solution 3: Python with `defaultdict`**

    def groupStrings(self, strings):
        groups = collections.defaultdict(list)
        for s in strings:
            groups[tuple((ord(c) - ord(s[0])) % 26 for c in s)] += s,
        return groups.values()

Old solution:

    def groupStrings(self, strings):
        groups = collections.defaultdict(list)
        for s in strings:
            groups[tuple((ord(c) - ord(s[0])) % 26 for c in s)] += s,
        return map(sorted, groups.values())