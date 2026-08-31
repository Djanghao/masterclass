# 🔥💯 🎯 ✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/solutions/5867662/](https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/solutions/5867662/)

---

Here\u2019s the solution for the **divide players into equal teams with chemistry** problem, implemented in **multiple programming languages**.

---

# Intuition
We are tasked with dividing players into teams of two such that the sum of their skills in each team is equal. Once we form such pairs, we calculate the total chemistry, which is the sum of the products of their skills.

Sorting the players' skill levels allows us to form teams from the smallest and largest skill levels. If any team does not have the required sum, it is impossible to divide the players into valid teams.

---

# Approach
1. Sort the skill levels of the players.
2. The sum of skills in each team should be equal to the total sum of all skills divided by the number of teams.
3. Form teams by pairing the smallest and largest skills. If any team's skill sum does not match the expected value, return `-1`.
4. Otherwise, calculate the total chemistry as the product of the skills in each team and return it.

---

# Complexity
- **Time Complexity**: \\(O(n \\log n)\\) due to sorting the array, where \\(n\\) is the number of players.
- **Space Complexity**: \\(O(1)\\), or constant space, since we are modifying the input array in-place and using a few variables.

---

```dart []
class Solution {
  int dividePlayers(List<int> skill) {
    skill.sort();
    int totalSum = skill.reduce((a, b) => a + b);
    int n = skill.length;

    int targetSum = totalSum ~/ (n ~/ 2);
    int chemistrySum = 0;

    for (int i = 0; i < n ~/ 2; i++) {
      int teamSum = skill[i] + skill[n - 1 - i];
      if (teamSum != targetSum) return -1;
      chemistrySum += skill[i] * skill[n - 1 - i];
    }

    return chemistrySum;
  }
}
```

```c []
#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int dividePlayers(int* skill, int skillSize) {
    qsort(skill, skillSize, sizeof(int), compare);
    
    int totalSum = 0;
    for (int i = 0; i < skillSize; i++) {
        totalSum += skill[i];
    }

    int targetSum = totalSum / (skillSize / 2);
    int chemistrySum = 0;

    for (int i = 0; i < skillSize / 2; i++) {
        int teamSum = skill[i] + skill[skillSize - 1 - i];
        if (teamSum != targetSum) return -1;
        chemistrySum += skill[i] * skill[skillSize - 1 - i];
    }

    return chemistrySum;
}
```

```cpp []
#include <vector>
#include <algorithm>

class Solution {
public:
    int dividePlayers(std::vector<int>& skill) {
        std::sort(skill.begin(), skill.end());
        
        int totalSum = 0;
        for (int s : skill) totalSum += s;
        
        int targetSum = totalSum / (skill.size() / 2);
        int chemistrySum = 0;
        
        for (int i = 0; i < skill.size() / 2; i++) {
            int teamSum = skill[i] + skill[skill.size() - 1 - i];
            if (teamSum != targetSum) return -1;
            chemistrySum += skill[i] * skill[skill.size() - 1 - i];
        }
        
        return chemistrySum;
    }
};
```

```java []
import java.util.Arrays;

class Solution {
    public int dividePlayers(int[] skill) {
        Arrays.sort(skill);
        
        int totalSum = 0;
        for (int s : skill) totalSum += s;
        
        int targetSum = totalSum / (skill.length / 2);
        int chemistrySum = 0;
        
        for (int i = 0; i < skill.length / 2; i++) {
            int teamSum = skill[i] + skill[skill.length - 1 - i];
            if (teamSum != targetSum) return -1;
            chemistrySum += skill[i] * skill[skill.length - 1 - i];
        }
        
        return chemistrySum;
    }
}
```

```javascript []
var dividePlayers = function(skill) {
    skill.sort((a, b) => a - b);
    
    const totalSum = skill.reduce((a, b) => a + b, 0);
    const targetSum = totalSum / (skill.length / 2);
    let chemistrySum = 0;
    
    for (let i = 0; i < skill.length / 2; i++) {
        const teamSum = skill[i] + skill[skill.length - 1 - i];
        if (teamSum !== targetSum) return -1;
        chemistrySum += skill[i] * skill[skill.length - 1 - i];
    }
    
    return chemistrySum;
};
```

```python []
class Solution:
    def dividePlayers(self, skill: List[int]) -> int:
        skill.sort()
        totalSum = sum(skill)
        targetSum = totalSum // (len(skill) // 2)
        chemistrySum = 0
        
        for i in range(len(skill) // 2):
            teamSum = skill[i] + skill[-1 - i]
            if teamSum != targetSum:
                return -1
            chemistrySum += skill[i] * skill[-1 - i]
        
        return chemistrySum
```

```go []
import (
    "sort"
)

func dividePlayers(skill []int) int {
    sort.Ints(skill)
    
    totalSum := 0
    for _, s := range skill {
        totalSum += s
    }

    targetSum := totalSum / (len(skill) / 2)
    chemistrySum := 0

    for i := 0; i < len(skill) / 2; i++ {
        teamSum := skill[i] + skill[len(skill) - 1 - i]
        if teamSum != targetSum {
            return -1
        }
        chemistrySum += skill[i] * skill[len(skill) - 1 - i]
    }

    return chemistrySum
}
```

---

![image.png](./images/0.png) {:style='width:250px'}