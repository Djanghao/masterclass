# C# Greedy Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/6041328/](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/6041328/)

---

# Intuition
- <!-- Describe your first thoughts on how to solve this problem. -->Sorting to Simplify Group Formation: Sorting the grades allows us to manage group formation in a straightforward, linear way. By grouping grades from smallest to largest, we can more easily create groups with increasing sums.
- Incremental Group Sizes: By incrementing the group size with each new group (i.e., 1, 2, 3...), we ensure that each subsequent group is strictly larger in size than the previous one, which satisfies one of the problem\u2019s constraints.
- Greedy Formation of Groups: We keep creating the smallest possible groups that fulfill the constraints, which ensures we end up with the maximum number of groups. If we run out of students and can\u2019t form the next required group size, we stop.
___
# Approach
- <!-- Describe your approach to solving the problem. -->Array.Sort(grades): Sorting ensures that smaller grades are considered first, allowing the formation of progressively larger groups.
- while (n >= group_size): As long as we have enough students to form the next group, we reduce n by group_size, then increase groups and group_size for the next iteration.
- Return groups: The number of complete groups that satisfy the conditions.
___
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n log n). Sorting the grades array requires O(n log n).
Forming the groups requires O(n) in the worst case, making the overall Time Complexity O(n log n).
___
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1) or O(n) if we consider the sorted array as extra space.
___
# Code
```csharp []
public class Solution {
    public int MaximumGroups(int[] grades) {
        // Sort the grades in ascending order to help with grouping
        Array.Sort(grades);

        int n = grades.Length;
        int groups = 0;
        int group_size = 1; // Start with a group size of 1

        // Loop to create groups with increasing group size
        while (n >= group_size) {
            // Form a group of size 'group_size'
            n -= group_size;
            groups++;
            group_size++;
        }

        return groups;
    }
}
```