# 🍉✅ Easy-Peasy ✅ || Java, C++, Python, Javascript, PHP, C, C#, Typescript🔥

**Author:** dharmikgohil
**Votes:** 3
**Link:** [https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/solutions/5868313/](https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/solutions/5868313/)

---

# Intuition
- We have an array of player skills.
- We need to form teams of two players each.
- All teams should have the same total skill level.
- We want to maximize the product of skills for each team.

# Approach
1. **Sort the Array**: Sort the skill array in ascending order.
2. **Calculate Target Sum**: Start seeing from first and last 
3. **Two Pointer Technique**: if both sum not equal to targetSum just return -1,
    if sum == targetSum, so add multiplication of both in our ans;


THAT'S IT..........................

# Complexity
- **Time complexity**: 
  - Sorting the array takes $$O(n \\log n)$$.
  - The two-pointer iteration takes $$O(n)$$.
  - So the overall time complexity is $$O(n \\log n)$$.
  
- **Space complexity**:
  - We use only a constant amount of extra space for variables.
  - The space complexity is $$O(1)$$ or $$O(\\log n)$$ depending on the sorting algorithm used.

# Code
```java []
class Solution {
    public long dividePlayers(int[] skill) {
        // first sort array
        Arrays.sort(skill);
        int n = skill.length;
        // find target team skill
        int targetSum = skill[0] + skill[n-1];
        int i = 0; 
        int j = n - 1;
        long ans = 0;
        while(i < j){
            int first = skill[i];
            int second = skill[j];
            int tempSum = first + second;
            // continue while we find valid total team skill == TaargetSum
            if(tempSum == targetSum){
                ans += (long)first * second;
            }
            else{
                return -1;
            }
            i++;
            j--;
        }
        return ans;
    }
}
```
```c++ []
class Solution {
public:
    long long dividePlayers(vector<int>& skill) {
        sort(skill.begin(), skill.end());
        int n = skill.size();
        int targetSum = skill[0] + skill[n-1];
        int i = 0, j = n - 1;
        long long ans = 0;
        
        while (i < j) {
            int first = skill[i];
            int second = skill[j];
            int tempSum = first + second;
            if (tempSum == targetSum) {
                ans += (long long)first * second;
            } else {
                return -1;
            }
            i++;
            j--;
        }
        
        return ans;
    }
};
```
```python []
class Solution:
    def dividePlayers(self, skill: List[int]) -> int:
        skill.sort()
        n = len(skill)
        target_sum = skill[0] + skill[n-1]
        i, j = 0, n - 1
        ans = 0
        
        while i < j:
            first, second = skill[i], skill[j]
            temp_sum = first + second
            if temp_sum == target_sum:
                ans += first * second
            else:
                return -1
            i += 1
            j -= 1
        
        return ans
```
```javascript []
/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    skill.sort((a, b) => a - b);
    const n = skill.length;
    const targetSum = skill[0] + skill[n-1];
    let i = 0, j = n - 1;
    let ans = 0;
    
    while (i < j) {
        const first = skill[i];
        const second = skill[j];
        const tempSum = first + second;
        if (tempSum === targetSum) {
            ans += first * second;
        } else {
            return -1;
        }
        i++;
        j--;
    }
    
    return ans;
};
```
```PHP []
// PHP
class Solution {
    function dividePlayers($skill) {
        sort($skill);
        $n = count($skill);
        $targetSum = $skill[0] + $skill[$n - 1];
        $i = 0;
        $j = $n - 1;
        $ans = 0;
        
        while ($i < $j) {
            $tempSum = $skill[$i] + $skill[$j];
            if ($tempSum == $targetSum) {
                $ans += $skill[$i] * $skill[$j];
            } else {
                return -1;
            }
            $i++;
            $j--;
        }
        
        return $ans;
    }
}

```
```C []
// C
#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

long long dividePlayers(int *skill, int n) {
    qsort(skill, n, sizeof(int), compare);
    int targetSum = skill[0] + skill[n - 1];
    int i = 0, j = n - 1;
    long long ans = 0;
    
    while (i < j) {
        int tempSum = skill[i] + skill[j];
        if (tempSum == targetSum) {
            ans += (long long)skill[i] * skill[j];
        } else {
            return -1;
        }
        i++;
        j--;
    }
    
    return ans;
}

int main() {
    int skill[] = {1, 2, 3, 4};
    int n = sizeof(skill) / sizeof(skill[0]);
    long long result = dividePlayers(skill, n);
    
    if (result == -1) {
        printf("-1\
");
    } else {
        printf("%lld\
", result);
    }
    
    return 0;
}

```
```C# []
// C#
using System;
using System.Linq;

public class Solution {
    public long DividePlayers(int[] skill) {
        Array.Sort(skill);
        int n = skill.Length;
        int targetSum = skill[0] + skill[n - 1];
        int i = 0, j = n - 1;
        long ans = 0;
        
        while (i < j) {
            int tempSum = skill[i] + skill[j];
            if (tempSum == targetSum) {
                ans += (long)skill[i] * skill[j];
            } else {
                return -1;
            }
            i++;
            j--;
        }
        
        return ans;
    }
}

```
```Typescript []
function dividePlayers(skill: number[]): number {
    skill.sort((a, b) => a - b);
    const n = skill.length;
    const targetSum = skill[0] + skill[n - 1];
    let i = 0, j = n - 1;
    let ans = 0;
    
    while (i < j) {
        const tempSum = skill[i] + skill[j];
        if (tempSum === targetSum) {
            ans += skill[i] * skill[j];
        } else {
            return -1;
        }
        i++;
        j--;
    }
    
    return ans;
}

```
![HOPE YOU GOT IT (1).png](./images/0.png)

