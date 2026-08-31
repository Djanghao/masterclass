# C# solution || easy solution

**Author:** mohamedAbdelety
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/5381659/](https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/5381659/)

---

```
public class Solution {
    public long MaximumImportance(int n, int[][] roads) {
        long res = 0;
        long[] nodes = new long[n];
        foreach(var road in roads){
            nodes[road[0]]++;
            nodes[road[1]]++;
        }
        Array.Sort(nodes,(a,b) => b.CompareTo(a));
        for(int i = 0;i < n;i++)
            res+= (nodes[i] * (n - i));
        return res;
    }
}
```