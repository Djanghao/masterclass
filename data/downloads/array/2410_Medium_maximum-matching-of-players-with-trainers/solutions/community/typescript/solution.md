# TypeScript sort and 2 pointer

**Author:** minhduc0802
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/6101263/](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/6101263/)

---

# Code
```typescript []
function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
    players.sort((a, b) => a - b)
    trainers.sort((a, b) => a - b)
    let i = 0, j = 0
    while (i < players.length && j < trainers.length) {
        if (players[i] <= trainers[j]) {
            i++
            j++
        }
        else j++
    }
    return i
};
```