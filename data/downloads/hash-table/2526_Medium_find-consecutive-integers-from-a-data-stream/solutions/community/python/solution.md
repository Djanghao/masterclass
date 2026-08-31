# [Python] Just count it!

**Author:** pbelskiy
**Votes:** 43
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3014963/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3014963/)

---

```python
class DataStream:

    def __init__(self, value: int, k: int):
        self.v = value
        self.k = k
        self.n = 0

    def consec(self, num: int) -> bool:
        if num == self.v:
            self.n += 1
        else:
            self.n = 0

        return self.n >= self.k
```

Please vote up if you like my solution \uD83D\uDE4F