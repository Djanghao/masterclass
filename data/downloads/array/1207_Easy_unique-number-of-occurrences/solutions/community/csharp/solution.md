# C#, using Dictionary and HashSet

**Author:** edevyatkin
**Votes:** 9
**Link:** [https://leetcode.com/problems/unique-number-of-occurrences/solutions/506088/](https://leetcode.com/problems/unique-number-of-occurrences/solutions/506088/)

---

```
public class Solution {
    public bool UniqueOccurrences(int[] arr) {
        Dictionary<int,int> counts = new Dictionary<int,int>();
        foreach (int i in arr) {
            if (counts.ContainsKey(i))
                counts[i]++;
            else
                counts.Add(i, 1);
        }
        var hset = new HashSet<int>(counts.Values);
        return counts.Count == hset.Count;
    }
}
```