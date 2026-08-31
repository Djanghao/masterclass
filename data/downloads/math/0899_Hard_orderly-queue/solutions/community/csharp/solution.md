# C# | Runtime beats 90.00% [ EXPLAINED]

**Author:** r9n
**Votes:** 8
**Link:** [https://leetcode.com/problems/orderly-queue/solutions/5764828/](https://leetcode.com/problems/orderly-queue/solutions/5764828/)

---

# Intuition
If I can only move the first character (k == 1), the best I can do is rotate the string and pick the smallest version. But if k > 1, I have more freedom and can rearrange the letters however I want, which means I can just sort the string to get the smallest possible result.

# Approach
When `k == 1: I generate all possible rotations of the string by moving the first letter to the end repeatedly, then return the smallest one.

When `k > 1: Since I can rearrange freely, I simply sort the string to get the smallest lexicographically.

# Complexity
- Time complexity:
O(n^2) for rotations (k == 1), O(n log n) for sorting (k > 1).

- Space complexity:
O(n) for storing results.

# Code
```csharp []
public class Solution {
    public string OrderlyQueue(string s, int k) {
        if (k == 1) {
            string smallest = s;
            for (int i = 1; i < s.Length; i++) {
                // Rotate string by moving the first character to the end
                string rotated = s.Substring(i) + s.Substring(0, i);
                if (string.Compare(rotated, smallest) < 0) {
                    smallest = rotated;
                }
            }
            return smallest;
        } else {
            // When k > 1, we can sort the string to get the smallest result
            char[] chars = s.ToCharArray();
            Array.Sort(chars);
            return new string(chars);
        }
    }
}

```