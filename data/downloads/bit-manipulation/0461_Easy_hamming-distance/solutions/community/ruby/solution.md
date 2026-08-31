# Ruby single line solutions using XOR

**Author:** divyad25
**Votes:** 1
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/397024/](https://leetcode.com/problems/hamming-distance/solutions/397024/)

---

```
def hamming_distance(x, y)
  (x ^ y).to_s(2).count('1')
end
```