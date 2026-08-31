# Spend your shield for max damage level

**Author:** HamsterCoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-health-to-beat-game/solutions/3035333/](https://leetcode.com/problems/minimum-health-to-beat-game/solutions/3035333/)

---

# Intuition
Naive approach is to find total damage for all levels.
This amount of health + 1 will definitly be sufficient, to win the game.
Now to minimize it we need to spend all armor or maximum amount that we can.

# Complexity
- Time complexity: $$O(n)$$ walk over the input twice, to find sum and max
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minimumHealth(damage: number[], armor: number): number {
    // Question: is armor carried over to next levels?
    // Assume it is not

    // Time complexity O(n)
    // Space complexity O(1)

    // 1. Sum damage
    let damageSum = 0;

    for (let current of damage) {
        damageSum += current;
    }

    // 2. Find max damage
    let maxDamage = Math.max(...damage);

    // 3. Adjust result
    return damageSum - Math.min(armor, maxDamage) + 1;
};

// Example [2,7,4,3] 4
// 13
```