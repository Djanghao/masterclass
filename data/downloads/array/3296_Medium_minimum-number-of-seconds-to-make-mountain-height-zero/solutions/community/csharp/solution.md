# PriorityQueue

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/solutions/6117687/](https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/solutions/6117687/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public long MinNumberOfSeconds(int mountainHeight, int[] workerTimes) {
        int len = workerTimes.Length;
        if(len == 0)
            return 0;

        PriorityQueue<(long, long), long> pq = new();
        int height = mountainHeight;
        if(height == 0)
            return 0;
        foreach(int cur in workerTimes)
        {
            pq.Enqueue((cur, 1), cur);
        }

        while(pq.Count > 0 && pq.TryDequeue(out var cur, out long times))
        {
            long w = cur.Item1, freq = cur.Item2;
            if(--height == 0)
                return times;

            freq++;
            long nextTime = w*(freq+1) *freq/2;
            pq.Enqueue((w, freq), nextTime);
        }

        return -1;
    }
}
```