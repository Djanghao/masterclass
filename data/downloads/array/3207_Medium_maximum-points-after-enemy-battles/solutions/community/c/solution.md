# ✅💯🔥Simple Code🚀📌|| 🔥✔️Easy to understand🎯 || 🎓🧠Beats 100%🔥|| Beginner friendly💀💯

**Author:** atishayj4in
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5530646/](https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5530646/)

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
```
class Solution {
    public long maximumPoints(int[] enemyEnergies, int currentEnergy) {
        long minEnergy = Integer.MAX_VALUE;
        long totalEnergy = currentEnergy;
        for(var energy : enemyEnergies){
            minEnergy = Math.min(energy, minEnergy);
            totalEnergy += energy;
        }
        if(currentEnergy < minEnergy){
            return 0;
        }
        totalEnergy -= minEnergy;
        return totalEnergy / minEnergy;
    }
}
```

![a9a682ef-8a56-461e-9e1b-7654b114838f_1721590703.0971212.jpeg](./images/0.jpeg)