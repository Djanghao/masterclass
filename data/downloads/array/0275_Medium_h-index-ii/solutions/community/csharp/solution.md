# Simple Loop

**Author:** mansoorafzal
**Votes:** 0
**Link:** [https://leetcode.com/problems/h-index-ii/solutions/6099330/](https://leetcode.com/problems/h-index-ii/solutions/6099330/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```csharp []
public class Solution {
    public int HIndex(int[] citations) {
        int h = 0;
        int n = citations.Length;

        for (int i = n - 1; i >= 0; i--) {
            if (citations[i] >= n - i) {
                h = n - i;
            }
        }

        return h;
    }
}
```