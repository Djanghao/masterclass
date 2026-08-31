# Typescript | 100% | 163ms | With Easy To Understand Comments

**Author:** nicolich
**Votes:** 3
**Link:** [https://leetcode.com/problems/elimination-game/solutions/1659048/](https://leetcode.com/problems/elimination-game/solutions/1659048/)

---

```
/*
 * Draw a couple of iterations and try to see a pattern evolve. The pattern has two parts:
 * 1. Notice how steps between the numbers is first +1, then +2, then +4, then +8, ...
 * 2. Notice how when going right the first number is always removed.
 * 3. Notice how when going to the right the currently first number is only removed when there's an odd count of numbers remaining.
 */
function lastRemaining(n: number): number {
    let start = 1;
    let step = 1;
    let right = true;
    let countOfNumbersRemaining = n;
    
    while(countOfNumbersRemaining > 1) {
        const countOfNumbersRemainingIsOdd = countOfNumbersRemaining % 2 === 1;
        if (right) {
            /* Going to the right, the start always changes by the step: */
            start += step;
        } else {
            if (countOfNumbersRemainingIsOdd) {
                /* Going to the left, the start onyl changes if we have an odd count of numbers remaining: */
                start += step;
            }
        }
        
        /* Count of numbers always halves (rounded down for integer division): */
        countOfNumbersRemaining = Math.floor(countOfNumbersRemaining / 2);
        
        /* Prep for next iteration: */
        step *= 2; // steps always double!
        right = !right; // flip direction
    }
    
    return start;
};
```