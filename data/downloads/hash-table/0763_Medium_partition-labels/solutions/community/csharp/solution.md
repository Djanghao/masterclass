# Partitions via Dictionary

**Author:** mansoorafzal
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-labels/solutions/6074770/](https://leetcode.com/problems/partition-labels/solutions/6074770/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```csharp []
public class Solution {
    public IList<int> PartitionLabels(string s) {
        Dictionary<char, int> map = new Dictionary<char, int>();

        for (int i = 0; i < s.Length; i++) {
            map[s[i]] = i;
        }

        int max = 0;
        int last = 0;
        IList<int> partitions = new List<int>();

        for (int i = 0; i < s.Length; i++) {
            max = Math.Max(max, map[s[i]]);

            if (i == max) {
                partitions.Add(max - last + 1);
                last = max + 1;
            }
        }

        return partitions;
    }
}
```