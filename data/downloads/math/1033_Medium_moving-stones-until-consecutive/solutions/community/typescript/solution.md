# Easy to understand approach.

**Author:** heiseshandian
**Votes:** 0
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive/solutions/4840647/](https://leetcode.com/problems/moving-stones-until-consecutive/solutions/4840647/)

---

## Intuition
The goal of the problem is to find the minimum and maximum number of moves required to position three stones on a line, consecutively and numbered from 1 to \\(n\\), such that there is no gap between the stones. The key insight is to realize that the positioning of the stones only depends on the relative distances between them, not their absolute positions on the line.

## Approach
1. First, find the minimum (`min`), maximum (`max`), and middle (`mid`) values of the given stone positions `a`, `b`, and `c` to understand their current arrangement.
2. To calculate the **minimum moves**:
   - If the stones are already consecutive (`max - min == 2`), no moves are required (`0` moves).
   - If either pair of adjacent stones has a gap of 1 (`mid - min == 1` or `max - mid == 1`) or exactly 2 (`mid - min == 2` or `max - mid == 2`), only one move is needed to make the stones consecutive.
   - In all other cases, we need exactly 2 moves: one to move the outer stone next to the middle one, and another move to close any remaining gap.
3. To calculate the **maximum moves**, since we can only move the stones to positions adjacent to the other stones, it is `max - min - 2`. This is because the minimum and maximum stones define the bounds of the line, and we want to fill in the gaps, excluding the positions already occupied by the stones.

## Complexity Analysis
- **Time Complexity**: O(1) - The solution involves only arithmetic operations and comparisons, which are executed in constant time.
- **Space Complexity**: O(1) - The solution uses a fixed amount of space for the variables `min`, `max`, `mid`, `minMoves`, and `maxMoves`.

# Code
```
function numMovesStones(a: number, b: number, c: number): number[] {
    let min = Math.min(a, b, c);
    let max = Math.max(a, b, c);
    let mid = a + b + c - min - max;

    const minMoves =
        max - min === 2
            ? 0
            : mid - min === 2 ||
              max - mid === 2 ||
              mid - min === 1 ||
              max - mid === 1
            ? 1
            : 2;
    const maxMoves = max - min - 2;

    return [minMoves, maxMoves];
}
```