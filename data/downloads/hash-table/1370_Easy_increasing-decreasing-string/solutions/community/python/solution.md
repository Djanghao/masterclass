# [Python] Easy-to-understand solution explained

**Author:** m-Just
**Votes:** 51
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/531928/](https://leetcode.com/problems/increasing-decreasing-string/solutions/531928/)

---

Steps:
1. Count the number of occurrences of every letter.
2. Sort in alphabetic order.
3. Follow the procedure defined in the problem statement.
```python
def sortString(self, s: str) -> str:
    d = sorted([c, n] for c, n in collections.Counter(s).items())
    r = []
    while len(r) < len(s):
        for i in range(len(d)):
            if d[i][1]:
                r.append(d[i][0])
                d[i][1] -= 1
        for i in range(len(d)):
            if d[~i][1]:
                r.append(d[~i][0])
                d[~i][1] -= 1
    return ''.join(r)
```
Vote up if you find this helpful, thanks!