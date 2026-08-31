# C# dynamic programming optimised

**Author:** ConnectedPuddle
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-characters-in-string-after-transformations-i/solutions/5973361/](https://leetcode.com/problems/total-characters-in-string-after-transformations-i/solutions/5973361/)

---

# Intuition

Maintain the counts of each letter between transformations in the array `counts`.

Track the index of the next `b` count to update.

# Complexity
- Time complexity: $O(n + t)$. It takes $O(n)$ to get letter counts in $s$. There are $t$ transformations, and each transformation takes $O(1)$ as $26$ is a constant.

- Space complexity: $O(1)$

# Code
```csharp []
public class Solution {
    public int LengthAfterTransformations(string s, int t) {
        int p = 1_000_000_007;
        int n = s.Length;
        int[] counts = new int[26];
        for (int i = 0; i < n; i++)
        {
            counts[s[i] - 'a']++;
        }
        int next = 0;
        for (int i = 0; i < t; i++)
        {
            counts[next] += counts[(next + 25) % 26];
            counts[next] %= p;
            next = (next + 25) % 26;
        }
        int result = 0;
        for (int i = 0; i < 26; i++)
        {
            result += counts[i];
            result %= p;
        }
        return result;
    }
}
```