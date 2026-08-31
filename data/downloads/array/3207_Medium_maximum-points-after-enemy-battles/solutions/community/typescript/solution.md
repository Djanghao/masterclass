# Easy Typescript Solution with Full Explanation

**Author:** chetannada
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5573275/](https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5573275/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(nlogn)$$ where n is the number of enemyEnergies. This is because we are sorting the enemyEnergies array, which has a time complexity of O(n log n). Additionally, we are iterating through the enemyEnergies array once, which has a time complexity of O(n).
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$ because we are not using any extra space that grows with the input size.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maximumPoints(enemyEnergies: number[], currentEnergy: number): number {

    // sort the enemyEnergies in increasing order
    enemyEnergies.sort((a, b) => a - b);

    // initialize points to 0
    let points: number = 0;

    // run while loop until enemeyEnergies.length is greater than 0 and currentEnergy is greater than or equal to first element of enemyEnergies
    while (enemyEnergies.length > 0 && currentEnergy >= enemyEnergies.at(0)) {

        // initialize minimumEnergy as first element of enemyEnergies
        let minimumEnergy: number = enemyEnergies.at(0);

        // divide currentEnergy by minimumEnergy
        let p: number = Math.floor(currentEnergy / minimumEnergy);

        // add p to points
        points += p;

        // multiply p with minimumEnergy and subtract from currentEnergy
        currentEnergy -= p * minimumEnergy;

        // if enemeyEnergies.length is greater than 0 and currentEnergy is less than to first element of enemyEnergies
        if (enemyEnergies.length > 0 && currentEnergy < enemyEnergies.at(0)) {

            // initialize maximumEnergy as last element of enemyEnergies
            let maximumEnergy: number = enemyEnergies.at(-1);

            // add maximumEnergy in to currentEnergy
            currentEnergy += maximumEnergy;

            // remove last element from enemyEnergies
            enemyEnergies.pop();
        }
    }

    // return final answer points
    return points;
};
```