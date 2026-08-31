# ✅ [Python] Binary Search || Faster than 100% ||  Clean and Easy to Understand

**Author:** linfq
**Votes:** 8
**Link:** [https://leetcode.com/problems/range-frequency-queries/solutions/1589789/](https://leetcode.com/problems/range-frequency-queries/solutions/1589789/)

---

```
class RangeFreqQuery(object):
    def __init__(self, arr):
        self.data = collections.defaultdict(list)
        for i, n in enumerate(arr):
            self.data[n].append(i)
        

    def query(self, left, right, value):
        return bisect.bisect_right(self.data[value], right) - bisect.bisect_left(self.data[value], left)
```
**Please UPVOTE!**