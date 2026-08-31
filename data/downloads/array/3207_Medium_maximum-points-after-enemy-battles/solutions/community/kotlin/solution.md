# Kotlin | O(n log n) -> O(n) time, O(1) space | greedy | explained  (530ms, 65MB -> 507ms, 62MB)

**Author:** tonycode88
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5430435/](https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5430435/)

---

# Intuition
0) The final goal is to get maximum points
1) We will get max points if we'll fire (operation-1) multiple times at the weakest unmarked enemy
2) Then, to refill our energy, we should consume the strongest unmarked enemy and repeat from (1)

Greedy alg

# Approach with $$O(n \\log n)$$ time
- Sort `enemyEnergies`, the first item is the weakest enemy, the last is the strongest one
- Keep `lastUnmarkedIdx` and decrease it as we consume next strongest enemy
- iteration
   - fire at weakest as much as possible times
   - consume the strongest
   - until all enemies will be eliminated or we would be out of energy to fire at the weakest

# Complexity
- Time complexity: $$O(n \\log n)$$ (sort `enemyEnergies`, then linear iteration)
- Space complexity: $$O(1)$$ (only a few variables)

# Code
```
class Solution {

    /**
     * Greedy algorithm to gain more points:
     * - fire at the weakest enemy (gain +1 point) until out of currentEnergy
     * - then acquire strongest
     * - repeat
     *
     * @param enemyEnergies 1 <= enemyEnergies.size <= 10^5
     */
    fun maximumPoints(enemyEnergies: IntArray, currentEnergy: Int): Long {
        enemyEnergies.sort()  // weakest .. strongest enemy
        var lastUnmarkedIdx = enemyEnergies.lastIndex  // due to greedy alg we acquire the strongest unmarked enemy, reducing this index

        var myEnergy = currentEnergy
        var points = 0L

        // O(n) cycle
        do {
            // operation 1 - fire at weakest unmarked enemy until we drain out of energy
            val weakestUnmarkedEnemyEnergy = enemyEnergies.first()
            val nFires = myEnergy / weakestUnmarkedEnemyEnergy
            points += nFires
            myEnergy -= nFires * weakestUnmarkedEnemyEnergy

            var enemyAcquired = false
            if (points > 0) {
                // operation 2 - acquire an unmarked strongest enemy to refill our energy
                myEnergy += enemyEnergies[lastUnmarkedIdx]
                lastUnmarkedIdx--
                enemyAcquired = true
            }
        } while (enemyAcquired && lastUnmarkedIdx >= 0)

        return points
    }

}

```


# Optimized Approach with $$O(n)$$ time

- As you can notice from the code above, we just "firing at the weakest enemy" and consuming the rest enemies
- So, we can optimize the solution and:
  - fire once at the weakest (to gain 1 point)
  - consume all other enemies
  - fire as much as possible at the weakest enemy (increasing points)

# Complexity
- Time complexity: $$O(n)$$ (two iterations throught `enemyEnergies` - to find the minimal and to make sum of rest items)
- Space complexity: $$O(1)$$ (only a few variables)


# Code

```
class Solution {

    /**
     * Greedy algorithm to gain more points
     *
     * @param enemyEnergies 1 <= enemyEnergies.size <= 10^5
     */
    fun maximumPoints(enemyEnergies: IntArray, currentEnergy: Int): Long {
        var weakestEnemyIdx = 0
        var weakestEnemyEnergy = enemyEnergies[weakestEnemyIdx]
        for (idx in 1 until enemyEnergies.size) {
            if (enemyEnergies[idx] < weakestEnemyEnergy) {
                weakestEnemyIdx = idx
                weakestEnemyEnergy = enemyEnergies[weakestEnemyIdx]
            }
        }

        if (weakestEnemyEnergy > currentEnergy) {
            // we don't have enough energy event to fire at the weakest enemy
            return 0
        }

        var acquiredEnergy = 0L
        enemyEnergies.forEachIndexed { idx, energy ->
            if (idx != weakestEnemyIdx) acquiredEnergy += energy
        }

        return (currentEnergy + acquiredEnergy) / weakestEnemyEnergy
    }

}
```
