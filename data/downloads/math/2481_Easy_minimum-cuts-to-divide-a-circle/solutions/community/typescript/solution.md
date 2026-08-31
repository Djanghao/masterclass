# Halving Logic: A Function for Equal Cuts

**Author:** traezeeofor
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/5091620/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/5091620/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
If n is even, the function returns half of n, indicating equal cuts. If n is 1, implying a single piece, no cuts are necessary and thus returns 0. For odd n, the function simply returns n, as each piece requires its own cut.

i sadly overthought this too. AI wasnt helpful. Had to look at past questions.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function numberOfCuts(n: number): number {
    return n % 2 == 0 ? n / 2 : n == 1 ? 0 : n
};
```