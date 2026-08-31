# [Java/C++/Python] Bit Count 🔥

**Author:** lee215
**Votes:** 85
**Link:** [https://leetcode.com/problems/minimize-xor/solutions/2648723/](https://leetcode.com/problems/minimize-xor/solutions/2648723/)

---

# **Intuition**
Firstly we need to know the number of set bits of `num1` and `num2`.
Let `a = bitCount(num1)` and `b = bitCount(num2)`.

If `a == b`, we can pick `x = num1` and `x XOR num1 = 0` is minimal.
<br>

# **Explanation**
If `a > b`, we can pick `x` equals the bigger `b` bits of `num1`,
so that we can XOR the bigger `b` bits of `num1`,
and keep the smaller `a - b` bits left to make result small.

If `a < b`, we can firstly pick `x = num1`,
and additionaly we need to pick `b - a` more bits that not in `num1`.
We check from the smaller bits until `x` have `b` bits.
<br>

# **Complexity**
Time `O(n^2)`
Space `O(n)`
<br>

**Java**
```java
    public int minimizeXor(int num1, int num2) {
        int a = Integer.bitCount(num1), b = Integer.bitCount(num2), res = num1;
        for (int i = 0; i < 32; ++i) {
            if (a > b && ((1 << i) & num1) > 0) {
                res ^= 1 << i;
                a--;
            }
            if (a < b && ((1 << i) & num1) == 0) {
                res ^= 1 << i;
                a++;
            }
        }
        return res;
    }
```

**C++**
```cpp
    int minimizeXor(int num1, int num2) {
        int a = __builtin_popcount(num1), b = __builtin_popcount(num2), res = num1;
        for (int i = 0; i < 32; ++i) {
            if (a > b && ((1 << i) & num1) > 0) {
                res ^= 1 << i;
                a--;
            }
            if (a < b && ((1 << i) & num1) == 0) {
                res ^= 1 << i;
                a++;
            }
        }
        return res;
    }
```

**Python**
```py
    def minimizeXor(self, num1, num2):
        a, b = num1.bit_count(), num2.bit_count()
        res = num1
        for i in range(32):
            if a > b and (1 << i) & num1 > 0:
                res ^= 1 << i
                a -= 1
            if a < b and (1 << i) & num1 == 0:
                res ^= 1 << i
                a += 1
        return res
```
**Python2**
```py
    def minimizeXor(self, num1, num2):
        a, b = bin(num1).count('1'), bin(num2).count('1')
        res = num1
        for i in range(32):
            if cmp(a, b) == cmp((1 << i) & num1, 0.5):
                res ^= 1 << i
                a -= cmp(a, b)
        return res
```
