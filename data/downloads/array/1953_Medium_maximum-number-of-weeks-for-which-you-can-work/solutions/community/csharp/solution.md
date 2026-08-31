# C# Greedy Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/5776876/](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/5776876/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->This problem can be solved by focusing on the largest project milestone, as the primary challenge arises when one project has significantly more milestones than the others.

Key Observations:
- If the largest project has fewer milestones than or equal to the sum of the rest of the milestones, we can alternate between the largest project and other projects without issue, and we can complete all the milestones.
- If the largest project has more milestones than the sum of the other projects combined, we will eventually run out of milestones in other projects, and we will need to stop before violating the rule that prevents consecutive milestones on the same project.
- ___

# Approach
<!-- Describe your approach to solving the problem. -->
- Let maxMilestones be the number of milestones in the largest project.
- Let sumMilestones be the sum of milestones in all projects.
- If maxMilestones <= sumMilestones - maxMilestones, it means the largest project can alternate with other projects and all milestones can be completed.
- Otherwise, if maxMilestones > sumMilestones - maxMilestones, some milestones of the largest project will remain unfinished. The maximum number of weeks we can work is 2 * (sumMilestones - maxMilestones) + 1, where the extra +1 comes from finishing one last milestone from the largest project.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n), where 'n' is the number of projects (the length of the milestones array).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1), meaning the solution uses a constant amount of extra space regardless of the input size.
___

# Code
```csharp []
public class Solution {
    public long NumberOfWeeks(int[] milestones) {
        // Find the total sum of milestones and the maximum milestone in a project
        long sumMilestones = 0;
        int maxMilestones = 0;
        
        foreach (var milestone in milestones) {
            sumMilestones += milestone;
            if (milestone > maxMilestones) {
                maxMilestones = milestone;
            }
        }
        
        // Calculate remaining milestones apart from the largest project
        long remainingMilestones = sumMilestones - maxMilestones;
        
        // If the largest project can be alternated with others, return the total sum of weeks
        if (maxMilestones <= remainingMilestones) {
            return sumMilestones;
        }
        // Otherwise, return the number of weeks before we'd violate the rule
        return 2 * remainingMilestones + 1;
    }
}

//  *sumMilestones stores the total number of milestones in all projects.
//  *maxMilestones stores the largest number of milestones from a single project.
//  *If the largest project can be alternated with other projects 
//  (i.e., maxMilestones <= sumMilestones - maxMilestones), we return the total sumMilestones since we can 
//  complete all milestones.
//  *If the largest project has too many milestones (i.e., maxMilestones > sumMilestones - maxMilestones), 
//  the formula 2 * (sumMilestones - maxMilestones) + 1 gives the maximum weeks we can work without 
//  violating the rule.

```