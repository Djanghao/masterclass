# Python3 elegant pythonic clean and easy to understand

**Author:** Tallicia
**Votes:** 19
**Link:** [https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/1955460/](https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/1955460/)

---

Simple while loop and slicing  to repeat 3 set process and aggregation

```
class Solution:
    def digitSum(self, s: str, k: int) -> str:
        while len(s) > k:
            set_3 = [s[i:i+k] for i in range(0, len(s), k)]
            s = ''
            for e in set_3:
                val = 0
                for n in e:
                    val += int(n)
                s += str(val)
        return s
```

can be condensed and more pythonic:

```
        while len(s) > k:
            set_3 = [s[i:i+k] for i in range(0, len(s), k)]
            s = ''
            for e in set_3:
                s += str(sum([int(n) for n in e]))
        return s
```