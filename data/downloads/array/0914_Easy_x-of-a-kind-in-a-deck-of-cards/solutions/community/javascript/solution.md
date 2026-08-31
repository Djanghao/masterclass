# Simple and fast JavaScript

**Author:** kqhasaki
**Votes:** 3
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/1338446/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/1338446/)

---

Runtime: 80 ms, faster than 84.62% of JavaScript online submissions for X of a Kind in a Deck of Cards.
Memory Usage: 40.8 MB, less than 61.54% of JavaScript online submissions for X of a Kind in a Deck of Cards.
```
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const rec = new Map()
    deck.forEach(val => {
        rec.set(val, (rec.get(val) ?? 0) + 1)
    })
    const vals = [...rec.values()]
    const largestCommonDivider = (a, b) => {
        let num1 = a, num2 = b
        while (num2 !== 0) {
            const div = num1 % num2
            num1 = num2
            num2 = div
        }
        return num1
    }
    return vals.reduce((cd, val) => largestCommonDivider(cd, val), vals[0]) >= 2
};
```