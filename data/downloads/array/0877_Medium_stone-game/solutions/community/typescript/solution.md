# Typescript approach

**Author:** Ranadeeps
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game/solutions/5676156/](https://leetcode.com/problems/stone-game/solutions/5676156/)

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
```typescript []
function findMaxStones(
    count: number,
    piles: number[],
    f: number,
    e: number,
    alice: number,
    bob: number,
    isMaxP: boolean
): boolean {
    if (count == piles.length) {
        if (alice > bob) {
            return true;
        } else {
            return false;
        }
    }
    if (isMaxP) {
        count++;
        let alice_1: number = alice + piles[f];
        let alice_2: number = alice + piles[e];
        return (
            findMaxStones(count, piles, f++, e, alice_1, bob, false) ||
            findMaxStones(count, piles, f, e--, alice_2, bob, false)
        );
    } else {
        count++;
        let bob_1: number = bob + piles[f];
        let bob_2: number = bob + piles[e];
        return (
            findMaxStones(count, piles, f++, e, alice, bob_1, true) ||
            findMaxStones(count, piles, f, e--, alice, bob_2, true)
        );
    }
}

function stoneGame(piles: number[]): boolean {
    const res: boolean = findMaxStones(0, piles, 0, piles.length - 1, 0, 0, true);
    return res;

};
```