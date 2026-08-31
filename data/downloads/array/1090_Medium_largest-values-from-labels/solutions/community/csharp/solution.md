# Elegant solution using LINQ

**Author:** ElizavetaNN
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-values-from-labels/solutions/3818345/](https://leetcode.com/problems/largest-values-from-labels/solutions/3818345/)

---

# Code
```
public class Solution {
    public int LargestValsFromLabels(int[] values, int[] labels, int numWanted, int useLimit) {
        return values.Zip(labels, (value, key) => (value, key))
            .GroupBy(merged => merged.key)
            .SelectMany(group => group.OrderByDescending(element => element.value).Take(useLimit))
            .OrderByDescending(elementsInGroup => elementsInGroup.value)
            .Take(numWanted)
            .Sum(usedPairs => usedPairs.value);
    }
}

```