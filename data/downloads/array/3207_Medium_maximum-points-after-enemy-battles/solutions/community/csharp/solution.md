# Loop with two pointers with O(n) time complexity

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5482883/](https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5482883/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
public class Solution {
    public long MaximumPoints(int[] enemyEnergies, int currentEnergy) {
        int len = enemyEnergies.Length;
        long points = 0L;
        if(len == 1)
            return currentEnergy/enemyEnergies[0];

        Array.Sort(enemyEnergies);
        if(enemyEnergies[0] > currentEnergy)
            return points;

        long sum = currentEnergy - enemyEnergies[0];
        points+= 1;

        for(int i = 1; i < len; i++)
        {
            sum += enemyEnergies[i];
        }
        
        points += (sum/enemyEnergies[0]);
        return points;
    }
}
```