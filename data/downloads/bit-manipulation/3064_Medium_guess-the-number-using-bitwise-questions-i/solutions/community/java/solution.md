# Java 1ms beats 100%: test each binary place value one at a time; use bitshifting

**Author:** texastim
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/5919132/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/5919132/)

---

# Intuition
We can check each binary place value one at a time, accumulating the values for the binary place values that the mystery number `n` also has bits set for.

# Approach
Iterate the possible place values from 2^0 through 2^29.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ because we always use 29 steps (comparisons) to determine the answer. The size of the mystery number `n` does not affect the algorithm.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ because we always store only 3 `int` values (i.e., `res`, `maxNum`, and `curCandidateNum`)

# Notes on the Code
For performance, we use bit shifting instead of exponentiation or multiplication in two places:
- to calculate the largest binary number less than the maximum possible value of the mystery number `n` (instead of `int maxNum = Math.pow(2, 29)`)
- to update the loop variable by doubling it each cycle (instead of `curCandidateNum *= 2`)


# Code
```java []
// start 11:17pm
// solve 11:29pm

public class Solution extends Problem {
    public int findNumber() {
        int res = 0;  // what we'll return
        int maxNum = 1 << 29;  // largest binary number less than 2^30 - 1

        for (int curCandidateNum = 1; curCandidateNum <= maxNum; curCandidateNum = curCandidateNum << 1) {
            if (commonSetBits(curCandidateNum) == 1) {
                res += curCandidateNum;
            }
        }

        return res;
    }
}
```