# [Python3] Fermat's little theorem

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/fancy-sequence/solutions/1104996/](https://leetcode.com/problems/fancy-sequence/solutions/1104996/)

---

**Algo**
[Fermat's little theorem](https://en.wikipedia.org/wiki/Fermat%27s_little_theorem) states that if `p` is a prime number, then for any integer `a`, the number `a^p \u2212 a` is an integer multiple of `p`, i.e. `a^p = a (mod p)`. In this application, we need `a^(p-2) = a^-1 (mod p)` where `p` is `1_000_000_007`. 

**Implementation**
```
class Fancy:
    
    def __init__(self):
        self.data = []
        self.cmul = [1]
        self.csum = [0]
        self.mod = 1_000_000_007

    def append(self, val: int) -> None:
        self.data.append(val)
        self.cmul.append(self.cmul[-1])
        self.csum.append(self.csum[-1])

    def addAll(self, inc: int) -> None:
        self.csum[-1] += inc

    def multAll(self, m: int) -> None:
        self.cmul[-1] = (self.cmul[-1] * m) % self.mod
        self.csum[-1] = (self.csum[-1] * m) % self.mod
        
    def getIndex(self, idx: int) -> int:
        if idx < len(self.data): 
            ratio = self.cmul[-1] * pow(self.cmul[idx], self.mod-2, self.mod) # Fermat's little theorem
            return ((self.data[idx] - self.csum[idx]) * ratio + self.csum[-1]) % self.mod
        return -1 
```