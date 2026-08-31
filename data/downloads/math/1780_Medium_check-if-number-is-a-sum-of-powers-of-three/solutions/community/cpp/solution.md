# [C++] Iterative vs. Recursive Solution Compared and Explained, 100% Time, 100% Space

**Author:** Ajna2
**Votes:** 12
**Link:** [https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/1097011/](https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/1097011/)

---

Relatively simple problem - think how you would convert a number to binary (ie: base `2`) then do the same to convert it to base `3` - returning `false` as soon as we get a`2` digit in our number.

If we managed to reduce the original number to `0`, then it was completely made of powers of `3` (ie: in base `3` it would just be made of `0` and `1`s).

The code:

```cpp
class Solution {
public:
    bool checkPowersOfThree(int n) {
        // grinding n down by powers of 3
        while (n) {
            if (n % 3 == 2) return false;
            n /= 3;
        }
        return true;
    }
};
```

Same logic, expressed as a recursive one-liner:

```cpp
class Solution {
public:
    bool checkPowersOfThree(int n) {
        return n ? n % 3 != 2 && checkPowersOfThree(n / 3) : true;
    }
};
```