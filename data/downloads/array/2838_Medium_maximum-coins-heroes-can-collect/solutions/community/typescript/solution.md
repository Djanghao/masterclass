# Sort heroes and monsters + 2 points algorithm, no additional explanation 😅

**Author:** dimadidyk0
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/5911984/](https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/5911984/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n*log(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function maximumCoins(heroes: number[], monsters: number[], coins: number[]): number[] {
    const sortedMonstersWithRelations = monsters
        .map((power, index) => ({ power, index, coins: coins[index]}))
        .sort((a,b) => a.power - b.power);
    const sortedHerosWithRelations = heroes
        .map((power, index) => ({ power, index }))
        .sort((a,b) => a.power - b.power);

    const answer = Array.from({ length: heroes.length }, () => 0);

    let currentCoins = 0;
    for (let i = 0, y = 0; i < sortedHerosWithRelations.length; i++) {
        const { power: heroPower, index: heroIndex } = sortedHerosWithRelations[i];
        while (y < sortedMonstersWithRelations.length && sortedMonstersWithRelations[y].power <= heroPower) {
            currentCoins += sortedMonstersWithRelations[y].coins;
            y++;
        }
        answer[heroIndex] = currentCoins;
    }
    // console.log(sortedMonstersWithRelations, sortedHerosWithRelations);
    return answer;
};
```