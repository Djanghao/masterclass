# Python3 simple solution - RLE Iterator

**Author:** r0bertz
**Votes:** 6
**Link:** [https://leetcode.com/problems/rle-iterator/solutions/681473/](https://leetcode.com/problems/rle-iterator/solutions/681473/)

---

```
class RLEIterator:

    def __init__(self, A: List[int]):
        self.A = A[::-1]

    def next(self, n: int) -> int:
        acc = 0
        while acc < n:
            if not self.A:
                return -1
            times, num = self.A.pop(), self.A.pop()
            acc += times
        if acc > n:
            self.A.append(num)
            self.A.append(acc - n)
        return num
```