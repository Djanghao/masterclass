# [C#] O(N) Two Lines

**Author:** A-F-V
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/945780/](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/945780/)

---

# Algorithm
Step 1) Sum all the actual costs together and add the smallest difference between minimum and actual (this corresponds to summing all actual costs excluding your last choice which needs to use minimum)
Step 2) Make sure it is not greater than largest minimum
# Code
```csharp
public class Solution {
public int MinimumEffort(int[][] tasks)
        {
            int sum = tasks.Sum(ints => ints[0]) + tasks.Min((ints => ints[1]-ints[0])); 
            return Math.Max(sum, tasks.Max((ints => ints[1])));
        }
}
```

# Explanation
Don't have a great on at the moment, feel free to maybe discuss and I'll update.
Would involve showing that greedy approach is optimal. Also maybe look at effects of commuting pairs of tasks.