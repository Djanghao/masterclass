# FINDING RIGHT INTERVAL USING BINARY SEARCH C#

**Author:** bobur_jr
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-right-interval/solutions/5946911/](https://leetcode.com/problems/find-right-interval/solutions/5946911/)

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
    private Dictionary<string, int> pairs;
    public int[] FindRightInterval(int[][] intervals) {
        var res = new int[intervals.Length];
        var c = 0;
        // save all intervals default positions in dictionary
        pairs = intervals
                            .ToDictionary(x => 
                                string.Join("",x), _ => c++);

        // order intervals to do binary search on it
        intervals = intervals.OrderBy(x => x[0]).ToArray();

        // iterate every interval and search for right interval using binary search
        for(var i = 0; i < intervals.Length; i++){
            var index = FindRightInterval(intervals, intervals[i]);
            res[i] = index;
        }
        c = 0;
        
        res = res.OrderBy(x => pairs[string.Join("",intervals[c++])]).ToArray();

        return res;
    }
    private int FindRightInterval(int[][] intervals, int[] interval){
        int l = 0, r = intervals.Length - 1;
        while(l <= r){
            var md = (l + r) / 2;
            if(intervals[md][0] > interval[1]){
                r = md - 1;
            }else if(intervals[md][0] < interval[1]){
                l = md + 1;
            }else{
                var key = string.Join("",intervals[md]);
                return pairs[key];
            }
        }
        
        if(l < intervals.Length){
            var key = string.Join("",intervals[l]);
            return pairs[key];
        }

        return -1;
    }
}
```