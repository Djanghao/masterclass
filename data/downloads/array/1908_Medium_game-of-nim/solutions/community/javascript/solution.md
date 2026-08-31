# [JavaScript] Neat: 3 methods

**Author:** mxn42
**Votes:** 0
**Link:** [https://leetcode.com/problems/game-of-nim/solutions/3117154/](https://leetcode.com/problems/game-of-nim/solutions/3117154/)

---

## 1. Math (xor)\r
```js\r
const nimGame = piles => piles.reduce((sum, p) => sum ^ p, 0)\r
```\r
\r
## 2. Simulation - DP\r
```js\r
const nimGame = (piles) =>\r
    isNextPersonWinner(piles, piles.reduce((a, b) => a + b, 0))\r
\r
const isNextPersonWinner = memo((piles, remaining) => {\r
    if (remaining === 0)\r
        return false\r
    for (let i = 0; i < piles.length; ++i)\r
        for (let j = 1; j <= piles[i]; ++j) {\r
            piles[i] -= j\r
            const nextState = piles.slice().sort((a, b) => a - b)\r
            if (!isNextPersonWinner(nextState, remaining))\r
                return true\r
            piles[i] += j\r
        }\r
    return false\r
})\r
\r
function memo(fn) {\r
    const map = new Map()\r
    return (piles, remaining) => {\r
        const key = piles.join(' ')\r
        if (!map.has(key))\r
            map.set(key, fn(piles, remaining))\r
        return map.get(key)\r
    }\r
}\r
```\r
\r
\r
\r
## 3. Recursion + memo\r
```js\r
const nimGame = piles => helper(piles.join(''))\r
\r
const helper = memo((piles) => {\r
    if (piles.length === 0) \r
        return false\r
    for (let i = 0; i < piles.length; ++i)\r
        for (let x = 0, p = +piles[i]; x < p; ++x)\r
            if (!helper(piles.slice(0, i) + x + piles.slice(i + 1)))\r
                return true\r
    return false\r
})\r
\r
function memo(fn) {\r
    const map = new Map()\r
    return (key) => {\r
        if (!map.has(key))\r
            map.set(key, fn(key))\r
        return map.get(key)\r
    }\r
}\r
```