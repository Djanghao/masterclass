# 1 line Ruby/Python for Updated Problem

**Author:** StefanPochmann
**Votes:** 57
**Link:** [https://leetcode.com/problems/group-anagrams/solutions/19216/](https://leetcode.com/problems/group-anagrams/solutions/19216/)

---

The problem just got updated, now asking for different results. Here are some solutions for the new version.

All of them use the sorted string as the group identifier, so for example the words "leetcoder" and "electrode" both have the group identifier "cdeeelort" (or rather an array version of it), which is how I know that they're anagrams of each other.

---

**Ruby solution 1**

Just sort and group.

    def group_anagrams(strs)
      strs.sort.group_by { |s| s.chars.sort }.values
    end

---

**Ruby solution 2**

Group first, then sort each group. Could be faster for big cases (though isn't for the OJ test cases).

    def group_anagrams(strs)
      strs.group_by { |s| s.chars.sort }.values.map(&:sort)
    end

---

**Python solution 1**

Sort and group by group identifier, then sort each group normally.

    def groupAnagrams(self, strs):
        return [sorted(g) for _, g in itertools.groupby(sorted(strs, key=sorted), sorted)]

Or "breaking it down" to maybe make it more readable for beginners and because I just noticed that in Firefox it violates my self-imposed *"no scrollbars"* rule (I usually use Chrome and didn't think it differed):

    def groupAnagrams(self, strs):
        groups = itertools.groupby(sorted(strs, key=sorted), sorted)
        return [sorted(members) for _, members in groups]

---

**Python solution 2**

Using defaultdict to collect the groups.

    def groupAnagrams(self, strs):
        groups = collections.defaultdict(list)
        for s in strs:
            groups[tuple(sorted(s))].append(s)
        return map(sorted, groups.values())