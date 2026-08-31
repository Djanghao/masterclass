# Greedy | JS | Time: O(N LogN)

**Author:** muhamedaashiq
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/solutions/5715906/](https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/solutions/5715906/)

---


# Approach
Greedy

# Complexity
- Time complexity: O(N LogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
var minDamage = function(power, damage, health) {
    let totalDamage = 0, kills = 0, bobDamage = 0

    let enemyArr = []

    for (let i = 0; i < damage.length; i++) {
        totalDamage += damage[i]

        const aliveTime = Math.ceil(health[i] / power)
        
        enemyArr.push({
            i: i, 
            damage: damage[i],
            magnitude: (damage[i] / aliveTime),
            aliveTime:  aliveTime
        })
    }

    enemyArr.sort((a, b) => {
            // Kill enemy with higher magnitude
            // on match kill enemy with higher damage
            // on match kill enemy who ever lives for shorter span
            if (b.magnitude === a.magnitude) {
                if (b.damage === a.damage) {
                    return a.aliveTime - b.aliveTime 
                }
                return b.damage - a.damage
            }
            return b.magnitude - a.magnitude
        })

    let curEnemy = 0

    while (curEnemy < enemyArr.length) {
        // Add damage to bob until the previous enemy is alive
        bobDamage += (totalDamage * enemyArr[curEnemy].aliveTime)

        totalDamage -= damage[enemyArr[curEnemy].i] // Reduce damage

        curEnemy++ // Kill enemy and move to next enemy
    }

    return bobDamage

};

```