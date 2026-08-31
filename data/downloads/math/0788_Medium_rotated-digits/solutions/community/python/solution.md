# Easy understand solution python O(1) space

**Author:** JefferyZZY
**Votes:** 29
**Link:** [https://leetcode.com/problems/rotated-digits/solutions/485290/](https://leetcode.com/problems/rotated-digits/solutions/485290/)

---

```
def rotatedDigits(self, N: int) -> int:
        count = 0
        for d in range(1, N+1):
            d = str(d)
            if '3' in d or '4' in d or '7' in d:
                continue
            if '2' in d or '5' in d or '6' in d or '9' in d:
                count+=1
        return count
```