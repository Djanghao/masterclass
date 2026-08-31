# Python concise solution with comments.

**Author:** OldCodingFarmer
**Votes:** 50
**Link:** [https://leetcode.com/problems/one-edit-distance/solutions/50095/](https://leetcode.com/problems/one-edit-distance/solutions/50095/)

---

        
    def isOneEditDistance(self, s, t):
        if s == t:
            return False
        l1, l2 = len(s), len(t)
        if l1 > l2: # force s no longer than t
            return self.isOneEditDistance(t, s)
        if l2 - l1 > 1:
            return False
        for i in xrange(len(s)):
            if s[i] != t[i]:
                if l1 == l2:
                    s = s[:i]+t[i]+s[i+1:]  # replacement
                else:
                    s = s[:i]+t[i]+s[i:]  # insertion
                break
        return s == t or s == t[:-1]