# JavaScript Dynamic Programming

**Author:** stevenkinouye
**Votes:** 4
**Link:** [https://leetcode.com/problems/stone-game-iii/solutions/564393/](https://leetcode.com/problems/stone-game-iii/solutions/564393/)

---

Solution From : https://leetcode.com/problems/stone-game-iii/discuss/564260/JavaC%2B%2BPython-DP-O(1)-Space

```javascript
var stoneGameIII = function(stoneValue) {
    const dp = new Array(stoneValue.length).fill(-Infinity);
    for (let i = stoneValue.length - 1; i >= 0; i--) {
        let points = 0;
        for (let numStones = 1; numStones <= 3; numStones++) {
            if (i + numStones > stoneValue.length) break;
            points += stoneValue[i + numStones - 1];
            dp[i] = Math.max(dp[i], points - (dp[i + numStones] || 0));
        }
    }
    if (dp[0] === 0) return 'Tie';
    if (dp[0] > 0) return 'Alice';
    return 'Bob';
};
```