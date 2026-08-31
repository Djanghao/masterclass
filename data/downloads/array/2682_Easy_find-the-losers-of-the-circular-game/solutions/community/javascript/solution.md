# Easy to read simulation solution

**Author:** eforce
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3522527/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3522527/)

---

# Code
```
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    const players = new Array(n).fill(0);
    let index = 0;
    let turn = 1;
    
    while (true) {
        ++players[index];
        if (players[index] === 2) break;
        index += turn++ * k;
        index %= n;
    }

    const result = [];

    for (let i = 1; i < n; ++i) {
        if (players[i] === 0) result.push(i + 1);
    }

    return result;
};
```