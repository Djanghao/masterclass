# Typescript Constant Time O(1)

**Author:** ProdigySim
**Votes:** 7
**Link:** [https://leetcode.com/problems/integer-break/solutions/1557878/](https://leetcode.com/problems/integer-break/solutions/1557878/)

---

Based on [observations by leetcode user kevin_gunner](https://leetcode.com/problems/integer-break/discuss/80923/O(n)-time-complexity-O(1)-space-Java-solution), the largest product will be obtained by dividing the number into as many threes as possible, combined with either a 4 or a 2.

e.g. 10 = 3 * 3 * 4 = 36
e.g. 14 = 3 * 3 * 3 * 3 * 2 = 162
e.g. 15 = 3 * 3 * 3 * 3 * 3 = 243

You must take care to deal with the base cases of 2 and 3, which cannot follow this rule since they can't be split into 3s with either a 2 or 4 remainder.

```
function integerBreak(n: number): number {
    // 2 and 3 can't be split into 3s, so handle them separately.
    if(n === 2) return 1;
    if(n === 3) return 2;
    switch(n % 3) {
        // Split this number into one less than as many 3s as possible and one 4.
        case 1: return 4 * Math.pow(3, Math.floor(n/3)-1);
        // Split this number into as many 3s as possible and one 2
        case 2: return 2 * Math.pow(3, Math.floor(n/3));
		// Split this number into entirely threes.
        case 0: return Math.pow(3, n/3);
    }
}
```