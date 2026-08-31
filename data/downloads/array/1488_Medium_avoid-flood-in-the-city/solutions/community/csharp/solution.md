# c# : Easy Solution

**Author:** rahul89798
**Votes:** 0
**Link:** [https://leetcode.com/problems/avoid-flood-in-the-city/solutions/6035543/](https://leetcode.com/problems/avoid-flood-in-the-city/solutions/6035543/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```csharp []
public class Solution
{
    public int[] AvoidFlood(int[] rains)
    {
        var res = new int[rains.Length];
        var slots = new List<int>();
        var lakes = new Dictionary<int, int>();

        for(int i = 0; i < rains.Length; i++)
        {
            if (rains[i] == 0)
                slots.Add(i);
            else
            {
                // If lake is already full, search a slot where it can be emptied
                if(lakes.ContainsKey(rains[i]))
                {
                    var idx = slots.BinarySearch(lakes[rains[i]]);
                    if (idx < 0)
                        idx = ~idx;

                    // if no such slot exists, return
                    if (idx == slots.Count)
                        return [];

                    res[slots[idx]] = rains[i];
                    slots.RemoveAt(idx);
                }

                res[i] = -1;
                lakes[rains[i]] = i;
            }
        }

        int pos = 0;

        // empty the remaining lake(s) if slot(s) available
        foreach(var kv in lakes)
        {
            if (pos == slots.Count)
                break;

            res[slots[pos++]] = kv.Key;
        }
            
        // fill remaining slot(s)
        while (pos < slots.Count)
            res[slots[pos++]] = 1;

        return res;
    }
}
```