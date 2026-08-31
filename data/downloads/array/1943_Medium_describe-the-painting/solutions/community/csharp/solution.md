# c#, Sweep Line

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/describe-the-painting/solutions/4321020/](https://leetcode.com/problems/describe-the-painting/solutions/4321020/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Here we have a typical sweeping line algorithm: for each interval `[a.. b] (color c)` we generate 2 events: `(start : a, add : c)` and `(start : b, add : -c)` which means that starting from `a` we should `c` to color and starting from `b` we should add `-c` to color. The next step is standard: we sort and group all events by `start` and scan the events while generating intervals for the final answer.

# Approach
<!-- Describe your approach to solving the problem. -->
- Local function to generate events from segments
- Linq query to sort and group the events
- Simple loop to generate intervals

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n * log(n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
    public IList<IList<long>> SplitPainting(int[][] segments) {
        IEnumerable<(long start, long add)> Intervals() {
            foreach (var segment in segments) {
                yield return (segment[0], segment[2]);
                yield return (segment[1], -segment[2]);
            }
        }

        var intervals = Intervals()
            .GroupBy(item => item.start, item => item.add)
            .Select(group => (start : group.Key, add : group.Sum()))
            .OrderBy(item => item.start)
            .ToList();

        long color = 0;

        List<IList<long>> result = new List<IList<long>>();

        for (int i = 1; i < intervals.Count; ++i) 
            if ((color += intervals[i - 1].add) > 0)
                result.Add(new List<long>() {intervals[i - 1].start, intervals[i].start, color});
        
        return result;
    }
}
```