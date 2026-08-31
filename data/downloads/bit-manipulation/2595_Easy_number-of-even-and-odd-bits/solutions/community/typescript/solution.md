# O(1) popcount

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/5567902/](https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/5567902/)

---

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
const popcount = (v: number) => {
    let c = v - ((v >>> 1) & 0x55555555)
    c = ((c >>> 2) & 0x33333333) + (c & 0x33333333)
    c = ((c >>> 4) + c) & 0x0f0f0f0f
    c = ((c >>> 8) + c) & 0x00ff00ff
    c = ((c >>> 16) + c) & 0x0000ffff
    return c
}

const evenOddBit = (v: number) => [popcount(v & 0x55555555), popcount(v & 0x2aaaaaaa)]

```