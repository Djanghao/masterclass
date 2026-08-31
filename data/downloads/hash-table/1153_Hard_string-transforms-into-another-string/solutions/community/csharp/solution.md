# 💥 C# | Beats 100% on runtime AND memory! [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-transforms-into-another-string/solutions/5783119/](https://leetcode.com/problems/string-transforms-into-another-string/solutions/5783119/)

---

# Intuition
When transforming one string into another, I want to ensure that each character in str1 consistently maps to a character in str2. However, if any character in str1 is supposed to map to multiple different characters in str2, it's impossible to perform the transformation. Additionally, I need to avoid cycles in the mapping\u2014if str2 uses all 26 letters, there won't be a spare character to resolve any cycles.

# Approach
I first check if str1 and str2 are already the same. If so, no transformations are needed.

I create a mapping from each character in str1 to the corresponding character in str2.

If there's a conflict in the mapping (where one character maps to multiple characters), I return false.

If str2 uses fewer than 26 distinct characters, there's always a free letter to help resolve any transformation cycles, so I return true.

# Complexity
- Time complexity:
O(n) because I only loop through the strings once.

- Space complexity:
O(1) because the size of the character map and the set of distinct characters is fixed (at most 26).

# Code
```csharp []
public class Solution {
    public bool CanConvert(string str1, string str2) {
        // If both strings are already equal, no transformation is needed
        if (str1 == str2) return true;
        
        // Dictionary to map characters from str1 to str2
        Dictionary<char, char> mapping = new Dictionary<char, char>();
        
        // Iterate through the strings
        for (int i = 0; i < str1.Length; i++) {
            char c1 = str1[i], c2 = str2[i];
            
            // If the character c1 from str1 is already mapped
            if (mapping.ContainsKey(c1)) {
                // Check if it's mapping to the correct character in str2
                if (mapping[c1] != c2) return false; // conflict in mapping
            } else {
                // Create the mapping from c1 to c2
                mapping[c1] = c2;
            }
        }
        
        // If str2 contains fewer than 26 distinct characters, transformation is possible
        HashSet<char> distinctInStr2 = new HashSet<char>(str2);
        return distinctInStr2.Count < 26;
    }
}

```