# keep a good list

**Author:** jaikechen2018
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-covered-intervals/solutions/5770787/](https://leetcode.com/problems/remove-covered-intervals/solutions/5770787/)

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
    public int RemoveCoveredIntervals(int[][] intervals) {
        var list = intervals.OrderBy(x=> x[1]).ThenByDescending(x=>x[0]).ToList();
        var good = new List<int[]>();
        good.Add(list[0]);
        for(var i = 1; i < list.Count; i++){
            for (var j = good.Count -1; j >= 0; j --){
                if (list[i][0] <= good[j][0]){
                    good.RemoveAt(j);
                }
            }
            good.Add(list[i]);
        }
        
        return good.Count;
    }
}
```