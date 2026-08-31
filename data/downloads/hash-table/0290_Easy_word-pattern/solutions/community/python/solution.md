# Short in Python

**Author:** StefanPochmann
**Votes:** 294
**Link:** [https://leetcode.com/problems/word-pattern/solutions/73433/](https://leetcode.com/problems/word-pattern/solutions/73433/)

---

This problem is pretty much equivalent to [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/). Let me reuse two old solutions.

From [here](https://leetcode.com/discuss/36438/1-liner-in-python?show=39070#c39070):

    def wordPattern(self, pattern, str):
        s = pattern
        t = str.split()
        return map(s.find, s) == map(t.index, t)

Improved version also from there:

    def wordPattern(self, pattern, str):
        f = lambda s: map({}.setdefault, s, range(len(s)))
        return f(pattern) == f(str.split())

From [here](https://leetcode.com/discuss/41379/1-line-in-python?show=41382#a41382):
        
    def wordPattern(self, pattern, str):
        s = pattern
        t = str.split()
        return len(set(zip(s, t))) == len(set(s)) == len(set(t)) and len(s) == len(t)

Thanks to zhang38 for pointing out the need to check len(s) == len(t) here.