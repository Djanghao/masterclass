# ✅Python || Easy Approach

**Author:** chuhonghao01
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/2456759/](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/2456759/)

---

```
class Solution:
    def minNumberOfHours(self, initialEnergy: int, initialExperience: int, energy: List[int], experience: List[int]) -> int:
        
        ans = 0
        n = len(energy)

        for i in range(n):
            while initialEnergy <= energy[i] or initialExperience <= experience[i]:
                if initialEnergy <= energy[i]:
                    initialEnergy += 1
                    ans += 1
                if initialExperience <= experience[i]:
                    initialExperience += 1
                    ans += 1
            initialEnergy -= energy[i]
            initialExperience += experience[i]
        
        return ans
```