# Golang 100% super simple

**Author:** andnik
**Votes:** 15
**Link:** [https://leetcode.com/problems/reverse-bits/solutions/426492/](https://leetcode.com/problems/reverse-bits/solutions/426492/)

---

Simple solution using bit operations.
32 iterations, each time we:
1. Shift result left by 1 bit and append to it last bit from input number
2. Shift input number right by 1 bit

You can imagive it as two stacks, we pop items from one and push to another. Only your stacks have same length and always autofilled with 0s.

Here is code:
```
func reverseBits(num uint32) uint32 {
    var res uint32
    for i := 0; i < 32; i++ {
        res = res << 1 + num & 1
        num >>= 1
    }
    return res
}
```