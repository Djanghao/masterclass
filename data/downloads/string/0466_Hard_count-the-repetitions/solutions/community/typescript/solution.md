# There is a solution in ts

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-repetitions/solutions/4538293/](https://leetcode.com/problems/count-the-repetitions/solutions/4538293/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function getMaxRepetitions(s1: string, n1: number, s2: string, n2: number): number {
    let idx2 = 0;

    let doWhile = true;
    let strCounter = 0;
    let sumChars = 0;
    let iterations = 0;
    while (doWhile && iterations < n1) {
        for (let idx1 = 0; idx1 < s1.length; idx1++) {
            const char1 = s1[idx1];
            const char2 = s2[idx2];
            if (char1 === char2) {
                sumChars++;
                idx2++;
                if (sumChars === s2.length) {
                    strCounter ++;
                    sumChars = 0;
                    idx2 = 0;
                }
            }
        }
        if (sumChars === 0) {
            doWhile = false;
        }
        iterations++;
    }
    return Math.floor((strCounter / n2) * (n1 / iterations));
}
```