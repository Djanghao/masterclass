# beat 100% in TS

**Author:** norflin
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/4729190/](https://leetcode.com/problems/stone-game-vi/solutions/4729190/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function stoneGameVI(aliceValues: number[], bobValues: number[]): number {
  const pile = Array.from(Array(aliceValues.length)).map((_, idx) => {
    return { values: { alice: aliceValues[idx], bob: bobValues[idx] }, totalValue: aliceValues[idx] + bobValues[idx] };
  });

  // take each stone one by one and increase player score for it's value for a player
  const scores = { alice: 0, bob: 0 }
  pile.sort((a, b) => b.totalValue - a.totalValue).forEach((stone, idx) => {
    const player = idx % 2 == 0 ? "alice" : "bob";
    scores[player] += stone.values[player];
  })

  if (scores.alice > scores.bob) return 1;
  else if (scores.bob > scores.alice) return -1;
  return 0;
}
```