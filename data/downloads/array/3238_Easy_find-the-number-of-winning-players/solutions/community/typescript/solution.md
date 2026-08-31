# ✅✅ MAP SOLUTION ON JS/TS Beats 92.65% ✅✅

**Author:** evgeny-r9
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5836233/](https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5836233/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
We need to go through all the picks and create a new structure to calculate the count of colors by player.

![image.png](./images/0.png)


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function winningPlayerCount(n: number, pick: number[][]): number {
    const players = new Set();

    const map = new Map<number, Map<number, number>>();

    for (const [player, color] of pick) {
        if (players.has(player)) {
            continue;
        }

        if (!map.has(player)) {
            map.set(player, new Map<number, number>());
        }

        const colorsMap = map.get(player);
        const colorCount = (colorsMap.get(color) || 0) + 1;
        if (colorCount > player) {
            players.add(player);
        }
        colorsMap.set(color, colorCount);
    }

    return players.size;
};

```


# Code
```javascript []
/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function (n, pick) {
    const players = new Set();

    const map = new Map();

    for (const [player, color] of pick) {
        if (players.has(player)) {
            continue;
        }

        if (!map.has(player)) {
            map.set(player, new Map());
        }

        const colorsMap = map.get(player);
        const colorCount = (colorsMap.get(color) || 0) + 1;
        if (colorCount > player) {
            players.add(player);
        }
        colorsMap.set(color, colorCount);
    }

    return players.size;
};


```