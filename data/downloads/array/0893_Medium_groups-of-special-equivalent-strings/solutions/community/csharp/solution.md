# C# Hashing Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/5441220/](https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/5441220/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve this problem, we need to determine the number of groups of special-equivalent strings. The key observation is that two strings are special-equivalent if we can sort their even-indexed characters and odd-indexed characters independently, and the sorted strings match.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  We initialize a HashSet<string> to store unique identifiers for each group.
//  For each word, we separate even and odd indexed characters and sort them.
//  We then concatenate the sorted even and odd character lists to form a unique key for each word.
//  We add this key to the set of unique groups.
//  Finally, the count of the set gives the number of unique special-equivalent groups.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n * L log L).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n * L).
___

# Code
```
public class Solution {
    public int NumSpecialEquivGroups(string[] words) {
        HashSet<string> uniqueGroups = new HashSet<string>();

        foreach (string word in words) {
            // Seperate even-indexed and odd-indexed characters
            var evenChars = new List<char>();
            var oddChars = new List<char>();

            for (int i = 0; i < word.Length; i++) {
                if (i % 2 == 0) {
                    evenChars.Add(word[i]);
                } else {
                    oddChars.Add(word[i]);
                }
            }

            // Sort the characters independently
            evenChars.Sort();
            oddChars.Sort();

            // Combine sorted characters to form a unique key
            string key = new string(evenChars.ToArray()) + new string(oddChars.ToArray());
            
            // Add the key to the set
            uniqueGroups.Add(key);
        }

        // The number of unique keys is the number of groups
        return uniqueGroups.Count;
    }
}
```