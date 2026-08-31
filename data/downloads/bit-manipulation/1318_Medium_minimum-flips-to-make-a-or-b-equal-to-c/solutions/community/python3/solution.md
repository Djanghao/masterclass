# [Java/Python 3] Bit manipulation w/ explanation and analysis.

**Author:** rock
**Votes:** 68
**Link:** [https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/477690/](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/477690/)

---

**Method 1:**

**Credit to @codedayday:** for contribution to remove redundant part of the code.

----

**Q & A**
Q1: What is the `mask`? is it `00...01` at the beginning, and move bit `1` to the left when `i` is increasing?
A1: Exactly. `mask` changes as the following during iteration:
	
	00...01 -> 00...010 -> 00...0100 -> 00...01000 -> ...

Q2: Is the `31` here because in C++ int is 32-bit long and there's a sign bit?
A2: Because the question said that `a,b,c` are positive numbers. -- **Credit to @KHVic**

----

1. if `(a | b) ^ c` is `0`, `a | b` and `c` are equal, otherwise not equal and we need to check them bit by bit;
2. For `ith` bit of `(a | b) ^ c`, use `1 << i` as mask to do `&` operation to check if the bit is `0`; if not, `ith` bits of `a | b` and `c` are not same and we need at least `1` flip; there are 3 cases:
	i) the `ith` bit of `a | b`  less than that of `c`; then `ith` bit of `a | b` must be `0`, we only need to flip the `ith` bit of either `a` or `b`;
	ii) the `ith` bit of `a | b`  bigger than that of `c`; then `ith` bit of `a | b` must be `1`, but if only one of `a` or `b`'s `ith` bit is `1`, we only need to flip one of them;
	iii) Other case, we need to flip both set bit of `a` and `b`, hence need `2` flips.
	In short, **if `ith` bits of `a | b` and `c` are not same, then only if  `ith` bits of `a` and `b` are both `1` and  that of `c` is `0`, we need `2` flips; otherwise only `1` flip needed.**
```java
    public int minFlips(int a, int b, int c) {
        int ans = 0, ab = a | b, equal = ab ^ c;
        for (int i = 0; i < 31; ++i) {
            int mask = 1 << i;
            if ((equal & mask) > 0)  // ith bits of a | b and c are not same, need at least 1 flip.
             // ans += (ab & mask) < (c & mask) || (a & mask) != (b & mask) ? 1 : 2;
                ans += (a & mask) == (b & mask) && (c & mask) == 0 ? 2 : 1; // ith bits of a and b are both 1 and that of c is 0?
        }
        return ans;
    }
```
```python
    def minFlips(self, a: int, b: int, c: int) -> int:
        ab, equal, ans = a | b, (a | b) ^ c, 0
        for i in range(31):
            mask = 1 << i
            if equal & mask > 0:
              # ans += 1 if (ab & mask) < (c & mask) or (a & mask) != (b & mask) else 2
                ans += 2 if (a & mask) == (b & mask) and (c & mask) == 0 else 1
        return ans
```

----

**Method 2:**

The following idea and simple codes are from **@mzchen**:

**Step 1**: `a | b` is what we have while `c` is what we want. An XOR operation finds all different bits, i.e. `(a | b) ^ c` sets the bits where flip(s) is needed. Then we count the set bits.
**Step 2**: There is only one case when two flips are needed: a bit is `0` in `c` but is `1` in both `a` and `b`. An AND operation finds all common `1` bits, i.e. `a & b & ((a | b) ^ c)` sets the common `1` bits in `a`, `b` and the must-flip bits found in Step 1.

```java
    public int minFlips(int a, int b, int c) {
        return Integer.bitCount(c ^= (a | b)) + Integer.bitCount(a & b & c);
    }
```
```python
    def minFlips(self, a: int, b: int, c: int) -> int:
        return (c := (a | b) ^ c).bit_count() + (a & b & c).bit_count()
```
**Analysis:**
Time: O(L), space: O(1), where L is the number of bits in an integer.