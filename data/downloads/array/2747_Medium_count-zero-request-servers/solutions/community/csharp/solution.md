# C# solution

**Author:** aarthi18
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-zero-request-servers/solutions/4028095/](https://leetcode.com/problems/count-zero-request-servers/solutions/4028095/)

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
```
public class Solution {
    public int[] CountServers(int n, int[][] logs, int x, int[] queries)
        {
            int[] result = new int[queries.Length];
            List<(int,int,int)> intervals = getintervals(logs, queries,x);
            intervals = intervals.OrderBy(tuple => tuple.Item2).ThenByDescending(tuple => tuple.Item3).ToList();
            int[] server = new int[n+1];
            int noOfserver = 0;
            int bfr = 0;
            int after = 0;
            for(int i = 0; i < intervals.Count; i ++)
            {
                if(intervals[i].Item3 != 0)
                {
                    bfr = server[intervals[i].Item1];
                    server[intervals[i].Item1] = server[intervals[i].Item1] + intervals[i].Item3;
                    after = server[intervals[i].Item1];
                    if (bfr == 0 && after > 0) noOfserver++;
                    if (bfr > 0 && after == 0) noOfserver--;
                }
                else
                {
                    result[intervals[i].Item1] = n - noOfserver;
                }
                
            }

            return result;
        }

        private List<(int, int, int)> getintervals(int[][] logs, int[] queries,int x)
        {
            List<(int, int, int)> output = new List<(int, int, int)>();
            for(int i = 0; i < logs.Length; i++)
            {
                output.Add((logs[i][0], logs[i][1], 1));
                output.Add((logs[i][0], logs[i][1]+x, -1));
            }

            for (int i = 0; i < queries.Length; i++)
            {
                output.Add((i, queries[i], 0));
            }
            return output;
        }
}
```