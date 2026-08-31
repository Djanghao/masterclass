# [C++] Simple 2 Steps Solution Explained, ~100% Time, ~60% Space

**Author:** Ajna
**Votes:** 19
**Link:** [https://leetcode.com/problems/implement-rand10-using-rand7/solutions/816213/](https://leetcode.com/problems/implement-rand10-using-rand7/solutions/816213/)

---

My main intuition was that `7 == 2 + 5` and `2 * 5 == 10`.

Seems still too abstract (or absurd)? Bear with me!

First of all we declare 2 variables, `n` and `m`, settimg them initially to be `rand7()` and `7`.

Then we make sure tha `n` is only in the `1 - 5` range and, if not, we regenerate it and assign `n - 5` to `m`, that thus would be in the `1 - 2` range. Notice that in this way `n` and `m` have the same probabiliy of still being each specific number in their own range.

In the second loop, we make sure that `m` has a `1 - 6` value, with similar logic of regenerating numbers until we need them.

Finally we return `n` + either `0` or `5`, depending if `m` is even or odd, respectively.

This gives us perfectly distributed numbers :)

The code:

```cpp
class Solution {
public:
    int n, m;
    int rand10() {
        // initialising the values
		n = rand7(), m = 7;
        // making sure n is in the right 1-5 range and, if we can, we settle m too
		while (n > 5) {
            m = n - 5;
            n = rand7();
        }
        // if m was not settled, we do it here
		while (m == 7) m = rand7();
        return (m % 2 ? 5 : 0) + n;
    }
};
```