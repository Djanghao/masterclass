# Python binary search O(lgn) and linear search O(n)

**Author:** savikx
**Votes:** 6
**Link:** [https://leetcode.com/problems/rle-iterator/solutions/1293159/](https://leetcode.com/problems/rle-iterator/solutions/1293159/)

---

If we don't take initialization into account, the time complexity of the binary search would be O(lgn)

Linear seach O(n)
```
class RLEIterator:

    def __init__(self, encoding: List[int]):
        self.a = encoding
        self.idx = 0
            

    def next(self, n: int) -> int:
        while self.idx + 1 < len(self.a):
            f, num = self.a[self.idx], self.a[self.idx + 1]
            if n > f:
                n -= f
                self.idx += 2
            elif n == f:
                self.idx += 2
                return num
            else:
                self.a[self.idx] -= n
                return num
        return -1
```
Bineary search O(lgn)
```
class RLEIterator:

    def __init__(self, encoding: List[int]):
        self.idx = i = 0
        self.arr = [] # accumulative sum of the number of elements
        self.num = []
        count = 0
        while i < len(encoding):
            f, num = encoding[i], encoding[i + 1]
            i += 2
            if f == 0: # skip 0
                continue
            count += f
            self.arr.append(count)
            self.num.append(num)
            

    def next(self, n: int) -> int:
        self.idx += n
        i = bisect.bisect_left(self.arr, self.idx)
        return self.num[i] if i < len(self.arr) else -1
        
```