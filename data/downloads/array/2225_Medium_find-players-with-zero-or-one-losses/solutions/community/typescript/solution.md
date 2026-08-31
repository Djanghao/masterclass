# Simple Solution with map and filter ✅

**Author:** alwinlnj
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4569121/](https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4569121/)

---


# Code
```
function findWinners(matches: number[][]): number[][] {
    let resCount: Map<number, { win: number; lose: number }> = new Map<number, { win: number; lose: number }>()
    matches.forEach(([winner, loser]) => {
        resCount.set(winner, { win: (resCount.get(winner)?.win || 0) + 1, lose: (resCount.get(winner)?.lose || 0) });
        resCount.set(loser, { win: (resCount.get(loser)?.win || 0), lose: (resCount.get(loser)?.lose || 0) + 1 });
      });
    return [
        Array.from(resCount).filter(([_, value]) => value.lose === 0).map(v => v[0]).sort((a, b) => a-b),
        Array.from(resCount).filter(([_, value]) => value.lose === 1).map(v => v[0]).sort((a, b) => a-b)
    ]
};
```