# 1-line Linq

**Author:** 3S_AKB
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-bad-pairs/solutions/5756422/](https://leetcode.com/problems/count-number-of-bad-pairs/solutions/5756422/)

---


# Code
```csharp []
public class Solution {
    public long CountBadPairs(int[] a) {        
        return (long)a.Length*(a.Length-1)/2 - a.Select((x,i)=>x-i).GroupBy(x=>x).Select(x=>(long)x.Count()).Select(x=>x*(x-1)/2).Sum();
    }
}
```