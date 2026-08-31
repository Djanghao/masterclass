# C++ Simple and Easy Solution

**Author:** YehudisK
**Votes:** 52
**Link:** [https://leetcode.com/problems/reverse-bits/solutions/1334532/](https://leetcode.com/problems/reverse-bits/solutions/1334532/)

---

```
class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        uint32_t res = 0;
        
        for (int i = 0; i < 32; i++) {
            res <<= 1;
            res += n % 2;
            n >>= 1;
        }
        
        return res;
    }
};
```
**Like it? please upvote!**