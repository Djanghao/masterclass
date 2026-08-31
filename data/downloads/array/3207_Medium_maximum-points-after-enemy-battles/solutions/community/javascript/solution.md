# Solution By Dare2Solve | Detailed Explanation | Clean Code

**Author:** Dare2Solve
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5428967/](https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5428967/)

---

```Explanation []
authorslog.vercel.app/blog/wWEVjCzptL
```

# Code

```cpp []
class Solution {
public:
    long long maximumPoints(vector<int>& enemyEnergies, int currentEnergy) {
        int minimumEnergy = *min_element(enemyEnergies.begin(), enemyEnergies.end());
        if (currentEnergy < minimumEnergy) return 0;
        currentEnergy -= minimumEnergy;
        currentEnergy += accumulate(enemyEnergies.begin(), enemyEnergies.end(), 0);
        return currentEnergy / minimumEnergy;
    }
};
```

```python []
class Solution:
    def maximumPoints(self, enemyEnergies: List[int], currentEnergy: int) -> int:
        minimumEnergy = min(enemyEnergies)
        if currentEnergy < minimumEnergy:
            return 0
        currentEnergy -= minimumEnergy
        currentEnergy += sum(enemyEnergies)
        return currentEnergy // minimumEnergy
```

```java []
public class Solution {
    public long maximumPoints(int[] enemyEnergies, int currentEnergy) {
        int minimumEnergy = Arrays.stream(enemyEnergies).min().getAsInt();
        if (currentEnergy < minimumEnergy) return 0;
        currentEnergy -= minimumEnergy;
        for (int energy : enemyEnergies) currentEnergy += energy;
        return currentEnergy / minimumEnergy;
    }
}
```

```javascript []
/**
 * @param {number[]} enemyEnergies
 * @param {number} currentEnergy
 * @return {number}
 */
var maximumPoints = function (enemyEnergies, currentEnergy) {
    var minimumEnergy = Math.min(...enemyEnergies);
    if (currentEnergy < minimumEnergy) return 0;
    currentEnergy -= minimumEnergy;
    currentEnergy += enemyEnergies.reduce((a, b) => a + b);
    return Math.floor(currentEnergy / minimumEnergy);
};
```