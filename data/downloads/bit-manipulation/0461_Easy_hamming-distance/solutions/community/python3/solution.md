# Python 1-liner 32ms

**Author:** Vishruth_S
**Votes:** 11
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/1013098/](https://leetcode.com/problems/hamming-distance/solutions/1013098/)

---

```
def hammingDistance(self, x, y):
        return bin(x^y).count('1')
```