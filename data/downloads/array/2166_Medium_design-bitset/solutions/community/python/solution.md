# [C++/Python] Different Solutions

**Author:** lee215
**Votes:** 44
**Link:** [https://leetcode.com/problems/design-bitset/solutions/1748480/](https://leetcode.com/problems/design-bitset/solutions/1748480/)

---

**C++**
Implement with a string.
All operation is `O(1)`, 
except `toString()`

We record if we flip it with `isFlip`, 
we don't need to really flip it.
```cpp
    int a = 0, sz = 0, cnt = 0, isFlip = 0;
    string s;
    Bitset(int size) {
        sz = size;
        s = string(sz, '0');
    }
    
    void fix(int idx) {
        if (s[idx] == '0' + isFlip) {
            s[idx] = '1' + '0' - s[idx];
            cnt++;
        }
    }
    
    void unfix(int idx) {
        if (s[idx] == '1' - isFlip) {
            s[idx] = '1' + '0' - s[idx];
            cnt--;
        }
    }
    
    void flip() {
        isFlip ^= 1;
        cnt = sz - cnt;
    }
    
    bool all() {
        return cnt == sz;
    }
    
    bool one() {
        return cnt > 0;
    }
    
    int count() {
        return cnt;
    }
    
    string toString() {
        if (isFlip) {
            string s2 = s;
            for (auto& c: s2)
                c = '0' + '1' - c;
            return s2;
        }
        return s;
    }
```

**Python**
Implement with an integer, 
all operation is `O(1) * O(bit operation)`, 
except `toString()`.

```py
class Bitset(object):

    def __init__(self, size):
        self.a = 0
        self.size = size
        self.cnt = 0

    def fix(self, idx):
        if self.a & (1 << idx) == 0:
            self.a |= 1 << idx
            self.cnt += 1

    def unfix(self, idx):
        if self.a & (1 << idx):
            self.a ^= 1 << idx
            self.cnt -= 1

    def flip(self):
        self.a ^= (1 << self.size) - 1
        self.cnt = self.size - self.cnt

    def all(self):
        return self.cnt == self.size

    def one(self):
        return self.a > 0

    def count(self):
        return self.cnt

    def toString(self):
        a = bin(self.a)[2:]
        return a[::-1] + '0' * (self.size - len(a))
```
