# Short and easy LINQ solution

**Author:** anikit
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2997037/](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2997037/)

---

```csharp
public class Solution
{
    public int MinimumRounds(int[] tasks)
    {
            var counts = tasks.GroupBy(x => x).Select(x => x.Count());
            return counts.Any(x => x == 1)
                ? -1
                : counts.Sum(x => (x + 2) / 3);
    }
}
```
## Explanation
1. Count the difficulty levels.
2. If any of them comes up only once, return `-1` because it is not possible to complete all the tasks.
3. Otherwise, each difficulty level will require `(x + 2) / 3` actions. Return the sum.