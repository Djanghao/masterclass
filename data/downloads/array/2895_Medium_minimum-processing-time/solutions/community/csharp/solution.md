# C# one line of code with Linq

**Author:** stick109
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-processing-time/solutions/5038643/](https://leetcode.com/problems/minimum-processing-time/solutions/5038643/)

---

# Code
```
public class Solution
{
    public int MinProcessingTime(IList<int> processorTime, IList<int> tasks)
    {
        return tasks.OrderByDescending(x => x).Where((_, i) => i % 4 == 0).Zip(processorTime.OrderBy(x => x)).Select(x => x.First + x.Second).Max();
    }
}

```