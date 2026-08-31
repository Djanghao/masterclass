# 💥💥 Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/match-substring-after-replacement/solutions/6042481/](https://leetcode.com/problems/match-substring-after-replacement/solutions/6042481/)

---

# Intuition
Check if a substring sub can match a part of the string s after replacing some characters according to given mappings. A mapping allows a character in sub to be replaced with another character from s. You need to check if any part of s can become equal to sub by applying these replacements.

# Approach
Create a trie (prefix tree) from sub, then check every possible starting position in s to see if sub matches there, considering character replacements using the mappings.

# Complexity
- Time complexity:
O(n * m) where n is the length of s and m is the length of sub. You check each position in s and compare it to sub.

- Space complexity:
O(m) for the space needed to store the trie created from sub.

# Code
```csharp []
public class Solution
{
    private TreeNode root;

    // Main function to check if it's possible to match the substring after replacement
    public bool MatchReplacement(string s, string sub, char[][] mappings)
    {
        // Create a trie from the 'sub' string
        root = CreateTree(sub);

        // Mapping of characters where key is the new character, and value is a list of old characters
        var mapping = new Dictionary<char, List<char>>();

        // Populate the mapping with the given mappings
        foreach (var m in mappings)
        {
            if (!mapping.ContainsKey(m[1]))
            {
                mapping[m[1]] = new List<char>();
            }
            mapping[m[1]].Add(m[0]);
        }

        // Loop through the main string 's' to check if 'sub' can be matched after possible replacements
        for (int i = 0; i <= s.Length - sub.Length; i++)
        {
            var curr = root;

            // Loop through each character in the 'sub' string
            for (int j = 0; j < sub.Length; j++)
            {
                char c = s[i + j];

                // Check if the current character in 'sub' and 's' match directly
                if (curr.Child != null && curr.Child.Val == c)
                {
                    curr = curr.Child;
                }
                // Check if the current character in 's' can be transformed to match 'sub'
                else if (mapping.ContainsKey(c) && mapping[c].Contains(curr.Child?.Val ?? ' '))
                {
                    curr = curr.Child;
                }
                else
                {
                    break;
                }
            }

            // If we successfully match the entire sub string, return true
            if (curr.End)
            {
                return true;
            }
        }

        // If no match is found after looping through all possible positions, return false
        return false;
    }

    // Helper function to create a trie from the given 'word' (sub string)
    private TreeNode CreateTree(string word)
    {
        var root = new TreeNode(' ');
        var curr = root;

        // Loop through each character in the word and build the trie
        foreach (var c in word)
        {
            curr.Child = new TreeNode(c);
            curr = curr.Child;
        }

        // Mark the end of the word in the trie
        curr.End = true;
        return root;
    }
}

// TreeNode class that represents a node in the trie
public class TreeNode
{
    public char Val;
    public TreeNode Child;
    public bool End;

    public TreeNode(char c)
    {
        Val = c;
        End = false;
    }
}

```