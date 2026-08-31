# ✅ Simple C# Solution

**Author:** deyordanov
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/5571240/](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/5571240/)

---

# Code
```
public class Solution
{
    public bool MergeTriplets(int[][] triplets, int[] target)
    {
        var lessOrEqualToTarget 
        = triplets.Where(t => t[0] <= target[0] && t[1] <= target[1] && t[2] <= target[2]);

        return lessOrEqualToTarget.Any(t => t[0] == target[0]) &&
        lessOrEqualToTarget.Any(t => t[1] == target[1]) &&
        lessOrEqualToTarget.Any(t => t[2] == target[2]);
    }
}
```