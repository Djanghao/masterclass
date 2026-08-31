# 💥 Runtime and Memory beats 77.78% [EXPLAINED]

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/k-similar-strings/solutions/5762706/](https://leetcode.com/problems/k-similar-strings/solutions/5762706/)

---

# Intuition
You have two strings, s1 and s2, which are anagrams (same characters, just shuffled). You need to transform s1 into s2 with the fewest number of swaps. Each swap exchanges two characters in s1.

# Approach
BFS: Explore all possible swaps level by level to find the shortest path.

Track States: Use a set to avoid reprocessing the same string.

Finish Early: Return the number of swaps when s1 matches s2

# Complexity
- Time complexity:
O(b!) \u2014 exploring permutations of mismatched characters.

- Space complexity:
 O(n!) \u2014 storing unique string states.

# Code
```csharp []
using System;
using System.Collections.Generic;
using System.Text;

public class Solution
{
    public int KSimilarity(string s1, string s2)
    {
        if (s1 == s2) return 0;

        Queue<(string str, int swaps)> queue = new Queue<(string str, int swaps)>();
        HashSet<string> visited = new HashSet<string>();

        queue.Enqueue((s1, 0));
        visited.Add(s1);

        while (queue.Count > 0)
        {
            var (current, swaps) = queue.Dequeue();

            // Find the first mismatch
            int i = 0;
            while (i < current.Length && current[i] == s2[i]) i++;

            // Try all valid swaps to correct the mismatch
            for (int j = i + 1; j < current.Length; j++)
            {
                // Only swap if it can bring us closer to s2
                if (current[j] == s2[i] && current[j] != s2[j])
                {
                    var next = Swap(current, i, j);
                    if (next == s2) return swaps + 1;

                    if (!visited.Contains(next))
                    {
                        visited.Add(next);
                        queue.Enqueue((next, swaps + 1));
                    }
                }
            }
        }

        return -1; // This line should never be reached if s1 and s2 are valid anagrams.
    }

    // Helper method to swap two characters in a string using StringBuilder
    private string Swap(string str, int i, int j)
    {
        var sb = new StringBuilder(str);
        char temp = sb[i];
        sb[i] = sb[j];
        sb[j] = temp;
        return sb.ToString();
    }
}

```