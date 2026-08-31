# Simple Java Solution O(n) time O(1) space with explanation

**Author:** lonewolf91
**Votes:** 39
**Link:** [https://leetcode.com/problems/minimum-health-to-beat-game/solutions/1881706/](https://leetcode.com/problems/minimum-health-to-beat-game/solutions/1881706/)

---

1. Add all the damages to find required health (Add one to the result because the health should be greater than zero at any time)
2. Find the maximum number out of damage array to determine which level to use the armor in.
3. To optimally use the armor, we need to use it against the level that causes the most damage. Subtract this from the health to get the minimum required health.

```
class Solution {
    public long minimumHealth(int[] damage, int armor) {
        int max = 0;
        long health = 1; // Since we need to be grater than 0 to beat the game at all times
        
        for(int i=0; i<damage.length;i++){
			// 1. Add all the damages to the result.
            health += damage[i];
			// 2. Find the maximum number out of damage array.
            max = Math.max(max,damage[i]);
        }
        
		// 3. To optimally use the armor, we need to use it against the that level that inflicts the most damage.
        health -= Math.min(max,armor);
        return health;
    }
```