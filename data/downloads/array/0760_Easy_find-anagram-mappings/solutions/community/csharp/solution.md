# Nested loops and HashSet.

**Author:** shnitsel666
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/3584462/](https://leetcode.com/problems/find-anagram-mappings/solutions/3584462/)

---

# Approach
Nested loops and HashSet.

# Code
```
public class Solution {
    public int[] AnagramMappings(int[] nums1, int[] nums2) {
        HashSet<int> indexes = new ();
        for (int i = 0; i < nums1.Length; i++)
        {
            for (int j = 0; j < nums2.Length; j++)
            {
                if (nums1[i] == nums2[j])
                {
                    if (!indexes.Contains(j))
                    {
                        indexes.Add(j);
                        break;
                    }
                    else
                    {
                        continue;
                    }
                }
            }
        }
        return indexes.ToArray();
    }
}
```