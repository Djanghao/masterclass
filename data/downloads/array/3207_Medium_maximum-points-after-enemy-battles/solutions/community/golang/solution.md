# [Go] O(N) / O(1) solution with explanation

**Author:** kaiwen789
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5713092/](https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5713092/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Our energy is redued when we try to gain points. Thus we should always try to gain points using the enemy with the smallest energy. In other words, all other enemies with larger energy will be used to gain energy.


This leads to a greedy algorithm.

# Approach
<!-- Describe your approach to solving the problem. -->
By walking through the `enemyEnergies` array once, we are able to perform two things: (1) getting the total energy that we will be able to utilize, and (2) identifying the weakest enemy, i.e. the one with the lowest energy.

Two caveats: (1) When calculating the total energy, remember to subtract the energy from the weakest enemy. That is the one we are going to use to gain points. (2) Make sure the initial energy is sufficient to beat at least the weakest enemy once, so that we get one point to perform the second operation.

Finally, with the knowledge of the total energy we have, divide that number by the energy of the weakest enenmy gives us the points.

# Complexity
- Time complexity: O(N) since we only walk through the array once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1) since we don't need any additional data structure.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func maximumPoints(enemyEnergies []int, currentEnergy int) int64 {
    var totalEnergy int64 = int64(currentEnergy + enemyEnergies[0])
    weakest := enemyEnergies[0]
    for i := 1; i < len(enemyEnergies); i++ {
        totalEnergy += int64(enemyEnergies[i])
        if enemyEnergies[i] < weakest {
            weakest = enemyEnergies[i]
        }
    }
    if currentEnergy < weakest {
        return 0
    }

    totalEnergy -= int64(weakest)
    return totalEnergy / int64(weakest)
}
```