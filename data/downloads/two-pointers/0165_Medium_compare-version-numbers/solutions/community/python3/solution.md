# ✔️ [Python3] SOLUTION, Explained

**Author:** artod
**Votes:** 77
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/1797594/](https://leetcode.com/problems/compare-version-numbers/solutions/1797594/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

Firstly, we split versions by `.` and convert revisions to integers. Next, we iterate over revisions and compare one by one.

`zip_longest` - same as a `zip` but it also pads lists with zeros if lengths are not equal *(see https://docs.python.org/3/library/itertools.html#itertools.ziplongest)*

Runtime: 32 ms, faster than **83.77%** of Python3 online submissions for Compare Version Numbers.
Memory Usage: 13.8 MB, less than **99.63%** of Python3 online submissions for Compare Version Numbers.

```
class Solution:
    def compareVersion(self, v1: str, v2: str) -> int:
        v1, v2 = list(map(int, v1.split('.'))), list(map(int, v2.split('.')))  
        for rev1, rev2 in zip_longest(v1, v2, fillvalue=0):
            if rev1 == rev2:
                continue

            return -1 if rev1 < rev2 else 1 

        return 0
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**