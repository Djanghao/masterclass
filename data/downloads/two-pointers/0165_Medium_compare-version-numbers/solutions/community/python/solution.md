# 2-4 lines Python, 3 different ways

**Author:** StefanPochmann
**Votes:** 70
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/50800/](https://leetcode.com/problems/compare-version-numbers/solutions/50800/)

---

**Solution 1: *Pad with `izip_longest` with `fillvalue=0`***

    def compareVersion(self, version1, version2):
        splits = (map(int, v.split('.')) for v in (version1, version2))
        return cmp(*zip(*itertools.izip_longest(*splits, fillvalue=0)))

**Solution 2: *Pad with `[0] * lengthDifference`***

    def compareVersion(self, version1, version2):
        v1, v2 = (map(int, v.split('.')) for v in (version1, version2))
        d = len(v2) - len(v1)
        return cmp(v1 + [0]*d, v2 + [0]*-d)

**Solution 3: *Recursive, add zeros on the fly***

    def compareVersion(self, version1, version2):
        main1, _, rest1 = ('0' + version1).partition('.')
        main2, _, rest2 = ('0' + version2).partition('.')
        return cmp(int(main1), int(main2)) or \\
               len(rest1+rest2) and self.compareVersion(rest1, rest2)