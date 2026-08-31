# C++ bitwise xor solution, 1 line

**Author:** mzchen
**Votes:** 195
**Link:** [https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/479998/](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/479998/)

---

**Step 1**: `a | b` is what we have while `c` is what we want. An XOR operation finds all different bits, i.e. `(a | b) ^ c` sets the bits where flip(s) is needed. Then we count the set bits.
**Step 2**: There is only one case when two flips are needed: a bit is `0` in `c` but is `1` in both `a` and `b`. An AND operation finds all common `1` bits, i.e. `a & b & ((a | b) ^ c)` sets the common `1` bits in `a`, `b` and the must-flip bits found in Step 1.
```cpp []
int minFlips(int a, int b, int c) {
    return popcount<uint>((a | b) ^ c) + popcount<uint>(a & b & ((a | b) ^ c));
}
```
or simplify with an assignment:
```cpp []
int minFlips(int a, int b, int c) {
    return popcount<uint>(c ^= a | b) + popcount<uint>(a & b & c);
}
```
Note: The `popcount` function is a C++ 20 standard builtin function that counts set bits. LeetCode uses g++ compiler with the C++17 standard so we can use `__builtin_popcount` instead. For other compilers please use `bitset<32>().count()`.

Update (02/03/2024): LeetCode now uses clang compiler 17 with C++20 standard support, but it does not automatically convert signed argument types into unsigned ones. So we have to explicitly specify the type `<uint>`. Also, now that we have to perform the conversion, we can actually use `ulong` instead and combine two `popcount` calls into one, which makes the code even shorter:
```cpp []
int minFlips(int a, int b, int c) {
    return popcount((ulong)(c ^= a | b) << 32 | a & b & c);
}
```
An even shorter way for conversion:
```cpp []
int minFlips(int a, int b, int c) {
    return popcount(0ul + (c ^= a | b) << 32 | a & b & c);
}
```