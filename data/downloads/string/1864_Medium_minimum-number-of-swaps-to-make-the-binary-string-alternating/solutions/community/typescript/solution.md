# TypeScript - 100% Faster - Step by step w/ comments

**Author:** rgbedin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/4232142/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/4232142/)

---

# Code
```
function minSwaps(s: string): number {
    // There are only two possible alternatives:
    // 0101010...
    // 1010101...
    let alt1 = '';
    let alt2 = '';
    for (let i = 0; i < s.length; i++) {
        alt1 += i % 2 === 0 ? '0' : '1';
        alt2 += i % 2 !== 0 ? '0' : '1';
    }

    let mapSwapsAlt1 = new Map();
    mapSwapsAlt1.set('0', 0);
    mapSwapsAlt1.set('1', 0);

    let mapSwapsAlt2 = new Map();
    mapSwapsAlt2.set('0', 0);
    mapSwapsAlt2.set('1', 0);

    // Count how many digits are out of place and store in a map
    // We only have 0 and 1, so the map count out-of-place occurrences of them
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (alt1[i] !== char) {
            mapSwapsAlt1.set(alt1[i], mapSwapsAlt1.get(alt1[i]) + 1);
        }
        if (alt2[i] !== char) {
            mapSwapsAlt2.set(alt2[i], mapSwapsAlt2.get(alt2[i]) + 1);
        }
    }

    // An alternative is reachable if the number of swaps between 0 and 1 are equal
    let isAlt1Reachable = mapSwapsAlt1.get('0') === mapSwapsAlt1.get('1');
    let isAlt2Reachable = mapSwapsAlt2.get('0') === mapSwapsAlt2.get('1');
    let alt1Swaps = mapSwapsAlt1.get('0');
    let alt2Swaps = mapSwapsAlt2.get('0');

    if (isAlt1Reachable && !isAlt2Reachable) return alt1Swaps;
    if (!isAlt1Reachable && isAlt2Reachable) return alt2Swaps;
    if (!isAlt1Reachable && !isAlt2Reachable) return -1;

    return alt1Swaps > alt2Swaps ? alt2Swaps : alt1Swaps;
};
```