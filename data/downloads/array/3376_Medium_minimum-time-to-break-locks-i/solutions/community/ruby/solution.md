# 100% beats

**Author:** Sumeet_Sharma-1
**Votes:** -1
**Link:** [https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6123367/](https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6123367/)

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
```cpp []
class Solution {
public:
    int findMinimumTime(vector<int>& powerLevels, int increment) {
        int totalLevels = powerLevels.size();
        vector<int> sortedLevels = powerLevels;
        int minTime = INT_MAX;
        
        sort(sortedLevels.begin(), sortedLevels.end());
        
        do {
            int totalTime = 0, multiplier = 1;
            for (int level : sortedLevels) {
                int timeRequired = (level + multiplier - 1) / multiplier;
                totalTime += timeRequired;
                multiplier += increment;
            }
            minTime = min(minTime, totalTime);
        } while (next_permutation(sortedLevels.begin(), sortedLevels.end()));
        
        return minTime;
    }
};

```