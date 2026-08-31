# c# using SortedDictionary

**Author:** jreynolds_leetcode
**Votes:** 2
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/2775202/](https://leetcode.com/problems/merge-similar-items/solutions/2775202/)

---

# Code
```
public class Solution {
    public IList<IList<int>> MergeSimilarItems(int[][] items1, int[][] items2) {
        var counts = new SortedDictionary<int, int>();
        AddWeights(items1, counts);
        AddWeights(items2, counts);
        
        var ret = new List<IList<int>>();
        foreach(var kvp in counts)
        {
            ret.Add(new List<int>(){kvp.Key, kvp.Value});
        }
        return ret;
    }

    void AddWeights(int[][] items1, SortedDictionary<int, int> counts)
    {
        foreach(var itm in items1)
        {
            if(!counts.ContainsKey(itm[0]))
            {
                counts[itm[0]]=0;
            }
            counts[itm[0]]+=itm[1];
        }
    }
}
```