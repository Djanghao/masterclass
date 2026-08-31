# One Liner

**Author:** votrubac
**Votes:** 45
**Link:** [https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3314042/](https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3314042/)

---

We can count each bit, which would make sense if we have a stream of bits.

For an integer, we can just mask old and even bits (using bitwise AND), and use `popcount` to count remaining bits.

**Java**
```java
public int[] evenOddBit(int n) {
    return new int[] {Integer.bitCount(n & 0b0101010101), 
                      Integer.bitCount(n & 0b1010101010)};
}
```
**C++**
```cpp
vector<int> evenOddBit(int n) {
    return {__builtin_popcount(n & 0b0101010101), 
            __builtin_popcount(n & 0b1010101010)};
}
```
**Python 3**
```python
class Solution:
    def evenOddBit(self, n: int) -> List[int]:
        return [(n & 0b10101010101).bit_count(), (n & 0b01010101010).bit_count()]
```