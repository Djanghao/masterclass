# C# solution beats 100%

**Author:** ionuthodoroaga1
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/5878033/](https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/5878033/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Recursive approach

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public int MaximumGood(int[][] statements) {
        
        bool Check(List<int> good) {
            foreach (int p in good) {
                for (int j = 0; j < statements.Length; j++) {
                    if (statements[p][j] == 0 && good.Contains(j)) return false;
                    if (statements[p][j] == 1 && !good.Contains(j)) return false;
                }
            }
            return true;
        }

        int GetLargestValidList(int i, List<int> good) {
            if (i >= statements.Length) {
                return Check(good) ? good.Count : 0;
            }

            good.Add(i);
            int res = GetLargestValidList(i + 1, good);
            good.RemoveAt(good.Count - 1);

            return Math.Max(res, GetLargestValidList(i + 1, good));
        }

        return GetLargestValidList(0, new List<int>());
    }
}

```