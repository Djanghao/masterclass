# Simple once you get past the way it's described

**Author:** patorikku
**Votes:** 0
**Link:** [https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/5628746/](https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/5628746/)

---

# Intuition
the problem description is making it seem more complicated than it is. The rules of the game are such that Alice wins when the 2 numbers add up to be odd.

# Approach
This boils down to finding the number of pairs that can be made from two ranges, then cutting that in half because half of them will add up to be odd. 

# Complexity
- Time complexity:
$$O(1)$$


- Space complexity:
$$O(1)$$

# Code
```
class Range {
    constructor(readonly start: number, readonly end: number) {}
    get size() {
        return this.end - this.start + 1;
    }
}

function flowerGame(n: number, m: number): number {
    const rangeN = new Range(1, n)
    const rangeM = new Range(1, m)
    // the number of pairs that can be made from two ranges
    const pairCount = rangeN.size * rangeM.size;

    // for any pair (x,y), x+y must be odd to be counted
    return Math.floor(pairCount / 2);
};
```