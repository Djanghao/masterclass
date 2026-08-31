# javascript greedy 112ms

**Author:** henrychen222
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game-ix/solutions/1500588/](https://leetcode.com/problems/stone-game-ix/solutions/1500588/)

---

```
const stoneGameIX = (a) => {
    let f = Array(3).fill(0);
    for (const x of a) f[x % 3]++;
    f[0] %= 2;
    if (f[0] == 0) {
        if (f[1] == 0 || f[2] == 0) {
            return false;
        }
        return true;
    }
    return Math.abs(f[1] - f[2]) <= 2 ? false : true;
};
```